// garde une copie du site pour qu'il marche sans réseau (avion, wifi d'auberge qui rame...)
const CACHE = "pour-sandy-v21";
const FICHIERS = ["./", "style.css", "decor.js", "script.js"];
const AUTRES = ["icon.png", "papier.wav", "patrick-hand.woff2", "literata.woff2", "literata-italic.woff2"];
const PATIENCE = 4000; // si le réseau met plus longtemps, on sert la copie sans attendre

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE)
      // le site doit être là en entier, le reste on le prend si on peut
      .then((c) => c.addAll(FICHIERS).then(() => Promise.all(AUTRES.map((f) => c.add(f).catch(() => {})))))
      .catch(() => {})
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((noms) => Promise.all(noms.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  const cle = e.request.mode === "navigate" ? "./" : url.pathname;
  const copie = () => caches.match(cle, { ignoreSearch: true });

  // les polices et le son ne changent jamais : la copie d'abord, ça économise de la data
  if (/\.(woff2|wav)$/.test(url.pathname)) {
    e.respondWith(copie().then((r) => r || fetch(e.request).then((rep) => {
      if (rep.ok && rep.type === "basic") {
        const double = rep.clone();
        caches.open(CACHE).then((c) => c.put(cle, double));
      }
      return rep;
    })));
    return;
  }

  // le site : le réseau d'abord pour avoir les mises à jour, mais pas plus de 4 secondes
  const reseau = fetch(e.request, { cache: "no-store" }).then((rep) => {
    if (rep.ok && rep.type === "basic") {
      const double = rep.clone();
      caches.open(CACHE).then((c) => c.put(cle, double));
    }
    return rep;
  });
  e.waitUntil(reseau.catch(() => {}));
  e.respondWith(Promise.race([
    reseau.catch(() => copie().then((r) => r || Response.error())),
    new Promise((ok) => setTimeout(ok, PATIENCE)).then(copie).then((r) => r || reseau),
  ]));
});
