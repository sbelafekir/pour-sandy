// garde une copie du site pour qu'il marche sans réseau
const CACHE = "pour-sandy-v4";
const FICHIERS = ["./", "style.css", "script.js", "icon.png", "ouverture.wav", "lanterne.wav"];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FICHIERS)).catch(() => {}));
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

  // polices google : on les garde en cache
  if (/fonts\.(googleapis|gstatic)\.com/.test(url.hostname)) {
    e.respondWith(
      caches.match(e.request).then((r) => r || fetch(e.request).then((rep) => {
        const copie = rep.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copie));
        return rep;
      }))
    );
    return;
  }
  if (url.origin !== location.origin) return;

  // le site : réseau d'abord pour avoir les mises à jour, sinon la copie
  const cle = e.request.mode === "navigate" ? "./" : url.pathname;
  e.respondWith(
    fetch(e.request, { cache: "no-store" })
      .then((rep) => {
        if (rep.ok && rep.type === "basic") {
          const copie = rep.clone();
          caches.open(CACHE).then((c) => c.put(cle, copie));
        }
        return rep;
      })
      .catch(() => caches.match(cle, { ignoreSearch: true }))
  );
});
