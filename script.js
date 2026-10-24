// Pour Sandy
// 5 lettres, une par date. Chacune s'ouvre à minuit (heure de son téléphone).

const SIGNATURE = "Souley ♥";
const ANNEE = 2026;
const CLE = "sandy-tuktuk-2026";

// textes chiffrés, sinon elle pourrait tout lire dans le code source de la page
const lettres = [
  {
    jour: 12, mois: 10, titre: "Le début du périple", timbre: "plane",
    ouverture: "2026-10-12T22:00:00+02:00",
    texte: "eV0eWilfERgCt90ZSBJVXEBUXkBBQBZNTgENDR4QSwcUAl4SQFNFEUFGEUSR4fcFCg0GEAYVBxpY8ZkeFlxTRkIQGg1OHVlMVBGo3R+ojRJUV0URUUdeQxYSThUMRFQaBQBVCEVTXlX1mBJLVEAGCB1EFUxUEQ4GGwLumkJXFlddRkIQAhQLRA3P9OwOB1UdSFxFV9SxlBMeQE1rUhRHYbfVR1QBia2rVUEWQvGUQ1UeBAAQWUkVGxhUAAUNU/ObRF5CQENEUw4bRB3u3R+o1FUPSBJc0LaoU1pFQhZBDafNWbfcSxAAS0BdXlZTHRJKRRAeDgdEE0hUBh4dBktIXFNdRFQSRlJZU6LORBRIVBECBhBLXEdVElJUR1cRXRwIHUhZTpb18hEGHw1eX1xRHxJlVBABBB4BF14RVajUVQhIEkNTW1RWRhFRBkEaBR8BVBoFVLbCWVNZRhZSXUNd89oSThAWWAAQSxgUS0ddRUBY8ptKHRAWFU4OHA0ZEEsQHBgNQ0VXFlvQr6hRBhMPDQoNELbQVBAFDUJCXVBYRkpDEAYPThQcWFQFBwEGRREdQAw8DUIRYV8GE04HHA0CGhIVEg4BElpXFkVXD1VfHQ8LREsNGRwYBxwEQ0EeDhlBDCUNQFMCAgUKXklXBh0GGERdXhAIDUFfUF5TAgIFCl5JVwVWS1oDEgwdRUFTQQ99keH3ARdbGwwOBlUHTBJAWllFXQ9dUVMRAhEKDRkaCBwQS0lXEEZZREYPRV8dQRgLAEwTEEVUJQpeElxTFkFeWkIQEQQCCBwBVBkKVAUHWEEQX1lSWkofDFwRUG5FXVQWBxUGGBAQXVtFQltAXxJNXR0UGENUFgcVBhgQEF4QCAMcDw0fABEPCkdglvXyERsdQktVQBZEXEoRQBsOGgtZSRFVHxscSwVR0rKvVEFbEUAcFBxEGkIaARkRFwpBU15RU0MSQ1AQAxMLCRDu3AcOWFUISF5cVxtSWw9fVVMRARELXxVVqN4BGUgSQUdTEV9OVl4aBwcVDEhdW0skFBgNR14SRlBLXFBXFkEPEhxOVAEEGlUJQkdEElJUEkteWRQVTgAYQwdVBxFVCEJbXh4WRFxKEUAbDhoLWUkRVR8bHEUNd0QSRlBBD1XS8/gLHBpYBxBLtt6pjVhVEkVEW1wRQBISThQRQgAaDLfcBURDRVf0kfCUHRAZg+79GERUHwoZFAJeEvObQvKbD1XS8/gPBxpCBhFLFQMOThLzlVcfDgBBDnldHlopQgEHSxgQS19XQ0ZTHRJfQ18VCBoBVw05GgJUHw4NX9Kyr15RTERAFkEKAVlAlvXyERsFWEtVQBZYUUYdEAeD7v0QQwUAArfdH0gSQFNFEUJAREJToskFVxFbBVV+SRsTcF9cFkddVlBXFk1ONxhDEAxFSFobEzgMQhZSXk5CQ05DHhdbEyQmqdRPS2fQsKtXWBJMUFMbosdETw0HEAgGEB9eEkNHRBFeShFDGhULSll+HVUflvXyTEBCW0BUQQ/ykFMVAREKDRgQGFQBGUJHRldEHRJbRBAfBE4XGFgGFBhYVQ5ZEkTQtqhTWkNRAEEbChwNBrbCFxoGXVdeQVMfDgBBDg==",
  },
  {
    jour: 26, mois: 10, titre: "Quand la maison te manque", timbre: "tuktuk",
        texte: "eV0eWj1IAQ1LBxAGTFteV0USUuyYWrDBQFhWXUp/VwRLqK0SU1cWQUJOVVVfQQQBWV4BHBhUBRnumEQS9ZIWX1BCGgQcRAhYEVUflvXyTEEQVvWbXOyREAMEHAcMWbfcSwEbDg1EX1tCR0RKEV8GQRoWuoQWAAgctsINVlFcRRJDQRFVHQUcCxBZVAEZGwVLT1tKU0RAUwMRWBoSGgsQXxFVDxFVCURXXhJCVxZbXkIXEwtEFUxUFgMRAwJBXlUcCh1GETsMA18rEFleHVUIEVUYQltCElpTFkJQWQAOAEQNSFQYChoEHkgSRVwWQlNaHRAQg+79HF4AVQUbBwZMXh4SZ0dfQUtVUwsBEQteWFUIlvXySEFEEkVdQ1lUXgdBAgFZQBsYDhoBS0LxiRJa0La2VEgQCBoFDUQbG0sGEB9CX1JXFldCD17zykEaEVlZEVUGEQEYDfGQEkTxnFlUQlMFjOTgWBoQSxYaBUNXEFBXRFNbRVVdQa3jGA0EFBgHEEcNQkJdW1tFARF8EggdFxwNGBBLFxoeXRJUVxZQWlpUQ1MHDw0LSFQGClQFDllbRFcWRF9cWEQWTU4UDEQHVRkRAQRYQF5XFkJEQFdZBwQcSllhFVUJFQMOWUZVElhXFk1eRRQEThQYXlhVDhgZDg1G0rKvU0JbVF4XT1JLCRN+SRtKNB4NUF9HWl1CAxFakeH3BRANELbCHrbLDfGZQkNbReyYEAcOGxdZQBEGSwcAAUhGQxJSVxZMXl4FBBwXGFkdGgVUBgpDQRBGWVsYEx5ATWtSFEd5lvXyFQZLS1NZRhZHWA9SWR0QGw26hRkQSxAAS1tdSVNRVxgPe1VTEg8NCgFUFon07A5eRhBHWBJVR1hWFRMLRBdYGFlLGRQCXhJT0LarU1xFEAcOGw4WWAYGS7fSCg1WVRJQU19bHwxcEVA=",
  },
  {
    jour: 18, mois: 11, titre: "Le jour incroyable", timbre: "pagoda",
    texte: "eV0eWjPP9OwKHVUeQ1cQRl7ykUBDWBZNTgENDQAASwIUGA1fVRJSWEpKEUIaQQSG+bQVHEsGFAJeXV4cCh5IETsNA189EQsNEBAeDFUGQltDHhZYVA9IERJBCAsLTrfcBhEbHw1HXlcWW1daQ1+wyAtECFgdVRgbBx8NVkUSWl5MARF9FkEJARdfEVUPEVUBQkdCXPWYXQ9e8spBGhFZWRFVGREBGUJHRldFEUlaVF0CFAtECUwGAUsHFAVeEkRAWUEYXFBHHAgcRBpCGRgOGgFHDVdEElnygQ9FRFMVC0QdRAdVqd+3y2J5HBJVVFRDVBwfos5IWUcRVQaW9fJIXBBBWURORlRfFxMPDbuNts5FSFobEzgMQghhXVpFHLDLGhYcDQUADlQBHg1e0rKvUEsPVfLaC63EWUgBEEVUJQ5YRh3xnEVKShFABgROB5ut7RAYAFUKWFhfR0RV2q+oWQYIQEQ2WFQWifTsDl5GEEdYEVtAREFTCwtEC0wXGgUAEEtcR1USUlQYQ1ARHgQcABwDSFobSn9XXQxjWxZS2q+oVAAVTggcDRcUGFhVAUgSRldDSRhD07HqCQcXDUIdBw5UFgRAQlzxnkVdD1BEUxMLEBZYBltLJBQYDfCb8JZS2q+o8toVDw0NDQAHBARVCURXXvCW84MDEUESEk4IHA0GtsIHAAbumxBXWBFMXV5YAEEeDAtMBxAYWlUnSEEQVvWYTE5YXQBPTjQLSBoRGFQRDl4SXl1CVEsPQtPz+AcIWUERVQ0VAB8DDh9CCA==",
  },
  {
    jour: 3, mois: 12, titre: "Quand je te manque", timbre: "bowl",
    texte: "eV0eWjpIGBkOWRmojR4QWNSztlBbUwmtzQpEALbCVLbLDV7Ssq/whlJAGhMLSkUCBEthSAVV7rVRElBSRkUSAAQeEFleERgKHRsOXhwQeFMTWVBbAEEeBQoNABBLEhQCX1cQXlMTTF5HA0EKEVlAERZLELbCWVNTWvWaAxHx1ABOCRhfFx0OBhQCWRJAU0UTS1QSBw4bEBwNEhSo0xoFARJERxZeShFfEg8fERxeWlU7FQZLSVcQVFfwiF5cUwUcBRRMABwaARBHDVhFQUJWD1VTHRJOCBxeVAUOABwfXhJEQENQXB8SIAQAEBBfVAEEGlUbTEBWR1sfD0FTARUPAxxfVAAFVAcOXVNDEldFSlISBw4HSFlHAQYfEVUPREFTR0JWXR8OXBFQbkVdSjAfVAYCDUZfWxZSWkJBGkEEAVlZEVUGFRsaWFcQR1gTX1RHX0EMCxdDEVUFGwAdSF5cVxoTRl0SAQQdEBwNGRoCGgZLSVcQRkRcRkISAAQDBRBDEQZFVDaJratVQUITQvKYHgROCRZEGgZLBQAODUZVQRZHXV5bAEEeFhxAHbbDBhAYDUFVX1daQVRBUw2txFRPFQZHVBAfDVdcXlNAD0JdHRVOFBheB7bCEQZLW1tEVxoTQV5cscFRWFZdSn9XBEs7X11WW0JWD/KSUwcBCh0NEBBLGBRLS1teHBZ5ShFcFkEdERBeVAUKB1UbX1dDQfWaD0BHFkEaEVlfERsfBhAYAxJ1XFBaQRFBGk9OKRhEB1UbBhoNREZVEkdGTl9WUwytzhRIWklEBEs=",
  },
  {
    jour: 21, mois: 12, titre: "Le retour", timbre: "home",
    texte: "eV0eWkscVBGo3RYOQFBCVxgSZc2xqxYSThYcQwAHqN0QRw1dRRJGQFRcQEcWT1JLCRN+SRtKJgRESlFcQlccS1hKUwsBEQteWlUkARxHDVjSsq9TWA9SXR4RGqfQA0haG0p/V10McltTXEdKX0cWQa3EWUEVVQYVHBhCXBwSZVNfS0gcT04eWnMRBEstHRsKQVddV1hGHQ9F0PP4CxdZXREAH1m2wVlAVRJUW1RBEUIfFB1ECFiW9fIBGw4NQVlfRl5UD1JdHw2tzB5YEVtXWwVV",
  }
];

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const MOIS_CACHET = ['JANV', 'FÉVR', 'MARS', 'AVR', 'MAI', 'JUIN', 'JUIL', 'AOÛT', 'SEPT', 'OCT', 'NOV', 'DÉC'];
const UN_JOUR = 24 * 60 * 60 * 1000;
const $ = (s) => document.querySelector(s);
const pad = (n) => String(n).padStart(2, "0");

const TEINTES = [
  {
    encre: '#1f2d55', douce: '#4a5a80', feuille: '#f5eedd', motif: 'avion', effet: 'lanternes',
    lanterne: ['#fff3c4', '#ffc070', '#f0803a', '#b8402a'], lueur: '255,150,60',
    fil: ['#ffe2a8', '#f6893f', '#c8372d'], halo: ['#ffb35c', '#ff9a4a'],
    confettis: ['#b8372f', '#ffb35c', '#f6efe1', '#24448c', '#ffd27a'],
  },
  {
    encre: '#4a1f2e', douce: '#7a4a58', feuille: '#f6ebdf', motif: 'maison', effet: 'pluie',
    lanterne: ['#fff3dc', '#ffc98f', '#f08c5a', '#a4503f'], lueur: '255,150,110',
    fil: ['#ffe8cc', '#f28a60', '#a8404a'], halo: ['#ffb890', '#ff9068'],
    confettis: ['#b8372f', '#ffc98f', '#f6efe1', '#a4503f', '#ffd9b0'],
  },
  {
    encre: '#32275c', douce: '#6a5f94', feuille: '#f7f0d6', motif: 'pagode', effet: 'gloire',
    lanterne: ['#fffbe3', '#ffe48a', '#ffb824', '#d9760e'], lueur: '255,205,70',
    fil: ['#fff3c0', '#ffbe30', '#d97a12'], halo: ['#ffd75c', '#ffb824'],
    confettis: ['#ffd24a', '#ffb824', '#f6efe1', '#d9760e', '#fff1a8'],
  },
  {
    encre: '#103a39', douce: '#4d7370', feuille: '#f2ebe2', motif: 'bol', effet: 'escarbilles',
    lanterne: ['#ffdcb0', '#ff9c60', '#d9483c', '#6e1f45'], lueur: '230,90,80',
    fil: ['#ffd2a0', '#e4573f', '#7a2148'], halo: ['#ff8a5a', '#e4573f'],
    confettis: ['#d9483c', '#ff9c60', '#f6efe1', '#6e1f45', '#ffdcb0'],
  },
  {
    encre: '#46301f', douce: '#8a6a55', feuille: '#f9efe0', motif: 'soleil', effet: 'aurore',
    bandes: ['#d9a441', '#24448c'],
    lanterne: ['#fff5e0', '#ffd2a6', '#ff8fa3', '#c4527f'], lueur: '255,150,170',
    fil: ['#fff0d2', '#ff9aa6', '#c24e7c'], halo: ['#ffb0b8', '#ff8fa3'],
    confettis: ['#ff8fa3', '#ffd2a6', '#f6efe1', '#c4527f', '#ffe9a8'],
  },
];

const FILIGRANES = {
  avion: `<svg viewBox="0 0 200 200"><path d="M16 170C40 70 112 150 148 74" stroke-dasharray="0.1 8.5"/><path d="M186 34L122 58L146 68L142 94Z"/><path d="M186 34L146 68"/><path d="M26 56H62A11 11 0 0 0 62 34A15 15 0 0 0 34 30A13 13 0 0 0 26 56Z"/><path d="M128 170H176A9 9 0 0 0 176 152A12 12 0 0 0 154 148A10 10 0 0 0 128 170Z"/></svg>`,
  maison: `<svg viewBox="0 0 200 200"><path d="M26 106L100 40L174 106"/><path d="M42 94V166H158V94"/><path d="M88 166V124H112V166"/><rect x="54" y="108" width="22" height="22" rx="2" style="fill:currentColor;fill-opacity:.35"/><path d="M65 108V130M54 119H76"/><rect x="124" y="108" width="22" height="22" rx="2"/><path d="M135 108V130M124 119H146"/><path d="M138 64V44H152V76"/><path d="M145 34C137 26 153 20 145 10"/><path d="M14 166H186"/></svg>`,
  pagode: `<svg viewBox="0 0 200 200"><circle cx="158" cy="40" r="16"/><path d="M100 14V34"/><path d="M74 56Q100 44 126 56L134 64H66Z"/><path d="M80 64V82H120V64"/><path d="M60 84Q100 70 140 84L150 94H50Z"/><path d="M70 94V116H130V94"/><path d="M44 118Q100 102 156 118L168 130H32Z"/><path d="M58 130V166H142V130"/><path d="M92 166V144H108V166"/><path d="M22 166H178"/></svg>`,
  bol: `<svg viewBox="0 0 200 200"><path d="M36 98H164C164 140 136 164 100 164C64 164 36 140 36 98Z"/><path d="M78 164L72 178H128L122 164"/><path d="M46 118H154"/><path d="M72 86C62 72 82 62 72 46"/><path d="M100 86C90 72 110 62 100 46"/><path d="M128 86C118 72 138 62 128 46"/><path d="M118 96L176 30"/><path d="M132 98L186 44"/></svg>`,
  soleil: `<svg viewBox="0 0 200 200"><path d="M8 140H192"/><path d="M58 140A42 42 0 0 1 142 140"/><path d="M61.8 101.8L49.1 89.1M79.8 89.9L73.0 73.2M100.0 86.0L100.0 68.0M120.2 89.9L127.0 73.2M138.2 101.8L150.9 89.1"/><path d="M14 140V122L30 108L46 122V140"/><path d="M154 140V122L170 108L186 122V140"/></svg>`
};

function lire(cle) {
  try { return localStorage.getItem(cle); } catch (e) { return null; }
}
function ecrire(cle, valeur) {
  try { localStorage.setItem(cle, valeur); } catch (e) {}
}

function dechiffrer(lettre) {
  const cle = CLE + lettre.jour + "/" + lettre.mois;
  const octets = Uint8Array.from(atob(lettre.texte), (c, i) => c.charCodeAt(0) ^ cle.charCodeAt(i % cle.length));
  return new TextDecoder().decode(octets);
}

function hash(texte) {
  let h = 0;
  for (const c of texte) h = (h * 31 + c.charCodeAt(0)) | 0;
  return h;
}

const params = new URLSearchParams(location.search);
const APERCU = hash(params.get('apercu') || '') === -2043383376;
const NUIT_FORCEE = APERCU && params.has("nuit") ? Math.min(1, Math.max(0, parseFloat(params.get("nuit")) || 0)) : null;
const LUNE_FORCEE = APERCU && params.has("lune") ? Math.min(1, Math.max(0, parseFloat(params.get("lune")) || 0)) : null;
const laLune = () => (LUNE_FORCEE !== null ? LUNE_FORCEE : phaseDeLaLune(maintenant()));
const HEURE_FORCEE = APERCU && params.has("heure") ? Math.min(24, Math.max(0, parseFloat(params.get("heure")) || 0)) : null;

let decalage = 0;
let heureChargee = false;
const coupe = new AbortController();
const patience = setTimeout(() => coupe.abort(), 5000);
const parti = Date.now();
const heureOk = fetch(location.pathname + '?h=' + parti, { method: 'HEAD', cache: 'no-store', signal: coupe.signal })
  .then((r) => {
    const serveur = Date.parse(r.headers.get('Date'));
    if (!(serveur > Date.UTC(2026, 0, 1))) return; // pas de date, ou une date impossible
    decalage = serveur + 500 - (parti + Date.now()) / 2;
  })
  .catch(() => {})
  .finally(() => { clearTimeout(patience); heureChargee = true; });

const maintenant = () => new Date(Date.now() + decalage);

const dateLettre = (l) => (l.ouverture ? new Date(l.ouverture) : new Date(ANNEE, l.mois - 1, l.jour));
const debutJour = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const NBSP = ' ';
const nomDate = (l) => `${l.jour === 1 ? "1er" : l.jour}${NBSP}${MOIS[l.mois - 1]}`;
function quand(l) {
  if (!l.ouverture) return nomDate(l);
  const d = dateLettre(l);
  return `${d.getDate()}${NBSP}${MOIS[d.getMonth()]}${NBSP}à${NBSP}${d.getHours()}h`;
}
const fr = (t) => t.replace(/ ([!?:;»])/g, NBSP + "$1").replace(/« /g, "«" + NBSP);
const joursAvant = (l) => Math.round((debutJour(dateLettre(l)) - debutJour(maintenant())) / UN_JOUR);
const ouverte = (l) => APERCU || dateLettre(l) <= maintenant();
const dansXJours = (n) => (n === 1 ? "demain" : n === 2 ? "après-demain" : `dans ${n} jours`);
const vibrer = (motif) => { if (navigator.vibrate) navigator.vibrate(motif); };

const heureLa = () => {
  if (HEURE_FORCEE !== null) return HEURE_FORCEE;
  if (NUIT_FORCEE !== null) return NUIT_FORCEE < 0.3 ? 12 : NUIT_FORCEE < 0.7 ? 18.2 : 23;
  return heureEnAsie(maintenant());
};
const jourActuel = () => (NUIT_FORCEE !== null ? 1 - NUIT_FORCEE : niveauDuJour(heureLa()));
const niveauNuit = () => 1 - jourActuel();

const lues = new Set(APERCU ? [] : JSON.parse(lire("sandy-lues") || "[]"));
function marquerLue(i) {
  lues.add(i);
  if (!APERCU) ecrire("sandy-lues", JSON.stringify([...lues]));
}


// mon téléphone sonne quand elle passe sur le site ou ouvre une lettre (appli ntfy, gratuite, sans compte).
// la notif dit juste ça : pas de lieu, pas d'appareil, rien d'autre. vide = rien ne part.
const PREVENIR = "https://ntfy.sh/ps-p8xlv7rx0pdnmebc7mjdx9";
const TROIS_HEURES = 3 * 60 * 60 * 1000;

// pas de notif pour mes tests : l'aperçu, un fichier local, ou un appareil où j'ai déjà ouvert l'aperçu
if (APERCU && location.protocol !== 'file:') ecrire('sandy-moi', '1');
const cestMoi = APERCU || location.protocol === "file:" || !!lire("sandy-moi");

let dejaPrevenu = {}; // la dernière notif de chaque sorte, pour pas me spammer
let aEnvoyer = [];
try {
  dejaPrevenu = JSON.parse(lire("sandy-prevenu")) || {};
  aEnvoyer = JSON.parse(lire("sandy-file")) || [];
} catch (e) {}
let envoiEnCours = false;

const ilYa = (ms) => {
  const min = Math.round(ms / 60000);
  if (min < 90) return `il y a ${min} min`;
  const h = Math.round(min / 60);
  return h < 36 ? `il y a ${h} h` : `il y a ${Math.round(h / 24)} jours`;
};

async function vider() {
  if (envoiEnCours || !PREVENIR || cestMoi) return;
  envoiEnCours = true;
  while (aEnvoyer.length) {
    const n = aEnvoyer[0];
    const retard = Date.now() - n.t;
    const texte = retard > 2 * 60000 ? `${n.m} (${ilYa(retard)})` : n.m;
    const adresse = `${PREVENIR}/publish?title=Pour%20Sandy&tags=${n.tags}&priority=${n.p}&message=${encodeURIComponent(texte)}`;
    const stop = new AbortController();
    const delai = setTimeout(() => stop.abort(), 8000);
    try {
      await fetch(adresse, { mode: 'no-cors', cache: 'no-store', referrerPolicy: 'no-referrer', signal: stop.signal });
    } catch (e) {
      break;
    } finally {
      clearTimeout(delai);
    }
    aEnvoyer.shift();
    ecrire('sandy-file', JSON.stringify(aEnvoyer));
  }
  envoiEnCours = false;
}

function prevenir(sujet, message, tags, priorite, silence) {
  if (!PREVENIR || cestMoi) return;
  try {
    const t = Date.now();
    // Limite de silence des notifications désactivée : chaque événement est envoyé.
    dejaPrevenu[sujet] = t;
    ecrire("sandy-prevenu", JSON.stringify(dejaPrevenu));
    aEnvoyer.push({ m: message, tags, p: priorite, t });
    if (aEnvoyer.length > 30) aEnvoyer.shift();
    ecrire("sandy-file", JSON.stringify(aEnvoyer));
    vider().catch(() => {});
  } catch (e) {}
}

let aToucheLEcran = false;
function prevenirVisite() {
  if (!aToucheLEcran) return;
  const premiere = !dejaPrevenu.visite;
  prevenir('visite', premiere ? "Sandy vient d'arriver sur le site." : 'Sandy est repassée sur le site.', 'eyes', 2, TROIS_HEURES);
}


const PLANE = `<path d="M0 -1.5 L14 -1.5 Q19 -1.5 20 0 Q19 1.5 14 1.5 L0 1.5 Z"/><path d="M8 -1.5 L4 -9 L6.5 -9 L12 -1.5 Z"/><path d="M8 1.5 L4 9 L6.5 9 L12 1.5 Z"/><path d="M1 -1.5 L-1 -4.5 L0.8 -4.5 L3.5 -1.5 Z"/><path d="M1 1.5 L-1 4.5 L0.8 4.5 L3.5 1.5 Z"/>`;
const TIMBRES = {
  plane:`<rect width="40" height="52" fill="#6fa8d6"/><circle cx="29" cy="13" r="6" fill="#ffd27a"/>
    <ellipse cx="9" cy="44" rx="7" ry="2.6" fill="#fff" opacity=".75"/><ellipse cx="31" cy="38" rx="6" ry="2.2" fill="#fff" opacity=".6"/>
    <path d="M3 49 Q9 42 13 36" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="2 2"/>
    <g transform="translate(13 35) rotate(-32) scale(1.15)" fill="#fff">${PLANE}</g>`,
  tuktuk:`<rect width="40" height="52" fill="#f2c14e"/>
    <path d="M1 28 L5 28 M2 32 L5 32" stroke="#1f2d55" stroke-width="1" stroke-linecap="round"/>
    <path d="M7 36 L7 24 Q7 20 11 20 L26 20 Q29 20 30 24 L33 31 L33 36 Z" fill="#c8372d"/>
    <path d="M6 20 L28 20 L28 18 Q28 16 26 16 L9 16 Q6 16 6 18 Z" fill="#1f2d55"/>
    <rect x="10" y="23" width="9" height="7" rx="1" fill="#f6e3a8"/><path d="M22 23 L27 23 L29 30 L22 30 Z" fill="#f6e3a8"/>
    <circle cx="32.5" cy="31.5" r="1.2" fill="#fff6c8"/>
    <circle cx="12" cy="37" r="3.5" fill="#1f2d55"/><circle cx="28" cy="37" r="3.5" fill="#1f2d55"/>
    <circle cx="12" cy="37" r="1.2" fill="#f2c14e"/><circle cx="28" cy="37" r="1.2" fill="#f2c14e"/>
    <rect x="3" y="40.6" width="34" height="1.2" fill="#1f2d55" opacity=".45"/>`,
  pagoda:`<rect width="40" height="52" fill="#e8735a"/><circle cx="28" cy="15" r="7" fill="#f7d08a"/>
    <path d="M6 11 q2 -2 4 0 q2 -2 4 0" fill="none" stroke="#5a1f1a" stroke-width=".8"/>
    <g fill="#5a1f1a"><rect x="19.4" y="8" width="1.2" height="6"/>
    <path d="M12 18 Q16 17 18 13 L22 13 Q24 17 28 18 Z"/><rect x="15" y="18" width="10" height="4"/>
    <path d="M9 26 Q14 25 16 22 L24 22 Q26 25 31 26 Z"/><rect x="14" y="26" width="12" height="5"/>
    <path d="M6 35 Q12 34 14 31 L26 31 Q28 34 34 35 Z"/><rect x="13" y="35" width="14" height="7"/>
    <rect x="3" y="42" width="34" height="2"/></g><rect x="18" y="37" width="4" height="5" fill="#e8735a"/>`,
  bowl:`<rect width="40" height="52" fill="#3f8f86"/>
    <path d="M14 23 q-2 -3 0 -6 q2 -3 0 -6 M20 21 q-2 -3 0 -6 q2 -3 0 -6 M26 23 q-2 -3 0 -6 q2 -3 0 -6" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M16 31 L31 12 M20 32 L34 15" stroke="#c99a5b" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M9 34 Q12 31 15 34 Q18 31 21 34 Q24 31 27 34 Q29.5 31.5 31 34" fill="none" stroke="#f2d48a" stroke-width="1.8"/>
    <path d="M6 34 L34 34 Q33 47 20 47 Q7 47 6 34 Z" fill="#f6efe1"/>
    <path d="M7.5 38 L32.5 38" stroke="#c8372d" stroke-width="1.5"/><rect x="15" y="46.5" width="10" height="1.8" fill="#f6efe1"/>`,
  home:`<rect width="40" height="52" fill="#e7a3b5"/>
    <path d="M1 4 Q4 8 7 11" fill="none" stroke="#fff" stroke-width="1" stroke-dasharray="2 2"/>
    <g transform="translate(8 12) rotate(28) scale(1.05)" fill="#fff">${PLANE}</g>
    <path d="M5 47 L5 39 L11 34 L17 39 L17 47 Z" fill="#fff" opacity=".9"/><rect x="9.5" y="42" width="3" height="5" fill="#e7a3b5"/>
    <g transform="translate(23 34) scale(1.3)"><path d="M4 8 C-2 3 1 -2 4 1.5 C7 -2 10 3 4 8 Z" fill="#c8372d"/></g>`
};
const dessinTimbre = (k) => `<svg viewBox="0 0 40 52">${TIMBRES[k]}<rect x="2" y="2" width="36" height="48" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width=".6"/></svg>`;

const cachet = (l, i) => `
<svg class="pm" viewBox="0 0 96 58">
  <circle cx="27" cy="29" r="22" fill="none" stroke="currentColor" stroke-width="1.6"/>
  <path id="pt${i}" d="M10.2 29 A16.8 16.8 0 0 1 43.8 29" fill="none"/>
  <path id="pb${i}" d="M7.5 29 A19.5 19.5 0 0 0 46.5 29" fill="none"/>
  <text font-size="5.6" letter-spacing="1.2"><textPath href="#pt${i}" xlink:href="#pt${i}" startOffset="50%" text-anchor="middle">ASIE</textPath></text>
  <text font-size="5.6" letter-spacing="1.2"><textPath href="#pb${i}" xlink:href="#pb${i}" startOffset="50%" text-anchor="middle">${ANNEE}</textPath></text>
  <text x="27" y="32" text-anchor="middle" font-size="8.5" font-weight="600">${l.jour} ${MOIS_CACHET[l.mois - 1]}</text>
  <path d="M50 17 q5.5 -3.5 11 0 t11 0 t11 0 t11 0 M50 25 q5.5 -3.5 11 0 t11 0 t11 0 t11 0 M50 33 q5.5 -3.5 11 0 t11 0 t11 0 t11 0 M50 41 q5.5 -3.5 11 0 t11 0 t11 0 t11 0" fill="none" stroke="currentColor" stroke-width="1.3"/>
</svg>`;


const contourCire = (() => {
  const pts = [];
  for (let k = 0; k < 24; k++) {
    const a = (k / 24) * Math.PI * 2;
    const r = 27 + 1.9 * Math.sin(3 * a + 0.5) + 1.2 * Math.sin(7 * a + 1.3) + 0.7 * Math.sin(11 * a);
    pts.push([32 + Math.cos(a) * r, 32 + Math.sin(a) * r]);
  }
  return fermee(pts);
})();

function cachetCire(texte, couleur = "Rouge") {
  const or = couleur === "Or";
  const ombre = or ? "#5e3a0c" : "#561410";
  const clair = or ? "#fff2c2" : "#f4a398";
  const relief = or ? "#d9a441" : "#bf4036";
  const taille = String(texte).length > 1 ? 18 : 25;
  const chiffre = (dx, dy, fill, o) => `<text x="${32 + dx}" y="${41.5 + dy}" text-anchor="middle" font-family="Literata,Georgia,serif" font-size="${taille}" font-weight="600" fill="${fill}" fill-opacity="${o}">${texte}</text>`;
  return `<span class="seal"><svg class="cire" viewBox="0 0 64 64">
    <ellipse cx="35" cy="39" rx="27" ry="25" fill="#230604" fill-opacity=".28"/>
    <path d="${contourCire}" fill="url(#cire${couleur})"/>
    <path d="M38 53Q44 54 45 59Q46 65 41 65Q36 65 37 59Q37.5 56 38 53Z" fill="url(#cire${couleur})"/>
    <circle cx="32" cy="32" r="20" fill="none" stroke="${ombre}" stroke-opacity=".5" stroke-width="1.6" transform="translate(.7 .8)"/>
    <circle cx="32" cy="32" r="20" fill="none" stroke="${clair}" stroke-opacity=".5" stroke-width="1.4" transform="translate(-.6 -.7)"/>
    ${chiffre(0.9, 1, ombre, 0.85)}${chiffre(-0.6, -0.7, clair, 0.7)}${chiffre(0, 0, relief, 1)}
    <ellipse cx="22" cy="19" rx="10" ry="4.8" fill="url(#cireBrille)" transform="rotate(-34 22 19)"/>
  </svg><svg class="anneau" viewBox="0 0 70 70"><circle cx="35" cy="35" r="32"/></svg><svg class="crack" viewBox="0 0 50 50"><path d="M37 3 L33 13 L39 21 L32 31 L37 39 L33 48" fill="none" stroke="#3d0f0b" stroke-width="2.4" stroke-linejoin="round" stroke-opacity=".6"/><path d="M38.5 3 L34.5 13 L40.5 21 L33.5 31 L38.5 39 L34.5 48" fill="none" stroke="#f6d9d2" stroke-width=".8" stroke-opacity=".5"/></svg></span>`;
}

// le dos de l'enveloppe : les plis des rabats (un peu d'ombre et de lumière sur le papier)
const plis = `<svg class="plis" viewBox="0 0 160 110" preserveAspectRatio="none">
  <path d="M0 0L80 55L0 110Z" fill="#46371e" fill-opacity=".05"/>
  <path d="M160 0L80 55L160 110Z" fill="#46371e" fill-opacity=".075"/>
  <path d="M0 110L80 55L160 110Z" fill="#fff" fill-opacity=".4"/>
  <path d="M0 110L80 55L160 110" fill="none" stroke="#46371e" stroke-opacity=".2" stroke-width="1" vector-effect="non-scaling-stroke" transform="translate(0 -1.3)"/>
  <path d="M0 110L80 55L160 110" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="1" vector-effect="non-scaling-stroke"/>
</svg>`;

const rabat = (texte, couleur) => `<span class="flap"><svg class="bords" viewBox="0 0 160 55" preserveAspectRatio="none">
  <path d="M0 0L80 55L160 0" fill="none" stroke="#fff" stroke-opacity=".95" stroke-width="1.2" vector-effect="non-scaling-stroke"/>
  <path d="M0 0L80 55L160 0" fill="none" stroke="#46371e" stroke-opacity=".16" stroke-width="1" vector-effect="non-scaling-stroke" transform="translate(0 1.3)"/>
</svg>${cachetCire(texte, couleur)}</span>`;

const MOIS_COURT = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
function etiquette(l) {
  const d = dateLettre(l);
  const bas = l.ouverture ? 106 : 98;
  const heure = l.ouverture ? `<text x="32" y="98" text-anchor="middle" font-size="11" fill="#6b4a22">à ${d.getHours()}h</text>` : '';
  return `<span class="etiquette"><svg viewBox="0 0 64 ${bas + 2}" width="64" height="${bas + 2}">
    <path d="M52 -14C50 0 36 8 31 24" fill="none" stroke="#efe3c6" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M52 -14C48 2 34 10 33 24" fill="none" stroke="#b9935c" stroke-width="1" stroke-linecap="round" stroke-opacity=".7"/>
    <path d="M23 16H41L57 31V${bas - 4}Q57 ${bas} 53 ${bas}H11Q7 ${bas} 7 ${bas - 4}V31Z" fill="url(#kraft)" stroke="#9f7d48" stroke-width=".9" stroke-linejoin="round"/>
    <path d="M32 19.6a7.6 7.6 0 1 0 .01 0ZM32 24a3.2 3.2 0 1 1-.01 0Z" fill="#f4ead2" stroke="#9f7d48" stroke-width=".7" fill-rule="evenodd"/>
    <g font-family="Patrick Hand,Chalkboard SE,Bradley Hand,cursive" fill="#5a3b17" text-anchor="middle">
      <text x="32" y="45" font-size="9.8">pas avant le</text>
      <text x="32" y="72" font-size="30" fill="#a32d24" transform="rotate(-4 32 66)">${d.getDate()}</text>
      <text x="32" y="86" font-size="15">${MOIS_COURT[d.getMonth()]}</text>
      ${heure}
    </g>
  </svg></span>`;
}


document.addEventListener("click", (e) => {
  if (e.target.closest("button, .env, .overlay, .portail, .bon-voile, .ticket, #lanterns, #boxes")) return;
  reveillerSons();
  if (toucherLac(e.clientX, e.clientY)) return;
  lacherLanterne(e.clientX, e.clientY);
});

function poserMots() {
  const lac = $("#paysage");
  if (lac && !lac.querySelector(".ecrit")) lac.insertAdjacentHTML("beforeend", `<p class="ecrit ecrit-lac">${fr("Essaye de faire une offrande au lac.")}</p>`);
  const scene = bande(1);
  const plan = scene && scene.querySelector(".plan");
  if (plan && !plan.querySelector(".ecrit")) {
    plan.insertAdjacentHTML("beforeend", `<p class="ecrit ecrit-ciel"><span class="m-jour">${fr("Même en plein jour, une lanterne peut partir, touche le ciel.")}</span><span class="m-nuit">${fr("Un vœu ? Touche le ciel.")}</span></p>`);
  }
}


function papillon(cx, cy, i) {
  return `<g transform="translate(${cx} ${cy}) scale(1 .6)" class="papillon lum"><g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="${r1(8 + i * 1.7)}s" begin="${r1(-i * 2.3)}s" repeatCount="indefinite"/><g transform="translate(${21 + (i % 2) * 5} 0)"><g class="ailes"><path transform="scale(1.4)" d="M0 0Q-2.4 -2.6 -4.4 -1.1Q-3.6 1.6 0 .8ZM0 0Q2.4 -2.6 4.4 -1.1Q3.6 1.6 0 .8Z" fill="#fff0d2" opacity=".92"/></g><ellipse rx=".55" ry="1.5" fill="#6b4a3a"/></g></g></g>`;
}

function dessinerLanternes(allumer = []) {
  let svg = `<defs>${TEINTES.map((t, i) => `
    <radialGradient id="lg${i}" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="${t.fil[0]}"/><stop offset=".45" stop-color="${t.fil[1]}"/><stop offset="1" stop-color="${t.fil[2]}"/></radialGradient>
    <radialGradient id="lh${i}"><stop offset="0" stop-color="${t.halo[0]}" stop-opacity=".6"/><stop offset=".5" stop-color="${t.halo[1]}" stop-opacity=".2"/><stop offset="1" stop-color="${t.halo[1]}" stop-opacity="0"/></radialGradient>`).join('')}
  </defs>
  <path class="trait" d="M0 10 Q180 70 360 10" fill="none" stroke-width="1"/>`;

  lettres.forEach((l, i) => {
    const t = (i + 1) / 6;
    const x = 360 * t;
    const y = 10 + 120 * t * (1 - t);
    const allumee = ouverte(l) && lues.has(i);
    const a = allumer.find((o) => o.i === i);
    const delai = a ? `${a.delai}s, ${-i * 1.1}s` : `${-i * 1.1}s`;
    svg += `<g class="lan${allumee ? ' allumee' : ''}${a ? ' ignite' : ''}" data-i="${i}" style="transform-origin:${x}px ${y}px;animation-delay:${delai}">
      ${allumee ? `<circle class="lum" cx="${x}" cy="${y + 24}" r="32" fill="url(#lh${i})"/>` : ''}
      <rect x="${x - 16}" y="${y}" width="32" height="50" fill="transparent"/>
      <line class="trait" x1="${x}" y1="${y}" x2="${x}" y2="${y + 7}"/>
      <rect x="${x - 5}" y="${y + 6}" width="10" height="3.5" rx="1" fill="#2a1a24"/>
      <ellipse cx="${x}" cy="${y + 22}" rx="12" ry="13" fill="${allumee ? `url(#lg${i})` : '#4a2b48'}"/>
      <path d="M${x - 6} ${y + 10} Q${x - 11} ${y + 22} ${x - 6} ${y + 34} M${x} ${y + 9} L${x} ${y + 35} M${x + 6} ${y + 10} Q${x + 11} ${y + 22} ${x + 6} ${y + 34}" fill="none" stroke="${allumee ? 'rgba(140,30,20,.35)' : 'rgba(0,0,0,.25)'}" stroke-width=".8"/>
      <rect x="${x - 5}" y="${y + 33.5}" width="10" height="3.5" rx="1" fill="#2a1a24"/>
      <path d="M${x} ${y + 37} L${x} ${y + 47}" stroke="${allumee ? '#e0442f' : '#5a3550'}" stroke-width="2.2" stroke-linecap="round"/>
      ${allumee ? papillon(x, y + 22, i) : ''}
    </g>`;
  });
  $('#lanterns').innerHTML = svg;
}


let timerMessage;
let derniereTaquinerie = -1;

function message(txt) {
  $("#toast").textContent = fr(txt);
  $("#toast").classList.add("show");
  clearTimeout(timerMessage);
  timerMessage = setTimeout(() => $("#toast").classList.remove("show"), 2600);
}

function taquiner(l) {
  const phrases = [
    "Je t'ai dit, tu peux pas.",
    "Patiente, Sandy.",
    "Toujours pas.",
    `Reviens le ${quand(l)}, pas avant.`,
  ];
  let k;
  do { k = Math.floor(Math.random() * phrases.length); } while (k === derniereTaquinerie);
  derniereTaquinerie = k;
  message(phrases[k]);
}


function confettis(x, y, couleurs = ['#b8372f', '#ffb35c', '#f6efe1', '#24448c', '#ffd27a']) {
  if (!Element.prototype.animate) return;
  for (let k = 0; k < 24; k++) {
    const c = document.createElement('span');
    const taille = 4 + Math.random() * 6;
    const plat = Math.random() < 0.5;
    c.className = 'spark';
    c.style.cssText = `left:${x}px;top:${y}px;width:${taille}px;height:${plat ? taille / 2 : taille}px;background:${couleurs[k % couleurs.length]};border-radius:${plat ? '1px' : '50%'}`;
    document.body.appendChild(c);
    const angle = Math.random() * Math.PI * 2;
    const dist = 50 + Math.random() * 95;
    c.animate([
      { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist - 30}px)) rotate(${Math.random() * 360}deg) scale(.6)`, opacity: 0 },
    ], { duration: 700 + Math.random() * 450, easing: 'cubic-bezier(.15,.7,.3,1)' }).onfinish = () => c.remove();
  }
}


const pile = $('#pile');

const apparition = new IntersectionObserver((entrees) => {
  entrees.filter((e) => e.isIntersecting).forEach((e, k) => {
    e.target.style.transitionDelay = k * 0.12 + "s";
    e.target.classList.add("in");
    apparition.unobserve(e.target);
  });
}, { threshold: 0.15 });

function etat(l, i) {
  if (!ouverte(l)) return "locked";
  return lues.has(i) ? "read" : "ready";
}
function texteEnveloppe(l, e) {
  if (e === 'locked') {
    const prochaine = lettres.find((x) => !ouverte(x));
    return l === prochaine ? `À ouvrir le ${quand(l)}` : `À ouvrir le ${quand(l)} (${dansXJours(joursAvant(l))})`;
  }
  if (e === 'read') return `Lettre du ${nomDate(l)}`;
  return "Tu peux l'ouvrir";
}

function afficherEnveloppes(premiereFois = false, allumer = []) {
  dessinerLanternes(allumer);
  pile.classList.toggle("instant", !premiereFois);
  pile.innerHTML = "";

  lettres.forEach((l, i) => {
    const e = etat(l, i);
    // entre deux enveloppes, une petite scène qui annonce la suivante
    const scene = i > 0 ? bande(i) : null;
    if (scene) {
      pile.appendChild(scene);
      if (premiereFois) apparition.observe(scene);
      else scene.classList.add("in");
    }
    const li = document.createElement("li");
    li.dataset.i = i;
    li.innerHTML = `
      <button class="env ${e}">
        <span class="face">
          <span class="paper"><i>Sandy,</i></span>
          <span class="pocket">
            ${plis}
            <span class="when">${texteEnveloppe(l, e)}</span>
            <span class="title">${l.titre}</span>
            <span class="post">${cachet(l, i)}<span class="stamp">${dessinTimbre(l.timbre)}</span></span>
          </span>
          ${rabat(i + 1, i === lettres.length - 1 ? "Or" : "Rouge")}
        </span>
        ${e === "locked" ? etiquette(l) : ""}
      </button>`;
    const bouton = li.querySelector(".env");
    bouton.addEventListener("click", (ev) => {
      if (!bouton.classList.contains("ready") || ev.detail === 0) toucherEnveloppe(bouton, l, i);
    });
    maintenir(bouton, 900, {
      actif: () => bouton.classList.contains("ready") && !bouton.classList.contains("opening"),
      progres: (p) => appuyerCachet(bouton, p),
      fini: () => { appuyerCachet(bouton, 0); toucherEnveloppe(bouton, l, i); },
      court: () => message("Garde le doigt appuyé sur le cachet."),
    });
    pile.appendChild(li);
    if (premiereFois) apparition.observe(li);
    else li.classList.add("in");
  });

  if (!premiereFois) requestAnimationFrame(() => requestAnimationFrame(() => pile.classList.remove("instant")));
  reveillerBandes((k) => ouverte(lettres[k]));
  majAttente();
  demanderParallaxe();
}

function majEnveloppe(i) {
  const bouton = pile.querySelectorAll(".env")[i];
  if (!bouton) return;
  const e = etat(lettres[i], i);
  bouton.className = `env ${e}`;
  bouton.querySelector(".when").textContent = texteEnveloppe(lettres[i], e);
}

function majAttente() {
  const note = $('#waiting');
  const pasLues = lettres.map((l, i) => i).filter((i) => ouverte(lettres[i]) && !lues.has(i));
  if (!pasLues.length) { note.hidden = true; return; }
  note.hidden = false;
  note.innerHTML = `${pasLues.length === 1 ? "Une lettre t'attend" : pasLues.length + " lettres t'attendent"}<svg viewBox="0 0 14 14"><path d="M7 2v9M3 7l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  note.onclick = () => pile.querySelectorAll('.env')[pasLues[0]].scrollIntoView({ behavior: 'smooth', block: 'center' });
}


const FICHIER_PAPIER = 'papier.wav';
const NIVEAU_FOND = 1;
let son = lire("sandy-son") !== "off";
let audio = null;
let sortie = null;
let grillons = null;
let grillonsJusqua = 0;
let papierSon = null;
let coupeSon = 0;

const papierBrut = fetch(FICHIER_PAPIER).then((r) => r.arrayBuffer()).catch(() => null);

function fabriquerFond(ctx, dest) {
  const bus = ctx.createGain();
  bus.gain.value = 0;
  bus.connect(dest);
  bus.gain.setTargetAtTime(0.25 * NIVEAU_FOND, ctx.currentTime + 0.3, 1.8);
  const g = ctx.createGain();
  g.connect(bus);
  return g;
}

function trille(ctx, dest, t, frequence, pan) {
  const osc = ctx.createOscillator();
  osc.frequency.value = frequence;
  const amp = ctx.createGain();
  amp.gain.setValueAtTime(0, t);
  for (let p = 0; p < 3; p++) {
    const d = t + p * 0.05;
    amp.gain.setValueAtTime(0, d);
    amp.gain.linearRampToValueAtTime(0.036, d + 0.014);
    amp.gain.linearRampToValueAtTime(0, d + 0.036);
  }
  osc.connect(amp);
  if (ctx.createStereoPanner) {
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    amp.connect(p);
    p.connect(dest);
  } else {
    amp.connect(dest);
  }
  osc.start(t);
  osc.stop(t + 0.2);
}

function programmerGrillons(ctx, dest, de, jusqua) {
  let t = de;
  while (t < jusqua) {
    t += 3 + Math.random() * 7;
    const frequence = 3400 + Math.random() * 500;
    const pan = Math.random() * 1.6 - 0.8;
    const fois = 3 + Math.floor(Math.random() * 5);
    for (let k = 0; k < fois; k++) trille(ctx, dest, t + k * 0.34, frequence, pan);
    t += fois * 0.34;
  }
  return t;
}

function piaf(ctx, dest, t, base, pan) {
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  amp.gain.setValueAtTime(0, t);
  const notes = 3 + Math.floor(Math.random() * 3);
  let d = t;
  for (let k = 0; k < notes; k++) {
    const f = base * (1 + (k % 2 ? 0.1 : 0) + Math.random() * 0.06);
    osc.frequency.setValueAtTime(f, d);
    osc.frequency.exponentialRampToValueAtTime(f * 1.28, d + 0.07);
    amp.gain.setValueAtTime(0, d);
    amp.gain.linearRampToValueAtTime(0.034, d + 0.02);
    amp.gain.linearRampToValueAtTime(0, d + 0.09);
    d += 0.14 + Math.random() * 0.05;
  }
  osc.connect(amp);
  if (ctx.createStereoPanner) {
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    amp.connect(p);
    p.connect(dest);
  } else {
    amp.connect(dest);
  }
  osc.start(t);
  osc.stop(d + 0.1);
  return d - t;
}

function programmerOiseaux(ctx, dest, de, jusqua) {
  let t = de;
  while (t < jusqua) {
    t += 5 + Math.random() * 9;
    t += piaf(ctx, dest, t, 2900 + Math.random() * 1800, Math.random() * 1.6 - 0.8);
  }
  return t;
}

setInterval(() => {
  if (!audio || !grillons || audio.state !== "running" || !son) return;
  if (grillonsJusqua < audio.currentTime + 20) {
    const programmer = niveauNuit() > 0.5 ? programmerGrillons : programmerOiseaux;
    grillonsJusqua = programmer(audio, grillons, Math.max(grillonsJusqua, audio.currentTime), audio.currentTime + 40);
  }
}, 8000);

function feuilleDePapier(ctx, dest, buf, sens, t) {
  const source = ctx.createBufferSource();
  source.buffer = buf;
  const doux = ctx.createBiquadFilter();
  doux.type = 'lowpass';
  doux.frequency.value = 4200;
  const volume = ctx.createGain();
  source.connect(doux);
  doux.connect(volume);
  volume.connect(dest);
  if (sens === 'rentre') {
    volume.gain.setValueAtTime(0, t);
    volume.gain.linearRampToValueAtTime(0.5, t + 0.08);
    volume.gain.linearRampToValueAtTime(0, t + 0.5);
    source.start(t, 0.22, 0.52);
  } else {
    volume.gain.value = 0.85;
    source.start(t);
  }
}

let enAttente = null;

function jouer(sens) {
  if (!son) return;
  if (!audio || audio.state !== "running" || !papierSon) {
    enAttente = { sens, avant: Date.now() + 2500 };
    return;
  }
  feuilleDePapier(audio, sortie, papierSon, sens, audio.currentTime);
}

function rattraper() {
  const a = enAttente;
  enAttente = null;
  if (a && Date.now() < a.avant) jouer(a.sens);
}

function reprendre() {
  Promise.resolve(audio.resume()).then(rattraper, () => {});
}
function mettreEnPause() {
  Promise.resolve(audio.suspend()).catch(() => {});
}

let sonImpossible = false;

function creerAudio() {
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC || sonImpossible) return;
  try {
    try { if (navigator.audioSession) navigator.audioSession.type = 'ambient'; } catch (e) {}
    audio = new AC();
    sortie = audio.createGain();
    sortie.gain.value = son ? 1 : 0;
    sortie.connect(audio.destination);
    papierBrut.then((brut) => {
      if (brut) audio.decodeAudioData(brut, (buf) => { papierSon = buf; rattraper(); }, () => {});
    });
    reprendre();
    setTimeout(() => {
      try {
        grillons = fabriquerFond(audio, sortie);
        grillonsJusqua = audio.currentTime + 5;
      } catch (e) {}
    }, 80);
  } catch (e) {
    sonImpossible = true;
    audio = null;
  }
}

function reveillerSons() {
  if (!son) return;
  if (!audio) creerAudio();
  else if (audio.state !== "running") reprendre();
}
['click', 'touchend'].forEach((ev) => document.addEventListener(ev, reveillerSons, true));

document.addEventListener("visibilitychange", () => {
  if (!audio) return;
  if (document.hidden) mettreEnPause();
  else if (son) reprendre();
});

function reglerVolume() {
  if (!audio) return;
  sortie.gain.cancelScheduledValues(audio.currentTime);
  sortie.gain.setTargetAtTime(son ? 1 : 0, audio.currentTime, son ? 0.05 : 0.12);
  clearTimeout(coupeSon);
  if (!son) coupeSon = setTimeout(() => { if (!son) mettreEnPause(); }, 900);
}

function dessinerBoutonSon() {
  $("#sound").innerHTML = `<svg viewBox="0 0 24 24"><path d="M4 9h3l4-4v14l-4-4H4z" fill="currentColor"/>${son
    ? '<path d="M15 9.5a3.5 3.5 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'
    : '<path d="M15.5 9.5l5 5M20.5 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'}</svg>`;
}

$('#sound').addEventListener('click', () => {
  son = !son;
  ecrire('sandy-son', son ? 'on' : 'off');
  dessinerBoutonSon();
  reveillerSons();
  reglerVolume();
});
dessinerBoutonSon();


const NIVEAU_EFFETS = 1;
let bruitBlanc = null;

function bruitPourEffets(ctx) {
  if (!bruitBlanc || bruitBlanc.sampleRate !== ctx.sampleRate) {
    const n = Math.round(ctx.sampleRate * 2.4);
    bruitBlanc = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = bruitBlanc.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  }
  return bruitBlanc;
}

function souffleGlissant(ctx, dest, t, de, vers, duree, pic, montee = 0.15) {
  const source = ctx.createBufferSource();
  source.buffer = bruitPourEffets(ctx);
  const filtre = ctx.createBiquadFilter();
  filtre.type = 'bandpass';
  filtre.Q.value = 1.1;
  filtre.frequency.setValueAtTime(de, t);
  filtre.frequency.exponentialRampToValueAtTime(vers, t + duree);
  const volume = ctx.createGain();
  volume.gain.setValueAtTime(0.0001, t);
  volume.gain.exponentialRampToValueAtTime(pic, t + duree * montee);
  volume.gain.exponentialRampToValueAtTime(0.0001, t + duree);
  source.connect(filtre);
  filtre.connect(volume);
  volume.connect(dest);
  source.start(t, Math.random() * 0.4, duree + 0.05);
}

function noteCourte(ctx, dest, t, de, vers, duree, pic) {
  const osc = ctx.createOscillator();
  osc.frequency.setValueAtTime(de, t);
  if (vers !== de) osc.frequency.exponentialRampToValueAtTime(vers, t + duree * 0.6);
  const volume = ctx.createGain();
  volume.gain.setValueAtTime(0.0001, t);
  volume.gain.exponentialRampToValueAtTime(pic, t + 0.006);
  volume.gain.exponentialRampToValueAtTime(0.0001, t + duree);
  osc.connect(volume);
  volume.connect(dest);
  osc.start(t);
  osc.stop(t + duree + 0.05);
}

function fabriquerEffet(ctx, dest, nom, o, t) {
  const k = NIVEAU_EFFETS;
  if (ctx.createStereoPanner) {
    const panneau = ctx.createStereoPanner();
    panneau.pan.setValueAtTime(o.de || 0, t);
    if (o.vers !== undefined) panneau.pan.linearRampToValueAtTime(o.vers, t + 1.2);
    panneau.connect(dest);
    dest = panneau;
  }
  if (nom === 'fusee') {
    souffleGlissant(ctx, dest, t, 500, 1900, o.duree || 0.7, 0.08 * k, 0.9);
  } else if (nom === 'eclat') {
    noteCourte(ctx, dest, t, 170, 48, 0.3, 0.2 * k);
    souffleGlissant(ctx, dest, t, 3800, 2600, o.sorte === 2 ? 1.1 : 0.5, 0.07 * k, 0.04);
    if (o.sorte === 2) for (let n = 0; n < 7; n++) souffleGlissant(ctx, dest, t + 0.25 + Math.random() * 1.1, 5400, 4600, 0.03, 0.06 * k, 0.2);
  } else if (nom === 'goutte') {
    noteCourte(ctx, dest, t, 900, 420, 0.17, 0.12 * k);
    noteCourte(ctx, dest, t + 0.13, 700, 330, 0.15, 0.06 * k);
  } else if (nom === 'tampon') {
    noteCourte(ctx, dest, t, 150, 55, 0.16, 0.22 * k);
    souffleGlissant(ctx, dest, t, 900, 500, 0.08, 0.05 * k, 0.01);
  } else if (nom === 'voeu') {
    [[1319, 0.05], [1760, 0.04], [2637, 0.03]].forEach(([f, pic], n) => noteCourte(ctx, dest, t + n * 0.09, f, f, 1.2, pic * k));
  }
}

function jouerEffet(nom, o = {}) {
  if (!son || !NIVEAU_EFFETS || !audio || audio.state !== 'running' || !sortie) return;
  try {
    fabriquerEffet(audio, sortie, nom, o, audio.currentTime + (o.dans || 0) + 0.02);
  } catch (e) {}
}


const DETAILS = {
  klaxon: { dit: ["Pouet pouet !", "Prix d'ami, madame.", "Ne paie jamais le premier prix."] },
  cloche: { dit: ["Fais un vœu.", "Garde-le pour toi.", "T'es sûre de ton vœu ?", "Je regarde pas."] },
  grill: { dit: ["Bavette de veau. Évidemment.", "Une pour moi aussi.", "Pas trop cuite, hein."] },
  chat: { dit: ["Prrr.", "Miaou.", "Il a faim. Comme moi."] },
  tour: { dit: ["Atterrissage autorisé.", "Piste dégagée, Sandy.", "Bon retour."] },
  avion: { dit: ["Bien reçu.", "Ceinture attachée ?"] },
};

let trouves = [];
if (!APERCU) { try { trouves = JSON.parse(lire("sandy-details") || "[]"); } catch (e) {} }
const styleTrouves = document.createElement("style");
document.head.appendChild(styleTrouves);
function majTrouves() {
  styleTrouves.textContent = trouves.length ? trouves.map((a) => `.etincelle[data-act="${a}"]`).join(",") + "{display:none}" : "";
}
majTrouves();

const retours = {};
function rejouer(el, classe, duree) {
  if (!el) return;
  clearTimeout(retours[classe]);
  el.classList.remove(classe);
  void el.offsetWidth;
  el.classList.add(classe);
  retours[classe] = setTimeout(() => el.classList.remove(classe), duree);
}

let bulle = null;
let finBulle = 0;
function dire(ancre, texte) {
  clearTimeout(finBulle);
  if (bulle) bulle.remove();
  const b = (bulle = document.createElement("div"));
  b.className = "bulle";
  b.textContent = fr(texte);
  document.body.appendChild(b);
  const suivre = () => {
    if (bulle !== b) return;
    const r = ancre.getBoundingClientRect();
    const w = b.offsetWidth;
    const centre = r.left + r.width / 2;
    const x = Math.max(8, Math.min(window.innerWidth - w - 8, centre - w / 2));
    b.style.left = Math.round(x) + "px";
    b.style.top = Math.max(8, Math.round(r.top - b.offsetHeight - 9)) + "px";
    b.style.setProperty("--q", Math.round(Math.max(16, Math.min(w - 16, centre - x))) + "px");
    requestAnimationFrame(suivre);
  };
  suivre();
  finBulle = setTimeout(() => {
    b.classList.add("part");
    setTimeout(() => { if (bulle === b) bulle = null; b.remove(); }, 520);
  }, 2600);
}

const derniere = {};
pile.addEventListener('click', (e) => {
  const c = e.target.closest('.cible');
  if (!c) return;
  e.stopPropagation();
  reveillerSons();
  const act = c.getAttribute('data-act');
  const d = DETAILS[act];
  if (!d) return;
  let texte = d.dit[0];
  if (trouves.indexOf(act) >= 0) {
    do { texte = d.dit[Math.floor(Math.random() * d.dit.length)]; } while (texte === derniere[act] && d.dit.length > 1);
  } else {
    trouves.push(act);
    if (!APERCU) ecrire('sandy-details', JSON.stringify(trouves));
    majTrouves();
    if (tousTrouves()) donnerLeBon(c);
  }
  derniere[act] = texte;
  vibrer(12);
  dire(c, texte);
  rejouer(c.closest('.scene'), 'a-' + act, 2700);
});


const tousTrouves = () => Object.keys(DETAILS).every((a) => trouves.indexOf(a) >= 0);

function tamponOffert(id) {
  const rnd = aleatoire(311);
  let trous = "";
  for (let n = 0; n < 34; n++) trous += `<circle cx="${r1(rnd() * 120)}" cy="${r1(rnd() * 64)}" r="${r1(0.5 + rnd() * 1.6)}" fill="#000"/>`;
  return `<svg viewBox="0 0 120 64" font-family="Helvetica Neue,Arial,sans-serif"><defs><mask id="${id}"><rect width="120" height="64" fill="#fff"/>${trous}</mask></defs>
    <g mask="url(#${id})" fill="none" stroke="currentColor"><rect x="3" y="3" width="114" height="58" rx="8" stroke-width="3"/><rect x="8" y="8" width="104" height="48" rx="5" stroke-width="1"/>
    <text x="60" y="41" text-anchor="middle" font-size="24" font-weight="800" textLength="88" lengthAdjust="spacingAndGlyphs" fill="currentColor" stroke="none">OFFERT</text></g></svg>`;
}

function fabriquerBon(suffixe) {
  const rnd = aleatoire(70);
  let barres = "";
  for (let x = 3; x < 196; ) {
    const w = 0.8 + Math.floor(rnd() * 3) * 0.9;
    barres += `<rect x="${r1(x)}" y="0" width="${r1(w)}" height="22"/>`;
    x += w + 1 + rnd() * 2.2;
  }
  return `<div class="ticket">
    <div class="tk-haut">
      <span class="tk-petit">Bon pour</span>
      <b class="tk-gros">Resto <span class="insec">et/ou</span> activités de ton choix</b>
    </div>
    <div class="tk-bas">
      <div>
        <span class="tk-quand">à ton retour</span>
        <p>La capture d'écran est acceptée.</p>
      </div>
      <span class="tk-tampon">${tamponOffert("tmo" + suffixe)}</span>
      <svg class="tk-code" viewBox="0 0 200 22" preserveAspectRatio="none">${barres}</svg>
    </div>
  </div>`;
}

const sectionBon = document.createElement("section");
sectionBon.className = "bon";
sectionBon.hidden = true;
$("#passeport").after(sectionBon);

function afficherBon(neuf) {
  sectionBon.innerHTML = `<p class="bon-etiquette">Ta récompense</p>${fabriquerBon("s")}`;
  sectionBon.hidden = false;
  sectionBon.classList.toggle("nouveau", !!neuf);
  sectionBon.querySelector(".ticket").addEventListener("click", (e) => rejouer(e.currentTarget, "retampon", 1300));
}

const voileBon = document.createElement("div");
voileBon.className = 'bon-voile';
voileBon.innerHTML = `<canvas class="feux"></canvas><p class="bon-titre">Tu les as tous trouvés.</p><div class="bon-place"></div><button class="done bon-ok" type="button">Je le garde</button>`;
document.body.appendChild(voileBon);
let bonOuvertA = 0;

function montrerBon() {
  voileBon.querySelector(".bon-place").innerHTML = fabriquerBon("v");
  voileBon.classList.remove("joue");
  voileBon.classList.add("show");
  void voileBon.offsetWidth;
  voileBon.classList.add("joue");
  feuDArtifice(voileBon.querySelector(".feux"));
  bonOuvertA = Date.now();
  vibrer([25, 70, 25]);
  if (!APERCU) ecrire("sandy-bon", "1");
}

function fermerBon() {
  if (Date.now() - bonOuvertA < 1300 || voileBon.classList.contains("closing")) return;
  voileBon.classList.add("closing");
  setTimeout(() => {
    arreterFeux();
    voileBon.classList.remove("show", "closing", "joue");
    afficherBon(true);
  }, 320);
}
voileBon.addEventListener("click", (e) => {
  if (e.target === voileBon || e.target.closest(".bon-ok")) fermerBon();
});

let bonDonne = false;
function donnerLeBon(ancre) {
  if (bonDonne) return;
  bonDonne = true;
  const r = ancre.getBoundingClientRect();
  setTimeout(() => { confettis(r.left + r.width / 2, r.top + r.height / 2); lacherLanternes(r.left + r.width / 2, r.top + r.height / 2); }, 500);
  setTimeout(montrerBon, 2300);
}

if (tousTrouves()) {
  bonDonne = true;
  afficherBon(false);
  if (!lire("sandy-bon") && !APERCU) setTimeout(montrerBon, 3500);
}


async function toucherEnveloppe(bouton, l, i) {
  if (!heureChargee) {
    await heureOk;
    bouton = pile.querySelectorAll(".env")[i] || bouton;
  }

  if (!ouverte(l)) {
    bouton.classList.remove("nope");
    void bouton.offsetWidth;
    bouton.classList.add("nope");
    vibrer([30, 40, 30]);
    taquiner(l);
    return;
  }
  if (bouton.classList.contains("opening")) return;

  const premiereFois = !bouton.classList.contains("read");
  bouton.classList.add("opening");
  const r = bouton.querySelector(".seal").getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  if (premiereFois) {
    confettis(cx, cy, TEINTES[i].confettis);
    vibrer(15);
  }
  ambiance(i, cx, cy);
  setTimeout(() => jouer("sort"), 450);
  setTimeout(() => ouvrirLettre(i, bouton.querySelector(".paper")), premiereFois ? 1450 : 1150);
}


function maintenir(el, duree, { actif, progres, fini, court }) {
  let debut = null;
  let avance = 0;
  let appuiLe = 0;
  const monter = (t) => {
    if (debut === null) return;
    const avant = avance;
    avance = Math.min(1, (t - debut) / duree);
    if ((avant < 0.4 && avance >= 0.4) || (avant < 0.75 && avance >= 0.75)) vibrer(8);
    progres(avance);
    if (avance >= 1) { debut = null; avance = 0; vibrer(30); fini(); return; }
    requestAnimationFrame(monter);
  };
  const descendre = () => {
    if (debut !== null || avance <= 0) return;
    avance = Math.max(0, avance - 0.07);
    progres(avance);
    if (avance > 0) requestAnimationFrame(descendre);
  };
  const lacher = () => {
    if (debut === null) return false;
    debut = null;
    requestAnimationFrame(descendre);
    return true;
  };
  el.addEventListener("pointerdown", (e) => {
    if (e.button > 0 || !actif()) return;
    reveillerSons();
    appuiLe = performance.now();
    debut = appuiLe - avance * duree;
    requestAnimationFrame(monter);
  });
  el.addEventListener("pointerup", () => {
    if (lacher() && performance.now() - appuiLe < 250 && court) court();
  });
  el.addEventListener("pointercancel", lacher);
  el.addEventListener("pointerleave", lacher);
  el.addEventListener("contextmenu", (e) => e.preventDefault());
}

function appuyerCachet(env, p) {
  const sceau = env.querySelector(".seal");
  env.classList.toggle("appui", p > 0);
  env.style.scale = p > 0 ? 1 - p * 0.03 : "";
  sceau.style.transform = p > 0 ? `translate(-50%,-62%) scale(${1 + p * 0.14}) rotate(${(Math.random() - 0.5) * p * 8}deg)` : "";
  sceau.querySelector(".anneau circle").style.strokeDashoffset = p > 0 ? 201 * (1 - p) : "";
  const fissure = Math.max(0, (p - 0.35) / 0.65);
  sceau.querySelectorAll(".crack path").forEach((c) => (c.style.strokeDashoffset = p > 0 ? 60 * (1 - fissure) : ""));
}


// compte à rebours (tableau des départs)
let nbOuvertes = lettres.filter(ouverte).length;

function majCompteur(t) {
  const label = $("#countLabel");
  const cases = $("#boxes");
  if (APERCU) { label.textContent = "Aperçu, toutes les enveloppes sont ouvertes."; cases.hidden = true; return; }
  const prochaine = lettres.find((l) => !ouverte(l));
  if (!prochaine) { label.textContent = "Toutes les lettres sont arrivées."; cases.hidden = true; return; }

  label.textContent = `La prochaine arrive le ${quand(prochaine)}`;
  cases.hidden = false;
  const s = Math.max(0, Math.floor((dateLettre(prochaine) - t) / 1000));
  cases.classList.toggle("bientot", s < 60);
  const grand = $("#decompte");
  if (s > 0 && s <= 10) {
    if (grand.dataset.v !== String(s)) {
      grand.dataset.v = s;
      grand.innerHTML = `<span>${s}</span>`;
      grand.classList.add("show");
      vibrer(6);
    }
  } else if (grand.classList.contains("show")) {
    grand.classList.remove("show");
    grand.dataset.v = "";
  }
  const j = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const valeurs = [
    [pad(j), j > 1 ? "jours" : "jour"],
    [pad(h), h > 1 ? "heures" : "heure"],
    [pad(m), "min"],
    [pad(s % 60), "sec"],
  ];

  if (!cases.children.length) {
    const palette = '<span class="t"><span class="hi"><i></i></span><span class="lo"><i></i></span></span>';
    cases.innerHTML = valeurs.map(() => `<span class="cg"><span class="cd">${palette}${palette}</span><span class="cu"></span></span>`).join("");
  }
  [...cases.children].forEach((groupe, k) => {
    const palettes = groupe.querySelectorAll(".t");
    [...valeurs[k][0]].forEach((chiffre, n) => basculer(palettes[n], chiffre));
    groupe.querySelector(".cu").textContent = valeurs[k][1];
  });
}

function basculer(p, v) {
  if (!p || p.dataset.v === v) return;
  const haut = p.querySelector('.hi i');
  const bas = p.querySelector('.lo i');
  const avant = p.dataset.v;
  p.dataset.v = v;
  if (avant === undefined || !p.animate) {
    haut.textContent = v;
    bas.textContent = v;
    return;
  }
  const tombe = document.createElement('span');
  const rabat = document.createElement('span');
  tombe.className = 'hi fl';
  tombe.innerHTML = `<i>${avant}</i>`;
  rabat.className = 'lo fl';
  rabat.innerHTML = `<i>${v}</i>`;
  rabat.style.transform = 'rotateX(90deg)';
  haut.textContent = v;
  p.append(tombe, rabat);
  tombe.animate([{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-90deg)' }], { duration: 150, easing: 'ease-in', fill: 'forwards' });
  rabat.animate([{ transform: 'rotateX(90deg)' }, { transform: 'rotateX(0deg)' }], { duration: 150, delay: 150, easing: 'ease-out', fill: 'forwards' })
    .onfinish = () => { bas.textContent = v; tombe.remove(); rabat.remove(); };
}

let jourAffiche = debutJour(maintenant()).getTime();

function chaqueSeconde() {
  const t = maintenant();
  reglerJour(jourActuel(), heureLa());
  poserLune(laLune());
  const nouveauJour = debutJour(t).getTime() !== jourAffiche;
  jourAffiche = debutJour(t).getTime();
  const n = lettres.filter(ouverte).length;
  if (n !== nbOuvertes) {
    const nouvelle = n > nbOuvertes;
    nbOuvertes = n;
    afficherEnveloppes();
    majTrajet();
    if (nouvelle) {
      // si elle attend devant la page, on fête l'arrivée
      message("Une nouvelle lettre vient d'arriver.");
      vibrer([20, 60, 20, 60, 40]);
      fete();
      lacherLanternes(innerWidth / 2, innerHeight + 40);
      // et on l'emmène devant l'enveloppe
      setTimeout(() => {
        const i = lettres.findIndex((l, k) => ouverte(l) && !lues.has(k));
        if (i >= 0 && !overlay.classList.contains("show")) pile.querySelectorAll(".env")[i].scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1600);
    }
  } else if (nouveauJour) {
    afficherEnveloppes();
    majTrajet();
  }
  majCompteur(t);
}

heureOk.then(chaqueSeconde);


const DEPART = new Date(ANNEE, 9, 12);
const DUREE = 70; // jours
const COURBE = "M16 40 C 96 0, 224 0, 304 40";

$("#route").innerHTML = `<defs><radialGradient id="rgl"><stop offset="0" stop-color="#ffb35c" stop-opacity=".55"/><stop offset="1" stop-color="#ffb35c" stop-opacity="0"/></radialGradient></defs>
  <path id="rAll" class="trait" d="${COURBE}" fill="none" stroke-width="1.4" stroke-dasharray="3 5" stroke-linecap="round"/>
  <path id="rDone" d="${COURBE}" fill="none" stroke="#ffb35c" stroke-width="2" stroke-linecap="round" stroke-dasharray="0 999"/>
  <g id="rMarks"></g>
  <text x="16" y="58" text-anchor="middle" class="rt">12 oct.</text>
  <text x="304" y="58" text-anchor="middle" class="rt">21 déc.</text>
  <g id="rPlane"><circle r="13" fill="url(#rgl)"/><g transform="translate(-10 0)" fill="#f6efe1">${PLANE}</g>
    <circle class="strobe" cx="-5.5" cy="-9" r="1.3" fill="#ff5a46"/><circle class="strobe" cx="-5.5" cy="9" r="1.3" fill="#fff" style="animation-delay:-.85s"/></g>`;

const trajet = $("#rAll");
const LONGUEUR = trajet.getTotalLength();

const joursDeVoyage = () => Math.round((debutJour(maintenant()) - DEPART) / UN_JOUR);
const avancement = () => (APERCU ? 37 / DUREE : Math.min(1, Math.max(0, joursDeVoyage() / DUREE)));

function texteTrajet() {
  if (APERCU) return 'Aperçu, jour 37 sur 70';
  const j = joursDeVoyage();
  if (j < 0) return 'Le voyage commence le 12 octobre';
  if (j === 0) return 'Jour du départ, bon vol';
  if (j < DUREE) return `Jour ${j} sur ${DUREE}`;
  if (j === DUREE) return "Jour 70, c'est le retour";
  return 'Voyage terminé, bienvenue à la maison';
}

function placerAvion(p) {
  p = Math.max(0, Math.min(1, p || 0));
  const pos = LONGUEUR * p;
  const a = trajet.getPointAtLength(pos);
  const b = trajet.getPointAtLength(p >= 1 ? pos - 1 : Math.min(LONGUEUR, pos + 1));
  let angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
  if (p >= 1) angle += 180;
  $('#rPlane').setAttribute('transform', `translate(${a.x.toFixed(2)} ${a.y.toFixed(2)}) rotate(${angle.toFixed(2)}) scale(.8)`);
  $('#rDone').setAttribute('stroke-dasharray', `${pos.toFixed(2)} ${(LONGUEUR + 10).toFixed(2)}`);
}

function dessinerEtapes() {
  $("#rMarks").innerHTML = lettres.map((l, i) => {
    const pt = trajet.getPointAtLength((LONGUEUR * Math.round((debutJour(dateLettre(l)) - DEPART) / UN_JOUR)) / DUREE);
    const e = etat(l, i);
    const couleur = e === "read" ? "#ffb35c" : e === "ready" ? "#f6efe1" : "#231f44";
    const contour = e === "locked" ? 'stroke="rgba(207,200,222,.6)" stroke-width="1.2"' : "";
    return `<circle cx="${pt.x}" cy="${pt.y}" r="3.6" fill="${couleur}" ${contour}/>`;
  }).join("");
}


function majTrajet(anime = false) {
  dessinerEtapes();
  $("#tripLabel").textContent = texteTrajet();
  const p = avancement();
  if (!anime || p === 0) { placerAvion(p); return; }
  placerAvion(0);
  setTimeout(() => {
    const debut = performance.now();
    const etape = (t) => {
      const x = Math.max(0, Math.min(1, (t - debut) / 1800));
      const doux = x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
      placerAvion(p * doux);
      if (x < 1) requestAnimationFrame(etape);
    };
    requestAnimationFrame(etape);
  }, 900);
}


function lacherLanternes(x, y, teinte) {
  const nb = innerWidth < 500 ? 26 : 36;
  for (let k = 0; k < nb; k++) {
    const proche = Math.random(); // 0 = loin, 1 = proche
    const depuisEnveloppe = k < nb * 0.45;
    envoler(
      depuisEnveloppe ? x + (Math.random() - 0.5) * 170 : Math.random() * innerWidth,
      depuisEnveloppe ? y + (Math.random() - 0.5) * 40 : innerHeight + 20 + Math.random() * 80,
      12 + proche * 20,
      0.55 + proche * 0.45,
      7500 - proche * 3000 + Math.random() * 1500,
      Math.random() * (depuisEnveloppe ? 500 : 1400),
      teinte
    );
  }
}

function envoler(x, y, taille, opacite, duree, delai, teinte) {
  if (!Element.prototype.animate) return;
  const hauteur = y + 160 + Math.random() * 120;
  const derive = (Math.random() - 0.5) * 70;
  const lanterne = document.createElement('span');
  lanterne.className = 'sky';
  lanterne.style.setProperty('--s', taille + 'px');
  if (teinte) {
    teinte.lanterne.forEach((c, k) => lanterne.style.setProperty('--c' + (k + 1), c));
    lanterne.style.setProperty('--lueur', teinte.lueur);
  }
  lanterne.style.left = x - taille / 2 + 'px';
  lanterne.style.top = y - taille * 0.65 + 'px';
  $('#sky').appendChild(lanterne);
  lanterne.animate([
    { transform: 'translate(0,0) scale(.5)', opacity: 0 },
    { transform: `translate(${derive * 0.3}px, ${-hauteur * 0.12}px) scale(1)`, opacity: opacite, offset: 0.12 },
    { transform: `translate(${derive}px, ${-hauteur * 0.6}px) scale(.85)`, opacity: opacite, offset: 0.6 },
    { transform: `translate(${-derive * 0.5}px, ${-hauteur}px) scale(.6)`, opacity: 0 },
  ], { duration: duree, delay: delai, easing: 'cubic-bezier(.33,.1,.5,1)', fill: 'backwards' })
    .onfinish = () => lanterne.remove();
}

function ambiance(i, x, y) {
  const t = TEINTES[i];
  lacherLanternes(x, y, t);
  if (t.effet === "pluie") pluie();
  if (t.effet === "gloire") gloire(x, y);
  if (t.effet === "escarbilles") escarbilles();
  if (t.effet === "aurore") aurore();
}

const nbParticules = (normal) => (document.documentElement.classList.contains("sobre") ? Math.round(normal / 2) : normal);

function pluie() {
  if (!Element.prototype.animate) return;
  for (let k = 0, nb = nbParticules(70); k < nb; k++) {
    const goutte = document.createElement('span');
    goutte.className = 'goutte';
    goutte.style.cssText = `left:${Math.random() * (innerWidth + 140) - 20}px;top:-40px;height:${16 + Math.random() * 16}px`;
    $('#sky').appendChild(goutte);
    const chute = innerHeight + 90;
    goutte.animate([
      { transform: 'translate(0,0) rotate(14deg)', opacity: 0 },
      { opacity: 0.8, offset: 0.12 },
      { transform: `translate(${-chute * 0.25}px, ${chute}px) rotate(14deg)`, opacity: 0.55 },
    ], { duration: 700 + Math.random() * 400, delay: Math.random() * 2000, easing: 'linear', fill: 'backwards' })
      .onfinish = () => goutte.remove();
  }
}

function gloire(x, y) {
  if (!Element.prototype.animate) return;
  const poser = (classe) => {
    const el = document.createElement("span");
    el.className = "gloire " + classe;
    el.style.cssText = `--x:${x}px;--y:${y}px;transform-origin:${x}px ${y}px`;
    $("#sky").appendChild(el);
    return el;
  };
  const halo = poser("halo");
  halo.animate([
    { transform: "scale(.12)", opacity: 0.95 },
    { transform: "scale(1.2)", opacity: 0 },
  ], { duration: 1900, easing: "cubic-bezier(.2,.7,.3,1)" }).onfinish = () => halo.remove();
  if (document.documentElement.classList.contains("sobre")) return;
  const rayons = poser("rayons");
  rayons.animate([
    { transform: "scale(.45)", opacity: 0 },
    { transform: "scale(.8)", opacity: 0.85, offset: 0.25 },
    { transform: "scale(1.15)", opacity: 0 },
  ], { duration: 3200, easing: "ease-out" }).onfinish = () => rayons.remove();
}

function escarbilles() {
  if (!Element.prototype.animate) return;
  const couleurs = ["#ffd9a0", "#ffb35c", "#fff0cc"];
  for (let k = 0, nb = nbParticules(40); k < nb; k++) {
    const braise = document.createElement("span");
    const t = 7 + Math.random() * 10;
    braise.className = "escarbille";
    braise.style.cssText = `left:${Math.random() * innerWidth}px;top:${innerHeight + 10}px;width:${t}px;height:${t}px;--b:${couleurs[k % couleurs.length]}`;
    $("#sky").appendChild(braise);
    const haut = innerHeight * (0.4 + Math.random() * 0.55);
    const balance = (Math.random() - 0.5) * 100;
    braise.animate([
      { transform: "translate(0,0)", opacity: 0 },
      { transform: `translate(${balance * 0.4}px, ${-haut * 0.2}px)`, opacity: 1, offset: 0.12 },
      { transform: `translate(${-balance * 0.5}px, ${-haut * 0.6}px)`, opacity: 0.85, offset: 0.6 },
      { transform: `translate(${balance}px, ${-haut}px)`, opacity: 0 },
    ], { duration: 3000 + Math.random() * 2500, delay: Math.random() * 1000, easing: "cubic-bezier(.3,.2,.4,1)", fill: "backwards" })
      .onfinish = () => braise.remove();
  }
}

function aurore() {
  if (!Element.prototype.animate) return;
  const voile = document.createElement('span');
  voile.className = 'aurore';
  $('#sky').appendChild(voile);
  voile.animate([
    { opacity: 0, transform: 'translateY(22%)' },
    { opacity: 1, transform: 'translateY(0)', offset: 0.22 },
    { opacity: 0.8, offset: 0.6 },
    { opacity: 0, transform: 'translateY(-6%)' },
  ], { duration: 5000, easing: 'ease-in-out' }).onfinish = () => voile.remove();
}

// toucher une lanterne allumée du fil : elle s'envole, puis une autre se rallume à sa place
$("#lanterns").addEventListener("click", (e) => {
  const g = e.target.closest(".lan");
  if (!g || g.classList.contains("partie")) return;
  if (!g.classList.contains("allumee")) {
    g.animate([{ transform: "rotate(0)" }, { transform: "rotate(16deg)" }, { transform: "rotate(-11deg)" }, { transform: "rotate(6deg)" }, { transform: "rotate(0)" }], { duration: 900, easing: "ease-out" });
    message("Elle s'allume quand tu lis sa lettre.");
    return;
  }
  reveillerSons();
  const r = g.getBoundingClientRect();
  envoler(r.left + r.width / 2, r.top + r.height * 0.5, 34, 1, 6500, 0, TEINTES[g.dataset.i]);
  g.classList.add("partie");
  setTimeout(() => g.classList.remove("partie"), 3200);
});


const overlay = $("#overlay");
const papier = $('#letter');
const lPs = document.createElement('p');
lPs.className = "ps";
lPs.hidden = true;
$("#lSign").after(lPs);
let lettreOuverte = -1;
let enTrainDeFermer = false;
let scrollAvant = 0;
let premiereLecture = false;

function bloquerScroll() {
  scrollAvant = window.scrollY;
  Object.assign(document.body.style, { position: "fixed", top: `-${scrollAvant}px`, left: "0", right: "0" });
}
function debloquerScroll() {
  Object.assign(document.body.style, { position: "", top: "", left: "", right: "" });
  window.scrollTo(0, scrollAvant);
}

function habillerFeuille(i) {
  const t = TEINTES[i];
  papier.style.setProperty("--ink", t.encre);
  papier.style.setProperty("--ink-soft", t.douce);
  papier.style.setProperty("--feuille", t.feuille);
  ["--bande-a", "--bande-b"].forEach((nom, k) => {
    if (t.bandes) papier.style.setProperty(nom, t.bandes[k]);
    else papier.style.removeProperty(nom);
  });
  $("#lFiligrane").innerHTML = FILIGRANES[t.motif];
  const nuit = niveauNuit().toFixed(2);
  papier.style.setProperty("--nuit", nuit);
  $("#backdrop").style.setProperty("--nuit", nuit);
}

function ouvrirLettre(i, feuille) {
  const l = lettres[i];
  lettreOuverte = i;
  premiereLecture = !lues.has(i);

  let html = "";
  try { html = dechiffrer(l); } catch (e) {}
  if (!html.trim().startsWith("<p>")) html = "<p>Oups, cette lettre n'a pas voulu s'ouvrir. Recharge la page et réessaie.</p>";

  $("#lTitle").textContent = l.titre;
  $("#lDate").textContent = `Le ${nomDate(l)}`;
  $("#lBody").innerHTML = html;
  $("#lSign").textContent = SIGNATURE;
  $("#lStamp").innerHTML = dessinTimbre(l.timbre);
  habillerFeuille(i);
  const ps = $("#lBody .ps");
  lPs.innerHTML = ps ? ps.innerHTML : "";
  lPs.hidden = !ps;
  if (ps) ps.remove();

  const ordre = [$("#lStamp"), $("#lTitle"), $("#lDate"), ...$("#lBody").children, $("#lSign")];
  if (ps) ordre.push(lPs);
  ordre.push($("#done"));
  ordre.forEach((el, k) => {
    el.style.animationDelay = 0.35 + k * 0.08 + "s";
  });
  let attente = 1.2;
  if (ps) {
    lPs.style.animationDelay = parseFloat(lPs.style.animationDelay) + attente + "s";
    attente += 0.9;
  }
  $("#done").style.animationDelay = parseFloat($("#done").style.animationDelay) + attente + "s";
  papier.classList.remove("anim");
  void papier.offsetWidth;
  papier.classList.add("anim");

  bloquerScroll();
  $("#backdrop").classList.add("show");
  overlay.classList.add("show");
  overlay.scrollTop = 0;
  if (feuille) agrandirFeuille(feuille);
  marquerLue(i);
  if (premiereLecture) prevenir("ouvre" + i, `Sandy ouvre la lettre ${i + 1} (${nomDate(l)}).`, "love_letter", 3, 6 * 60 * 60 * 1000);
  else prevenir("relit" + i, `Sandy relit la lettre ${i + 1}.`, "eyes", 3, TROIS_HEURES);
  setTimeout(() => {
    if (!overlay.classList.contains("show")) return;
    cielEnPause = true;
    document.documentElement.classList.add("lit");
  }, 700);
}

function versFeuille(feuille) {
  const a = feuille.getBoundingClientRect();
  const b = papier.getBoundingClientRect();
  return `translate(${a.left - b.left}px, ${a.top - b.top}px) scale(${a.width / b.width}, ${a.height / b.height})`;
}

function agrandirFeuille(feuille) {
  if (!papier.animate) return;
  papier.style.animation = "none";
  const depart = versFeuille(feuille);
  feuille.closest(".env").classList.add("parti");
  papier.animate([
    { transformOrigin: "0 0", transform: depart },
    { transformOrigin: "0 0", transform: getComputedStyle(papier).transform },
  ], { duration: 650, easing: "cubic-bezier(.2,.75,.2,1)" });
}

function fermerLettre() {
  if (!overlay.classList.contains("show") || enTrainDeFermer) return;
  enTrainDeFermer = true;
  reprendreCiel();
  $("#backdrop").classList.add("closing");
  setTimeout(() => jouer("rentre"), 100);

  const env = pile.querySelectorAll(".env")[lettreOuverte];
  const feuille = env && env.classList.contains("parti") ? env.querySelector(".paper") : null;
  let duree = 280;
  if (feuille && papier.animate) {
    duree = 480;
    const depart = getComputedStyle(papier).transform;
    papier.style.transition = "none";
    papier.style.transform = "none";
    const arrivee = versFeuille(feuille);
    papier.classList.add("range");
    overlay.classList.add("range");
    papier.animate([
      { transformOrigin: "0 0", transform: depart },
      { transformOrigin: "0 0", transform: arrivee },
    ], { duration: duree, easing: "cubic-bezier(.5,0,.3,1)", fill: "forwards" });
  } else {
    overlay.classList.add("closing");
    papier.classList.add("closing");
  }

  setTimeout(() => {
    overlay.classList.remove("show", "closing", "range");
    $("#backdrop").classList.remove("show", "closing");
    papier.classList.remove("closing", "range");
    papier.getAnimations().forEach((a) => a.cancel());
    papier.style.transform = "";
    papier.style.transition = "";
    papier.style.animation = "";
    debloquerScroll();
    majEnveloppe(lettreOuverte);
    if (premiereLecture) {
      dessinerLanternes([{ i: lettreOuverte, delai: 0.4 }]);
      dessinerEtapes();
      majPasseport();
      if (lettreOuverte === lettres.length - 1) setTimeout(() => document.body.classList.add("lever"), 900);
      premiereLecture = false;
    }
    majAttente();
    enTrainDeFermer = false;
  }, duree);
}

$("#close").addEventListener("click", fermerLettre);
$("#done").addEventListener("click", fermerLettre);
overlay.addEventListener("click", (e) => { if (e.target === overlay) fermerLettre(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fermerLettre(); });

let debutY = null;
let glisse = 0;
overlay.addEventListener("touchstart", (e) => {
  if (overlay.scrollTop > 0 || enTrainDeFermer) { debutY = null; return; }
  debutY = e.touches[0].clientY;
  glisse = 0;
  papier.style.transition = "none";
}, { passive: true });
overlay.addEventListener('touchmove', (e) => {
  if (debutY === null) return;
  glisse = e.touches[0].clientY - debutY;
  if (glisse > 0) papier.style.transform = `translateY(${glisse * 0.6}px)`;
}, { passive: true });
overlay.addEventListener('touchend', () => {
  if (debutY === null) return;
  debutY = null;
  papier.style.transition = 'transform .25s ease';
  if (glisse > 110) fermerLettre();
  else papier.style.transform = '';
});


const CONTINENT = "M272.7 0.0C272.5 2.2 273.0 9.3 271.5 13.2C270.0 17.2 266.2 20.4 264.0 23.7C261.8 26.9 260.8 29.8 258.4 32.7C256.0 35.6 252.4 38.5 249.6 41.1C246.8 43.6 244.6 45.9 241.5 48.0C238.3 50.1 234.2 52.2 230.8 53.6C227.5 55.0 223.5 56.3 221.4 56.4C219.4 56.5 219.9 54.1 218.3 54.3C216.8 54.5 213.4 56.8 212.1 57.8C210.7 58.7 211.4 58.5 210.2 59.9C208.9 61.2 205.6 64.1 204.6 66.1C203.5 68.1 205.4 70.1 203.9 71.7C202.5 73.3 197.9 74.4 195.8 75.9C193.7 77.4 191.8 79.6 191.4 80.7C191.0 81.9 192.4 81.7 193.3 82.8C194.2 84.0 195.8 86.1 197.1 87.7C198.3 89.3 199.8 90.5 200.8 92.6C201.8 94.7 202.6 97.8 203.0 100.2C203.4 102.7 203.4 105.6 203.0 107.2C202.6 108.8 201.6 109.2 200.5 110.0C199.4 110.7 197.9 111.2 196.4 111.7C194.9 112.2 193.4 112.2 191.4 112.8C189.4 113.3 185.9 115.2 184.5 114.8C183.2 114.5 183.2 112.4 183.3 110.7C183.4 108.9 185.3 106.5 185.2 104.4C185.1 102.3 182.7 100.0 182.7 98.1C182.7 96.3 185.8 94.3 185.2 93.3C184.5 92.2 180.8 92.5 178.9 91.9C177.0 91.3 174.4 90.9 173.9 89.8C173.4 88.6 175.7 86.7 175.8 84.9C175.9 83.2 175.4 80.6 174.5 79.3C173.7 78.1 172.8 77.3 170.8 77.3C168.8 77.3 165.8 78.2 162.6 79.3C159.5 80.5 153.4 84.1 151.7 84.2C150.0 84.3 151.6 81.7 152.6 80.0C153.6 78.4 157.1 76.2 157.6 74.5C158.2 72.7 157.0 70.3 155.8 69.6C154.5 68.9 152.4 69.3 150.1 70.3C147.8 71.3 144.7 73.9 142.0 75.9C139.3 77.8 136.1 80.5 133.9 82.1C131.7 83.8 128.3 84.1 128.9 85.6C129.4 87.1 134.9 89.8 137.0 91.2C139.1 92.6 139.6 93.8 141.4 94.0C143.1 94.1 145.4 92.0 147.6 91.9C149.8 91.8 152.4 92.9 154.5 93.3C156.6 93.6 159.4 93.3 160.1 94.0C160.9 94.7 160.9 96.0 158.9 97.4C156.9 98.8 151.3 100.5 148.3 102.3C145.2 104.2 141.6 106.5 140.8 108.6C139.9 110.7 142.1 112.6 143.3 114.8C144.4 117.0 146.1 119.5 147.6 121.8C149.2 124.1 151.3 126.9 152.6 128.8C154.0 130.6 155.5 131.7 155.8 132.9C156.1 134.2 154.7 135.3 154.5 136.4C154.3 137.6 155.2 138.9 154.5 139.9C153.8 140.9 149.7 141.8 150.1 142.7C150.6 143.6 156.1 144.1 157.0 145.5C158.0 146.9 156.3 149.1 155.8 151.0C155.2 153.0 155.2 155.0 153.9 157.3C152.5 159.6 149.5 162.6 147.6 165.0C145.8 167.3 143.7 169.0 142.6 171.2C141.6 173.4 143.0 176.1 141.4 178.2C139.7 180.3 135.1 181.8 132.6 183.7C130.1 185.7 128.2 188.3 126.4 190.0C124.5 191.7 123.4 193.0 121.4 194.2C119.3 195.3 116.1 196.2 113.9 197.0C111.6 197.8 109.5 198.4 107.6 199.1C105.7 199.8 104.5 200.6 102.6 201.1C100.7 201.7 98.6 201.8 96.3 202.5C94.0 203.2 91.0 203.6 88.8 205.3C86.6 207.1 84.5 212.4 83.2 213.0C81.9 213.6 82.1 210.2 81.3 208.8C80.6 207.4 80.3 205.4 78.8 204.6C77.4 203.8 74.7 203.7 72.6 203.9C70.5 204.2 68.2 204.9 66.3 206.0C64.4 207.2 63.1 209.3 61.3 210.9C59.5 212.5 56.7 213.4 55.7 215.8C54.6 218.1 54.3 221.9 55.0 224.8C55.8 227.7 58.2 230.5 60.1 233.2C61.9 235.8 64.4 239.1 66.3 240.8C68.2 242.6 69.9 241.6 71.3 243.6C72.8 245.6 74.1 249.4 75.1 252.6C76.1 255.9 77.0 260.3 77.3 263.1C77.5 265.9 77.0 267.4 76.6 269.4C76.3 271.3 76.5 273.1 75.1 274.9C73.7 276.8 70.4 279.2 68.2 280.5C66.0 281.8 63.3 281.4 61.9 282.6C60.6 283.7 61.8 285.6 60.1 287.4C58.3 289.3 53.2 293.6 51.3 293.7C49.4 293.8 49.6 290.1 48.8 288.1C48.0 286.2 47.5 283.2 46.3 281.9C45.0 280.6 42.7 281.9 41.3 280.5C39.8 279.1 39.0 275.5 37.5 273.5C36.1 271.6 34.2 269.8 32.5 268.7C30.9 267.5 28.9 267.6 27.5 266.6C26.2 265.5 25.3 263.6 24.4 262.4C23.5 261.2 22.8 259.7 21.9 259.6C21.0 259.5 19.3 260.5 18.8 261.7C18.2 262.9 18.9 264.6 18.5 266.6C18.0 268.5 17.0 271.0 16.3 273.5C15.5 276.1 14.1 279.3 13.8 281.9C13.4 284.4 13.6 286.5 14.4 288.8C15.2 291.2 17.7 293.7 18.8 295.8C19.8 297.9 19.7 299.6 20.6 301.4C21.6 303.1 22.4 304.6 24.4 306.2C26.4 307.9 30.1 309.3 32.5 311.1C34.9 313.0 37.5 315.1 38.8 317.4C40.1 319.7 40.1 322.9 40.3 325.0C40.6 327.1 40.1 329.1 40.0 329.9L24.4 329.9C24.1 329.0 23.1 326.5 22.5 324.3C21.9 322.1 21.5 319.1 21.0 316.7C20.4 314.2 20.2 311.9 19.4 309.7C18.6 307.5 18.0 305.2 16.3 303.5C14.5 301.7 10.2 300.8 8.8 299.3C7.4 297.8 7.7 296.7 7.8 294.4C7.9 292.1 8.9 288.1 9.4 285.4C9.9 282.6 10.5 280.6 10.6 277.7C10.7 274.8 10.5 271.0 10.0 268.0C9.5 264.9 8.3 262.6 7.5 259.6C6.7 256.6 5.6 252.9 5.0 249.9C4.4 246.8 4.6 243.4 3.8 241.5C2.9 239.7 0.6 239.2 0.0 238.7L0 238.7L0 0L272.7 0Z";
const ILES = 'M85.1 214.4C86.1 214.9 87.7 216.1 87.6 217.8C87.5 219.6 85.9 223.2 84.5 224.8C83.0 226.4 80.7 227.5 78.8 227.6C76.9 227.7 74.2 226.8 73.2 225.5C72.1 224.2 71.9 221.6 72.6 219.9C73.2 218.3 75.5 216.7 76.9 215.8C78.4 214.8 80.0 214.6 81.3 214.4C82.7 214.1 84.0 213.8 85.1 214.4ZM153.9 178.2C154.7 178.8 155.9 180.8 155.8 183.0C155.7 185.3 154.4 188.4 153.3 191.4C152.2 194.4 150.4 200.1 149.2 201.1C147.9 202.2 146.5 199.4 145.8 197.7C145.0 195.9 144.1 193.1 144.5 190.7C144.9 188.3 147.2 184.9 148.3 183.0C149.3 181.2 149.8 180.4 150.8 179.6C151.7 178.8 153.1 177.6 153.9 178.2ZM184.5 120.8C185.4 120.7 187.4 121.4 187.4 121.8C187.4 122.2 185.4 123.1 184.5 123.2C183.7 123.2 182.4 122.6 182.4 122.1C182.4 121.7 183.7 120.8 184.5 120.8ZM282.1 -4.2C283.4 -5.9 287.4 -6.5 289.6 -4.2C291.8 -1.9 295.7 6.4 295.3 9.7C294.8 13.1 288.4 13.6 287.1 16.0C285.9 18.4 287.1 22.0 287.8 24.4C288.4 26.7 291.9 28.3 290.9 29.9C289.8 31.6 283.3 34.1 281.5 34.1C279.7 34.1 280.0 32.0 280.3 29.9C280.5 27.8 282.5 24.1 282.8 21.6C283.0 19.0 281.6 17.2 281.5 14.6C281.4 12.1 282.0 9.4 282.1 6.3C282.2 3.1 280.9 -2.4 282.1 -4.2ZM280.9 37.6C281.8 37.7 283.3 41.1 285.3 42.5C287.2 43.8 290.5 45.0 292.8 45.9C295.1 46.9 297.1 47.0 299.0 48.0C300.9 49.1 303.8 51.0 304.0 52.2C304.2 53.4 301.9 54.5 300.3 55.0C298.6 55.5 295.8 54.5 294.0 55.3C292.2 56.1 290.5 58.7 289.6 59.9C288.8 61.0 290.8 62.6 289.0 62.3C287.2 61.9 281.5 58.2 279.0 57.8C276.5 57.4 274.5 58.9 274.0 59.9C273.5 60.8 276.6 62.3 275.9 63.3C275.1 64.4 271.0 66.6 269.6 66.1C268.3 65.7 267.4 62.2 267.7 60.6C268.1 58.9 270.9 57.7 271.5 56.4C272.1 55.1 270.6 53.4 271.5 52.9C272.4 52.4 275.8 54.4 277.1 53.6C278.4 52.8 278.9 50.0 279.3 48.0C279.7 46.1 279.4 43.5 279.6 41.8C279.9 40.0 279.9 37.5 280.9 37.6ZM277.7 65.4C278.5 66.4 279.6 70.2 280.3 72.4C280.9 74.6 281.8 76.2 281.5 78.6C281.2 81.1 279.4 84.7 278.4 87.0C277.3 89.3 276.2 90.2 275.2 92.6C274.3 94.9 272.9 98.7 272.7 100.9C272.6 103.1 274.9 104.3 274.3 105.8C273.7 107.3 270.1 109.9 269.0 110.0C267.9 110.1 268.2 106.6 267.7 106.5C267.3 106.4 267.4 108.1 266.5 109.3C265.6 110.4 263.2 113.2 262.1 113.4C261.1 113.7 261.0 110.7 260.2 110.7C259.5 110.7 259.1 113.1 257.7 113.4C256.4 113.8 253.5 112.4 252.1 112.8C250.7 113.1 251.2 114.1 249.6 115.5C248.0 116.9 244.6 120.8 242.7 121.1C240.8 121.5 238.8 118.9 238.3 117.6C237.9 116.3 240.7 114.3 240.2 113.4C239.7 112.6 237.1 112.5 235.2 112.8C233.3 113.0 231.0 114.4 229.0 114.8C226.9 115.3 224.5 115.0 222.7 115.5C220.9 116.1 220.0 117.6 218.3 118.0C216.6 118.4 213.1 118.5 212.4 118.0C211.6 117.4 212.2 116.3 213.9 114.8C215.7 113.4 220.3 110.5 222.7 109.3C225.1 108.0 225.8 107.6 228.3 107.2C230.8 106.7 235.2 106.7 237.7 106.5C240.2 106.3 241.7 107.0 243.3 105.8C245.0 104.6 246.2 101.5 247.7 99.5C249.2 97.6 251.9 94.5 252.4 94.0C252.9 93.4 251.0 95.4 250.8 96.0C250.7 96.7 250.3 98.1 251.5 98.1C252.6 98.1 255.9 97.3 257.7 96.0C259.6 94.8 261.3 92.2 262.7 90.5C264.2 88.7 265.4 87.8 266.5 85.6C267.5 83.4 268.7 79.6 269.0 77.3C269.3 74.9 267.9 73.3 268.4 71.7C268.8 70.1 270.2 68.3 271.5 67.5C272.7 66.7 274.8 67.2 275.9 66.8C276.9 66.5 277.0 64.5 277.7 65.4ZM235.2 115.5C236.1 116.2 236.6 117.9 236.1 119.0C235.7 120.2 234.5 121.3 232.7 122.5C230.9 123.7 227.1 126.0 225.2 126.3C223.3 126.7 221.9 125.6 221.4 124.6C221.0 123.6 221.9 121.7 222.7 120.4C223.5 119.1 225.1 117.9 226.5 116.9C227.8 116.0 229.4 115.1 230.8 114.8C232.3 114.6 234.3 114.8 235.2 115.5ZM212.4 118.0C213.7 118.0 216.1 119.2 217.1 120.4C218.1 121.6 218.5 123.3 218.3 125.3C218.1 127.3 216.7 130.0 215.8 132.2C215.0 134.4 214.7 137.7 213.3 138.5C212.0 139.3 208.6 137.9 207.7 137.1C206.7 136.3 207.4 135.3 207.7 133.6C208.0 132.0 210.0 128.5 209.6 127.4C209.1 126.2 206.1 127.6 205.2 126.7C204.2 125.7 203.3 122.8 203.9 121.8C204.6 120.8 207.5 121.0 208.9 120.4C210.3 119.8 211.0 118.0 212.4 118.0ZM149.5 224.8C151.4 223.9 156.0 224.6 157.6 226.2C159.3 227.8 160.1 231.9 159.5 234.6C158.9 237.2 155.0 239.9 153.9 242.2C152.7 244.5 152.2 246.2 152.6 248.5C153.1 250.8 154.3 254.4 156.4 256.1C158.5 257.9 163.0 257.6 165.1 258.9C167.3 260.2 168.9 262.5 169.5 263.8C170.2 265.1 169.8 266.5 168.9 266.6C168.0 266.7 165.4 265.6 163.9 264.5C162.4 263.3 162.4 260.8 160.1 259.6C157.8 258.4 152.2 258.7 150.1 257.5C148.0 256.4 148.6 253.7 147.6 252.6C146.7 251.6 145.3 253.1 144.5 251.3C143.7 249.4 142.4 243.4 142.6 241.5C142.8 239.7 145.1 241.7 145.8 240.1C146.4 238.5 145.8 234.3 146.4 231.8C147.0 229.2 147.6 225.7 149.5 224.8ZM146.4 260.3C147.1 259.6 152.3 261.0 153.3 262.4C154.2 263.8 152.7 268.0 152.0 268.7C151.3 269.4 149.8 268.0 148.9 266.6C147.9 265.2 145.7 261.0 146.4 260.3ZM170.8 267.3C171.9 266.3 176.2 267.6 177.7 269.4C179.1 271.1 179.7 275.2 179.5 277.7C179.3 280.3 177.8 284.0 176.4 284.7C175.1 285.4 172.3 283.5 171.4 281.9C170.5 280.3 170.9 277.4 170.8 274.9C170.7 272.5 169.6 268.2 170.8 267.3ZM156.4 271.4C157.6 270.5 162.6 273.3 163.3 274.9C163.9 276.5 161.4 280.3 160.1 281.2C158.9 282.1 156.4 282.1 155.8 280.5C155.1 278.9 155.1 272.4 156.4 271.4ZM163.9 278.4C165.0 278.3 166.4 282.6 166.4 284.7C166.4 286.8 165.0 290.8 163.9 290.9C162.8 291.0 159.5 287.4 159.5 285.4C159.5 283.3 162.8 278.5 163.9 278.4ZM178.3 286.1C179.3 286.5 183.2 291.0 183.9 294.4C184.6 297.8 183.7 303.5 182.7 306.2C181.6 309.0 178.7 309.6 177.7 311.1C176.6 312.6 177.9 315.1 176.4 315.3C174.9 315.5 170.2 313.9 168.9 312.5C167.7 311.1 170.9 308.1 168.9 306.9C166.9 305.8 158.3 306.7 157.0 305.5C155.8 304.4 159.6 301.1 161.4 300.0C163.2 298.8 165.8 299.7 167.7 298.6C169.5 297.4 171.0 294.2 172.7 293.0C174.3 291.9 176.7 292.8 177.7 291.6C178.6 290.5 177.2 285.6 178.3 286.1ZM141.4 274.2C142.3 273.8 143.3 277.6 141.4 280.5C139.5 283.4 132.6 289.1 130.1 291.6C127.6 294.2 126.8 295.8 126.4 295.8C125.9 295.8 126.1 293.7 127.6 291.6C129.2 289.5 133.5 286.2 135.7 283.3C138.0 280.4 140.4 274.7 141.4 274.2ZM100.1 329.9C101.1 328.9 104.4 325.3 106.3 323.6C108.3 322.0 110.5 321.2 112.0 320.2C113.4 319.1 114.0 318.5 115.1 317.4C116.3 316.2 117.6 314.7 118.9 313.2C120.1 311.7 121.7 309.6 122.6 308.3C123.5 307.1 123.1 305.5 124.2 305.5C125.2 305.5 127.6 307.2 128.9 308.3C130.2 309.5 131.0 311.6 132.0 312.5C133.0 313.4 133.9 313.0 135.1 313.9C136.4 314.8 139.6 316.4 139.5 318.1C139.4 319.7 136.1 322.5 134.5 323.6C132.9 324.8 131.1 324.0 130.1 325.0C129.2 326.1 129.1 329.1 128.9 329.9L100.1 329.9ZM0.0 317.7C0.5 317.8 2.0 317.3 3.1 318.1C4.3 318.8 5.6 320.7 6.9 322.2C8.1 323.8 9.6 325.8 10.6 327.1C11.7 328.4 14.9 329.4 13.1 329.9C11.4 330.4 2.2 329.9 0.0 329.9L0.0 317.7Z';
const RYUKYU = [[203.3,157.3],[197.7,163.6],[193.3,169.8],[177.0,181.7],[170.2,184.4]];
const ESCALES = [
  { route: 'M8 46C80 6 205 18 267.1 105.8', x: 267.1, y: 105.8, pays: 'JAPON', encre: '#b3342b', tampon: [262, 158, -12] },
  { route: 'M267.1 105.8C250 150 196 162 153.3 137.1', x: 153.3, y: 137.1, pays: 'CHINE', encre: '#24448c', tampon: [84, 112, 9] },
  { route: 'M153.3 137.1C138 196 76 214 21.9 258.6', x: 21.9, y: 258.6, pays: 'THAÏLANDE', encre: '#5e3a8a', tampon: [80, 296, -7] },
];
const ARRIVEE = [21.9, 258.6];

const rose = (r, encre, papier) => {
  const c = r * 0.17;
  return `<path d="M0 ${-r}L${c} ${-c}L0 0ZM0 ${r}L${-c} ${c}L0 0ZM${r} 0L${c} ${c}L0 0ZM${-r} 0L${-c} ${-c}L0 0Z" fill="${encre}"/>`
    + `<path d="M0 ${-r}L${-c} ${-c}L0 0ZM0 ${r}L${c} ${c}L0 0ZM${r} 0L${c} ${-c}L0 0ZM${-r} 0L${-c} ${c}L0 0Z" fill="${papier}"/>`;
};
const main = (x, y, taille, texte, couleur = "#1f2d55", tourne = 0) => `<text x="${x}" y="${y}" font-family="Patrick Hand,Chalkboard SE,cursive" font-size="${taille}" fill="${couleur}"${tourne ? ` transform="rotate(${tourne} ${x} ${y})"` : ""}>${texte}</text>`;
const capitales = (x, y, taille, texte, espace = 3, opacite = 0.6) => `<text x="${x}" y="${y}" font-family="Literata,Georgia,serif" font-size="${taille}" letter-spacing="${espace}" fill="#5b4a38" opacity="${opacite}" text-anchor="middle">${texte}</text>`;

function dessinCarte() {
  const vagues = [[200, 150], [226, 186], [270, 210], [186, 214], [120, 190], [96, 228], [140, 262], [204, 268], [250, 300], [126, 300], [292, 250], [230, 140], [178, 120]]
    .map(([x, y]) => `M${x} ${y}q3 -3 6 0t6 0`).join('');
  const reperes = [100, 110, 120, 130, 140].map((lon) => `M${((lon - 97) * 6.256).toFixed(1)} 0V330`).join('')
    + [10, 20, 30, 40, 50].map((lat) => `M0 ${((50.9 - lat) * 6.96).toFixed(1)}H300`).join('');
  const iles = RYUKYU.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.3"/>`).join('');
  const sommets = [[60, 60], [80, 48], [40, 92], [24, 150], [52, 176], [88, 204], [150, 30], [176, 54], [214, 26], [20, 200]]
    .map(([x, y]) => `M${x - 5} ${y}l5 -7l5 7`).join('');
  const forets = [[96, 160], [102, 164], [58, 230], [64, 226], [30, 214], [140, 96], [146, 100], [200, 80]]
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6"/>`).join('');
  return `<rect width="300" height="330" fill="#cfe0dd"/>
    <path d="${vagues}" fill="none" stroke="#6f97a2" stroke-width=".6" stroke-linecap="round" opacity=".7"/>
    <path d="${reperes}" fill="none" stroke="#3a4a6b" stroke-width=".35" stroke-dasharray="1.5 3.5" opacity=".35"/>
    <g fill="none" stroke="#7fa9b3" stroke-linejoin="round"><path d="${CONTINENT}${ILES}" stroke-width="11" opacity=".13"/><path d="${CONTINENT}${ILES}" stroke-width="4.5" opacity=".28"/></g>
    <path d="${CONTINENT}${ILES}" fill="#f3e8cc" stroke="#5b4a38" stroke-width=".9" stroke-linejoin="round"/>
    <g fill="#f3e8cc" stroke="#5b4a38" stroke-width=".6">${iles}</g>
    <g fill="#a7bf8c" opacity=".7">${forets}</g>
    <path d="${sommets}" fill="none" stroke="#7d6a52" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 128Q70 120 96 132T152 136M14 190Q40 196 56 214" fill="none" stroke="#7fa9b3" stroke-width="1.2" stroke-linecap="round"/>
    ${capitales(70, 150, 11, 'CHINE', 5, 0.55)}${capitales(194, 101, 5, 'CORÉE', 1.5, 0.5)}
    ${capitales(132, 236, 6, 'MER DE CHINE', 2.2, 0.5)}${capitales(256, 196, 6, 'PACIFIQUE', 2.2, 0.45)}
    <g fill="none" stroke="#2f6f73" stroke-linecap="round"><path d="M212 248q6 -11 12 0M227 248q6 -11 12 0M242 248q6 -11 12 0" stroke-width="2.3"/><path d="M212 248q-6 3 -8 -2q-1 -4 3 -4" stroke-width="1.4"/><path d="M218 241l1 -3l1 3M233 241l1 -3l1 3M248 241l1 -3l1 3" stroke-width=".7"/></g>
    <path d="M254 248q4 -13 11 -10q5 2 2 6q-3 2 -7 2" fill="#2f6f73"/><circle cx="263.5" cy="239.5" r=".8" fill="#f3e8cc"/>
    <text x="238" y="262" font-family="Literata,Georgia,serif" font-style="italic" font-size="6.5" fill="#3a4a6b" text-anchor="middle">Ici, des dragons</text>
    <g transform="translate(266 298)"><circle r="17" fill="none" stroke="#3a4a6b" stroke-width=".55"/><circle r="13.5" fill="none" stroke="#3a4a6b" stroke-width=".3"/>
      <g transform="rotate(45)">${rose(12, '#3a4a6b', '#f3e8cc')}</g>${rose(22, '#3a4a6b', '#f3e8cc')}
      <text y="-24.5" font-family="Literata,Georgia,serif" font-size="6.5" fill="#b8372f" text-anchor="middle">N</text></g>
    ${main(4, 34, 9, 'Lyon, 12 oct.', '#1f2d55')}
    ${main(238, 130, 10.5, '1. Japon', '#8f2a22', -6)}${main(106, 132, 10.5, '2. Chine', '#1d3a7a', -4)}${main(28, 280, 10.5, '3. Thaïlande', '#4e2f78', -4)}
    ${main(3, 214, 7, 'retour, 21 déc.', '#4a5a80', -28)}
    <g transform="translate(150 15)"><path d="M-70 -8H70L63 0L70 8H-70L-63 0Z" fill="#f6efe1" stroke="#5b4a38" stroke-width=".7"/>
      <text y="2.8" font-family="Literata,Georgia,serif" font-style="italic" font-size="8" fill="#1f2d55" text-anchor="middle">Japon · Chine · Thaïlande</text></g>
    <rect x="4" y="4" width="292" height="322" fill="none" stroke="#3a4a6b" stroke-width=".8"/>
    <rect x="6.5" y="6.5" width="287" height="317" fill="none" stroke="#3a4a6b" stroke-width=".3"/>`;
}

function couvertureCarte() {
  return `<svg viewBox="0 0 100 165" preserveAspectRatio="none">
    <rect width="100" height="165" fill="#28457f"/>
    <defs><linearGradient id="reflet-couv"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
    <rect x="5" y="5" width="90" height="155" fill="none" stroke="#e8c27a" stroke-width=".8"/>
    <rect x="7.5" y="7.5" width="85" height="150" fill="none" stroke="#e8c27a" stroke-width=".3"/>
    <g transform="translate(50 38)"><circle r="17" fill="none" stroke="#e8c27a" stroke-width=".5"/><circle r="11" fill="none" stroke="#e8c27a" stroke-width=".3" stroke-dasharray="1 2"/>
      <g transform="rotate(45)">${rose(11, '#e8c27a', '#b38b45')}</g>${rose(21, '#e8c27a', '#b38b45')}
      <text y="-22.5" font-family="Literata,Georgia,serif" font-size="5.5" fill="#e8c27a" text-anchor="middle">N</text></g>
    <rect x="11" y="66" width="78" height="64" rx="3" fill="#f6efe1"/>
    <rect x="13.5" y="68.5" width="73" height="59" rx="2" fill="none" stroke="#28457f" stroke-width=".35"/>
    <text x="50" y="80" font-family="Literata,Georgia,serif" font-size="7" letter-spacing="2.4" fill="#28457f" text-anchor="middle">CARTE</text>
    <text x="50" y="88" font-family="Literata,Georgia,serif" font-style="italic" font-size="5.4" fill="#4a5a80" text-anchor="middle">du voyage</text>
    <text x="50" y="108" font-family="Patrick Hand,Chalkboard SE,cursive" font-size="20" fill="#b8372f" text-anchor="middle" transform="rotate(-3 50 103)">Asie</text>
    <path d="M22 114.5H78" stroke="#28457f" stroke-width=".4"/>
    <text x="50" y="122" font-family="Literata,Georgia,serif" font-size="4.1" letter-spacing=".5" fill="#28457f" text-anchor="middle">JAPON · CHINE · THAÏLANDE</text>
    <text x="50" y="147" font-family="Literata,Georgia,serif" font-size="4.8" letter-spacing="1.4" fill="#e8c27a" text-anchor="middle">12 OCT. · 21 DÉC. ${ANNEE}</text>
    <g transform="rotate(18 50 82)"><rect class="brille" x="-70" y="-30" width="34" height="230" fill="url(#reflet-couv)"/></g>
  </svg>`;
}

function popups() {
  const rnd = aleatoire(77);
  const bord = (d) => `<path d="${d}" fill="#fbfaf6" stroke="#fbfaf6" stroke-width="3.4" stroke-linejoin="round"/>`;
  const fuji = "M0 60L30 14Q36 9 42 14L80 60Z";
  const neige = "M30 14Q36 9 42 14L50 25L45 23L41 28L37 23L32 27L28 22L24 24Z";
  const torii = "M54 30H86L84 34H56ZM58 37H82V40H58ZM60 34H64V60H60ZM76 34H80V60H76Z";
  const mur = "M0 40L14 32L14 26L18 26L18 29L21 29L21 26L25 26L25 31L44 22L44 16L48 16L48 19L51 19L51 16L55 16L55 21L76 13L76 4L90 4L90 13L100 9L100 40Z";
  const t = temple(30, 46, 46, 40);
  const palmes = palmier(66, 48, 40, 6, rnd, 0.9);
  const nuage = "M10 22Q4 22 4 16Q4 10 11 10Q13 3 21 4Q27 0 33 5Q41 4 41 12Q47 13 46 18Q45 22 40 22Z";
  const baton = "M24 22V40";
  return [
    { x: 232, y: 114, l: 17, classe: "e0", svg: `<svg viewBox="-3 6 92 57">${bord(fuji)}${bord(torii)}<path d="${fuji}" fill="#7d86b4"/><path d="${neige}" fill="#fbfaf6"/><path d="M36 11L44 60" stroke="#59628f" stroke-width=".7" opacity=".5"/><path d="${torii}" fill="#c4372b"/></svg>` },
    { x: 112, y: 84, l: 26, classe: "e1", svg: `<svg viewBox="-3 0 106 43">${bord(mur)}<path d="${mur}" fill="#b49a72"/><path d="M0 40L14 32L25 31L44 22L55 21L76 13L100 9" fill="none" stroke="#7b6447" stroke-width="1"/><path d="M79 8h2v4h-2zM85 8h2v4h-2z" fill="#4e3d2a"/><path d="M0 40Q30 30 50 34T100 30V40Z" fill="#7aa06a"/></svg>` },
    { x: 50, y: 238, l: 22, classe: "e2", svg: `<svg viewBox="-2 2 92 50">${bord(t)}${bord(palmes)}<path d="${palmes}" fill="#3e7a52"/><path d="${t}" fill="#c8862f"/><rect x="26.5" y="37" width="7" height="9" rx="3" fill="#8f3426"/></svg>` },
    { x: 196, y: 62, l: 13, classe: "nuage", svg: `<svg viewBox="0 -2 50 44">${bord(nuage)}<path d="${baton}" stroke="#fbfaf6" stroke-width="2.4"/><path d="${nuage}" fill="#fdfbf5"/><path d="M12 18Q20 21 28 18" fill="none" stroke="#c9d3e3" stroke-width="1"/></svg>` },
    { x: 60, y: 190, l: 11, classe: "nuage", svg: `<svg viewBox="0 -2 50 44">${bord(nuage)}<path d="${baton}" stroke="#fbfaf6" stroke-width="2.4"/><path d="${nuage}" fill="#fdfbf5"/><path d="M12 18Q20 21 28 18" fill="none" stroke="#c9d3e3" stroke-width="1"/></svg>` },
  ];
}
const avionVu = (couleur, trait) => `<svg viewBox="-6 -12 30 24"><g fill="${couleur}" stroke="${trait}" stroke-width=".8" stroke-linejoin="round">${PLANE}</g>${trait === "none" ? "" : '<path d="M3 0H15" stroke="#b8372f" stroke-width="1.2"/>'}</svg>`;

// le tampon d'une escale, comme ceux du passeport
const tamponCarte = (e, n) => {
  const [x, y, r] = e.tampon;
  const rayon = e.pays.length > 6 ? 21 : 16;
  return `<g class="tampon-carte t${n}" transform="translate(${x} ${y}) rotate(${r})"><g class="tc" fill="none" stroke="${e.encre}">
    <circle r="${rayon}" stroke-width="1.6"/><circle r="${rayon - 3}" stroke-width=".5" stroke-dasharray="1.6 1.2"/>
    <text y="2" font-family="Literata,Georgia,serif" font-size="${e.pays.length > 6 ? 5.6 : 6.4}" font-weight="700" letter-spacing="1" fill="${e.encre}" stroke="none" text-anchor="middle">${e.pays}</text>
    <text y="${rayon - 6.5}" font-family="Literata,Georgia,serif" font-size="4" fill="${e.encre}" stroke="none" text-anchor="middle">${ANNEE}</text>
    <g transform="translate(-4.5 ${-rayon + 9}) scale(.42)" fill="${e.encre}" stroke="none">${PLANE}</g></g></g>`;
};

function volets(rang) {
  let html = '';
  for (let c = 2; c >= 0; c--) {
    const dos = rang === 1 && c === 0 ? `<div class="ar couv">${couvertureCarte()}</div>` : `<div class="ar"></div>`;
    html = `<div class="pan c${c}"><div class="av"><svg viewBox="${c * 100} ${rang * 165} 100 165" preserveAspectRatio="none"><use href="#dessin-carte" xlink:href="#dessin-carte"/></svg></div>${dos}${html}</div>`;
  }
  return html;
}

let traits = [];
let bornes = [];
let parcouru = 0;
const escalesFaites = [];
const envols = new Set();

function preparerRoute(portail) {
  try {
    traits = [...portail.querySelectorAll(".encre")].map((el) => ({ el, l: el.getTotalLength() }));
  } catch (e) {
    traits = [];
    return;
  }
  const pause = 0.07;
  const total = traits.reduce((s, t) => s + t.l, 0);
  const reste = 1 - pause * (traits.length - 1);
  let t = 0;
  bornes = traits.map((tr) => {
    const b = [t, t + (tr.l / total) * reste];
    t = b[1] + pause;
    return b;
  });
  bornes[bornes.length - 1][1] = 1;
}

// l'avion sur la route : p va de 0 (Lyon) à 1 (la Thaïlande). à chaque étape il décolle, plane, et se repose
function voler(p) {
  const carte = $('#portail .carte');
  if (!carte || !traits.length) return;
  parcouru = p;
  let k = bornes.findIndex((b) => p <= b[1]);
  if (k < 0) k = bornes.length - 1;
  const [a, b] = bornes[k];
  const x = Math.max(0, Math.min(1, (p - a) / (b - a)));
  const q = x * x * (3 - 2 * x);
  const tr = traits[k];
  const d = q * tr.l;
  const pt = tr.el.getPointAtLength(d);
  const av = tr.el.getPointAtLength(Math.min(tr.l, d + 3));
  const ar = tr.el.getPointAtLength(Math.max(0, d - 3));
  const cap = (Math.atan2(av.y - ar.y, av.x - ar.x) * 180) / Math.PI;
  const z = 4 + Math.sin(q * Math.PI) * 42;
  if (q > 0.03 && !envols.has(k)) { envols.add(k); jouerEffet('fusee', { duree: 1.3 }); }
  const plan = carte.querySelector('.plan-carte');
  const s = plan.offsetWidth / 300;
  const avion = carte.querySelector('.avion');
  const ombre = carte.querySelector('.avion-ombre');
  const w = avion.offsetWidth;
  const h = avion.offsetHeight;
  const px = pt.x * s - w / 2;
  const py = pt.y * s - h / 2;
  avion.style.transform = `translate3d(${px.toFixed(1)}px,${py.toFixed(1)}px,${z.toFixed(1)}px) rotate(${cap.toFixed(1)}deg) scale(${(1 + z / 75).toFixed(3)})`;
  ombre.style.transform = `translate3d(${(px + z * 0.35).toFixed(1)}px,${(py + z * 0.6).toFixed(1)}px,1px) rotate(${cap.toFixed(1)}deg) scale(${(1 - z / 160).toFixed(3)})`;
  ombre.style.opacity = (0.3 - z / 220).toFixed(2);
  traits.forEach((t, n) => { t.el.style.strokeDashoffset = n < k ? 0 : n > k ? 100 : (100 * (1 - q)).toFixed(2); });
  bornes.forEach((bb, n) => { if (n < bornes.length - 1 && p >= bb[1] && !escalesFaites[n]) escale(n); });
}
window.addEventListener("resize", () => { if (traits.length) voler(parcouru); });

function escale(n) {
  escalesFaites[n] = true;
  const portail = $('#portail');
  portail.querySelector(`.tampon-carte.t${n}`).classList.add('vu');
  portail.querySelectorAll(`.e${n}`).forEach((el) => el.classList.add('leve'));
  portail.querySelectorAll('.escale').forEach((g, k) => g.classList.toggle('prochaine', k === n + 1));
  vibrer(25);
  jouerEffet('tampon');
}

function tenirLeDoigt(el, duree, { actif, avance, court, lache }) {
  let pose = false;
  let debut = 0;
  let avant = 0;
  const boucle = (t) => {
    if (!pose) return;
    const dt = Math.min(64, Math.max(0, t - avant));
    avant = t;
    if (avance(dt / duree) === false) { pose = false; return; }
    requestAnimationFrame(boucle);
  };
  el.addEventListener("pointerdown", (e) => {
    if (e.button > 0 || !actif()) return;
    reveillerSons();
    pose = true;
    debut = avant = performance.now();
    requestAnimationFrame(boucle);
  });
  const lacher = () => {
    if (!pose) return;
    pose = false;
    if (performance.now() - debut < 250 && court) court();
    else if (lache) lache();
  };
  el.addEventListener("pointerup", lacher);
  el.addEventListener("pointercancel", lacher);
  el.addEventListener("pointerleave", lacher);
  el.addEventListener("contextmenu", (e) => e.preventDefault());
}

function montrerPortail() {
  const portail = $("#portail");
  document.body.classList.add("porte", "arrive");
  const pops = popups();
  portail.innerHTML = `
    <svg class="reserve" width="0" height="0"><defs><g id="dessin-carte">${dessinCarte()}</g></defs></svg>
    <div class="carte" style="--ox:${(ARRIVEE[0] / 3).toFixed(2)}%;--oy:${(ARRIVEE[1] / 3.3).toFixed(2)}%">
      <div class="depli">
        <div class="plan-carte">
          <i class="ombre-carte"></i>
          <div class="rang haut">${volets(0)}</div>
          <div class="rang bas">${volets(1)}</div>
          <svg class="trace" viewBox="0 0 300 330">
            <path class="retour" d="M21.9 258.6C14 246 6 236 0 224"/>
            ${ESCALES.map((e) => `<path class="guide" d="${e.route}"/>`).join("")}
            ${ESCALES.map((e) => `<path class="encre" d="${e.route}" pathLength="100"/>`).join("")}
            <circle class="depart" cx="8" cy="46" r="3.6"/>
            ${ESCALES.map((e, n) => `<g class="escale${n === 0 ? " prochaine" : ""}${n === ESCALES.length - 1 ? " but" : ""}" transform="translate(${e.x} ${e.y})"><circle class="onde" r="6"/><circle class="onde deux" r="6"/><circle class="point" r="2.6"/></g>`).join("")}
            ${ESCALES.map(tamponCarte).join("")}
          </svg>
          ${pops.map((p, n) => `<i class="ombre-pop ${p.classe}" style="left:${(p.x / 3).toFixed(2)}%;top:${(p.y / 3.3).toFixed(2)}%;width:${p.l}%"></i>
          <div class="pop ${p.classe}" style="left:${(p.x / 3).toFixed(2)}%;top:${(p.y / 3.3).toFixed(2)}%;width:${p.l}%${p.classe === "nuage" ? `;transition-delay:${(0.2 + n * 0.08).toFixed(2)}s` : ""}">${p.svg}</div>`).join("")}
          <div class="avion-ombre">${avionVu("#1c2442", "none")}</div>
          <div class="avion">${avionVu("#fbfaf6", "#1f2d55")}</div>
        </div>
      </div>
    </div>
    <p class="aide">Touche la carte pour la déplier</p>`;
  const lac = document.createElement("div");
  lac.className = "decor paysage lac-portail";
  portail.prepend(lac);
  paysageHaut(lac, 31, false);
  enregistrer(lac, [["loin", 0, 0], ["milieu", 0, 0], ["eau", 0, 0], ["reflet", 0, 0], ["flottants", 0, 0], ["lucioles", 0, 0]], "page");
  portail.hidden = false;
  preparerRoute(portail);
  portail.addEventListener("click", (e) => {
    if (!e.target.closest(".carte, .aide")) toucherLac(e.clientX, e.clientY);
  });
  const carte = portail.querySelector(".carte");
  const aide = portail.querySelector(".aide");
  carte.addEventListener("click", () => {
    if (carte.classList.contains("ouverte")) return;
    reveillerSons();
    carte.classList.add("ouverte");
    vibrer(10);
    jouer("sort");
    aide.classList.add("cache");
    setTimeout(() => { jouer("rentre"); vibrer(8); }, 640);
    setTimeout(() => carte.classList.add("a-plat"), 1450);
    setTimeout(() => carte.classList.add("posee"), 1550);
    setTimeout(() => {
      voler(0);
      carte.classList.add("prete");
      aide.textContent = "Garde le doigt appuyé pour décoller";
      aide.classList.remove("cache");
    }, 2500);
  });
  tenirLeDoigt(portail, 5200, {
    actif: () => carte.classList.contains("prete") && !carte.classList.contains("atterri"),
    avance: (dp) => {
      const p = Math.min(1, parcouru + dp);
      voler(p);
      if (p < 1) return true;
      atterrir();
      return false;
    },
    court: () => {
      aide.classList.remove("insiste");
      void aide.offsetWidth;
      aide.classList.add("insiste");
    },
    lache: () => { if (parcouru > 0 && parcouru < 1) aide.textContent = "Garde le doigt appuyé pour continuer"; },
  });
}

// la Thaïlande : le dernier tampon, le temple se lève, les lanternes partent de là, et on plonge dans la carte jusqu'au site
function atterrir() {
  const portail = $("#portail");
  const carte = portail.querySelector(".carte");
  voler(1);
  carte.classList.add("atterri");
  portail.classList.add("brise");
  escale(ESCALES.length - 1);
  const r = portail.querySelector(".but").getBoundingClientRect();
  const x = r.left + r.width / 2;
  const y = r.top + r.height / 2;
  setTimeout(() => {
    jouerEffet("voeu");
    lacherLanternes(x, y);
    fete();
  }, 350);
  setTimeout(() => portail.classList.add("part"), 1500);
  setTimeout(() => {
    document.body.classList.remove("porte");
    afficherEnveloppes(true, dejaLues.map((i, k) => ({ i, delai: 0.6 + k * 0.28 })));
    majTrajet(true);
  }, 1850);
  setTimeout(() => {
    portail.hidden = true;
    traits = [];
    const lac = $("#portail .lac-portail");
    if (lac) {
      observateur.unobserve(lac);
      const k = scenes.findIndex((s) => s.el === lac);
      if (k >= 0) scenes.splice(k, 1);
      lac.remove();
    }
  }, 3500);
}


const ENCRES = ["#1f3f86", "#b3342b", "#5e3a8a", "#1f7a68", "#b3342b"];
const TOURNE = [-7, 6, -4, 8, -2];
const tamponnes = new Set(APERCU ? [] : JSON.parse(lire("sandy-tampons") || "[]"));

const arc = (id, rx, ry, haut) => `<path id="${id}" d="M${60 - rx} 60A${rx} ${ry} 0 0 ${haut ? 1 : 0} ${60 + rx} 60" fill="none"/>`;
const surArc = (id, texte, taille, espace) => `<text font-size="${taille}" letter-spacing="${espace}" font-weight="700" fill="currentColor" stroke="none"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${texte}</textPath></text>`;
const ligne = (x, y, texte, taille, espace = 0) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${taille}" letter-spacing="${espace}" font-weight="700" fill="currentColor" stroke="none">${texte}</text>`;

function dessinerTampon(k) {
  const l = lettres[k];
  const date = `${l.jour} ${MOIS_CACHET[l.mois - 1]}`;
  let forme = "";
  if (k === 0) {
    forme = `<circle cx="60" cy="60" r="56" stroke-width="3"/><circle cx="60" cy="60" r="51" stroke-width="1"/><circle cx="60" cy="60" r="29" stroke-width="1" stroke-dasharray="2 3"/>
      ${arc("tpa0", 36.5, 36.5, true)}${surArc("tpa0", "DÉPART · DEPARTURE", 7.4, 1)}
      ${arc("tpb0", 44.5, 44.5, false)}${surArc("tpb0", `AÉROPORT · ${ANNEE}`, 7.6, 1.6)}
      <g transform="translate(47 52) rotate(-28) scale(1.15)" fill="currentColor" stroke="none">${PLANE}</g>${ligne(60, 76, date, 12.5)}`;
  } else if (k === 1) {
    forme = `<g transform="rotate(-4 60 60)"><rect x="5" y="18" width="110" height="84" rx="10" stroke-width="3"/><rect x="10" y="23" width="100" height="74" rx="6" stroke-width="1"/>
      ${ligne(60, 38, "IMMIGRATION", 9.5, 2.2)}<path d="M18 43H102" stroke-width="1"/>
      <g transform="translate(31 47) scale(.8)"><g fill="currentColor" stroke="none"><path d="M2 14Q20 -2 50 8L48 12Q22 4 5 18Z"/><rect x="4" y="14" width="2" height="12"/><rect x="30" y="8" width="2" height="18"/><rect x="46" y="10" width="2" height="16"/><path d="M2 26H46L52 20Q55 18 60 18H66Q70 18 70 23V32H2Z"/></g>
      <g stroke-width="2.6"><circle cx="16" cy="36" r="6.5"/><circle cx="58" cy="36" r="6"/></g></g>
      ${ligne(60, 93, `${date} ${ANNEE}`, 11)}</g>`;
  } else if (k === 2) {
    const oct = (r) => Array.from({ length: 8 }, (_, i) => `${r1(60 + r * Math.cos(Math.PI / 8 + (i * Math.PI) / 4))} ${r1(60 + r * Math.sin(Math.PI / 8 + (i * Math.PI) / 4))}`).join("L");
    forme = `<path d="M${oct(58)}Z" stroke-width="3"/><path d="M${oct(52)}Z" stroke-width="1"/>
      ${ligne(60, 29, "TEMPLE", 11, 3.2)}
      <path d="${pagode(60, 90, 36, 3, 12).forme}" fill="currentColor" stroke="none" transform="translate(0 4)"/>
      ${ligne(60, 103, date, 10.5, 1)}`;
  } else if (k === 3) {
    forme = `<ellipse cx="60" cy="60" rx="57" ry="44" stroke-width="3"/><ellipse cx="60" cy="60" rx="52" ry="39" stroke-width="1"/>
      ${arc("tpa3", 43, 30, true)}${surArc("tpa3", "MARCHÉ DE NUIT", 7.4, 1.2)}
      ${arc("tpb3", 46, 33, false)}${surArc("tpb3", `${date} ${ANNEE}`, 7.4, 1.4)}
      <g transform="translate(60 60) scale(1.18) translate(-60 -62)"><path d="M42 68H78Q77 84 60 84Q43 84 42 68Z" fill="currentColor" stroke="none"/>
      <path d="M45 66Q49 62 53 66T61 66T69 66T77 66" stroke-width="1.5"/>
      <path d="M49 58Q46 54 49 50Q52 46 49 42M57 58Q54 54 57 50Q60 46 57 42M65 58Q62 54 65 50Q68 46 65 42" stroke-width="1.3"/>
      <path d="M66 63L82 46M71 64L85 49" stroke-width="2" stroke-linecap="round"/></g>`;
  } else {
    const dent = Array.from({ length: 144 }, (_, i) => {
      const a = (i / 144) * Math.PI * 2;
      const r = 55 + 2.4 * Math.abs(Math.sin(a * 18));
      return `${r1(60 + r * Math.cos(a))} ${r1(60 + r * Math.sin(a))}`;
    }).join("L");
    forme = `<path d="M${dent}Z" stroke-width="2.4"/><circle cx="60" cy="60" r="49" stroke-width="3"/><circle cx="60" cy="60" r="44" stroke-width="1"/><circle cx="60" cy="60" r="24" stroke-width="1" stroke-dasharray="2 3"/>
      ${arc("tpa4", 33.5, 33.5, true)}${surArc("tpa4", "BIENVENUE", 7.8, 1.6)}
      ${arc("tpb4", 40, 40, false)}${surArc("tpb4", "À LA MAISON", 6.9, 1.1)}
      <path d="M47 58V51L60 41L73 51V58Z" stroke-width="2" stroke-linejoin="round"/><path d="M60 61C55 57 56 52.6 58.4 53.1C59.5 53.3 60 54.2 60 54.2C60 54.2 60.5 53.3 61.6 53.1C64 52.6 65 57 60 61Z" fill="currentColor" stroke="none"/>
      ${ligne(60, 72, date, 9.4)}`;
  }
  const rnd = aleatoire(100 + k * 17);
  let trous = "";
  for (let n = 0; n < 46; n++) trous += `<circle cx="${r1(rnd() * 120)}" cy="${r1(rnd() * 120)}" r="${r1(0.5 + rnd() * 1.7)}" fill="#000"/>`;
  return `<svg viewBox="0 0 120 120" font-family="Helvetica Neue,Arial,sans-serif"><defs>
    <linearGradient id="tg${k}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".7"/></linearGradient>
    <mask id="tm${k}"><rect width="120" height="120" fill="url(#tg${k})"/>${trous}</mask></defs>
    <g mask="url(#tm${k})" fill="none" stroke="currentColor">${forme}</g></svg>`;
}

function dessinerPasseport() {
  let ondes = "";
  for (let k = 0; k < 18; k++) {
    let d = "";
    for (let x = 0; x <= 380; x += 5) d += `${x ? "L" : "M"}${x} ${r1(260 + Math.sin(x / 45 + k * 0.4) * 120 + Math.sin(x / 17 - k * 0.2) * 14)}`;
    ondes += `<path d="${d}"/>`;
  }
  const cases = lettres.map((l, k) => {
    const gagne = lues.has(k);
    const etatCase = !gagne ? "vide" : tamponnes.has(k) ? "ok" : "attend";
    return `<div class="case ${etatCase}" data-k="${k}" style="--r:${TOURNE[k]}deg;--encre:${ENCRES[k]}">
      <span class="case-vide"><i>${k + 1}</i><em>${nomDate(l)}</em></span>
      <span class="tampon">${gagne ? dessinerTampon(k) : ""}</span></div>`;
  }).join("");
  const mrz1 = "P<UTOSANDY<<ASIE".padEnd(44, "<").replace(/</g, "&lt;");
  const mrz2 = "CINQLETTRES7UTO2610124<2612218".padEnd(44, "<").replace(/</g, "&lt;");
  $("#passeport").innerHTML = `<div class="pp">
    <svg class="pp-fond" viewBox="0 0 380 520" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="#24448c" stroke-opacity=".1" stroke-width=".8">${ondes}</g></svg>
    <p class="pp-tete"><b>Visas</b><span>Asie ${ANNEE}</span></p>
    <div class="pp-cases">${cases}</div>
    <p class="pp-valide">Valable du 12 octobre au 21 décembre ${ANNEE}</p>
    <p class="pp-mrz">${mrz1}<br>${mrz2}</p>
  </div>`;
  $("#passeport .pp").classList.toggle("complet", tamponnes.size === lettres.length);
}

function tamponnerNouveaux() {
  [...document.querySelectorAll("#passeport .case.attend")].forEach((c, n) => {
    setTimeout(() => {
      c.classList.remove("attend");
      c.classList.add("ok", "nouveau");
      vibrer(20);
      tamponnes.add(+c.dataset.k);
      if (!APERCU) ecrire("sandy-tampons", JSON.stringify([...tamponnes]));
      if (tamponnes.size === lettres.length) setTimeout(() => $("#passeport .pp").classList.add("complet", "balaye"), 900);
    }, 600 + n * 950);
  });
}

let passeportEnVue = false;
new IntersectionObserver((entrees) => {
  passeportEnVue = entrees[0].isIntersecting;
  if (passeportEnVue) tamponnerNouveaux();
}, { threshold: 0.4 }).observe($("#passeport"));
function majPasseport() {
  dessinerPasseport();
  if (passeportEnVue) tamponnerNouveaux();
}


const dejaLues = lettres.map((l, i) => i).filter((i) => ouverte(lettres[i]) && lues.has(i));
reglerJour(jourActuel(), heureLa());
poserLune(laLune());
montrerPortail();
// &bon=1 avec mon lien : le feu d'artifice du bon, sans avoir à tout débloquer
if (APERCU && params.has('bon')) setTimeout(montrerBon, 2500);
if (lues.has(lettres.length - 1) && ouverte(lettres[lettres.length - 1])) document.body.classList.add('lever');
afficherEnveloppes(true, dejaLues.map((i, k) => ({ i, delai: 0.5 + k * 0.28 })));
dessinerPasseport();
poserMots();
majCompteur(maintenant());
majTrajet(true);
setInterval(chaqueSeconde, 1000);

// je suis prévenu quand elle arrive (dès qu'elle touche l'écran), et quand elle revient sur la page après un moment
// (le scroll ne compte pas : la page peut défiler toute seule)
const GESTES = ["pointerdown", "touchstart", "keydown", "wheel"];
function premierGeste(e) {
  if (!e.isTrusted) return;
  aToucheLEcran = true;
  GESTES.forEach((g) => window.removeEventListener(g, premierGeste, true));
  prevenirVisite();
}
GESTES.forEach((g) => window.addEventListener(g, premierGeste, { passive: true, capture: true }));
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { prevenirVisite(); vider().catch(() => {}); } });
window.addEventListener("online", () => vider().catch(() => {}));
vider().catch(() => {});

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
