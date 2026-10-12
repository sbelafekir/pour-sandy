// Le décor : le ciel (canvas), la lune, les paysages dessinés en svg et le parallaxe au scroll.
// Rien ici ne touche aux lettres, c'est que de la déco.

const LARGEUR = Math.min(1700, Math.max(window.innerWidth, window.innerHeight, 420) + 80);

function aleatoire(graine) {
  let n = graine % 2147483647;
  if (n <= 0) n += 2147483646;
  return () => (n = (n * 16807) % 2147483647) / 2147483647;
}

const r1 = (n) => Math.round(n * 10) / 10;


let jour = 0;
let nuitNiv = 1;
let jourPose = -1;
let heurePosee = -99;

const COULEURS = {
  m1h: ['#463f80', '#86a3d5'], m1b: ['#6a63a8', '#c5d8f0'],
  m2h: ['#37316b', '#7595cb'], m2b: ['#544e92', '#aec5e9'],
  m3h: ['#2b2759', '#6285bf'], m3b: ['#3c3672', '#95b1dd'],
  petit: ['#2a2658', '#5f79b0'],
  liseré: ['#ffcf9a', '#ffffff'],
  vertH: ['#241f4f', '#4c9d70'], vertB: ['#14122f', '#2b6a50'],
  batH: ['#241f4f', '#a65e4f'], batB: ['#14122f', '#7a4040'],
  fen: ['#ffb35c', '#5b3040'],
  eauH: ['#443e7a', '#8fd9e3'], eauM: ['#2a2658', '#58bbd3'], eauB: ['#1b1840', '#3a8fba'],
  refl: ['#6a63a8', '#8faad9'], reflPag: ['#6a60b0', '#a65e4f'],
  avant: ['#0f0e24', '#235a40'],
  coque: ['#0f0e24', '#35505e'],
  plateau: ['#1a1636', '#2f7a46'], petale: ['#e9a2a0', '#f6a7b8'],
  nenu: ['#173540', '#3f9d5c'], nenuB: ['#0f2630', '#2f8049'],
  colH: ['#3a3470', '#8ec39b'], colB: ['#241f4f', '#5da07b'],
  imLoin: ['#231f4c', '#a9bbd9'], stupaLoin: ['#262157', '#889fcf'],
  palmier: ['#171436', '#2e7a4f'],
  mur: ['#161335', '#ecdcbc'], vitre: ['#ffd9a0', '#7da4cb'], vitreO: ['#ffb35c', '#7da4cb'],
  fer: ['#0e0d24', '#39405e'],
  routeH: ['#1d1943', '#7b829e'], routeB: ['#0d0c22', '#575e7c'], trottoir: ['#3a3470', '#b8c0d8'],
  feuillage: ['#0b0a1c', '#1f5a3c'],
  p1h: ['#433d7c', '#93aedc'], p1b: ['#2b2759', '#c1d5ef'],
  p2h: ['#2d2862', '#7e9ed1'], p2b: ['#1c1946', '#a9c2e8'],
  stupaP: ['#332e68', '#869fd0'],
  pagH: ['#211d48', '#a45a4a'], pagB: ['#12102b', '#7b4040'],
  boisH: ['#211d48', '#4c9d70'], boisB: ['#12102b', '#2b6a50'],
  sol: ['#12102b', '#6ba171'],
  bambou: ['#0b0a1c', '#2e7a48'], noeud: ['#1d1a3b', '#8cc48b'],
  immA: ['#2b2659', '#bfcbe4'], immB: ['#1e1a45', '#e1c9c5'],
  neonR: ['#ff4a6a', '#e8788c'], neonC: ['#4ad8ff', '#79c9e0'], neonV: ['#7aff9a', '#8cd9a0'], neonO: ['#ff9a4a', '#f0a868'],
  etalH: ['#ffd48a', '#f6e3ba'], etalB: ['#e8843e', '#e0ba7a'],
  comptoir: ['#161335', '#7b5d49'], cuisinier: ['#120f2b', '#3b3652'], toit: ['#2b1f3a', '#6b4a52'],
  toileA: ['#c9a566', '#efd391'], toileB: ['#a3342c', '#da5340'],
  pave: ['#171335', '#958b83'], paveB: ['#0d0b22', '#706963'],
  muret: ['#0a0919', '#645f7a'],
  tableH: ['#20193e', '#a28260'], tableB: ['#0a0919', '#6f5541'],
  bol: ['#0b0a1c', '#f2eadb'], baguettes: ['#0b0a1c', '#6b4a32'],
  a2h: ['#7a5a9c', '#9ab6e3'], a2b: ['#3f3373', '#c7dbf1'],
  a3h: ['#4f3f86', '#7f9fd3'], a3b: ['#2c2559', '#aac4e9'],
  lisA: ['#ffc9a0', '#ffffff'],
  cir1: ['#e7a8b8', '#ffffff'], cir2: ['#f3c0c4', '#f3f8ff'], cir3: ['#f7cfc4', '#ffffff'], cir4: ['#fff0dc', '#ffffff'],
  villeA: ['#2d2459', '#bac7e1'],
  termH: ['#2a2150', '#e3e8f1'], termB: ['#15122e', '#b7c1d5'],
  piste: ['#1b1636', '#5e6784'],
  vitreA: ['#ffd9a0', '#7fafdc'],
  herbe: ['#0b0a1c', '#2d6040'],
  avionH: ['#f6e2d6', '#ffffff'], avionB: ['#a98aa6', '#c8d2e5'],
  derive: ['#c78fa0', '#2e6db4'], stab: ['#8c6f9a', '#1f4f8f'], moteur: ['#6c5880', '#8f9ab0'],
  cabine: ['#35294f', '#27395a'], hublot: ['#ffe9b0', '#7ea4cf'],
};

const COULEURS_VARS = {
  fond: ['#1b1f3b', '#4a90d6'],
  brume: ['rgba(176,166,228,.2)', 'rgba(255,255,255,.2)'],
  voile: ['rgba(13,11,32,.62)', 'rgba(208,228,247,.7)'],
  oiseau: ['#2b2252', '#1f3a6a'],
  indice: ['rgba(255,236,204,.92)', 'rgba(255,255,255,.97)'],
  ombreIndice: ['rgba(16,12,44,.9)', 'rgba(22,66,118,.8)'],
};

const lireCouleur = (c) => {
  if (c[0] === "#") return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16), 1];
  const n = c.match(/[\d.]+/g).map(Number);
  return [n[0], n[1], n[2], n.length > 3 ? n[3] : 1];
};
const preparer = (table) => Object.keys(table).map((nom) => [nom, lireCouleur(table[nom][0]), lireCouleur(table[nom][1])]);
const PALETTE = preparer(COULEURS);
const PALETTE_VARS = preparer(COULEURS_VARS);
const couleurs = {};

function melange(a, b, t) {
  const m = a.map((v, i) => v + (b[i] - v) * t);
  const rvb = `${Math.round(m[0])},${Math.round(m[1])},${Math.round(m[2])}`;
  return m[3] > 0.995 ? `rgb(${rvb})` : `rgba(${rvb},${m[3].toFixed(3)})`;
}

const teinte = (nom) => `fill="${couleurs[nom]}" data-c="${nom}"`;
const arret = (nom) => `stop-color="${couleurs[nom]}" data-c="${nom}"`;
const trait = (nom) => `stroke="${couleurs[nom]}" data-t="${nom}"`;
const degrade = (id, haut, bas) => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" ${arret(haut)}/><stop offset="1" ${arret(bas)}/></linearGradient>`;
const lum = (contenu) => `<g class="lum">${contenu}</g>`;
const jr = (contenu) => `<g class="jr">${contenu}</g>`;
function peindre(racine = document) {
  racine.querySelectorAll("[data-c]").forEach((e) => e.setAttribute(e.localName === "stop" ? "stop-color" : "fill", couleurs[e.getAttribute("data-c")]));
  racine.querySelectorAll("[data-t]").forEach((e) => e.setAttribute("stroke", couleurs[e.getAttribute("data-t")]));
}

function reglerJour(j, h = 11) {
  j = Math.min(1, Math.max(0, j));
  const racine = document.documentElement;
  if (jourPose < 0 || Math.abs(j - jourPose) >= 0.005) {
    jourPose = j;
    jour = j;
    nuitNiv = 1 - j;
    racine.style.setProperty('--jour', j.toFixed(3));
    racine.classList.toggle('jour', j >= 0.6);
    racine.classList.toggle('nuit', j <= 0.4);
    for (const [nom, nuit, plein] of PALETTE_VARS) racine.style.setProperty('--' + nom, melange(nuit, plein, j));
    for (const [nom, nuit, plein] of PALETTE) couleurs[nom] = melange(nuit, plein, j);
    peindre();
    const barre = document.querySelector('meta[name="theme-color"]');
    if (barre) barre.setAttribute('content', melange([27, 31, 59, 1], [42, 118, 198, 1], j));
  }
  if (Math.abs(h - heurePosee) >= 0.02) {
    heurePosee = h;
    poserSoleil(h);
  }
}

function dessinerSoleil() {
  return `<span class="halo-soleil"></span><svg viewBox="0 0 120 120" width="120" height="120" style="overflow:visible">
    <defs><radialGradient id="soleilDisque" cx=".4" cy=".36" r=".75"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#fff6c6"/><stop offset="1" stop-color="#ffdc6e"/></radialGradient></defs>
    <circle cx="60" cy="60" r="31" fill="url(#soleilDisque)"/>
  </svg>`;
}

let soleilDx = 0;
let soleilDy = 0;
function poserSoleil(h) {
  const x = Math.max(-1.15, Math.min(1.15, (h - 12.1) / 5.7));
  soleilDx = Math.round(x * 105);
  soleilDy = Math.round(-26 + 74 * x * x);
  document.documentElement.style.setProperty('--sdx', soleilDx + 'px');
  placerAstres(window.scrollY);
}

function placerAstres(sy) {
  const bas = sy < 1400 ? r1(sy * 0.3) : 420;
  const lune = document.getElementById("lune");
  if (lune) lune.style.transform = `translate3d(0,${bas}px,0)`;
  const soleil = document.getElementById("soleilHaut");
  if (soleil) soleil.style.transform = `translate3d(${soleilDx}px,${r1(soleilDy + bas)}px,0)`;
}

reglerJour(niveauDuJour(heureEnAsie(new Date())), heureEnAsie(new Date()));

function lisse(pts) {
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i - 1] || pts[i];
    const b = pts[i];
    const c = pts[i + 1];
    const e = pts[i + 2] || c;
    d += `C${r1(b[0] + (c[0] - a[0]) / 6)} ${r1(b[1] + (c[1] - a[1]) / 6)} ${r1(c[0] - (e[0] - b[0]) / 6)} ${r1(c[1] - (e[1] - b[1]) / 6)} ${r1(c[0])} ${r1(c[1])}`;
  }
  return d;
}

function crete(rnd, largeur, base, amplitude, pas, pic = 0) {
  const pts = [];
  const a = rnd() * 9;
  const b = rnd() * 9;
  const c = rnd() * 9;
  for (let x = -pas; x <= largeur + pas; x += pas) {
    let v = 0.5 * Math.sin(x / 83 + a) + 0.3 * Math.sin(x / 41 + b) + 0.2 * Math.sin(x / 19 + c);
    v = v * (1 - pic) + pic * (rnd() * 2 - 1);
    pts.push([x, base - (amplitude * (v + 1)) / 2]);
  }
  return pts;
}

function montagnes(rnd, largeur, base, amplitude, pas) {
  const a = rnd() * 9;
  const b = rnd() * 9;
  const c = rnd() * 9;
  const pts = [];
  for (let x = -pas; x <= largeur + pas; x += pas) {
    const v = 1 - 0.55 * Math.abs(Math.sin(x / 96 + a)) - 0.3 * Math.abs(Math.sin(x / 41 + b)) - 0.15 * Math.abs(Math.sin(x / 17 + c));
    pts.push([x, base - amplitude * v]);
  }
  return pts;
}

function fermee(pts) {
  const n = pts.length;
  let d = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const a = pts[(i - 1 + n) % n];
    const b = pts[i];
    const c = pts[(i + 1) % n];
    const e = pts[(i + 2) % n];
    d += `C${r1(b[0] + (c[0] - a[0]) / 6)} ${r1(b[1] + (c[1] - a[1]) / 6)} ${r1(c[0] - (e[0] - b[0]) / 6)} ${r1(c[1] - (e[1] - b[1]) / 6)} ${r1(c[0])} ${r1(c[1])}`;
  }
  return d + "Z";
}

function remplieDroit(pts, bas) {
  return `M${r1(pts[0][0])} ${r1(pts[0][1])}${pts.slice(1).map((p) => `L${r1(p[0])} ${r1(p[1])}`).join("")}L${r1(pts[pts.length - 1][0])} ${bas}L${r1(pts[0][0])} ${bas}Z`;
}

function remplie(pts, bas) {
  return `${lisse(pts)}L${r1(pts[pts.length - 1][0])} ${bas}L${r1(pts[0][0])} ${bas}Z`;
}

function hauteurCrete(pts, x) {
  for (let i = 0; i < pts.length - 1; i++) {
    if (x >= pts[i][0] && x <= pts[i + 1][0]) {
      const t = (x - pts[i][0]) / (pts[i + 1][0] - pts[i][0]);
      return pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t;
    }
  }
  return pts[pts.length - 1][1];
}


function toit(cx, y, demi, haut) {
  const e = demi;
  return `M${r1(cx - e - 7)} ${r1(y - 6)}Q${r1(cx - e * 0.5)} ${r1(y - 3)} ${r1(cx - e * 0.3)} ${r1(y - haut)}H${r1(cx + e * 0.3)}Q${r1(cx + e * 0.5)} ${r1(y - 3)} ${r1(cx + e + 7)} ${r1(y - 6)}Q${r1(cx + e - 3)} ${r1(y + 3)} ${r1(cx + e * 0.7)} ${r1(y + 2)}H${r1(cx - e * 0.7)}Q${r1(cx - e + 3)} ${r1(y + 3)} ${r1(cx - e - 7)} ${r1(y - 6)}Z`;
}

const bloc = (x, y, w, h) => `M${r1(x)} ${r1(y)}h${r1(w)}v${r1(h)}h${r1(-w)}Z`;

function pagode(cx, base, larg, etages, haut) {
  let forme = '';
  let fenetres = '';
  for (let i = 0; i < etages; i++) {
    const w = larg * (1 - i * 0.14);
    const y = base - i * haut;
    const mur = haut * 0.52;
    forme += bloc(cx - w * 0.34, y - mur, w * 0.68, mur);
    forme += toit(cx, y - mur, w * 0.58, haut * 0.5);
    fenetres += `<rect class="fen" x="${r1(cx - 2.2)}" y="${r1(y - mur * 0.86)}" width="4.4" height="${r1(mur * 0.55)}" rx="1"/>`;
  }
  const sommet = base - etages * haut + haut * 0.02;
  forme += bloc(cx - 0.9, sommet - 16, 1.8, 16);
  forme += bloc(cx - 3.6, sommet - 5, 7.2, 1.6) + bloc(cx - 2.6, sommet - 9, 5.2, 1.5) + bloc(cx - 1.8, sommet - 13, 3.6, 1.4);
  forme += `M${r1(cx - 2)} ${r1(sommet - 16)}a2 2 0 1 1 4 0a2 2 0 1 1-4 0Z`;
  return { forme, fenetres };
}

function stupa(cx, base, larg, haut) {
  const w = larg / 2;
  let d = bloc(cx - w * 1.15, base - haut * 0.07, w * 2.3, haut * 0.07) + bloc(cx - w, base - haut * 0.14, w * 2, haut * 0.07);
  const y0 = base - haut * 0.14;
  d += `M${r1(cx - w * 0.9)} ${r1(y0)}C${r1(cx - w * 0.95)} ${r1(y0 - haut * 0.42)} ${r1(cx - w * 0.3)} ${r1(y0 - haut * 0.5)} ${r1(cx - w * 0.16)} ${r1(y0 - haut * 0.58)}L${r1(cx - w * 0.1)} ${r1(y0 - haut * 0.86)}L${r1(cx)} ${r1(y0 - haut)}L${r1(cx + w * 0.1)} ${r1(y0 - haut * 0.86)}L${r1(cx + w * 0.16)} ${r1(y0 - haut * 0.58)}C${r1(cx + w * 0.3)} ${r1(y0 - haut * 0.5)} ${r1(cx + w * 0.95)} ${r1(y0 - haut * 0.42)} ${r1(cx + w * 0.9)} ${r1(y0)}Z`;
  return d;
}

function temple(cx, base, larg, haut) {
  const w = larg / 2;
  let d = bloc(cx - w * 0.7, base - haut * 0.34, w * 1.4, haut * 0.34);
  d += toit(cx, base - haut * 0.34, w, haut * 0.3);
  d += toit(cx, base - haut * 0.62, w * 0.72, haut * 0.3);
  d += bloc(cx - 1, base - haut * 0.9 - haut * 0.12, 2, haut * 0.12 + 1);
  return d;
}

function palmier(x, y, haut, penche, rnd, epais = 1) {
  const tx = x + penche;
  const ty = y - haut;
  let d = `M${r1(x - 2.4 * epais)} ${r1(y)}Q${r1(x + penche * 0.1)} ${r1(y - haut * 0.55)} ${r1(tx - 1 * epais)} ${r1(ty)}L${r1(tx + 1 * epais)} ${r1(ty)}Q${r1(x + penche * 0.1 + 3 * epais)} ${r1(y - haut * 0.55)} ${r1(x + 2.4 * epais)} ${r1(y)}Z`;
  const nb = 9;
  for (let k = 0; k < nb; k++) {
    const a = -Math.PI + ((k + 0.5) * Math.PI) / nb + (rnd() - 0.5) * 0.25;
    const L = haut * 0.4 * (0.75 + rnd() * 0.45);
    const ux = Math.cos(a);
    const uy = Math.sin(a);
    const mx = tx + ux * L * 0.55;
    const my = ty + uy * L * 0.55 - 5 * epais;
    const px = tx + ux * L;
    const py = ty + uy * L + L * 0.4;
    // la palme est un fuseau : on part d'un côté, on revient de l'autre (toujours dans le même sens)
    d += `M${r1(tx)} ${r1(ty)}Q${r1(mx - uy * 3 * epais)} ${r1(my + ux * 3 * epais)} ${r1(px)} ${r1(py)}Q${r1(mx + uy * 4 * epais)} ${r1(my - ux * 4 * epais)} ${r1(tx)} ${r1(ty)}Z`;
  }
  return d;
}

function roseaux(x, y, nb, haut, rnd) {
  let d = "";
  for (let k = 0; k < nb; k++) {
    const bx = x + (rnd() - 0.5) * 34;
    const h = haut * (0.55 + rnd() * 0.6);
    const pen = (rnd() - 0.5) * 22;
    d += `M${r1(bx - 1.3)} ${r1(y)}Q${r1(bx + pen * 0.3 - 1.6)} ${r1(y - h * 0.5)} ${r1(bx + pen)} ${r1(y - h)}Q${r1(bx + pen * 0.3 + 1.6)} ${r1(y - h * 0.55)} ${r1(bx + 1.3)} ${r1(y)}Z`;
  }
  return d;
}

function bosquet(x, y, larg, haut, rnd) {
  let d = "";
  const nb = Math.max(3, Math.round(larg / 11));
  for (let k = 0; k < nb; k++) {
    const bx = x - larg / 2 + (larg * k) / (nb - 1);
    const r = haut * (0.38 + rnd() * 0.3);
    d += `M${r1(bx - r)} ${r1(y)}a${r1(r)} ${r1(r)} 0 0 1 ${r1(r * 2)} 0Z`;
  }
  d += bloc(x - larg / 2, y, larg, 3);
  return d;
}

let numeroSvg = 0;

function barque() {
  const lueur = "bqg" + ++numeroSvg;
  return `<svg class="barque" viewBox="0 0 96 40" width="96" height="40">
    <defs><radialGradient id="${lueur}"><stop offset="0" stop-color="#ffd48a" stop-opacity=".9"/><stop offset="1" stop-color="#ff9a4a" stop-opacity="0"/></radialGradient></defs>
    ${lum(`<circle cx="14" cy="13" r="12" fill="url(#${lueur})"/>`)}
    <g ${teinte("coque")}>
      <path d="M2 17Q4 26 18 27H70Q86 26 90 12L86 12Q80 21 68 21H20Q9 21 6 11Z"/>
      <path d="M30 20Q42 6 60 20Z"/>
      <rect x="13" y="10" width="2" height="8"/>
    </g>
    <path d="M86 13L108 1" ${trait("coque")} stroke-width="2" fill="none"/>
    <circle cx="14" cy="11" r="3" fill="#ffd9a0"/>
    ${jr(`<path d="M69.5 21L71 10Q74 8.4 77 10L78.5 21Z" fill="#3b5560"/><path d="M66 10.4L74 3.2L82 10.4Q74 12.2 66 10.4Z" fill="#e4c97f"/><path d="M74 3.2V1.8" stroke="#b79b52" stroke-width="1"/>`)}
  </svg>`;
}

function offrande() {
  const lueur = "ofg" + ++numeroSvg;
  return `<svg class="offrande" viewBox="0 0 24 20" width="24" height="20">
    <defs><radialGradient id="${lueur}"><stop offset="0" stop-color="#ffe2a0"/><stop offset=".4" stop-color="#ffb35c" stop-opacity=".7"/><stop offset="1" stop-color="#ff9040" stop-opacity="0"/></radialGradient></defs>
    ${lum(`<circle cx="12" cy="7" r="9" fill="url(#${lueur})"/>`)}
    <path d="M2 14Q12 20 22 14Q12 16 2 14Z" ${teinte("plateau")}/>
    <path d="M12 14C6 14 4 9 6 7C9 8 11 10 12 14ZM12 14C18 14 20 9 18 7C15 8 13 10 12 14ZM12 14C9 12 8 7 12 3C16 7 15 12 12 14Z" ${teinte("petale")}/>
    <path d="M12 11c-1.4-1-1.4-3 0-5c1.4 2 1.4 4 0 5Z" fill="#fff3c4"/>
  </svg>`;
}

function lotus(e = 1) {
  return `<svg class="lotus" viewBox="0 0 36 24" width="${r1(36 * e)}" height="${r1(24 * e)}">
    <ellipse cx="18" cy="17.5" rx="16" ry="5.2" ${teinte('nenu')}/>
    <ellipse cx="18" cy="17" rx="10.5" ry="2.9" ${teinte('nenuB')} opacity=".5"/>
    <path d="M18 17.5L32 15.2" ${trait('nenuB')} stroke-width="1" fill="none"/>
    ${jr(`<path d="M18 17C11.5 17 9.4 11.6 11.2 8.4C14.6 9.4 17 12.4 18 17ZM18 17C24.5 17 26.6 11.6 24.8 8.4C21.4 9.4 19 12.4 18 17Z" fill="#f6adbf"/><path d="M18 17C14 15.4 13 9.4 18 3.2C23 9.4 22 15.4 18 17Z" fill="#fcd3dd"/><path d="M18 14.6c-1.3-.9-1.6-3.2 0-5.6c1.6 2.4 1.3 4.7 0 5.6Z" fill="#ffe7a6"/>`)}
  </svg>`;
}

function papillonJour(a, b) {
  return `<svg viewBox="0 0 14 12" width="14" height="12" style="overflow:visible"><g class="ailes"><path d="M7 6Q3 0 .6 2Q0 5 4 6.8ZM7 6Q11 0 13.4 2Q14 5 10 6.8Z" fill="${a}"/><path d="M7 6.2Q3.6 8 3 10.8Q5.4 11.4 7 8ZM7 6.2Q10.4 8 11 10.8Q8.6 11.4 7 8Z" fill="${b}"/></g><rect x="6.5" y="3.4" width="1" height="5.4" rx=".5" fill="#2a2430"/></svg>`;
}

function papillons(x0, nb, rnd, haut = 120, bas = 250, large = 380) {
  const robes = [['#ffd45e', '#fff1b8'], ['#ff9a4a', '#ffd9a8'], ['#ffffff', '#dbe8ff'], ['#7ab8ff', '#d6e8ff'], ['#ff8fb0', '#ffd3e0']];
  let s = '';
  for (let k = 0; k < nb; k++) {
    const [a, b] = robes[k % robes.length];
    s += `<i class="pap" style="left:${r1(x0 + (rnd() - 0.5) * large)}px;top:${r1(haut + rnd() * (bas - haut))}px;--dx:${r1((rnd() - 0.5) * 90)}px;--dy:${r1((rnd() - 0.5) * 46)}px;--d:${r1(9 + rnd() * 8)}s;--t:${r1(-rnd() * 12)}s">${papillonJour(a, b)}</i>`;
  }
  return s;
}

function cerfVolant(x, y, clair, fonce, bas) {
  const dx = bas[0] - x;
  const dy = bas[1] - y;
  const fil = `M16 40Q${r1(16 + dx * 0.35)} ${r1(40 + (dy - 40) * 0.5)} ${r1(16 + dx)} ${r1(dy)}`;
  return `<span class="cerf" style="left:${r1(x - 16)}px;top:${r1(y)}px">
    <svg viewBox="0 0 32 70" width="32" height="70" style="overflow:visible"><path d="${fil}" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width=".7"/></svg>
    <svg class="voile" viewBox="0 0 32 70" width="32" height="70" style="overflow:visible"><path d="M16 40Q9 47 15 54T16 68" fill="none" stroke="${fonce}" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M16 0L30 17L16 40Z" fill="${clair}"/><path d="M16 0L2 17L16 40Z" fill="${fonce}"/>
      <path d="M16 0V40M2 17H30" stroke="#fff" stroke-opacity=".5" stroke-width=".7"/></svg>
  </span>`;
}


const ciel = document.getElementById("ciel");
const pinceau = ciel.getContext("2d");
let largeur = 0;
let hauteur = 0;
let cielEnPause = false;
let clarte = 0;
const etoiles = [];
const lanternesCiel = [];
const lacheesCiel = [];
let filantes = [];
let miettes = [];
let prochaineFilante = 1.6;
let etaitALEntree = true;
let passant = null;
let prochainPassant = 25 + Math.random() * 20;
const fenetresVoeu = [];
const voeux = [];
const braises = [];
let voie = null;

function dessinUnique(l, h, dessin) {
  const c = document.createElement('canvas');
  c.width = l;
  c.height = h;
  dessin(c.getContext('2d'));
  return c;
}
const imageLanterne = dessinUnique(64, 84, (g) => {
  const d = g.createRadialGradient(32, 66, 2, 32, 50, 44);
  d.addColorStop(0, "#fff3c4");
  d.addColorStop(0.3, "#ffc070");
  d.addColorStop(0.65, "#f0803a");
  d.addColorStop(1, "#b8402a");
  g.fillStyle = d;
  g.beginPath();
  g.moveTo(6, 22);
  g.quadraticCurveTo(6, 2, 32, 2);
  g.quadraticCurveTo(58, 2, 58, 22);
  g.lineTo(52, 74);
  g.quadraticCurveTo(32, 82, 12, 74);
  g.closePath();
  g.fill();
  g.fillStyle = "rgba(255,250,220,.9)";
  g.beginPath();
  g.ellipse(32, 73, 9, 4, 0, 0, Math.PI * 2);
  g.fill();
});
const imageHalo = dessinUnique(128, 128, (g) => {
  const d = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  d.addColorStop(0, 'rgba(255,170,80,.55)');
  d.addColorStop(0.4, 'rgba(255,140,60,.18)');
  d.addColorStop(1, 'rgba(255,120,50,0)');
  g.fillStyle = d;
  g.fillRect(0, 0, 128, 128);
});
const imageBrillante = dessinUnique(48, 48, (g) => {
  const d = g.createRadialGradient(24, 24, 0, 24, 24, 24);
  d.addColorStop(0, "rgba(255,246,224,1)");
  d.addColorStop(0.12, "rgba(255,240,210,.8)");
  d.addColorStop(0.4, "rgba(255,225,180,.12)");
  d.addColorStop(1, "rgba(255,225,180,0)");
  g.fillStyle = d;
  g.fillRect(0, 0, 48, 48);
  g.strokeStyle = "rgba(255,244,220,.75)";
  g.lineWidth = 1;
  g.beginPath();
  g.moveTo(24, 3);
  g.lineTo(24, 45);
  g.moveTo(3, 24);
  g.lineTo(45, 24);
  g.stroke();
});

const imageTete = dessinUnique(32, 32, (g) => {
  const d = g.createRadialGradient(16, 16, 0, 16, 16, 16);
  d.addColorStop(0, 'rgba(255,255,255,1)');
  d.addColorStop(0.25, 'rgba(255,244,214,.75)');
  d.addColorStop(1, 'rgba(255,225,180,0)');
  g.fillStyle = d;
  g.fillRect(0, 0, 32, 32);
});

const imageFeuRouge = dessinUnique(16, 16, (g) => {
  const d = g.createRadialGradient(8, 8, 0, 8, 8, 8);
  d.addColorStop(0, 'rgba(255,235,225,1)');
  d.addColorStop(0.3, 'rgba(255,90,70,.85)');
  d.addColorStop(1, 'rgba(255,60,50,0)');
  g.fillStyle = d;
  g.fillRect(0, 0, 16, 16);
});

function tailleCiel() {
  const l = innerWidth;
  const h = ciel.clientHeight || innerHeight;
  if (largeur && Math.abs(l - largeur) < 2 && Math.abs(h - hauteur) < 150) return;
  const r = Math.min(1.5, window.devicePixelRatio || 1);
  largeur = l;
  hauteur = h;
  ciel.width = l * r;
  ciel.height = h * r;
  pinceau.setTransform(r, 0, 0, r, 0, 0);
  fabriquerVoie();
}

function fabriquerVoie() {
  const l = Math.round(largeur);
  const h = Math.round(hauteur + 200);
  voie = dessinUnique(l, h, (g) => {
    const rnd = aleatoire(77);
    const long = Math.hypot(l, h);
    g.translate(l * 0.55, h * 0.5);
    g.rotate(-0.62);
    for (let k = 0; k < 16; k++) {
      const rayon = 90 + rnd() * 130;
      g.save();
      g.translate((rnd() - 0.5) * long * 0.95, (rnd() - 0.5) * l * 0.14);
      g.scale(1, 0.3 + rnd() * 0.2);
      const d = g.createRadialGradient(0, 0, 0, 0, 0, rayon);
      d.addColorStop(0, rnd() < 0.3 ? "rgba(255,214,176,.055)" : "rgba(168,160,236,.07)");
      d.addColorStop(1, "rgba(168,160,236,0)");
      g.fillStyle = d;
      g.fillRect(-rayon, -rayon, rayon * 2, rayon * 2);
      g.restore();
    }
    g.globalCompositeOperation = "destination-out";
    for (let k = 0; k < 5; k++) {
      g.save();
      g.translate((rnd() - 0.5) * long * 0.8, (rnd() - 0.5) * l * 0.05);
      g.rotate((rnd() - 0.5) * 0.12);
      g.scale(1, 0.09);
      const d = g.createRadialGradient(0, 0, 0, 0, 0, 120);
      d.addColorStop(0, "rgba(0,0,0,.55)");
      d.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = d;
      g.fillRect(-120, -120, 240, 240);
      g.restore();
    }
    g.globalCompositeOperation = "source-over";
    for (let k = 0; k < 190; k++) {
      g.globalAlpha = 0.12 + rnd() * 0.4;
      g.fillStyle = rnd() < 0.2 ? "#ffe3c0" : "#e6ecff";
      g.fillRect((rnd() - 0.5) * long, (rnd() + rnd() + rnd() - 1.5) * l * 0.1, 1, 1);
    }
  });
}
function remplirCiel() {
  const teintes = ["#fff6e0", "#fff6e0", "#e6ecff", "#ffe3c0"];
  for (let k = 0; k < 95; k++) {
    etoiles.push({
      x: Math.random(),
      y: Math.random(),
      t: 0.4 + Math.random() * 1,
      a: 0.25 + Math.random() * 0.6,
      p: Math.random() * 6,
      c: teintes[k % teintes.length],
      g: Math.random() < 0.12 ? 1.4 + Math.random() * 0.8 : 1.3,
      brillante: k < 7,
    });
  }
  const nb = innerWidth < 500 ? 22 : 34;
  for (let k = 0; k < nb; k++) {
    const z = Math.random();
    lanternesCiel.push({
      z,
      x: Math.random(),
      y: Math.random(),
      taille: 3 + z * z * 17,
      vitesse: 6 + z * 26,
      balance: 4 + Math.random() * 10,
      p: Math.random() * 6,
    });
  }
  lanternesCiel.sort((a, b) => a.z - b.z);
}

function dessinerLanterne(x, y, taille, lumiere, scintille) {
  const halo = taille * 3.2;
  if (nuitNiv > 0.03) {
    pinceau.globalAlpha = lumiere * 0.7 * scintille * nuitNiv;
    pinceau.drawImage(imageHalo, x - halo / 2, y - halo / 2, halo, halo);
  }
  pinceau.globalAlpha = lumiere;
  pinceau.drawImage(imageLanterne, x - taille / 2, y - taille * 0.65, taille, taille * 1.3);
}

function lancerFilante(s, retard = 0, bolide = false) {
  const angle = 0.35 + Math.random() * 0.35;
  const sens = Math.random() < 0.5 ? 1 : -1;
  const vitesse = Math.min(largeur, 700) * (bolide ? 1.5 + Math.random() * 0.3 : 1.1 + Math.random() * 0.5);
  filantes.push({
    x: sens > 0 ? Math.random() * largeur * 0.5 : largeur * (0.5 + Math.random() * 0.5),
    y: Math.random() * hauteur * (bolide ? 0.25 : 0.35),
    vx: Math.cos(angle) * vitesse * sens,
    vy: Math.sin(angle) * vitesse,
    longueur: bolide ? 250 + Math.random() * 70 : 120 + Math.random() * 70,
    duree: bolide ? 1.8 + Math.random() * 0.3 : 1.1 + Math.random() * 0.4,
    depart: s + retard,
    bolide,
  });
  const f = filantes[filantes.length - 1];
  for (let k = fenetresVoeu.length - 1; k >= 0; k--) if (fenetresVoeu[k].fin < s) fenetresVoeu.splice(k, 1);
  fenetresVoeu.push({ debut: s + retard, fin: s + retard + f.duree + 1 });
}

function dessinerFilantes(s, dt, voile) {
  const entree = document.body.classList.contains("porte");
  if (etaitALEntree && !entree) prochaineFilante = Math.min(prochaineFilante, s + 1.4);
  etaitALEntree = entree;
  if (s > prochaineFilante && voile > 0.3) {
    lancerFilante(s, 0, Math.random() < 0.1);
    if (entree && Math.random() < 0.3) lancerFilante(s, 0.35 + Math.random() * 0.3);
    prochaineFilante = s + (entree ? 2.2 + Math.random() * 2.6 : 5 + Math.random() * 6);
  }
  for (let k = filantes.length - 1; k >= 0; k--) {
    const f = filantes[k];
    const age = s - f.depart;
    if (age < 0) continue;
    if (age > f.duree) {
      filantes.splice(k, 1);
      continue;
    }
    f.x += f.vx * dt;
    f.y += f.vy * dt;
    const vie = Math.min(1, age / 0.1) * Math.min(1, 2 * (1 - age / f.duree)) * voile;
    const gros = f.bolide ? 1.5 : 1;
    const norme = Math.hypot(f.vx, f.vy);
    const bx = f.x - (f.vx / norme) * f.longueur;
    const by = f.y - (f.vy / norme) * f.longueur;
    const trainee = pinceau.createLinearGradient(bx, by, f.x, f.y);
    trainee.addColorStop(0, "rgba(255,220,170,0)");
    trainee.addColorStop(1, "rgba(255,252,240,1)");
    pinceau.strokeStyle = trainee;
    pinceau.lineCap = "round";
    pinceau.beginPath();
    pinceau.moveTo(bx, by);
    pinceau.lineTo(f.x, f.y);
    pinceau.globalAlpha = vie * 0.25;
    pinceau.lineWidth = 5 * gros;
    pinceau.stroke();
    pinceau.globalAlpha = vie;
    pinceau.lineWidth = 1.8 * gros;
    pinceau.stroke();
    pinceau.drawImage(imageTete, f.x - 10 * gros, f.y - 10 * gros, 20 * gros, 20 * gros);
    if (f.bolide && age > 0.15 && age < f.duree * 0.8 && Math.random() < 0.5) {
      miettes.push({ x: f.x, y: f.y, vx: (Math.random() - 0.5) * 50, vy: 10 + Math.random() * 40, naissance: s });
    }
  }
  for (let k = miettes.length - 1; k >= 0; k--) {
    const m = miettes[k];
    const age = s - m.naissance;
    if (age > 0.8) {
      miettes.splice(k, 1);
      continue;
    }
    m.x += m.vx * dt;
    m.y += m.vy * dt;
    m.vy += 60 * dt;
    pinceau.globalAlpha = (1 - age / 0.8) * 0.9 * voile;
    pinceau.fillStyle = "#ffe6bd";
    pinceau.fillRect(m.x, m.y, 1.8, 1.8);
  }
}

function dessinerPassant(s, voile) {
  if (!passant) {
    if (s < prochainPassant || document.body.classList.contains("porte")) return;
    const avion = Math.random() < 0.45;
    passant = {
      avion,
      sens: Math.random() < 0.5 ? 1 : -1,
      depart: s,
      duree: avion ? 38 + Math.random() * 10 : 24 + Math.random() * 8,
      y: hauteur * (0.08 + Math.random() * 0.25),
      pente: (Math.random() - 0.5) * 0.14,
    };
  }
  const p = (s - passant.depart) / passant.duree;
  if (p >= 1) {
    passant = null;
    prochainPassant = s + 45 + Math.random() * 45;
    return;
  }
  const x = passant.sens > 0 ? -10 + (largeur + 20) * p : largeur + 10 - (largeur + 20) * p;
  const y = passant.y + (p - 0.5) * largeur * passant.pente;
  const fondu = Math.min(1, p / 0.08, (1 - p) / 0.08) * voile;
  if (!passant.avion) {
    // un satellite : un point régulier qui avance, rien d'autre
    pinceau.globalAlpha = 0.8 * fondu;
    pinceau.fillStyle = "#fff6e0";
    pinceau.fillRect(x - 0.9, y - 0.9, 1.8, 1.8);
    return;
  }
  const tour = (s * 0.55) % 1;
  const rouge = (s * 0.9) % 1 < 0.16;
  const blanc = tour < 0.07 || (tour > 0.2 && tour < 0.27);
  pinceau.globalAlpha = 0.3 * fondu;
  pinceau.fillStyle = "#ffe9c8";
  pinceau.fillRect(x - 0.6, y - 0.6, 1.2, 1.2);
  if (rouge) {
    pinceau.globalAlpha = fondu;
    pinceau.drawImage(imageFeuRouge, x - 5 - passant.sens * 3, y - 5, 10, 10);
  }
  if (blanc) {
    pinceau.globalAlpha = fondu;
    pinceau.drawImage(imageTete, x - 6 + passant.sens * 3, y - 6, 12, 12);
  }
}

const imagesNuage = [0, 1, 2, 3].map((k) => dessinUnique(260, 112, (g) => {
  const rnd = aleatoire(520 + k * 31);
  const nb = 7 + k;
  for (let i = 0; i < nb; i++) {
    const t = i / (nb - 1);
    const r = 20 + rnd() * 20 - Math.abs(t - 0.5) * 20;
    const x = 38 + t * 184 + (rnd() - 0.5) * 14;
    const y = 70 - Math.sin(t * Math.PI) * (12 + k * 3) - rnd() * 12;
    const d = g.createRadialGradient(x, y - r * 0.25, r * 0.1, x, y, r);
    d.addColorStop(0, 'rgba(255,255,255,.97)');
    d.addColorStop(0.55, 'rgba(255,255,255,.84)');
    d.addColorStop(0.86, 'rgba(240,247,255,.34)');
    d.addColorStop(1, 'rgba(240,247,255,0)');
    g.fillStyle = d;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  g.globalCompositeOperation = 'destination-out';
  const coupe = g.createLinearGradient(0, 80, 0, 96);
  coupe.addColorStop(0, 'rgba(0,0,0,0)');
  coupe.addColorStop(1, 'rgba(0,0,0,1)');
  g.fillStyle = coupe;
  g.fillRect(0, 80, 260, 40);
  g.globalCompositeOperation = 'source-atop';
  const ombre = g.createLinearGradient(0, 52, 0, 90);
  ombre.addColorStop(0, 'rgba(150,178,218,0)');
  ombre.addColorStop(1, 'rgba(150,178,218,.42)');
  g.fillStyle = ombre;
  g.fillRect(0, 40, 260, 60);
}));
const nuagesJour = [];
const volees = [];
let prochaineVolee = 7 + Math.random() * 8;

function remplirNuages() {
  [[0.07, 1.1, 7], [0.2, 0.7, 4], [0.33, 1.4, 10], [0.46, 0.8, 5], [0.58, 1.2, 8], [0.17, 1.5, 11], [0.72, 0.9, 6]].forEach(([haut, e, v], k) => {
    nuagesJour.push({ x: Math.random(), haut, e, v, image: imagesNuage[k % imagesNuage.length], a: 0.55 + e * 0.3 });
  });
}
remplirNuages();

function lancerVolee(s) {
  const sens = Math.random() < 0.5 ? 1 : -1;
  const nb = 3 + Math.floor(Math.random() * 4);
  const oiseaux = [];
  for (let k = 0; k < nb; k++) {
    const rang = Math.ceil(k / 2);
    const cote = k % 2 ? 1 : -1;
    oiseaux.push({ dx: -sens * rang * (15 + Math.random() * 5), dy: cote * rang * (6 + Math.random() * 3) + (Math.random() - 0.5) * 4, p: Math.random() * 6, e: 0.8 + Math.random() * 0.4 });
  }
  volees.push({ x: sens > 0 ? -60 : largeur + 60, y: hauteur * (0.1 + Math.random() * 0.32), vit: (34 + Math.random() * 22) * sens, pente: (Math.random() - 0.5) * 9, oiseaux, depart: s });
}

function dessinerJour(s, dt, scroll) {
  for (const n of nuagesJour) {
    n.x += (n.v * dt) / (largeur + 360);
    if (n.x > 1) n.x -= 1;
    const x = n.x * (largeur + 360) - 260 * n.e;
    const y = n.haut * hauteur * 0.9 - scroll * 0.03 * n.e;
    if (y < -120 * n.e || y > hauteur) continue;
    pinceau.globalAlpha = n.a * jour * jour;
    pinceau.drawImage(n.image, x, y, 260 * n.e, 112 * n.e);
  }
  if (jour > 0.6 && s > prochaineVolee && volees.length < 2) {
    lancerVolee(s);
    prochaineVolee = s + 20 + Math.random() * 26;
  }
  pinceau.lineCap = "round";
  pinceau.lineJoin = "round";
  for (let k = volees.length - 1; k >= 0; k--) {
    const v = volees[k];
    v.x += v.vit * dt;
    v.y += v.pente * dt;
    if (v.x < -90 || v.x > largeur + 90) {
      volees.splice(k, 1);
      continue;
    }
    pinceau.globalAlpha = 0.72 * jour;
    pinceau.strokeStyle = "#1d3258";
    for (const o of v.oiseaux) {
      const bat = Math.sin(s * 8.5 + o.p);
      const x = v.x + o.dx;
      const y = v.y + o.dy + Math.sin(s * 0.7 + o.p) * 3;
      const e = o.e;
      pinceau.lineWidth = 1.5 * e;
      pinceau.beginPath();
      pinceau.moveTo(x - 7 * e, y + bat * 4 * e);
      pinceau.quadraticCurveTo(x - 3.5 * e, y - 3.4 * e + bat * 2 * e, x, y);
      pinceau.quadraticCurveTo(x + 3.5 * e, y - 3.4 * e + bat * 2 * e, x + 7 * e, y + bat * 4 * e);
      pinceau.stroke();
    }
  }
}

let lent = false;
let debutMesure = 0;
let imagesMesurees = 0;
let mauvaisesMesures = 0;
function surveillerFluidite(t, dt) {
  if (lent || t < 4500) return;
  if (dt > 0.2 || document.hidden) { debutMesure = 0; return; }
  if (document.body.classList.contains('porte')) { debutMesure = 0; mauvaisesMesures = 0; return; }
  if (!debutMesure) { debutMesure = t; imagesMesurees = 0; return; }
  imagesMesurees++;
  if (t - debutMesure < 3000) return;
  const fps = imagesMesurees / ((t - debutMesure) / 1000);
  debutMesure = 0;
  mauvaisesMesures = fps < 30 ? mauvaisesMesures + 1 : 0;
  if (mauvaisesMesures >= 2) {
    lent = true;
    document.documentElement.classList.add('sobre');
  }
}

let avant = performance.now();
let imageImpaire = false;
function dessinerCiel(t) {
  if (cielEnPause) return;
  requestAnimationFrame(dessinerCiel);
  const dt = Math.min(0.05, (t - avant) / 1000);
  surveillerFluidite(t, (t - avant) / 1000);
  if (lent) {
    imageImpaire = !imageImpaire;
    if (imageImpaire) return;
  }
  avant = t;
  const s = t / 1000;
  const scroll = window.scrollY;
  pinceau.clearRect(0, 0, largeur, hauteur);

  if (jour > 0.02) dessinerJour(s, dt, scroll);
  const voile = (1 - clarte * 0.85) * nuitNiv;
  if (voile > 0.02) {
    if (voie && !lent) {
      pinceau.globalAlpha = voile;
      pinceau.drawImage(voie, 0, -Math.min(180, scroll * 0.03), voie.width, voie.height);
    }
    for (const e of etoiles) {
      const y = ((((e.y * hauteur * 1.2 - scroll * 0.04) % (hauteur * 1.2)) + hauteur * 1.2) % (hauteur * 1.2)) * 0.75;
      const lueur = e.a * (0.55 + 0.45 * Math.sin(s * e.t * 2 + e.p)) * voile;
      if (e.brillante) {
        pinceau.globalAlpha = lueur;
        pinceau.drawImage(imageBrillante, e.x * largeur - 12, y - 12, 24, 24);
        continue;
      }
      pinceau.globalAlpha = lueur;
      pinceau.fillStyle = e.c;
      pinceau.fillRect(e.x * largeur, y, e.g, e.g);
    }
  }
  dessinerFilantes(s, dt, voile);
  dessinerPassant(s, voile);

  const boucle = hauteur + 160;
  let rang = 0;
  for (const l of lanternesCiel) {
    if (jour > 0.5 && rang++ % 2) continue;
    const montee = l.y * boucle - s * l.vitesse - scroll * (0.08 + l.z * 0.55);
    const y = ((montee % boucle) + boucle) % boucle - 80;
    const x = l.x * largeur + Math.sin(s * 0.4 + l.p) * l.balance;
    dessinerLanterne(x, y, l.taille, (0.3 + l.z * 0.6) * (0.6 + 0.4 * nuitNiv), 0.85 + 0.15 * Math.sin(s * 6 + l.p * 3));
  }

  for (let k = lacheesCiel.length - 1; k >= 0; k--) {
    const l = lacheesCiel[k];
    const age = s - l.depart;
    l.y -= l.vitesse * dt;
    const grandit = Math.min(1, age / 0.5);
    dessinerLanterne(l.x + Math.sin(age * 0.8 + l.p) * 10, l.y, l.taille * (0.4 + 0.6 * grandit), 0.95, 0.85 + 0.15 * Math.sin(s * 7 + l.p));
    if (l.braises && age > 0.4 && age < 6 && s > l.suivante && !lent) {
      l.suivante = s + 0.12 + Math.random() * 0.14;
      braises.push({ x: l.x + Math.sin(age * 0.8 + l.p) * 10 + (Math.random() - 0.5) * 7, y: l.y + l.taille * 0.55, vx: (Math.random() - 0.5) * 12, vy: 4 + Math.random() * 12, naissance: s, vie: 1 + Math.random() * 0.8 });
    }
    if (l.y < -120) lacheesCiel.splice(k, 1);
  }
  for (let k = braises.length - 1; k >= 0; k--) {
    const b = braises[k];
    const age = s - b.naissance;
    if (age > b.vie) {
      braises.splice(k, 1);
      continue;
    }
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    b.vy += 26 * dt;
    pinceau.globalAlpha = (1 - age / b.vie) * 0.85;
    pinceau.fillStyle = '#ffb35c';
    pinceau.fillRect(b.x, b.y, 1.7, 1.7);
  }
  if (voeux.length) dessinerVoeux(s, dt);
  pinceau.globalAlpha = 1;
}

function dessinerVoeux(s, dt) {
  pinceau.globalCompositeOperation = "lighter";
  const frein = Math.pow(0.3, dt);
  for (let k = voeux.length - 1; k >= 0; k--) {
    const v = voeux[k];
    const age = s - v.naissance;
    if (age > v.vie) {
      voeux.splice(k, 1);
      continue;
    }
    const reste = 1 - age / v.vie;
    if (v.eclat) {
      pinceau.globalAlpha = reste * reste;
      pinceau.drawImage(imageBrillante, v.x - 34, v.y - 34, 68, 68);
      pinceau.drawImage(imageHalo, v.x - 50, v.y - 50, 100, 100);
      continue;
    }
    v.vx *= frein;
    v.vy = v.vy * frein - 22 * dt;
    v.x += v.vx * dt;
    v.y += v.vy * dt;
    pinceau.globalAlpha = Math.min(1, reste * 1.6) * (0.65 + 0.35 * Math.sin(age * 24 + v.taille * 3));
    pinceau.drawImage(lueursFeux[v.couleur], v.x - v.taille / 2, v.y - v.taille / 2, v.taille, v.taille);
  }
  pinceau.globalCompositeOperation = "source-over";
}

function fete() {
  const nb = innerWidth < 500 ? 50 : 80;
  const t = performance.now() / 1000;
  for (let k = 0; k < nb; k++) {
    lacheesCiel.push({
      x: Math.random() * largeur,
      y: hauteur + 30 + Math.random() * hauteur,
      taille: 8 + Math.random() * 22,
      vitesse: 45 + Math.random() * 65,
      depart: t,
      p: Math.random() * 6,
    });
  }
}

function lacherLanterne(x, y) {
  lacheesCiel.push({ x, y, taille: 18 + Math.random() * 8, vitesse: 38 + Math.random() * 14, depart: performance.now() / 1000, p: Math.random() * 6, braises: true, suivante: 0 });
  faireUnVoeu(x, y);
}

function faireUnVoeu(x, y) {
  const s = performance.now() / 1000;
  const k = fenetresVoeu.findIndex((w) => s >= w.debut && s <= w.fin);
  if (k < 0) return;
  fenetresVoeu.splice(k, 1);
  const nb = document.documentElement.classList.contains('sobre') ? 14 : 28;
  for (let k = 0; k < nb; k++) {
    const angle = Math.random() * Math.PI * 2;
    const vitesse = 25 + Math.random() * 120;
    voeux.push({ x, y, vx: Math.cos(angle) * vitesse, vy: Math.sin(angle) * vitesse - 30, naissance: s, vie: 0.9 + Math.random() * 0.9, taille: 7 + Math.random() * 10, couleur: [0, 0, 4, 2][k % 4] });
  }
  voeux.push({ eclat: true, x, y, naissance: s, vie: 0.7 });
  if (typeof jouerEffet === 'function') jouerEffet('voeu', { de: Math.max(-0.7, Math.min(0.7, (x / largeur - 0.5) * 1.3)) });
}

let numeroFeux = 0;
const COULEURS_FEUX = [[255, 214, 140], [255, 150, 120], [255, 196, 214], [160, 232, 224], [255, 246, 226]];
const COULEURS_CSS = COULEURS_FEUX.map(([r, v, b]) => `rgb(${r},${v},${b})`);
const lueursFeux = COULEURS_FEUX.map(([r, v, b]) => dessinUnique(24, 24, (g) => {
  const d = g.createRadialGradient(12, 12, 0, 12, 12, 12);
  d.addColorStop(0, "rgba(255,255,255,1)");
  d.addColorStop(0.3, `rgba(${r},${v},${b},.9)`);
  d.addColorStop(1, `rgba(${r},${v},${b},0)`);
  g.fillStyle = d;
  g.fillRect(0, 0, 24, 24);
}));

function arreterFeux() {
  numeroFeux++;
}

function feuDArtifice(toile) {
  if (!toile || !toile.clientWidth || !toile.clientHeight) return;
  const moi = ++numeroFeux;
  const g = toile.getContext('2d');
  const r = Math.min(1.5, window.devicePixelRatio || 1);
  const L = toile.clientWidth;
  const H = toile.clientHeight;
  toile.width = L * r;
  toile.height = H * r;
  g.setTransform(r, 0, 0, r, 0, 0);
  const moitie = document.documentElement.classList.contains('sobre') ? 0.5 : 1;

  const programme = [
    [0.5, 0.26, 0.15, 0], [1.4, 0.74, 0.12, 1], [2.1, 0.46, 0.17, 2], [3.0, 0.14, 0.3, 1], [3.5, 0.86, 0.26, 0],
    [4.4, 0.5, 0.1, 2], [5.2, 0.18, 0.82, 0], [5.4, 0.82, 0.8, 1], [5.6, 0.5, 0.14, 2], [5.8, 0.28, 0.2, 0], [6.0, 0.72, 0.22, 1],
  ];
  const fusees = programme.map(([depart, x, haut, sorte]) => ({
    depart,
    x: L * Math.min(0.92, Math.max(0.08, x + (Math.random() - 0.5) * 0.1)),
    haut: H * (haut + (Math.random() - 0.5) * 0.06),
    duree: 0.55 + Math.random() * 0.25,
    sorte,
    couleur: Math.floor(Math.random() * COULEURS_FEUX.length),
    parti: false,
  }));
  const etincelles = [];
  const eclairs = [];

  const pan = (f) => Math.max(-0.7, Math.min(0.7, (f.x / L - 0.5) * 1.4));
  function eclater(f, s) {
    if (typeof jouerEffet === 'function') jouerEffet('eclat', { de: pan(f), sorte: f.sorte });
    eclairs.push({ x: f.x, y: f.haut, naissance: s });
    const nb = Math.round([100, 56, 50][f.sorte] * moitie);
    for (let n = 0; n < nb; n++) {
      const angle = f.sorte === 1 ? (n / nb) * Math.PI * 2 : Math.random() * Math.PI * 2;
      const vitesse = f.sorte === 1 ? 250 : f.sorte === 2 ? 60 + Math.random() * 90 : 110 + Math.random() * 200;
      etincelles.push({
        x: f.x,
        y: f.haut,
        vx: Math.cos(angle) * vitesse,
        vy: Math.sin(angle) * vitesse,
        c: f.sorte === 2 ? 0 : Math.random() < 0.25 ? 4 : f.couleur, // les saules sont dorés, les autres ont quelques étincelles blanches
        naissance: s,
        vie: f.sorte === 2 ? 2.6 + Math.random() * 0.8 : 1.3 + Math.random() * 0.9,
        pesanteur: f.sorte === 2 ? 70 : 80,
        frein: f.sorte === 2 ? 0.45 : 0.22,
      });
    }
  }

  let debut = 0;
  let avant = 0;
  function image(t) {
    if (moi !== numeroFeux) {
      g.clearRect(0, 0, L, H);
      return;
    }
    if (!debut) {
      debut = t;
      avant = t;
    }
    const s = (t - debut) / 1000;
    const dt = Math.min(0.05, (t - avant) / 1000);
    avant = t;
    g.clearRect(0, 0, L, H);
    g.globalCompositeOperation = 'lighter';

    for (const f of fusees) {
      const e = (s - f.depart) / f.duree;
      if (e < 0 || f.parti) continue;
      if (!f.lancee) {
        f.lancee = true;
        if (typeof jouerEffet === 'function') jouerEffet('fusee', { de: pan(f), duree: f.duree });
      }
      if (e >= 1) {
        f.parti = true;
        eclater(f, s);
        continue;
      }
      const monte = 1 - (1 - e) * (1 - e);
      const x = f.x + Math.sin(e * 9) * 3;
      const y = H + 10 + (f.haut - H - 10) * monte;
      const queue = g.createLinearGradient(x, y + 36, x, y);
      queue.addColorStop(0, 'rgba(255,200,140,0)');
      queue.addColorStop(1, 'rgba(255,236,200,.8)');
      g.strokeStyle = queue;
      g.lineWidth = 2;
      g.globalAlpha = 1;
      g.beginPath();
      g.moveTo(x, y + 36);
      g.lineTo(x, y);
      g.stroke();
      g.drawImage(imageTete, x - 7, y - 7, 14, 14);
    }

    for (let k = eclairs.length - 1; k >= 0; k--) {
      const age = s - eclairs[k].naissance;
      if (age > 0.4) {
        eclairs.splice(k, 1);
        continue;
      }
      g.globalAlpha = 1 - age / 0.4;
      g.drawImage(imageHalo, eclairs[k].x - 90, eclairs[k].y - 90, 180, 180);
      g.drawImage(imageTete, eclairs[k].x - 24, eclairs[k].y - 24, 48, 48);
    }

    for (let k = etincelles.length - 1; k >= 0; k--) {
      const e = etincelles[k];
      const age = s - e.naissance;
      if (age > e.vie) {
        etincelles.splice(k, 1);
        continue;
      }
      const freine = Math.pow(e.frein, dt);
      e.vx *= freine;
      e.vy = e.vy * freine + e.pesanteur * dt;
      e.x += e.vx * dt;
      e.y += e.vy * dt;
      const reste = 1 - age / e.vie;
      g.globalAlpha = Math.min(1, reste * 1.8);
      g.strokeStyle = COULEURS_CSS[e.c];
      g.lineWidth = 0.7 + 1.5 * reste;
      g.beginPath();
      g.moveTo(e.x - e.vx * 0.05, e.y - e.vy * 0.05);
      g.lineTo(e.x, e.y);
      g.stroke();
      const taille = 6 + 6 * reste;
      g.drawImage(lueursFeux[e.c], e.x - taille / 2, e.y - taille / 2, taille, taille);
    }

    g.globalCompositeOperation = 'source-over';
    g.globalAlpha = 1;
    if (s > 7 && !etincelles.length && !eclairs.length && fusees.every((f) => f.parti)) {
      g.clearRect(0, 0, L, H);
      return;
    }
    requestAnimationFrame(image);
  }
  requestAnimationFrame(image);
}
function reprendreCiel() {
  document.documentElement.classList.remove('lit');
  if (!cielEnPause) return;
  cielEnPause = false;
  debutMesure = 0;
  avant = performance.now();
  requestAnimationFrame(dessinerCiel);
}


tailleCiel();
remplirCiel();
requestAnimationFrame(dessinerCiel);
window.addEventListener("resize", tailleCiel);


function phaseDeLaLune(date) {
  const rad = Math.PI / 180;
  const jours = date.getTime() / 86400000 - 10957.5;
  const siecles = jours / 36525;
  const ecart = 297.8501921 + 445267.1114034 * siecles;
  const soleil = (357.5291092 + 35999.0502909 * siecles) * rad;
  const lune = (134.9633964 + 477198.8675055 * siecles) * rad;
  const d = ecart * rad;
  const angle = ecart + 6.289 * Math.sin(lune) - 2.1 * Math.sin(soleil) + 1.274 * Math.sin(2 * d - lune) + 0.658 * Math.sin(2 * d) + 0.214 * Math.sin(2 * lune) + 0.11 * Math.sin(d);
  return (((angle / 360) % 1) + 1) % 1;
}

function dessinerLune(phase = 0.5) {
  const cratere = (x, y, r, a) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#d9a766" opacity="${a}"/>`;
  const p = phase < 0.5 ? phase : 1 - phase;
  const eclairee = (1 - Math.cos(p * 2 * Math.PI)) / 2;
  const pleine = eclairee > 0.985;
  const rx = Math.max(0.01, 56 * Math.abs(Math.cos(p * 2 * Math.PI)));
  const croissant = p < 0.25;
  const croit = phase < 0.5;
  const forme = `M60 4A56 56 0 0 ${croit ? 1 : 0} 60 116A${r1(rx)} 56 0 0 ${(croit ? croissant : !croissant) ? 0 : 1} 60 4Z`;
  const craters = `<ellipse cx="40" cy="42" rx="19" ry="13" fill="#d9a766" opacity=".26" transform="rotate(-24 40 42)"/>
    <ellipse cx="75" cy="78" rx="22" ry="12" fill="#d9a766" opacity=".22" transform="rotate(18 75 78)"/>
    <ellipse cx="70" cy="34" rx="10" ry="7" fill="#d9a766" opacity=".2"/>
    ${cratere(46, 76, 5.5, 0.32)}${cratere(82, 48, 4, 0.34)}${cratere(28, 68, 3, 0.3)}${cratere(92, 66, 7, 0.22)}${cratere(58, 20, 3.5, 0.3)}${cratere(66, 95, 3, 0.28)}${cratere(36, 30, 2.4, 0.3)}`;
  const disque = `<circle cx="60" cy="60" r="56" fill="url(#${croissant ? "luneCroissant" : "luneDisque"})"/>${craters}${croissant ? "" : `<circle cx="60" cy="60" r="56" fill="url(#luneBord)"/>`}`;
  const sens = croit ? 1 : 0;
  return `<span class="halo-lune"></span><svg viewBox="0 0 120 120" width="120" height="120" style="overflow:visible">
    <defs>
      <radialGradient id="luneDisque" cx=".36" cy=".32" r=".9"><stop offset="0" stop-color="#fffaea"/><stop offset=".5" stop-color="#ffeabc"/><stop offset="1" stop-color="#f0bd78"/></radialGradient>
      <radialGradient id="luneBord" cx=".5" cy=".5" r=".5"><stop offset=".86" stop-color="#c98a45" stop-opacity="0"/><stop offset="1" stop-color="#c98a45" stop-opacity=".38"/></radialGradient>
      <linearGradient id="luneCroissant" gradientUnits="userSpaceOnUse" x1="${sens ? 116 : 4}" y1="0" x2="60" y2="0"><stop offset="0" stop-color="#ffdc9a"/><stop offset=".3" stop-color="#fff6dc"/><stop offset="1" stop-color="#ffeec6"/></linearGradient>
      <radialGradient id="luneCendre"><stop offset="0" stop-color="#7c84cf" stop-opacity=".05"/><stop offset=".7" stop-color="#7c84cf" stop-opacity=".045"/><stop offset="1" stop-color="#7c84cf" stop-opacity=".012"/></radialGradient>
      <filter id="luneFlou" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3.5"/></filter>
      ${pleine ? "" : `<clipPath id="luneMasque"><path d="${forme}"/></clipPath>`}
    </defs>
    ${pleine ? disque : `<circle cx="60" cy="60" r="56" fill="url(#luneCendre)" opacity="${r1(0.6 + 0.4 * (1 - eclairee))}"/>
    <path d="${forme}" fill="#ffd48a" opacity="${croissant ? 0.6 : 0.3}" filter="url(#luneFlou)"/>
    <g clip-path="url(#luneMasque)">${disque}</g>`}
  </svg>`;
}

let phasePosee = -1;
function poserLune(phase) {
  const lune = document.getElementById("lune");
  if (!lune) return;
  const arrondie = Math.round(phase * 120) / 120;
  if (arrondie === phasePosee) return;
  phasePosee = arrondie;
  lune.innerHTML = dessinerLune(arrondie);
  const eclairee = (1 - Math.cos(arrondie * 2 * Math.PI)) / 2;
  document.documentElement.style.setProperty("--lum", r1(0.42 + 0.58 * eclairee));
}

function nuage(w, h, graine) {
  const rnd = aleatoire(graine);
  const id = "nu" + graine;
  const nb = 5;
  let taches = "";
  for (let k = 0; k < nb; k++) {
    const milieu = 1 - Math.abs(k / (nb - 1) - 0.5) * 1.5;
    const cx = w * (0.16 + 0.68 * (k / (nb - 1))) + (rnd() - 0.5) * w * 0.06;
    const cy = h * (0.5 + (rnd() - 0.5) * 0.24);
    const rx = w * (0.17 + rnd() * 0.1);
    const ry = h * 0.5 * milieu * (0.7 + rnd() * 0.3);
    taches += `<ellipse cx="${r1(cx)}" cy="${r1(cy)}" rx="${r1(rx)}" ry="${r1(ry)}" fill="url(#${id})"/>`;
  }
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><defs><radialGradient id="${id}"><stop offset="0" stop-color="#2b2561" stop-opacity=".5"/><stop offset=".55" stop-color="#2b2561" stop-opacity=".24"/><stop offset="1" stop-color="#2b2561" stop-opacity="0"/></radialGradient></defs>${taches}</svg>`;
}
function monterHaut() {
  const lune = document.getElementById('lune');
  if (!lune) return;
  poserLune(phaseDeLaLune(new Date()));
  document.getElementById('soleilHaut').innerHTML = dessinerSoleil();
  const nuages = document.getElementById('nuages');
  nuages.innerHTML =
    `<span class="nuage" style="--top:54%;--d:64s;--t:-20s">${nuage(200, 34, 4)}</span>` +
    `<span class="nuage" style="--top:62%;--d:88s;--t:-58s">${nuage(260, 40, 11)}</span>` +
    `<span class="nuage" style="--top:46%;--d:110s;--t:-95s">${nuage(160, 26, 7)}</span>`;
}


function couche(classe, h, contenu, defs = '', larg = LARGEUR) {
  return `<div class="p ${classe}"><svg viewBox="0 0 ${larg} ${h}" width="${larg}" height="${h}"><defs>${defs}</defs>${contenu}</svg></div>`;
}

function calque(classe, html) {
  return `<div class="p ${classe}"><div class="in">${html}</div></div>`;
}

const lacs = [];
function paysageHaut(conteneur, graine, miroir, aube = false) {
  lacs.push(conteneur);
  const L = LARGEUR;
  const H = 270;
  const x0 = L / 2;
  const rnd = aleatoire(graine);
  const sens = miroir ? -1 : 1;
  const px = (dx) => x0 + dx * sens;
  const id = (nom) => nom + graine;

  const m1 = montagnes(rnd, L, 96, 64, 5);
  const m2 = montagnes(rnd, L, 118, 46, 5);
  const m3 = montagnes(rnd, L, 134, 28, 5);
  const defsLoin = degrade(id("gm1"), "m1h", "m1b") + degrade(id("gm2"), "m2h", "m2b") + degrade(id("gm3"), "m3h", "m3b")
    + `<radialGradient id="${id("lueur")}"><stop offset="0" stop-color="#ffc888" stop-opacity=".14"/><stop offset="1" stop-color="#ffc888" stop-opacity="0"/></radialGradient>`;
  let xs = px(70);
  let astre = "";
  if (aube) {
    const horizon = (x) => Math.min(hauteurCrete(m1, x), hauteurCrete(m2, x), hauteurCrete(m3, x));
    xs = px(-40 * sens + 30);
    for (let dx = -120; dx <= 40; dx += 4) if (horizon(px(dx)) > horizon(xs)) xs = px(dx);
    const ys = horizon(xs) - 2;
    astre = couche("soleil", H, `<circle cx="${r1(xs)}" cy="${r1(ys)}" r="130" fill="url(#${id("sol")})"/><circle cx="${r1(xs)}" cy="${r1(ys)}" r="19" fill="#fff4cc"/>`,
      `<radialGradient id="${id("sol")}"><stop offset="0" stop-color="#fff6cf"/><stop offset=".18" stop-color="#ffd58a" stop-opacity=".95"/><stop offset=".45" stop-color="#ff9f6a" stop-opacity=".5"/><stop offset="1" stop-color="#ff7a7a" stop-opacity="0"/></radialGradient>`);
  }
  let sommet = m1[0];
  m1.forEach((q) => { if (Math.abs(q[0] - px(40)) < 70 && q[1] < sommet[1] + (Math.abs(sommet[0] - px(40)) < 70 ? 0 : 999)) sommet = q; });
  const petit = pagode(sommet[0], sommet[1] + 2, 12, 3, 6);
  let marches = "";
  const sensEscalier = sommet[0] > px(40) ? -1 : 1;
  m1.filter((q) => (q[0] - sommet[0]) * sensEscalier > 2 && (q[0] - sommet[0]) * sensEscalier < 46).forEach((q, k) => {
    marches += `<circle class="fen" cx="${r1(q[0])}" cy="${r1(q[1] + 3.5)}" r="0.9" style="animation-delay:${r1(-k * 0.35)}s"/>`;
  });
  let villages = "";
  for (let k = 0; k < 18; k++) {
    const x = px((rnd() - 0.5) * 400);
    villages += `<rect x="${r1(x)}" y="${r1(hauteurCrete(m3, x) + 4 + rnd() * 8)}" width="1.4" height="1.4" fill="#ffc77a" opacity="${r1(0.35 + rnd() * 0.5)}"/>`;
  }
  const bord = (pts) => `<path d="${pts.map((q, k) => (k ? "L" : "M") + r1(q[0]) + " " + r1(q[1])).join("")}" fill="none" ${trait("liseré")} stroke-opacity=".25" stroke-width="1"/>`;
  const loin = couche("loin", H,
    `${lum(`<circle cx="${r1(px(70))}" cy="130" r="120" fill="url(#${id("lueur")})"/>`)}
     <path d="${remplieDroit(m1, H)}" fill="url(#${id("gm1")})"/>${bord(m1)}
     <path d="${petit.forme}" ${teinte("petit")}/>${lum(`<g fill="#ffb35c">${petit.fenetres}${marches}</g>`)}
     <path d="${remplieDroit(m2, H)}" fill="url(#${id("gm2")})"/>
     <path d="${remplieDroit(m3, H)}" fill="url(#${id("gm3")})"/>${lum(villages)}`, defsLoin);

  const rive = crete(rnd, L, 140, 10, 22);
  const grande = pagode(px(-98), 142, 40, 5, 19);
  const arbres = [];
  const bordGauche = -Math.min(L / 2 - 30, 760);
  for (let dx = bordGauche; dx < -bordGauche; dx += 46) {
    const x = dx + rnd() * 20;
    if (Math.abs(x + 98) < 34 || Math.abs(x - 76) < 34 || Math.abs(x - 124) < 18) continue;
    arbres.push(bosquet(px(x), hauteurCrete(rive, px(x)) + 4, 30 + rnd() * 24, 22 + rnd() * 16, rnd));
  }
  const palmes = [palmier(px(-158), 146, 64, -8 * sens, rnd, 0.9), palmier(px(-142), 148, 48, 7 * sens, rnd, 0.8), palmier(px(172), 146, 68, 9 * sens, rnd, 0.95), palmier(px(154), 148, 50, -6 * sens, rnd, 0.8)];
  const verdure = `${remplie(rive, 154)}${arbres.join("")}${palmes.join("")}`;
  const batiments = `${grande.forme}${temple(px(76), 142, 56, 50)}${stupa(px(124), 144, 20, 54)}`;
  let lumieres = grande.fenetres;
  lumieres += `<rect class="fen" x="${r1(px(76) - 6)}" y="${r1(142 - 12)}" width="3.6" height="7" rx="1"/><rect class="fen" x="${r1(px(76) + 3)}" y="${r1(142 - 12)}" width="3.6" height="7" rx="1"/>`;
  const defsMilieu = degrade(id("gv"), "vertH", "vertB") + degrade(id("gb"), "batH", "batB")
    + `<radialGradient id="${id("fh")}"><stop offset="0" stop-color="#ffb35c" stop-opacity=".55"/><stop offset="1" stop-color="#ffb35c" stop-opacity="0"/></radialGradient>`;
  const halos = lum(`<circle cx="${r1(px(-98))}" cy="118" r="30" fill="url(#${id("fh")})" opacity=".5"/><circle cx="${r1(px(76))}" cy="132" r="22" fill="url(#${id("fh")})" opacity=".45"/>`);
  const milieu = couche("milieu", H, `${halos}<path d="${verdure}" fill="url(#${id("gv")})"/><path d="${batiments}" fill="url(#${id("gb")})"/><g ${teinte("fen")}>${lumieres}</g>`, defsMilieu);

  const defsEau = `<linearGradient id="${id("ge")}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" ${arret("eauH")}/><stop offset=".25" ${arret("eauM")}/><stop offset=".75" ${arret("eauB")}/><stop offset="1" ${arret("eauB")} stop-opacity="0"/></linearGradient>
    <linearGradient id="${id("gr")}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" ${arret("refl")} stop-opacity="0"/><stop offset="1" ${arret("refl")} stop-opacity=".4"/></linearGradient>`;
  let rides = "";
  for (let k = 0; k < 26; k++) {
    const y = 158 + k * 4.2 + rnd() * 2;
    const w = 20 + rnd() * 70;
    rides += `<rect x="${r1(rnd() * L)}" y="${r1(y)}" width="${r1(w)}" height="0.9" rx=".45" fill="#fff" opacity="${r1(0.04 + (k / 26) * 0.06)}"/>`;
  }
  const retourne = (contenu, opacite) => `<g transform="translate(0 296) scale(1 -1)" opacity="${opacite}">${contenu}</g>`;
  const eau = couche("eau", H,
    `<rect x="0" y="148" width="${L}" height="${H - 148}" fill="url(#${id("ge")})"/>${retourne(`<path d="${remplieDroit(m2, 150)}" fill="url(#${id("gr")})"/><path d="${remplieDroit(m3, 150)}" fill="url(#${id("gr")})"/>`, 0.8)}${retourne(`<path d="${grande.forme}" ${teinte("reflPag")}/>`, 0.2)}${rides}`, defsEau);

  const devant = couche("devant", H,
    `<path d="${roseaux(px(-176), 276, 16, 78, rnd)}${roseaux(px(-146), 276, 10, 52, rnd)}${roseaux(px(172), 276, 14, 70, rnd)}${roseaux(px(144), 276, 9, 46, rnd)}" ${teinte("avant")}/><path d="M${r1(px(-220))} 276Q${r1(px(-190))} 252 ${r1(px(-150))} 262T${r1(px(-70))} 276Z M${r1(px(80))} 276Q${r1(px(120))} 258 ${r1(px(170))} 264T${r1(px(240))} 276Z" ${teinte("avant")}/>`);

  conteneur.style.setProperty("--lg", L + "px");

  const xm = aube ? xs : px(70);
  let traits = "";
  for (let k = 0; k < 11; k++) {
    const w = 78 * (1 - k / 14) * (0.65 + rnd() * 0.5);
    traits += `<i style="left:${r1(xm - w / 2 + (rnd() - 0.5) * 8)}px;top:${r1(156 + k * 7.6)}px;width:${r1(w)}px;--o:${r1(0.62 - k * 0.044)};--t:${r1(-rnd() * 4)}s"></i>`;
  }

  let lucioles = "";
  for (let k = 0; k < 9; k++) {
    lucioles += `<i class="luciole" style="left:${r1(x0 + (rnd() - 0.5) * 360)}px;top:${r1(130 + rnd() * 120)}px;--dx:${r1((rnd() - 0.5) * 50)}px;--dy:${r1((rnd() - 0.5) * 36)}px;--d:${r1(6 + rnd() * 6)}s;--t:${r1(-rnd() * 10)}s"></i>`;
  }
  const hasardJour = aleatoire(graine + 900);

  let offrandes = "";
  const posOff = aube
    ? [[-130, 186], [-70, 208], [-10, 232], [52, 198], [110, 226], [168, 190], [-190, 224], [20, 250], [-100, 252]]
    : [[-110, 188], [-40, 214], [96, 230], [150, 196], [-170, 232]];
  posOff.forEach(([dx, y]) => {
    offrandes += `<span class="flotte" style="left:${r1(px(dx) - 12)}px;top:${y}px;--d:${r1(5 + rnd() * 3)}s;--t:${r1(-rnd() * 6)}s;--v:${r1(70 + rnd() * 40)}s">${offrande()}</span>`;
  });

  // un poisson qui fait un rond à la surface, de temps en temps (un autre hasard, pour ne pas bouger le reste du décor)
  const hasard = aleatoire(graine + 500);
  let poissons = "";
  [[-64, 192], [108, 216], [-148, 240], [24, 246]].forEach(([dx, y]) => {
    poissons += `<i class="poisson" style="left:${r1(px(dx))}px;top:${y}px;--d:${r1(11 + hasard() * 7)}s;--t:${r1(-hasard() * 14)}s"></i>`;
  });

  let nenuphars = "";
  [[-196, 247, 1], [-158, 256, 0.78], [170, 245, 1.05], [203, 255, 0.8], [-24, 262, 0.7]].forEach(([dx, y, e], k) => {
    nenuphars += `<span class="nenu" style="left:${r1(px(dx) - 18 * e)}px;top:${y}px;--t:${r1(-hasardJour() * 6)}s">${lotus(e)}</span>`;
  });

  let eclats = "";
  for (let k = 0; k < 15; k++) {
    const w = (30 - k * 1.2) * (0.6 + hasardJour() * 0.8);
    eclats += `<i style="left:${r1(px(70) - w / 2 + (hasardJour() - 0.5) * (14 + k * 4))}px;top:${r1(155 + k * 6.4 + hasardJour() * 3)}px;width:${r1(w)}px;--o:${r1(0.95 - k * 0.045)};--t:${r1(-hasardJour() * 3)}s"></i>`;
  }

  const cerf = aube ? "" : calque("cerf", cerfVolant(px(-42), 30, "#ff7b5a", "#ffd34e", [px(-24), 136]));

  let oiseaux = "";
  if (aube) {
    const course = Math.max(window.innerWidth, 360) + 560;
    oiseaux = calque("oiseaux",
      `<span class="volee" style="left:${r1(x0 - course / 2)}px;top:72px;--course:${course}px;--monte:-22px;--d:41s;--t:-6s"><span class="cap">${volee(5, 9)}</span></span>` +
      `<span class="volee" style="left:${r1(x0 + course / 2)}px;top:40px;--course:${-course}px;--monte:-14px;--d:53s;--t:-31s"><span class="cap">${volee(3, 21)}</span></span>`);
  }

  conteneur.innerHTML = `
    ${astre}
    ${loin}
    ${cerf}
    ${milieu}
    <div class="brume b1"></div>
    ${eau}
    ${calque("reflet", `<div class="reflet-lune">${traits}</div><div class="reflet-soleil">${eclats}</div>`)}
    ${calque("flottants", `<span class="bateau" style="top:176px;left:${r1(x0 - 20)}px">${barque()}</span>${nenuphars}${offrandes}${poissons}`)}
    <div class="rides"></div>
    <div class="brume b2"></div>
    ${devant}
    ${calque("lucioles", lucioles)}
    ${calque("papillons", papillons(x0, 6, hasardJour))}
    ${oiseaux}
    ${aube ? calque("retour", `<span class="vole" style="left:${r1(x0 - 300)}px;top:44px;--course:${Math.max(window.innerWidth, 360) + 520}px"><i class="vole-corps">${avionDeLigne()}</i></span>`) : ""}`;
}

function volee(nb, graine) {
  const rnd = aleatoire(graine);
  let s = '';
  for (let k = 0; k < nb; k++) {
    const rang = Math.ceil(k / 2);
    const cote = k % 2 ? 1 : -1;
    const x = -rang * (13 + rnd() * 4);
    const y = cote * rang * (6 + rnd() * 3) + (rnd() - 0.5) * 4;
    s += `<i class="oiseau" style="left:${r1(x)}px;top:${r1(y)}px;--e:${r1(0.8 + rnd() * 0.45)};--b:${r1(0.5 + rnd() * 0.25)}s;--t:${r1(-rnd())}s"><svg viewBox="0 0 20 11" width="20" height="11"><path class="aile g" d="M10 7Q6.8 2.4 0.6 4Q5 5.4 10 8.4Z"/><path class="aile d" d="M10 7Q13.2 2.4 19.4 4Q15 5.4 10 8.4Z"/></svg></i>`;
  }
  return s;
}

function toucherLac(x, y) {
  for (const lac of lacs) {
    if (!lac.isConnected) continue;
    const r = lac.getBoundingClientRect();
    if (x < r.left || x > r.right || y < r.top || y > r.bottom) continue;
    const rive = lac.querySelector('.p.milieu > *');
    const decale = rive ? rive.getBoundingClientRect().top - r.top : 0;
    const ly = y - r.top;
    if (ly < 162 + decale || ly > 258) continue;
    poserSurLeLac(lac, x - r.left, ly);
    return true;
  }
  return false;
}

function poserSurLeLac(lac, x, y) {
  const rides = lac.querySelector('.rides');
  if (!rides) return;
  for (let n = 0; n < 3; n++) {
    const ride = document.createElement('i');
    ride.className = 'ride';
    ride.style.cssText = `left:${r1(x)}px;top:${r1(y)}px;animation-delay:${n * 0.27}s`;
    rides.appendChild(ride);
    setTimeout(() => ride.remove(), 2700 + n * 270);
  }
  const posees = rides.getElementsByClassName('posee');
  while (posees.length >= 6) posees[0].remove();
  const o = document.createElement('span');
  o.className = 'posee';
  const vers = x > lac.clientWidth / 2 ? -1 : 1;
  o.style.cssText = `left:${r1(x)}px;top:${r1(y)}px;--dx:${r1(vers * (50 + Math.random() * 70))}px;--dy:${r1((Math.random() - 0.5) * 12)}px`;
  o.innerHTML = offrande();
  rides.appendChild(o);
  setTimeout(() => o.remove(), 46000);
  if (typeof jouerEffet === 'function') jouerEffet('goutte', { de: Math.max(-0.7, Math.min(0.7, (x / lac.clientWidth - 0.5) * 1.3)) });
}


// les petites scènes entre les enveloppes
// chacune annonce la lettre qui vient juste en dessous (son timbre : tuk-tuk, pagode, bol, retour)
const LB = LARGEUR + 240;
const HB = 200;

const fil = (x1, y1, x2, y2, creux) => `M${r1(x1)} ${r1(y1)}Q${r1((x1 + x2) / 2)} ${r1(Math.max(y1, y2) + creux)} ${r1(x2)} ${r1(y2)}`;
const surFil = (x1, y1, x2, y2, creux, t) => {
  const cx = (x1 + x2) / 2;
  const cy = Math.max(y1, y2) + creux;
  return [(1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * cx + t * t * x2, (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * cy + t * t * y2];
};

function lampadaire(x, sol, haut, id) {
  const tete = [x + 17, sol - haut - 2];
  return {
    fer: `<path d="M${r1(x)} ${sol}V${r1(sol - haut)}Q${r1(x + 1)} ${r1(sol - haut - 9)} ${r1(x + 17)} ${r1(sol - haut - 5)}" fill="none" ${trait('fer')} stroke-width="2.4" stroke-linecap="round"/><ellipse cx="${tete[0]}" cy="${r1(tete[1] + 1)}" rx="5.4" ry="2.4" ${teinte('fer')}/>`,
    lueur: lum(`<path d="M${r1(tete[0] - 3)} ${r1(tete[1] + 2)}L${r1(tete[0] + 3)} ${r1(tete[1] + 2)}L${r1(tete[0] + 36)} ${sol}L${r1(tete[0] - 36)} ${sol}Z" fill="url(#cone${id})"/><circle cx="${tete[0]}" cy="${r1(tete[1] + 3)}" r="24" fill="url(#halo${id})"/><ellipse class="fen" cx="${tete[0]}" cy="${r1(tete[1] + 2)}" rx="3.6" ry="1.6" fill="#ffe6b0"/>`),
  };
}

const defsLampe = (id) => `<linearGradient id="cone${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc77a" stop-opacity=".34"/><stop offset="1" stop-color="#ffc77a" stop-opacity=".02"/></linearGradient>
  <radialGradient id="halo${id}"><stop offset="0" stop-color="#ffc77a" stop-opacity=".6"/><stop offset="1" stop-color="#ffc77a" stop-opacity="0"/></radialGradient>`;

function immeubles(rnd, x1, x2, sol, hmin, hmax, nom) {
  let forme = "";
  let fenetres = "";
  for (let x = x1; x < x2; ) {
    const w = 9 + rnd() * 16;
    const h = hmin + rnd() * (hmax - hmin);
    forme += bloc(x, sol - h, w, h + 4);
    if (rnd() < 0.25) forme += bloc(x + w * 0.3, sol - h - 5, w * 0.4, 5);
    for (let yy = sol - h + 4; yy < sol - 3; yy += 6) {
      for (let xx = x + 2; xx < x + w - 3; xx += 4.5) {
        if (rnd() < 0.3) fenetres += `<rect x="${r1(xx)}" y="${r1(yy)}" width="2.2" height="3" opacity="${r1(0.5 + rnd() * 0.5)}"/>`;
      }
    }
    x += w + 1 + rnd() * 3;
  }
  return `<path d="${forme}" ${teinte(nom)}/><g ${teinte("vitreO")}>${fenetres}</g>`;
}

// une feuille de bambou (toujours dessinée dans le même sens)
function feuille(bx, y, cote, L) {
  const haut = `Q${r1(bx + cote * L * 0.5)} ${r1(y - 9)} ${r1(bx + cote * L)} ${r1(y + 6)}`;
  const bas = `Q${r1(bx + cote * L * 0.45)} ${r1(y - 3)}`;
  if (cote > 0) return `M${r1(bx)} ${r1(y)}${haut}${bas} ${r1(bx)} ${r1(y + 2.5)}Z`;
  return `M${r1(bx)} ${r1(y + 2.5)}${bas} ${r1(bx - L)} ${r1(y + 6)}Q${r1(bx - L * 0.5)} ${r1(y - 9)} ${r1(bx)} ${r1(y)}Z`;
}

function touffeBambou(x, sol, haut, rnd) {
  let forme = '';
  let noeuds = '';
  [[-13, 0.82], [0, 1], [12, 0.9]].forEach(([dx, f], n) => {
    const h = haut * f;
    const bx = 32 + dx;
    forme += bloc(bx - 1.8, haut - h, 3.6, h);
    for (let y = haut - 14; y > haut - h + 12; y -= 17 + rnd() * 8) noeuds += `<rect x="${r1(bx - 2.5)}" y="${r1(y)}" width="5" height="1.8" rx=".8"/>`;
    for (let k = 0; k < 6; k++) forme += feuille(bx, haut - h + 6 + k * 10 + rnd() * 6, (k + n) % 2 ? 1 : -1, 18 + rnd() * 14);
  });
  return `<span class="bambou" style="left:${r1(x - 32)}px;top:${r1(sol - haut)}px;--t:${r1(-rnd() * 6)}s"><svg viewBox="0 0 64 ${r1(haut)}" width="64" height="${r1(haut)}"><path d="${forme}" ${teinte('bambou')}/><g ${teinte('noeud')}>${noeuds}</g></svg></span>`;
}

function lampion(x, y, couleur, retard, echelle = 1) {
  const w = 16 * echelle;
  const h = 26 * echelle;
  return `<span class="lampion" style="left:${r1(x - w / 2)}px;top:${r1(y)}px;--c:${couleur};--t:${r1(retard)}s"><svg viewBox="0 0 16 26" width="${r1(w)}" height="${r1(h)}"><rect x="5.5" y="0" width="5" height="2.4" rx=".8" fill="#2a1a12"/><path d="M8 2.4C2.5 3.5 1 9 1 12.5S2.6 21 8 22.2C13.4 21 15 16 15 12.5S13.5 3.5 8 2.4Z" style="fill:var(--c)"/><ellipse cx="8" cy="12.4" rx="4.2" ry="6.4" fill="#fff0b8" opacity=".55"/><path d="M8 2.6Q4.2 12.4 8 22M8 2.6Q11.8 12.4 8 22" fill="none" stroke="#000" stroke-opacity=".2" stroke-width=".8"/><rect x="5.2" y="21.4" width="5.6" height="2" rx=".8" fill="#2a1a12"/><path d="M8 23.4v2.6" stroke="#e8b04c" stroke-width="1"/></svg></span>`;
}

function guirlande(x1, y1, x2, y2, creux, nb, rnd, couleurs, echelle) {
  let lampions = '';
  for (let k = 1; k <= nb; k++) {
    const t = k / (nb + 1) + (rnd() - 0.5) * 0.02;
    const [x, y] = surFil(x1, y1, x2, y2, creux, t);
    lampions += lampion(x, y - 1, couleurs[k % couleurs.length], -rnd() * 5, echelle * (0.85 + rnd() * 0.3));
  }
  return { trait: `<path d="${fil(x1, y1, x2, y2, creux)}" fill="none" ${trait('fer')} stroke-width="1"/>`, lampions };
}

function hirondelle(x, y, retard, miroir) {
  return `<span class="posee-fil" style="left:${r1(x - 6)}px;top:${r1(y - 8)}px;--t:${r1(retard)}s${miroir ? ';transform:scaleX(-1)' : ''}"><svg viewBox="0 0 12 9" width="12" height="9"><path d="M1 8.6L5 5.6Q5.6 2.4 8.4 2.2Q10.4 2.1 10.6 3.8L12 4.6L10.5 5.2Q9.2 7.4 5.6 8Q3.2 8.4 1 8.6Z" fill="#26304e"/><path d="M5.4 7.2Q8.4 6.8 10 5" fill="none" stroke="#d9e2f2" stroke-opacity=".7" stroke-width=".8"/><rect x="6.2" y="8.2" width=".7" height=".8" fill="#26304e"/><rect x="7.8" y="8.1" width=".7" height=".9" fill="#26304e"/></svg></span>`;
}

const fumee = (x, y, decalage) => `<span class="vapeur fumee" style="left:${r1(x)}px;top:${r1(y)}px;--t:${r1(decalage)}s"><svg viewBox="0 0 16 34" width="16" height="34"><path d="M8 33Q2 26 8 19T8 5" fill="none" stroke="#eef2f8" stroke-opacity=".8" stroke-width="2" stroke-linecap="round"/></svg></span>`;

const lanterneVolante = `<svg viewBox="0 0 14 18" width="14" height="18"><path d="M2 3Q7 0 12 3L13 14Q7 17 1 14Z" style="fill:var(--c)"/><path d="M3 4Q7 2 11 4L11.6 12Q7 14.6 2.4 12Z" fill="#ffe2a0" opacity=".8"/></svg>`;
function montantes(x0, bas, nb, rnd) {
  let s = "";
  for (let k = 0; k < nb; k++) {
    s += `<span class="monte" style="left:${r1(x0 + (rnd() - 0.5) * 560)}px;top:${r1(bas - rnd() * 30)}px;--c:${rnd() < 0.5 ? "#ff9a4a" : "#ffb35c"};--dx:${r1((rnd() - 0.5) * 70)}px;--d:${r1(15 + rnd() * 10)}s;--t:${r1(-rnd() * 24)}s">${lanterneVolante}</span>`;
  }
  return s;
}

function luciolesBande(x0, nb, rnd, haut = 60, bas = 150) {
  let s = "";
  for (let k = 0; k < nb; k++) s += `<i class="luciole" style="left:${r1(x0 + (rnd() - 0.5) * 540)}px;top:${r1(haut + rnd() * (bas - haut))}px;--dx:${r1((rnd() - 0.5) * 40)}px;--dy:${r1((rnd() - 0.5) * 30)}px;--d:${r1(6 + rnd() * 6)}s;--t:${r1(-rnd() * 10)}s"></i>`;
  return s;
}

const vapeur = (x, y, decalage, grande) => `<span class="vapeur${grande ? ' grosse' : ''}" style="left:${r1(x)}px;top:${r1(y)}px;--t:${r1(decalage)}s"><svg viewBox="0 0 16 34" width="16" height="34"><path d="M8 33Q2 26 8 19T8 5" fill="none" stroke="#ffe3b8" stroke-opacity=".7" stroke-width="2.2" stroke-linecap="round"/></svg></span>`;

const cible = (act, x, y, w, h) => `<span class="cible" data-act="${act}" style="left:${r1(x)}px;top:${r1(y)}px;width:${r1(w)}px;height:${r1(h)}px"></span>`;
const etincelle = (act, x, y, retard = 0) => `<i class="etincelle" data-act="${act}" style="left:${r1(x)}px;top:${r1(y)}px;--t:${r1(retard)}s"><svg viewBox="0 0 12 12" width="12" height="12"><path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8Z" fill="#fff4cc"/></svg></i>`;

function tuktuk() {
  return `<svg class="tuk" viewBox="0 0 112 66" width="112" height="66">
    <defs>
      <linearGradient id="tkFaisceau" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffe3a8" stop-opacity=".55"/><stop offset="1" stop-color="#ffe3a8" stop-opacity="0"/></linearGradient>
      <radialGradient id="tkFeu"><stop offset="0" stop-color="#ff5a46" stop-opacity=".9"/><stop offset="1" stop-color="#ff5a46" stop-opacity="0"/></radialGradient>
    </defs>
    ${lum(`<path d="M103 39L200 18L200 62Z" fill="url(#tkFaisceau)"/><circle cx="5" cy="42" r="9" fill="url(#tkFeu)"/>`)}
    <rect x="11" y="27" width="64" height="15" fill="#ffd9a0" opacity=".92"/>
    <g fill="#2a2358"><circle cx="33" cy="33" r="3.9"/><path d="M25 42Q25 37 33 37Q41 37 41 42Z"/><circle cx="62" cy="29" r="4.3"/><path d="M54 42Q54 33 62 33Q69 33 71 40V42Z"/></g>
    <path d="M62 36L83 29" stroke="#2a2358" stroke-width="2" stroke-linecap="round"/>
    <path d="M6 28Q42 5 88 22L85 26Q42 14 9 32Z" fill="#1c2756"/>
    <rect x="9" y="29" width="3" height="13" fill="#1c2756"/><rect x="47" y="19" width="3" height="23" fill="#1c2756"/><rect x="77" y="24" width="3" height="18" fill="#1c2756"/>
    <path d="M85 25L90 32" stroke="#1c2756" stroke-width="2"/>
    <path d="M8 41H72L80 34Q84 32 90 32H99Q105 32 105 39V53H8Z" fill="#c8372d"/>
    <path d="M8 41H72L80 34Q84 32 90 32H99Q105 32 105 39" fill="none" stroke="#ffb09a" stroke-opacity=".6" stroke-width="1"/>
    <rect x="8" y="47" width="97" height="2" fill="#7a1d1a"/>
    <path d="M93 38L96 55" stroke="#0e0d24" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="103" cy="39" r="3.6" fill="#fff3c4"/>
    <circle cx="4" cy="43" r="1.8" fill="#ff7a60"/>
    <g class="roue" style="transform-origin:26px 55px"><circle cx="26" cy="55" r="9.6" fill="#0e0d24"/><circle cx="26" cy="55" r="3.4" fill="#f2c14e"/><path d="M26 46V64M17 55H35M19.7 48.7L32.3 61.3M32.3 48.7L19.7 61.3" stroke="#3b3560" stroke-width="1"/></g>
    <g class="roue" style="transform-origin:96px 56px"><circle cx="96" cy="56" r="8.6" fill="#0e0d24"/><circle cx="96" cy="56" r="3" fill="#f2c14e"/><path d="M96 47.4V64.6M87.4 56H104.6M89.9 49.9L102.1 62.1M102.1 49.9L89.9 62.1" stroke="#3b3560" stroke-width="1"/></g>
  </svg>`;
}

function chauveSouris(gauche, haut, course) {
  const aile = 'M15 7Q10 1.5 1 3Q3.6 4.6 3.2 7.6Q5.8 6.4 7 9Q9.6 7 11 9.6Q12.8 7.6 15 8Z';
  return `<span class="chauve" style="left:${r1(gauche)}px;top:${haut}px;--course:${course}px"><span class="voltige"><svg viewBox="0 0 30 14" width="30" height="14">
    <path class="aile-c" d="${aile}"/><g transform="matrix(-1 0 0 1 30 0)"><path class="aile-c" d="${aile}"/></g>
    <ellipse cx="15" cy="8.2" rx="2.2" ry="3.3"/><path d="M13.1 5.9L12.7 3.1L14.7 4.8ZM16.9 5.9L17.3 3.1L15.3 4.8Z"/></svg></span></span>`;
}

const coursePossible = () => Math.max(window.innerWidth, 360) + 560;

function bandeTuktuk(rnd) {
  const L = LB;
  const x0 = L / 2;
  const course = coursePossible();
  const sol = 170;
  const hasardJour = aleatoire(771);
  const collines = crete(rnd, L, 118, 30, 18);
  const defsLoin = degrade("bt1", "colH", "colB")
    + `<radialGradient id="btEclair"><stop offset="0" stop-color="#ece6ff" stop-opacity=".62"/><stop offset=".45" stop-color="#b7a8ff" stop-opacity=".24"/><stop offset="1" stop-color="#9c8aff" stop-opacity="0"/></radialGradient>`;
  const loin = couche("loin", HB,
    `${lum(`<ellipse class="eclair" cx="${r1(x0 + 150)}" cy="104" rx="210" ry="74" fill="url(#btEclair)"/>`)}
     <path d="${remplie(collines, HB)}" fill="url(#bt1)"/>${immeubles(rnd, x0 - 360, x0 + 360, 138, 12, 42, "imLoin")}
     <path d="${stupa(x0 - 130, 138, 20, 54)}" ${teinte("stupaLoin")}/><circle class="feu" cx="${r1(x0 - 130)}" cy="${r1(138 - 55)}" r="1.6" fill="#ff5a46"/>`, defsLoin, L);

  const palmiers = [];
  [-300, -230, -150, -40, 70, 160, 250, 330].forEach((dx) => palmiers.push(palmier(x0 + dx + (rnd() - 0.5) * 20, sol - 4, 70 + rnd() * 38, (rnd() - 0.5) * 24, rnd, 0.9)));
  const posLampes = [-210, 20, 235];
  const lampes = posLampes.map((dx, k) => lampadaire(x0 + dx, sol, 64, "t" + k));
  const poteaux = [-300, -90, 120, 330].map((dx) => x0 + dx);
  let fer = "";
  poteaux.forEach((x) => { fer += `${bloc(x - 1.6, 90, 3.2, sol - 90)}M${r1(x - 9)} 96h18v2h-18Z`; });
  let fils = "";
  for (let k = 0; k < poteaux.length - 1; k++) fils += `<path d="${fil(poteaux[k], 97, poteaux[k + 1], 97, 11)}" fill="none" ${trait("fer")} stroke-width=".9"/><path d="${fil(poteaux[k] + 6, 95, poteaux[k + 1] - 6, 95, 8)}" fill="none" ${trait("fer")} stroke-width=".8"/>`;
  let boutiques = "";
  [-110, 100, 290, -290].forEach((dx) => {
    const bx = x0 + dx;
    boutiques += `<path d="${bloc(bx, sol - 26, 34, 26)}${bloc(bx - 3, sol - 30, 40, 5)}" ${teinte("mur")}/><rect class="fen" x="${r1(bx + 5)}" y="${sol - 21}" width="14" height="10" ${teinte("vitreO")}/><rect class="fen" x="${r1(bx + 22)}" y="${sol - 21}" width="7" height="14" ${teinte("vitre")}/>`;
  });
  const milieu = couche("milieu", HB,
    `${lampes.map((l) => l.lueur).join("")}<path d="${palmiers.join("")}" ${teinte("palmier")}/>${boutiques}<path d="${fer}" ${teinte("fer")}/>${fils}${lampes.map((l) => l.fer).join("")}`,
    posLampes.map((_, k) => defsLampe("t" + k)).join(""), L);

  let hirondelles = "";
  [[0, 0.3, 0], [0, 0.36, 1], [1, 0.55, 0], [2, 0.7, 1], [2, 0.76, 0]].forEach(([s, t, miroir], k) => {
    const [x, y] = surFil(poteaux[s], 97, poteaux[s + 1], 97, 11, t);
    hirondelles += hirondelle(x, y, -hasardJour() * 15 - k, miroir);
  });

  let tirets = "";
  for (let x = 0; x < L; x += 46) tirets += bloc(x, 184.5, 22, 2);
  let reflets = "";
  posLampes.forEach((dx) => { reflets += `<rect x="${r1(x0 + dx + 14)}" y="${sol + 4}" width="7" height="22" rx="3.5" fill="#ffc77a" opacity=".22"/>`; });
  const route = calque("route",
    `<svg viewBox="0 0 ${L} ${HB}" width="${L}" height="${HB}"><defs>${degrade("bt2", "routeH", "routeB")}</defs>
    <rect y="${sol}" width="${L}" height="${HB - sol}" fill="url(#bt2)"/><rect y="${sol}" width="${L}" height="2.5" ${teinte("trottoir")}/>
    <path d="${tirets}" fill="#f6efe1" opacity=".5"/>${lum(reflets)}</svg><span class="voiture" style="left:${r1(x0 - course / 2)}px;top:${sol - 46}px;--course:${course}px">${tuktuk()}${cible("klaxon", -6, -12, 124, 86)}${etincelle("klaxon", 52, -9)}</span>`);

  const feuilles = [palmier(x0 - 250, HB + 20, 34, 20, rnd, 1.4), palmier(x0 + 270, HB + 20, 30, -18, rnd, 1.4)];
  const devant = couche("devant", HB, `<path d="${feuilles.join("")}" ${teinte("feuillage")}/>`, "", L);
  return {
    html: loin + milieu + calque("hirondelles", hirondelles) + route + calque("chauves", chauveSouris(x0 - course / 2, 96, course)) + devant + calque("lucioles", luciolesBande(x0, 5, rnd, 70, 150)) + calque("papillons", papillons(x0, 4, hasardJour, 90, 150, 480)),
    regles: [["loin", 30, 0], ["milieu", 80, 0], ["hirondelles", 80, 0], ["route", 120, 0], ["chauves", 100, 0], ["devant", 180, 0], ["lucioles", 110, 0], ["papillons", 110, 0]],
  };
}

const clochette = (k) => `<svg viewBox="0 0 8 12" width="${r1(8 * k)}" height="${r1(12 * k)}"><path d="M4 0V2.4" stroke="#0d0b22" stroke-width=".9"/><path d="M1.2 10.4Q1 4.6 4 3.2Q7 4.6 6.8 10.4Z" fill="#e2b25a"/><path d="M2.4 9.4Q2.3 5.8 3.6 4.4" stroke="#fff0c0" stroke-width=".7" fill="none" opacity=".7"/><circle cx="4" cy="11" r="1" fill="#b8832e"/></svg>`;

const bruleEncens = `<svg viewBox="0 0 30 24" width="30" height="24" style="overflow:visible">
  <path d="M11 8L10 .5M15 8V-1M19 8L20 .5" stroke="#a8432c" stroke-width="1.1" stroke-linecap="round"/>
  <circle cx="10" cy=".6" r="1" fill="#ff7a4a"/><circle cx="15" cy="-1" r="1" fill="#ff7a4a"/><circle cx="20" cy=".6" r="1" fill="#ff7a4a"/>
  <path d="M5 9H25Q25 19 15 20Q5 19 5 9Z" fill="#7a5230"/>
  <rect x="3" y="7" width="24" height="3.4" rx="1.7" fill="#a67340"/>
  <path d="M8 12Q15 15.4 22 12" fill="none" stroke="#d7a266" stroke-opacity=".6" stroke-width="1"/>
  <path d="M8 18.4L6.4 23.4M22 18.4L23.6 23.4" stroke="#5c3d22" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M3.4 8.4Q-1 9.6 1.4 14M26.6 8.4Q31 9.6 28.6 14" fill="none" stroke="#7a5230" stroke-width="1.6" stroke-linecap="round"/>
</svg>`;

function bandePagode(rnd) {
  const L = LB;
  const x0 = L / 2;
  const sol = 180;
  const cx = x0 + 34;
  const hasardJour = aleatoire(772);

  const m1 = montagnes(rnd, L, 120, 62, 6);
  const m2 = montagnes(rnd, L, 142, 38, 6);
  const defsLoin = degrade("bp1", "p1h", "p1b") + degrade("bp2", "p2h", "p2b");
  let villages = "";
  for (let k = 0; k < 24; k++) {
    const x = x0 + (rnd() - 0.5) * 600;
    villages += `<rect x="${r1(x)}" y="${r1(hauteurCrete(m2, x) + 5 + rnd() * 12)}" width="1.5" height="1.5" fill="#ffc77a" opacity="${r1(0.3 + rnd() * 0.5)}"/>`;
  }
  const loin = couche("loin", HB,
    `<path d="${remplieDroit(m1, HB)}" fill="url(#bp1)"/><path d="${stupa(x0 - 150, hauteurCrete(m1, x0 - 150) + 3, 14, 36)}" ${teinte("stupaP")}/>
     <path d="${remplieDroit(m2, HB)}" fill="url(#bp2)"/>${lum(villages)}`, defsLoin, L);

  const grande = pagode(cx, sol - 14, 76, 7, 16.5);
  const temples = temple(x0 - 128, sol - 4, 104, 62) + temple(x0 + 214, sol - 4, 80, 48);
  const arbres = [[-262, 34, 30], [-222, 28, 26], [112, 30, 28], [140, 24, 24], [286, 34, 30], [314, 26, 24]].map(([dx, l, h]) => bosquet(x0 + dx, sol - 6, l, h, rnd)).join("");
  const palmes = palmier(x0 - 302, sol - 4, 76, -9, rnd, 1) + palmier(x0 + 340, sol - 4, 72, 8, rnd, 1);
  const socle = bloc(cx - 54, sol - 14, 108, 14) + bloc(cx - 62, sol - 8, 124, 8);
  let mats = "";
  let lampes = "";
  [-90, -64, 64, 90].forEach((dx) => {
    mats += bloc(cx + dx - 0.8, sol - 24, 1.6, 24);
    lampes += `<circle cx="${r1(cx + dx)}" cy="${sol - 26}" r="13" fill="url(#bp4)" opacity=".7"/><circle class="fen" cx="${r1(cx + dx)}" cy="${sol - 26}" r="2.4" fill="#ffe0a0"/>`;
  });
  let fenetresTemples = "";
  [x0 - 128, x0 + 214].forEach((tx, k) => {
    const d = k ? 0.78 : 1;
    fenetresTemples += `<rect class="fen" x="${r1(tx - 16 * d)}" y="${r1(sol - 4 - 16 * d)}" width="${r1(9 * d)}" height="${r1(13 * d)}" rx="1.2"/><rect class="fen" x="${r1(tx + 7 * d)}" y="${r1(sol - 4 - 16 * d)}" width="${r1(9 * d)}" height="${r1(13 * d)}" rx="1.2"/>`;
  });
  const degradeFixe = (id, haut, bas) => `<linearGradient id="${id}" gradientUnits="userSpaceOnUse" x1="0" y1="${sol - 100}" x2="0" y2="${HB}"><stop offset="0" ${arret(haut)}/><stop offset="1" ${arret(bas)}/></linearGradient>`;
  const defsMilieu = degradeFixe("bp3", "pagH", "pagB") + degradeFixe("bp3b", "boisH", "boisB")
    + `<radialGradient id="bp4"><stop offset="0" stop-color="#ffc77a" stop-opacity=".75"/><stop offset="1" stop-color="#ffc77a" stop-opacity="0"/></radialGradient>
    <radialGradient id="bp5"><stop offset="0" stop-color="#ffb35c" stop-opacity=".5"/><stop offset="1" stop-color="#ffb35c" stop-opacity="0"/></radialGradient>`;
  const milieu = couche("milieu", HB,
    `${lum(`<circle cx="${r1(cx)}" cy="${sol - 92}" r="104" fill="url(#bp5)"/>`)}
     <path d="${bloc(0, sol - 3, L, HB - sol + 3)}" ${teinte("sol")}/>
     <path d="${arbres}${palmes}" fill="url(#bp3b)"/>
     <path d="${grande.forme}${temples}${socle}" fill="url(#bp3)"/>
     <g ${teinte("fen")}>${grande.fenetres}${fenetresTemples}</g><path d="${mats}" ${teinte("fer")}/>${lum(lampes)}`, defsMilieu, L);

  const gauche = x0 - 250;
  const droite = x0 + 340;
  const g1 = guirlande(gauche, 46, droite, 52, 34, 9, rnd, ["#e8453c", "#ff9a4a", "#f2c14e", "#e8453c"], 1);
  const g2 = guirlande(gauche, 68, droite, 62, 26, 7, rnd, ["#ff9a4a", "#e8453c", "#f2c14e"], 0.85);
  const poteauxGuirlande = [gauche, droite].map((x) => bloc(x - 1.6, 34, 3.2, sol - 34)).join("");
  const cordes = calque("cordes",
    `<svg viewBox="0 0 ${L} ${HB}" width="${L}" height="${HB}"><path d="${poteauxGuirlande}" ${teinte("fer")}/>${g1.trait}${g2.trait}</svg>${g1.lampions}${g2.lampions}`);

  const devant = calque("devant",
    touffeBambou(x0 - 226, HB + 8, 176, rnd) + touffeBambou(x0 - 190, HB + 8, 140, rnd) + touffeBambou(x0 + 214, HB + 8, 160, rnd) + touffeBambou(x0 + 250, HB + 8, 186, rnd));

  let clochettes = "";
  for (let i = 0; i < 5; i++) {
    const k = 1 - i * 0.07;
    const demi = 76 * (1 - i * 0.14) * 0.58 + 7;
    const y = sol - 14 - i * 16.5 - 16.5 * 0.52 - 5;
    [-1, 1].forEach((cote) => {
      clochettes += `<span class="clochette" style="left:${r1(cx + cote * demi - 4 * k)}px;top:${r1(y)}px;--t:${r1(-rnd() * 3)}s;--e:${r1(rnd() * 0.12)}s">${clochette(k)}</span>`;
    });
  }
  const ondes = `<i class="onde" style="left:${r1(cx)}px;top:${sol - 78}px"></i><i class="onde b" style="left:${r1(cx)}px;top:${sol - 78}px"></i>`;
  const cloches = calque("cloches", `${ondes}${clochettes}${cible("cloche", cx - 50, 30, 100, 142)}${etincelle("cloche", cx + 33, 92, 1.2)}`);

  const brule = cx - 30;
  const encens = calque("encens",
    `<span class="brule" style="left:${r1(brule - 15)}px;top:${sol - 12}px">${bruleEncens}</span>${fumee(brule - 8, sol - 52, 0)}${fumee(brule - 1, sol - 56, -2.1)}${fumee(brule + 5, sol - 50, -4.2)}`);
  return {
    html: `${loin}${milieu}${encens}${cloches}${calque("montent", montantes(x0, sol - 30, 4, rnd))}<div class="brume" style="top:132px"></div>${cordes}<div class="brume" style="top:160px;animation-duration:58s;animation-direction:alternate-reverse"></div>${devant}${calque("lucioles", luciolesBande(x0, 5, rnd, 80, 170))}${calque("papillons", papillons(x0, 4, hasardJour, 100, 170, 460))}`,
    regles: [["loin", 30, 0], ["milieu", 80, 0], ["encens", 80, 0], ["cloches", 80, 0], ["montent", 60, 0], ["cordes", 120, 0], ["devant", 190, 0], ["lucioles", 110, 0], ["papillons", 110, 0]],
  };
}

function enseigne(x, y, nom, halo, rnd) {
  let barres = "";
  for (let k = 0; k < 4; k++) barres += `<rect x="${r1(x + 2)}" y="${r1(y + 3.5 + k * 6.5)}" width="${r1(4 + rnd() * 4.5)}" height="2" rx="1" fill="#fff" opacity=".85"/>`;
  return `${lum(`<circle cx="${r1(x + 5.5)}" cy="${r1(y + 15)}" r="30" fill="url(#${halo})"/>`)}<rect class="fen" x="${x}" y="${y}" width="11" height="30" rx="2" ${teinte(nom)} opacity=".9"/>${barres}`;
}

function etal(x, sol, k, rnd) {
  const w = 68;
  const toitY = sol - 58;
  const n = 6;
  const pas = (w + 8) / n;
  let toile = '';
  for (let i = 0; i < n; i++) toile += `<path d="M${r1(x - 4 + i * pas)} ${r1(toitY + 3)}h${r1(pas)}v8a${r1(pas / 2)} 5 0 0 1 ${r1(-pas)} 0Z" ${teinte((i + k) % 2 ? 'toileA' : 'toileB')}/>`;
  const haut = `<path d="M${r1(x - 7)} ${r1(toitY + 4)}L${r1(x + 6)} ${r1(toitY - 7)}H${r1(x + w - 6)}L${r1(x + w + 7)} ${r1(toitY + 4)}Z" ${teinte('toit')}/>`;
  const vx = x + w * (0.3 + rnd() * 0.4);
  let cuisinier = `<circle cx="${r1(vx)}" cy="${sol - 33}" r="4.6"/><path d="M${r1(vx - 9)} ${sol - 15}Q${r1(vx - 9)} ${sol - 27} ${r1(vx)} ${sol - 27}Q${r1(vx + 9)} ${sol - 27} ${r1(vx + 9)} ${sol - 15}Z"/>`;
  if (k % 2 === 0) cuisinier += `<path d="M${r1(vx - 10)} ${r1(sol - 35.5)}L${r1(vx)} ${sol - 47}L${r1(vx + 10)} ${r1(sol - 35.5)}Q${r1(vx)} ${r1(sol - 37.5)} ${r1(vx - 10)} ${r1(sol - 35.5)}Z"/>`;
  const couleursFruits = ['#e8453c', '#f2a93b', '#7fcf5a', '#f2c14e', '#e8453c', '#ff8a4a'];
  let fruits = '';
  for (let i = 0; i < 6; i++) fruits += `<circle cx="${r1(x + 8 + i * 10.4)}" cy="${sol - 17.4}" r="2.9" fill="${couleursFruits[(i + k) % 6]}"/>`;
  return `<rect x="${r1(x + 2)}" y="${r1(toitY + 11)}" width="${w - 4}" height="${sol - toitY - 11 - 14}" fill="url(#mi1)"/>
    <path d="${bloc(x, sol - 15, w, 15)}" ${teinte('comptoir')}/>${lum(`<rect x="${x}" y="${sol - 15}" width="${w}" height="1" fill="#ffb35c" opacity=".6"/>`)}
    <g ${teinte('cuisinier')}>${cuisinier}</g>${haut}${toile}
    ${lum(`<circle cx="${r1(x + w / 2)}" cy="${r1(toitY + 18)}" r="9" fill="url(#mi2)"/><circle class="fen" cx="${r1(x + w / 2)}" cy="${r1(toitY + 16)}" r="2" fill="#fff0c0"/>`)}${jr(fruits)}`;
}

const chatEndormi = `<svg class="chat-jour" viewBox="0 0 44 46" width="44" height="46">
  <g class="respire">
    <ellipse cx="22" cy="36" rx="17" ry="9" fill="#e59a4c"/>
    <path d="M20 28.4L21.4 33M26 28.6L27 33.4M31.6 30L32.2 34.2" stroke="#bd7332" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="10" cy="37" r="7" fill="#e59a4c"/>
    <path d="M4.6 34L4.4 27.6L9.4 31.2ZM12.6 30.8L16.8 27.6L16.4 34Z" fill="#e59a4c"/>
    <path d="M6.4 37.4Q8 39 9.6 37.4M11.2 37.4Q12.8 39 14.4 37.4" fill="none" stroke="#6b3a1c" stroke-width="1" stroke-linecap="round"/>
    <path d="M9.4 40.2h1.8l-.9 1.1Z" fill="#c9626b"/>
  </g>
  <path class="queue-j" d="M36 43Q44 42 42.6 35Q41.6 30.6 37.4 31.4" fill="none" stroke="#e59a4c" stroke-width="4.2" stroke-linecap="round"/>
  <ellipse cx="17" cy="43.6" rx="4.4" ry="2" fill="#f3b66c"/>
</svg><i class="zz" style="left:0;top:12px;--t:0s">z</i><i class="zz" style="left:8px;top:6px;--t:-1.7s">z</i><i class="zz" style="left:2px;top:9px;--t:-3.3s">z</i>`;

function bandeMarche(rnd) {
  const L = LB;
  const x0 = L / 2;
  const sol = 180;
  const halo = (id, c) => `<radialGradient id="${id}"><stop offset="0" stop-color="${c}" stop-opacity=".5"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`;
  const defsLoin = `${halo("mhR", "#ff4a6a")}${halo("mhC", "#4ad8ff")}${halo("mhV", "#7aff9a")}${halo("mhO", "#ff9a4a")}`;
  const loin = couche("loin", HB,
    `${lum(`<ellipse cx="${x0}" cy="124" rx="380" ry="92" fill="url(#mhO)" opacity=".5"/>`)}
     ${immeubles(rnd, x0 - 400, x0 + 400, 128, 30, 86, "immA")}
     ${immeubles(rnd, x0 - 400, x0 + 400, 146, 16, 58, "immB")}
     ${enseigne(x0 - 150, 76, "neonR", "mhR", rnd)}${enseigne(x0 + 40, 66, "neonC", "mhC", rnd)}${enseigne(x0 + 168, 82, "neonV", "mhV", rnd)}${enseigne(x0 - 280, 88, "neonO", "mhO", rnd)}`, defsLoin, L);

  let etals = "";
  for (let k = 0; k < 7; k++) etals += etal(x0 + (k - 3) * 76 - 34, sol, k, rnd);
  const defsMilieu = degrade("mi1", "etalH", "etalB")
    + `<radialGradient id="mi2"><stop offset="0" stop-color="#ffe6b0" stop-opacity=".7"/><stop offset="1" stop-color="#ffe6b0" stop-opacity="0"/></radialGradient>`
    + degrade("mi3", "pave", "paveB");
  const milieu = couche("milieu", HB, `<rect y="${sol}" width="${L}" height="${HB - sol}" fill="url(#mi3)"/>${etals}`, defsMilieu, L);

  const dessus = sol - 15;
  let fusees = "";
  for (let k = 0; k < 10; k++) fusees += `<i class="fusee" style="left:${r1(8 + k * 1.2)}px;--dx:${r1((rnd() - 0.5) * 46)}px;--dy:${r1(-34 - rnd() * 34)}px;--t:${r1(k * 0.06)}s"></i>`;
  const grill = calque("grill",
    `<span class="grill" style="left:${r1(x0 - 32)}px;top:${dessus - 9}px"><svg viewBox="0 0 28 10" width="28" height="10"><path d="M1 5H27L25 10H3Z" fill="#0b0a1c"/><rect x="3" y="4" width="22" height="1.9" rx=".95" fill="#ff6a2a"/><rect x="4" y="4" width="20" height=".7" rx=".35" fill="#ffc27a"/><path d="M6 3.4Q7 .7 11.4 .9Q16 .5 18 3.4Z" fill="#8a2d22"/><path d="M8 2.6L10 1.4M11 2.7L13 1.4M14 2.7L16 1.4" stroke="#3b130f" stroke-width=".55"/><path d="M19 3.2L26.5 .6" stroke="#c9a566" stroke-width=".7" stroke-linecap="round"/></svg>${fusees}</span>${vapeur(x0 - 21, dessus - 36, -0.4, false)}${cible("grill", x0 - 36, sol - 62, 72, 64)}${etincelle("grill", x0 + 26, sol - 40, 0.5)}`);

  const chat = `<span class="chat" style="left:${r1(x0 + 132)}px;top:${sol - 58}px"><svg class="chat-nuit" viewBox="0 0 44 46" width="44" height="46"><path d="M10 46C6 32 12 21 22 19C30 18 34 25 34 33C34 39 33 43 32 46Z M16.5 11L17.5 2.5L22.6 8Z M29.5 11L28.5 2.5L23.4 8Z" fill="#0a0919"/><circle cx="23" cy="15" r="7.4" fill="#0a0919"/><path class="queue" d="M33 43Q45 43 43 31Q42 25 38.5 25Q42.5 29 40.5 34Q38.5 39 33 39Z" fill="#0a0919"/><circle class="oeil" cx="20.4" cy="14" r="1" fill="#ffd05a"/><circle class="oeil" cx="25.6" cy="14" r="1" fill="#ffd05a"/></svg>${chatEndormi}${cible("chat", -6, -6, 56, 58)}${etincelle("chat", 38, -4, 2.1)}</span>`;
  const mur = `<svg viewBox="0 0 ${L} ${HB}" width="${L}" height="${HB}"><path d="${bloc(x0 + 100, sol - 14, 120, 14)}" ${teinte("muret")}/></svg>`;

  // les ampoules sur leurs fils, qui clignotent chacune à son rythme (le jour : des fanions à la place)
  const fils = [[x0 - 320, 48, x0 + 320, 56, 26, 15], [x0 - 320, 74, x0 + 320, 66, 20, 12]];
  const couleursFanions = ["#e8453c", "#f2c14e", "#4ab6d8", "#7fcf8e"];
  let traits = "";
  let ampoules = "";
  let fanions = "";
  fils.forEach(([x1, y1, x2, y2, creux, nb]) => {
    traits += `<path d="${fil(x1, y1, x2, y2, creux)}" fill="none" ${trait("fer")} stroke-width="1"/>`;
    for (let k = 1; k <= nb; k++) {
      const [x, y] = surFil(x1, y1, x2, y2, creux, k / (nb + 1));
      ampoules += `<i class="ampoule" style="left:${r1(x)}px;top:${r1(y + 1)}px;--t:${r1(-rnd() * 4)}s;--d:${r1(2.2 + rnd() * 2.4)}s"></i>`;
      fanions += `<path d="M${r1(x - 3.4)} ${r1(y)}L${r1(x + 3.4)} ${r1(y + 0.4)}L${r1(x)} ${r1(y + 8)}Z" fill="${couleursFanions[k % 4]}"/>`;
    }
  });
  const gros = lampion(x0 - 188, 14, "#e8453c", -1, 1.9) + lampion(x0 + 206, 10, "#ff9a4a", -3, 1.7);
  const cordes = calque("cordes",
    `<svg viewBox="0 0 ${L} ${HB}" width="${L}" height="${HB}"><path d="M${r1(x0 - 188)} 0V16M${r1(x0 + 206)} 0V12" ${trait("fer")} stroke-width="1" fill="none"/>${traits}${jr(fanions)}</svg><div class="lum">${ampoules}</div>${gros}`);

  const hautTable = 172;
  let bols = "";
  let fumees = "";
  [-112, 14, 132].forEach((dx, k) => {
    const bx = x0 + dx;
    bols += `<path d="M${r1(bx - 8)} ${hautTable}L${r1(bx + 8)} ${hautTable}L${r1(bx + 15)} ${hautTable - 13}L${r1(bx - 15)} ${hautTable - 13}Z" ${teinte("bol")}/><rect x="${r1(bx - 16)}" y="${hautTable - 14.5}" width="32" height="2.2" rx="1.1" ${teinte("bol")}/>${lum(`<rect x="${r1(bx - 16)}" y="${hautTable - 14.5}" width="32" height="1" rx=".5" fill="#ffc88a" opacity=".55"/>`)}<path d="M${r1(bx - 5)} ${hautTable - 16}L${r1(bx + 13)} ${hautTable - 31}M${r1(bx - 1)} ${hautTable - 16}L${r1(bx + 16)} ${hautTable - 29}" ${trait("baguettes")} fill="none" stroke-width="1.4" stroke-linecap="round"/>`;
    fumees += vapeur(bx - 8, hautTable - 55, -k * 0.9, true) + vapeur(bx + 8, hautTable - 55, -k * 0.9 - 1.6, true);
  });
  const defsDevant = degrade("mi4", "tableH", "tableB");
  const devant = calque("devant",
    `<svg viewBox="0 0 ${L} ${HB}" width="${L}" height="${HB}"><defs>${defsDevant}</defs><rect x="${r1(x0 - 300)}" y="${hautTable}" width="600" height="${HB - hautTable}" fill="url(#mi4)"/>${lum(`<rect x="${r1(x0 - 300)}" y="${hautTable}" width="600" height="1.4" fill="#ffb35c" opacity=".55"/>`)}${bols}</svg>${fumees}`);

  let braises = "";
  for (let k = 0; k < 5; k++) braises += `<i class="braise" style="left:${r1(x0 - 200 + rnd() * 400)}px;top:${r1(sol - 12 - rnd() * 8)}px;--dx:${r1((rnd() - 0.5) * 40)}px;--d:${r1(3.4 + rnd() * 3)}s;--t:${r1(-rnd() * 6)}s"></i>`;
  return {
    html: `${loin}${milieu}${grill}${calque("chat", mur + chat)}${calque("braises", braises)}${cordes}${devant}`,
    regles: [["loin", 30, 0], ["milieu", 80, 0], ["grill", 80, 0], ["chat", 80, 0], ["braises", 80, 0], ["cordes", 120, 0], ["devant", 190, 0]],
  };
}

function avionDeLigne() {
  let hublots = "";
  for (let x = 30; x < 98; x += 5.6) hublots += `<circle cx="${x}" cy="17.5" r="1"/>`;
  const num = ++numeroSvg;
  return `<svg class="avion" viewBox="0 0 126 42" width="126" height="42">
    <defs>
      <linearGradient id="avCorps${num}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" ${arret("avionH")}/><stop offset="1" ${arret("avionB")}/></linearGradient>
      <linearGradient id="avFaisceau${num}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff3d0" stop-opacity=".6"/><stop offset="1" stop-color="#fff3d0" stop-opacity="0"/></linearGradient>
    </defs>
    ${lum(`<path d="M122 22L240 44L240 8Z" fill="url(#avFaisceau${num})"/>`)}
    <path d="M13 13L6 1H16L30 13Z" ${teinte("derive")}/>
    <path d="M52 24L36 39H49L78 25Z" ${teinte("stab")}/>
    <path d="M7 21C7 15 15 12.5 30 12.5H98C110 12.5 119 17 122 22C119 26.5 110 28.5 98 28.5H28C14 28.5 7 26 7 21Z" fill="url(#avCorps${num})"/>
    <ellipse cx="62" cy="31" rx="8" ry="3.4" ${teinte("moteur")}/>
    <path d="M104 14.5Q112 15.5 117 20L104 20Z" ${teinte("cabine")}/>
    <g ${teinte("hublot")}>${hublots}</g>
    <circle class="strobe" cx="10" cy="2" r="1.6" fill="#fff"/>
    <circle class="strobe" cx="62" cy="12" r="1.5" fill="#ff5a46" style="animation-delay:-.6s"/>
    <circle cx="123" cy="22" r="2.2" fill="#fff6d8"/>
  </svg>`;
}

function bandeAube(rnd) {
  const L = LB;
  const x0 = L / 2;
  const course = coursePossible();
  const sol = 162;

  const m1 = montagnes(rnd, L, 122, 52, 6);
  const m2 = montagnes(rnd, L, 142, 32, 6);
  // le soleil se lève derrière les crêtes, dans le creux le plus bas autour du centre (il monte un peu quand on scrolle)
  const horizon = (x) => Math.min(hauteurCrete(m1, x), hauteurCrete(m2, x));
  let xs = x0 - 40;
  for (let x = x0 - 120; x < x0 + 40; x += 4) if (horizon(x) > horizon(xs)) xs = x;
  const ys = horizon(xs) + 6;
  const defsSoleil = `<radialGradient id="ba1"><stop offset="0" stop-color="#fff6cf"/><stop offset=".2" stop-color="#ffd58a" stop-opacity=".95"/><stop offset=".48" stop-color="#ff9f6a" stop-opacity=".5"/><stop offset="1" stop-color="#ff7a7a" stop-opacity="0"/></radialGradient>`;
  const astre = couche('astre', HB, `<circle cx="${r1(xs)}" cy="${r1(ys)}" r="104" fill="url(#ba1)"/><circle cx="${r1(xs)}" cy="${r1(ys)}" r="15" fill="#fff4cc"/>`, defsSoleil, L);

  const defsLoin = degrade('ba2', 'a2h', 'a2b') + degrade('ba3', 'a3h', 'a3b');
  const liseré = (pts) => `<path d="${pts.map((q, k) => (k ? 'L' : 'M') + r1(q[0]) + ' ' + r1(q[1])).join('')}" fill="none" ${trait('lisA')} stroke-opacity=".5" stroke-width="1"/>`;
  const loin = couche('loin', HB,
    `<path d="${remplieDroit(m1, HB)}" fill="url(#ba2)"/>${liseré(m1)}<path d="${remplieDroit(m2, HB)}" fill="url(#ba3)"/>${liseré(m2)}`, defsLoin, L);

  let nuages = '';
  [[-230, 24, 150, 16], [-60, 50, 190, 18], [110, 20, 160, 14], [210, 66, 170, 15], [-300, 84, 140, 12]].forEach(([dx, y, w, h], k) => {
    const blanc = `<ellipse cx="${r1(w * 0.5)}" cy="${r1(h * 0.6)}" rx="${r1(w * 0.5)}" ry="${r1(h * 0.38)}" fill="#fff" opacity=".5"/><ellipse cx="${r1(w * 0.5)}" cy="${r1(h * 0.34)}" rx="${r1(w * 0.36)}" ry="${r1(h * 0.14)}" fill="#fff" opacity=".6"/>`;
    nuages += `<span class="cirrus" style="left:${r1(x0 + dx)}px;top:${y}px;--d:${r1(70 + k * 17)}s;--t:${r1(-k * 23)}s"><svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><ellipse cx="${r1(w * 0.5)}" cy="${r1(h * 0.6)}" rx="${r1(w * 0.5)}" ry="${r1(h * 0.38)}" ${teinte('cir1')} opacity=".3"/><ellipse cx="${r1(w * 0.36)}" cy="${r1(h * 0.5)}" rx="${r1(w * 0.26)}" ry="${r1(h * 0.42)}" ${teinte('cir2')} opacity=".28"/><ellipse cx="${r1(w * 0.64)}" cy="${r1(h * 0.46)}" rx="${r1(w * 0.22)}" ry="${r1(h * 0.34)}" ${teinte('cir3')} opacity=".26"/><ellipse cx="${r1(w * 0.5)}" cy="${r1(h * 0.34)}" rx="${r1(w * 0.36)}" ry="${r1(h * 0.1)}" ${teinte('cir4')} opacity=".4"/>${jr(blanc)}</svg></span>`;
  });

  const tx = x0 + 120;
  const tour = `${bloc(tx - 3, sol - 78, 6, 78)}M${r1(tx - 13)} ${sol - 78}L${r1(tx + 13)} ${sol - 78}L${r1(tx + 10)} ${sol - 92}L${r1(tx - 10)} ${sol - 92}Z${bloc(tx - 11, sol - 95, 22, 3.4)}${bloc(tx - 0.8, sol - 108, 1.6, 13)}`;
  let terminal = bloc(x0 - 250, sol - 30, 210, 30) + bloc(x0 - 257, sol - 34, 224, 4.5);
  let vitres = '';
  for (let x = x0 - 244; x < x0 - 44; x += 8.4) vitres += `<rect x="${r1(x)}" y="${sol - 24}" width="5.4" height="8" opacity="${r1(0.55 + rnd() * 0.45)}"/>`;
  terminal += bloc(x0 - 44, sol - 20, 38, 4);
  let marques = '';
  for (let k = 0; k < 15; k++) marques += bloc(x0 - 339 + k * 44, sol + 6.8, 18, 2.4);
  let bords = '';
  for (let k = 0; k < 10; k++) bords += bloc(x0 - 303 + k * 64, sol + 21, 6, 2);
  const defsMilieu = degrade('ba4', 'termH', 'termB');
  const milieu = couche('milieu', HB,
    `${immeubles(rnd, x0 - 400, x0 + 400, sol - 4, 8, 34, 'villeA')}<path d="${terminal}${tour}" fill="url(#ba4)"/><path d="${bloc(0, sol, L, HB - sol)}" ${teinte('piste')}/>
     ${jr(`<path d="${marques}" fill="#fff" opacity=".7"/><path d="${bords}" fill="#7a9ae0" opacity=".8"/>`)}
     <g ${teinte('vitreA')}>${vitres}<rect class="fen" x="${r1(tx - 9)}" y="${sol - 88}" width="18" height="6"/></g>
     <circle class="feu" cx="${r1(tx)}" cy="${sol - 109}" r="2" fill="#ff5a46"/>`, defsMilieu, L);

  let feux = '';
  for (let k = 0; k < 15; k++) feux += `<i class="feu-piste" style="left:${r1(x0 - 330 + k * 44)}px;top:${sol + 8}px;--t:${r1(k * 0.09)}s"></i>`;
  for (let k = 0; k < 10; k++) feux += `<i class="feu-piste bleu" style="left:${r1(x0 - 300 + k * 64)}px;top:${sol + 22}px;--t:${r1(k * 0.13)}s"></i>`;
  const piste = calque('piste', feux);

  const avion = calque('avion', `<span class="atterrit" style="left:${r1(x0 - course / 2)}px;top:16px;--course:${course}px">${avionDeLigne()}${cible('avion', -6, -10, 138, 58)}</span>`);

  const parole = calque('tour',
    `<i class="onde petite" style="left:${r1(tx)}px;top:${sol - 109}px"></i><i class="onde petite b" style="left:${r1(tx)}px;top:${sol - 109}px"></i>${cible('tour', tx - 18, sol - 116, 36, 120)}${etincelle('tour', tx + 17, sol - 98, 1.4)}`);

  let cloture = '';
  for (let x = -330; x < 340; x += 26) cloture += bloc(x0 + x - 1, sol + 14, 2, 26);
  const herbe = roseaux(x0 - 230, HB + 4, 12, 40, rnd) + roseaux(x0 + 250, HB + 4, 12, 36, rnd);
  const devant = calque('devant',
    `<svg viewBox="0 0 ${L} ${HB}" width="${L}" height="${HB}"><path d="${cloture}${herbe}${bloc(x0 + 196, sol - 44, 2.4, 58)}" ${teinte('herbe')}/></svg>
     <span class="manche" style="left:${r1(x0 + 198)}px;top:${sol - 44}px"><svg viewBox="0 0 40 14" width="40" height="14"><path d="M0 0L38 3.4L38 10.6L0 14Z" fill="#ff8a4a"/><path d="M9 .7L13 1.1L13 12.9L9 13.3Z M21 1.9L25 2.3L25 11.7L21 12.1Z" fill="#fff0e0"/></svg></span>`);
  const oiseaux = calque('oiseaux',
    `<span class="volee" style="left:${r1(x0 - course / 2)}px;top:46px;--course:${course}px;--monte:-16px;--d:44s;--t:-8s"><span class="cap">${volee(5, 9)}</span></span>` +
    `<span class="volee" style="left:${r1(x0 + course / 2)}px;top:80px;--course:${-course}px;--monte:-10px;--d:57s;--t:-35s"><span class="cap">${volee(3, 21)}</span></span>`);
  return {
    html: `${astre}${loin}${calque('nuages', nuages)}${oiseaux}${milieu}${parole}${piste}${avion}${devant}`,
    regles: [['astre', 10, 70], ['loin', 30, 0], ['nuages', 20, 0], ['oiseaux', 40, 0], ['milieu', 80, 0], ['tour', 80, 0], ['piste', 80, 0], ['avion', 100, 0], ['devant', 180, 0]],
  };
}

function reveillerBandes(estOuverte) {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    bandes.forEach((s, k) => s && s.classList.toggle("eveille", estOuverte(k)));
  }));
}

const bandes = [];
function bande(k) {
  if (bandes[k]) return bandes[k];
  const faire = [null, bandeTuktuk, bandePagode, bandeMarche, bandeAube][k];
  if (!faire) return null;
  const { html, regles } = faire(aleatoire(40 + k * 19));
  const li = document.createElement("li");
  li.className = `scene s${k}`;
  li.innerHTML = `<div class="plan" style="--lg:${LB}px">${html}</div>`;
  enregistrer(li.firstElementChild, regles, "bande", LB);
  bandes[k] = li;
  return li;
}


const scenes = []; // { el, couches:[{el,fx,fy}], ancre:"page"|"bande", visible }
let parallaxeEnAttente = false;
const observateur = new IntersectionObserver((entrees) => {
  entrees.forEach((e) => {
    const s = scenes.find((x) => x.el === e.target);
    if (!s) return;
    s.visible = e.isIntersecting;
    e.target.classList.toggle('vue', e.isIntersecting);
  });
  majParallaxe();
}, { rootMargin: '200px 0px' });

function enregistrer(el, regles, ancre, larg = 0) {
  const couches = regles.map(([nom, fx, fy]) => ({ el: el.querySelector(`.p.${nom} > *`), fx, fy })).filter((c) => c.el);
  scenes.push({ el, couches, ancre, larg, visible: false });
  observateur.observe(el);
}

function majParallaxe() {
  parallaxeEnAttente = false;
  const hv = window.innerHeight;
  const sy = window.scrollY;
  for (const s of scenes) {
    if (!s.visible) continue;
    let t;
    if (s.ancre === 'page') {
      t = Math.min(1.4, sy / 600);
    } else if (s.ancre === 'fin') {
      t = (s.el.getBoundingClientRect().top - (hv - s.el.offsetHeight)) / hv;
    } else {
      const r = s.el.getBoundingClientRect();
      t = (r.top + r.height / 2 - hv / 2) / hv; // environ -1 (en haut) à 1 (en bas)
    }
    const marge = s.larg ? Math.max(0, (s.larg - window.innerWidth) / 2 - 4) : 9999;
    for (const c of s.couches) {
      const dx = Math.max(-marge, Math.min(marge, t * c.fx));
      c.el.style.transform = `translate3d(${r1(dx)}px,${r1(t * c.fy)}px,0)`;
    }
  }
  for (const e of document.getElementsByClassName('env')) {
    const r = e.getBoundingClientRect();
    if (r.bottom < -40 || r.top > hv + 40) continue;
    const t = Math.min(1, Math.max(0, (r.top + r.height / 2) / hv));
    e.style.setProperty('--sheen', r1(100 - t * 100) + '%');
  }
  placerAstres(sy);
  const total = document.documentElement.scrollHeight - hv;
  const p = total > 0 ? Math.min(1, Math.max(0, sy / total)) : 0;
  clarte = document.body.classList.contains('lever') ? Math.min(1, 0.55 + p * 0.45) : p * 0.5;
  const aubeScroll = document.getElementById('aubeScroll');
  if (aubeScroll) aubeScroll.style.opacity = r1(p * 0.55 * (0.4 + 0.6 * nuitNiv));
  bougerFlous(sy);
}

// au premier plan, devant les enveloppes : quelques grosses lucioles floues, qui montent un peu plus vite que la page quand on scrolle
// (les plus grosses sont les plus proches, donc les plus rapides)
const premierPlan = document.getElementById("avant");
const flous = [];
function poserFlous() {
  if (!premierPlan) return;
  const rnd = aleatoire(58);
  const nb = window.innerWidth < 500 ? 7 : 10;
  const couleurs = ["255,208,130", "255,190,110", "255,224,160", "255,176,96", "255,205,170"];
  let html = "";
  for (let k = 0; k < nb; k++) {
    const proche = rnd();
    const taille = 20 + proche * 48;
    flous.push({ x: rnd(), y: rnd(), v: 1.25 + proche * 0.65, taille });
    html += `<i class="flou" style="width:${r1(taille)}px;height:${r1(taille)}px"><b style="--c:${couleurs[k % couleurs.length]};--a:${r1(0.5 - proche * 0.26)};--d:${r1(7 + rnd() * 6)}s;--t:${r1(-rnd() * 10)}s;--dx:${r1((rnd() - 0.5) * 56)}px;--dy:${r1((rnd() - 0.5) * 44)}px"></b></i>`;
  }
  premierPlan.innerHTML = html;
  flous.forEach((f, k) => (f.el = premierPlan.children[k]));
  bougerFlous(window.scrollY);
}


function bougerFlous(sy) {
  const L = window.innerWidth;
  const H = window.innerHeight;
  for (const f of flous) {
    const tour = H + f.taille * 2;
    const y = ((((f.y * tour - sy * f.v) % tour) + tour) % tour) - f.taille;
    f.el.style.transform = `translate3d(${r1(f.x * (L - f.taille))}px,${r1(y)}px,0)`;
  }
}

function demanderParallaxe() {
  if (parallaxeEnAttente) return;
  parallaxeEnAttente = true;
  requestAnimationFrame(majParallaxe);
}
window.addEventListener("scroll", demanderParallaxe, { passive: true });
window.addEventListener('resize', demanderParallaxe);


const paysageDuHaut = document.getElementById("paysage");
if (paysageDuHaut) {
  paysageHaut(paysageDuHaut, 7, false);
  enregistrer(paysageDuHaut, [["loin", 0, 34], ["cerf", 0, 28], ["milieu", 0, 22], ["eau", 0, 10], ["reflet", 0, 10], ["flottants", 0, 10], ["lucioles", 0, 8], ["papillons", 0, 8]], "page");
}
monterHaut();
poserFlous();

const paysageDuBas = document.getElementById('paysageBas');
if (paysageDuBas) {
  paysageHaut(paysageDuBas, 19, true, true);
  enregistrer(paysageDuBas, [["soleil", 0, 0], ["loin", 0, 26], ["milieu", 0, 16], ["eau", 0, 8], ["reflet", 0, 8], ["flottants", 0, 8], ["retour", 0, 0], ["lucioles", 0, 6], ["papillons", 0, 6]], "fin");
}
