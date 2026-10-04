// Pour Sandy
// 5 lettres, une par date. Chacune s'ouvre à minuit (heure de son téléphone).

const SIGNATURE = "Souley ♥";
const ANNEE = 2026;
const CLE = "sandy-tuktuk-2026";

// textes chiffrés, sinon elle pourrait tout lire dans le code source de la page
const lettres = [
  {
    jour: 12, mois: 10, titre: "Le début du périple", timbre: "plane",
    texte: "eV0eWilfERgCt90ZSBJVXEBUXkBBQBZNTgENDRC2wh62yw1HXlcWQEdKQkQaDgBIWVlTFBhUEBheU0nxnxFWCF5FBRMHFllBEQZLFQAfX1dDEldHU0FFEExBLxIWWBFbSz4QS1lXEFFZX1xOWENdXUEURydIBVU4tssBEkQVU0ISXPKLAQQDARdZVBEKGgZLWFwQU/WYQEBBXwEVTgsMDRC2wh62yw1WVRJaFlNaRUIWQQ2nzVm33EsQAEtAXV5WUx0SSkUQHg4HRBNIVAYeHQZLSFxTXURUEkZSWVOizkQUSFQRAgYQS1xHVRJSVEdXEV0cCB1IWU5TEBgAVQdCXFccFntXD0NVAwQAFxwNt9VLFxBLXlNdV1JYEk5EEAcACEQW7s1VARFVHwpTWRJVXl5D8pkWQRoLDFkRVQcVVQFCR0Jc9ZhXARFkVAAdRAruzwcOGRAFWRJCV1tQQF5E89pPTide7t0BCh0BS11TQxJDXxJHUEMSEwpKRQIES2FIBVV9XUVAFlJXD0dfCgAJAVUNHhBLABBLSV1eXFMRAA9cWQASBwsXXlpJRARLYRFCDgMYEX8IVF4FDhcBCw0YFEsEHQRZXRBeVxFCQ0RDUwwBBxFIVBEOVAEEWEYQRllfElleSRIGC0pZfRUGSxgUS11eRUEWU1dDXVVfQQIFWV0YABhUGAROWlUcClNAEQMeUyxJARdbGwwOBlUeQ1cQQl5eRkARVBZBGgsQA1QlCgdVHkMSQFNPQlNIVBASFwsHWVkbG0sWGh5ZElRXFlVdRlZEUwUPCgoNGBBLFxoCQx4QR1hUEl9ZXwcOTgAcDQAaAlpVLlkSQFNFEVYIVEgQFB0BWe/fVQERVRhYW0MSRlBBD0FYHBUBA7qEGhwaARBL74kcElwWU0YRWhIMDw0KDbfcH7fcS0kVUVFVXkBLEVEFBA1EuooVW1dbBVUnDkAMZl5HXRFcFkEcAQpZEVlLBAcES1tEVxgRf0BYEBkETgleQhcWHgQQS0lXEF8RVFxBREkWE04NGkRYVR9THAVcR1nxnkVXD0FRAEEeCwxfVLbMFVtXAkIOOApBDG1eXlMXAR0YShFZSycUBUlLHg4ZQQw=",
  },
  {
    jour: 26, mois: 10, titre: "Quand la maison te manque", timbre: "tuktuk",
    texte: "eV0eWj1IAQ1LBxAGTFteV0USUuyYWrDBQFhWXUp/VwRLqK0SU1cWQUJOVVVfQQQBWV4BHBhUBRnumEQS9ZIWX1BCGgQcRAhYEVUfUxQYDVbzm1zxlg9BVQECGxC6hFQABRFVHUJbREdEVxZARBAHE63NG1gXHajdVQ9MXEMSQ1wWSl9UAQ4HEFlZBhobVBcCV1NCQFMeFkdYQwcOBxYcDRAQSxYcDkMSRFcWRlldVUIWQQIFWU4cEB0dGQdIHAwdRgw8E0EONhVOFxANFxBLBxoCXxJcUxZfV0ZCXx1BGgFZQBUbGgEQS1hcEEJTRxoPUhcWEhpEF0IGGAoYW0t8R1lcTFcWRV5FARJCRBoKEQYfVAYEWERVXEISWkoRXRwMCwoNDRu20lQZTEhKU1tCU0JGXl5TEwsQFkAWEEsRAUtC8YkSQkcWW1QQHgQaF1nu1FUZt98dSEAQVhFHWEoRUhwPAAFZTxUDDgABDgMS87VXEkZOQkMWTU4UC0IZHBhaVSdMW0NBUxJaShFTHBQeRB1IVBcHARAYDVRRW0RXFlxQEAMEGg0NSFQDAgccH0geEEJDW0UPQ1UHDhsWF0hUBRkbEwJZV0IcFn9ZRhFVB0ECBVlPFQMOAAEOARJfXBZGEU5FRBYPCkpFAgRLYUgFVWRRWR4WQF9KXxAdRg9EG0IBEqjdW0toXFZbWBJFRh0QGUYPDVlJt9wBt9VL7ptAR19B9YYRRBwUHUQUSAdVGAEfDllBEFZTElVAX0YWEx0FDUQbG0sHFAVeEkRdXxwKAEEOeV0eWi0KFQZLEhQCWRJFXBZRX0FARRqixgkcDRAASwIaEkxVVRwWeFMPQlEaEkJEGgoRBh9UAAUNUVhbUFREShFeBg1CRBRMHQZLF1IOXkYQRllHXEBEQgBBrcMYDRAQSxIUAlkcDB1GDA==",
  },
  {
    jour: 18, mois: 11, titre: "Le jour incroyable", timbre: "pagoda",
    texte: "eV0eWjMKFRxLARsODUZY8Z9eSkZUHVMEGkQNWFQDCgdVBkgSVFtEVBhcWBEZRg8NWV8VHBgbG0URHUAMPA1IEWJEAUEKAQxVVBgEHQZHDVtcEk8RWQ9XXgECrc0USBoBSwEbDg1YX0dEX/uGVBECFAdECkIGAUsQAEtBXUQcFn1dD1ZUHRMLRB1IVB8EAQcF7ptVElnygQ9FRFMVC0QLSAAHBAEDDl4SQUdTXUlaVBEDABwQWV4VGxhUARlCQhBBV0dXRkMREA4DCRxDAFlLEQFLQvGJEkJEGFtUERcIHUS7hlQ6IFhVCEheXFcbXfuPHREZBE4JXkgaVRgbAB1EV15WRFBRD/OKXV1BFEcnSAVVJBAeWR/zmEJDXQ9ARBZBGhFZQVMUGFQRqIRY85IWVE1KHxEjBBsQVO7eARkRVRpYVxBREVRLWxFQBgsBEQtJUx0eHVtLYkcQURFUS1sRRB1BDQsMXVQfDlQHCk5dXkZTEUlaVBEXBE4IGA0ZEBkQEEURHUAMPA1IEWJYUwJJAQpZVBkOVBYKXh4QWFMRTkpESVMNSQwQXgAaAgYQS05dXUJa8pBbVBESFE4WHFkbABlaVTtMQRDwnRFbCPKYBwAHEFlZBhobVBcCSFwQ8I0dGF9QQlMNC0QL7t0GHhm2wg1XXhJCQ1dGQhEDCRwFCkgHW0s4EBgNVvObQlBRQ0IfUzEcARdJB1UPEQZLQ11EV0URSwhYXVMNC0QfTAEBRUhaGxM=",
  },
  {
    jour: 3, mois: 12, titre: "Quand je te manque", timbre: "bowl",
    texte: "eV0eWjpIGBkOWRmojR4QWBFSRhFasMgdDQ3u3VWo1FUHCvGZUURaXVQcT04eWnMRBEuo8xRLS1NZRhZASkFGUxILCRhEGhAYWlUhSBJGU19AD0FTAEEaAVlLFRwZEVUHSBJTXUNDD1VHUwwLB1lJt9wfFRYD7pscEvWUThFfEhMNDBxfFRwfVAUKXhJUVxZHQERGFkEIBbqKGxtHVAEeDV9VEltSQUBHFhJARClMB1UPEVUNTPGXXVgTS0NTHgAaDQhYEVlLHgAYWVcQVlddXBFeFhJOFBxZHQEYVAEZWFFDHBZgSl9GGhNOEBZDVAUKBhMeQB4QQldBW1BVFhNOERcNBhAbFQZLTERVURZHQFgeUwsbFw1IVBECBxYeWVdCHAocXw84TxFQIQ0NBxxLABoCDVNFQUVaD1tXUxULRBRMGgQeEVUeQxJAV0MfD1NdHQ8LRBdCAQMOGBkOARJZXhZBSkJGFkEDCxBDB1UPEVUfX11ZQRZASlxTGg8LF1cNN1IOBwFLQPGaX1MTQl5bHRJOFQxIVAEOB1UfX11ZQRZDXVRfGqLGFhxeVAYOGRQCQ1dDElrwjxxQEhJCRBxZVBAHGBAYDUFfXEITX1BBAKLHAQoNAhwfEVlLQ11eEgkPAEEMeV0eWilfGxMCABBL7pIQVFldSxFWFkECBVlLHRtFVD8ODVxVEkVGRkISAwAdRAlfEQYYt9xLXEdVEkJGD0NXHRUcAQoDVDAFEhwFDUFZHBZ+TlhBUxEcCx9EABBLBQAKQ1YQX/WZQlQcT04eWg==",
  },
  {
    jour: 21, mois: 12, titre: "Le retour", timbre: "home",
    texte: "eV0eWkscVBGo3RYOQFBCVxgSZQhUQVMTCwoNX7fcDlhVBFgSQEBTQUBaVBxPTh5acxEESzgbHBNMXERXG1ZYVxFYHBQcF1cNOwACWFUBClNZElVdXF9F8dpPUksJE35JG0o3AkhcRldYR1QP8pJTDQ9EFEwdBgQaWUt+U15WTxwNAEEMeV0eWj9EGhQHERgOQ0YcEkIVVFwRQhYUGkm6hwAHDlQXAkhcEEJaR0IPQEdUFAABWV4dGBsYEEtOXVxe9ZpWWlQcT04eWg==",
  }
];

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const MOIS_CACHET = ["JANV", "FÉVR", "MARS", "AVR", "MAI", "JUIN", "JUIL", "AOÛT", "SEPT", "OCT", "NOV", "DÉC"];
const UN_JOUR = 24 * 60 * 60 * 1000;
const $ = (s) => document.querySelector(s);
const pad = (n) => String(n).padStart(2, "0");

// localStorage peut planter sur iPhone quand les cookies sont bloqués
function lire(cle) {
  try { return localStorage.getItem(cle); } catch (e) { return null; }
}
function ecrire(cle, valeur) {
  try { localStorage.setItem(cle, valeur); } catch (e) {}
}

// petit xor avec une clé + la date de la lettre, juste pour que le texte soit pas lisible dans le code
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

// mon lien de test : ?apercu=... (je compare le hash pour pas laisser le code en clair)
const params = new URLSearchParams(location.search);
const APERCU = hash(params.get("apercu") || "") === -2043383376;


// heure
// pour pas qu'elle triche en changeant la date du tel, on prend l'heure de github
let decalage = 0;
let heureChargee = false;
const heureOk = fetch(location.href, { method: "HEAD", cache: "no-store" })
  .then((r) => { decalage = new Date(r.headers.get("Date")) - Date.now() || 0; })
  .catch(() => {})
  .finally(() => { heureChargee = true; });

const maintenant = () => new Date(Date.now() + decalage);

const dateLettre = (l) => new Date(ANNEE, l.mois - 1, l.jour);
const debutJour = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const nomDate = (l) => `${l.jour === 1 ? "1er" : l.jour} ${MOIS[l.mois - 1]}`;
const joursAvant = (l) => Math.round((dateLettre(l) - debutJour(maintenant())) / UN_JOUR);
const ouverte = (l) => APERCU || dateLettre(l) <= maintenant();
const dansXJours = (n) => (n === 1 ? "demain" : n === 2 ? "après-demain" : `dans ${n} jours`);
const vibrer = (motif) => { if (navigator.vibrate) navigator.vibrate(motif); };

// lettres déjà lues (gardé sur son téléphone)
const lues = new Set(APERCU ? [] : JSON.parse(lire("sandy-lues") || "[]"));
function marquerLue(i) {
  lues.add(i);
  if (!APERCU) ecrire("sandy-lues", JSON.stringify([...lues]));
}


// timbres et cachets
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


// petites lumières en fond
for (let k = 0; k < (innerWidth < 500 ? 9 : 14); k++) {
  const e = document.createElement("span");
  e.className = "ember";
  e.style.setProperty("--x", Math.random() * 100 + "%");
  e.style.setProperty("--s", 1.5 + Math.random() * 2 + "px");
  e.style.setProperty("--d", 10 + Math.random() * 10 + "s");
  e.style.setProperty("--delay", -Math.random() * 20 + "s");
  e.style.setProperty("--dx", Math.random() * 80 - 40 + "px");
  $("#embers").appendChild(e);
}


// lanternes du haut : une par lettre, elle s'allume quand la lettre est lue
function dessinerLanternes(allumer = []) {
  let svg = `<defs>
    <radialGradient id="lg" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="#ffe2a8"/><stop offset=".45" stop-color="#f6893f"/><stop offset="1" stop-color="#c8372d"/></radialGradient>
    <filter id="gl" x="-80%" y="-60%" width="260%" height="220%"><feGaussianBlur stdDeviation="4.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <path d="M0 10 Q180 70 360 10" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1"/>`;

  lettres.forEach((l, i) => {
    // position sur le fil (courbe)
    const t = (i + 1) / 6;
    const x = 360 * t;
    const y = 10 + 120 * t * (1 - t);
    const allumee = ouverte(l) && lues.has(i);
    const a = allumer.find((o) => o.i === i);
    const delai = a ? `${a.delai}s, ${-i * 1.1}s` : `${-i * 1.1}s`;
    svg += `<g class="lan${a ? " ignite" : ""}" style="transform-origin:${x}px ${y}px;animation-delay:${delai}" ${allumee ? 'filter="url(#gl)"' : ""}>
      <line x1="${x}" y1="${y}" x2="${x}" y2="${y + 7}" stroke="rgba(255,255,255,.35)"/>
      <rect x="${x - 5}" y="${y + 6}" width="10" height="3.5" rx="1" fill="#2a1a24"/>
      <ellipse cx="${x}" cy="${y + 22}" rx="12" ry="13" fill="${allumee ? "url(#lg)" : "#4a2b48"}"/>
      <path d="M${x - 6} ${y + 10} Q${x - 11} ${y + 22} ${x - 6} ${y + 34} M${x} ${y + 9} L${x} ${y + 35} M${x + 6} ${y + 10} Q${x + 11} ${y + 22} ${x + 6} ${y + 34}" fill="none" stroke="${allumee ? "rgba(140,30,20,.35)" : "rgba(0,0,0,.25)"}" stroke-width=".8"/>
      <rect x="${x - 5}" y="${y + 33.5}" width="10" height="3.5" rx="1" fill="#2a1a24"/>
      <path d="M${x} ${y + 37} L${x} ${y + 47}" stroke="${allumee ? "#e0442f" : "#5a3550"}" stroke-width="2.2" stroke-linecap="round"/>
    </g>`;
  });
  $("#lanterns").innerHTML = svg;
}


// messages
let timerMessage;
let derniereTaquinerie = -1;

function message(txt) {
  $("#toast").textContent = txt;
  $("#toast").classList.add("show");
  clearTimeout(timerMessage);
  timerMessage = setTimeout(() => $("#toast").classList.remove("show"), 2600);
}

function taquiner(l) {
  const phrases = [
    "Je t'ai dit, tu peux pas.",
    "Patiente, Sandy.",
    "Toujours pas.",
    `Reviens le ${nomDate(l)}, pas avant.`,
  ];
  let k;
  do { k = Math.floor(Math.random() * phrases.length); } while (k === derniereTaquinerie);
  derniereTaquinerie = k;
  message(phrases[k]);
}


// confettis quand le cachet saute
function confettis(x, y) {
  if (!Element.prototype.animate) return;
  const couleurs = ["#b8372f", "#ffb35c", "#f6efe1", "#24448c", "#ffd27a"];
  for (let k = 0; k < 24; k++) {
    const c = document.createElement("span");
    const taille = 4 + Math.random() * 6;
    const plat = Math.random() < 0.5;
    c.className = "spark";
    c.style.cssText = `left:${x}px;top:${y}px;width:${taille}px;height:${plat ? taille / 2 : taille}px;background:${couleurs[k % couleurs.length]};border-radius:${plat ? "1px" : "50%"}`;
    document.body.appendChild(c);
    const angle = Math.random() * Math.PI * 2;
    const dist = 50 + Math.random() * 95;
    c.animate([
      { transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist - 30}px)) rotate(${Math.random() * 360}deg) scale(.6)`, opacity: 0 },
    ], { duration: 700 + Math.random() * 450, easing: "cubic-bezier(.15,.7,.3,1)" }).onfinish = () => c.remove();
  }
}


// enveloppes
const pile = $("#pile");

// les enveloppes apparaissent quand on scrolle
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
  if (e === "locked") {
    const prochaine = lettres.find((x) => !ouverte(x));
    return l === prochaine ? `À ouvrir le ${nomDate(l)}` : `À ouvrir le ${nomDate(l)} (${dansXJours(joursAvant(l))})`;
  }
  if (e === "read") return `Lettre du ${nomDate(l)}`;
  return "Tu peux l'ouvrir";
}

function afficherEnveloppes(premiereFois = false, allumer = []) {
  dessinerLanternes(allumer);
  pile.classList.toggle("instant", !premiereFois);
  pile.innerHTML = "";

  lettres.forEach((l, i) => {
    const e = etat(l, i);
    const li = document.createElement("li");
    li.innerHTML = `
      <button class="env ${e}">
        <span class="face">
          <span class="flap"><span class="seal">${i + 1}<svg class="crack" viewBox="0 0 50 50"><path d="M37 3 L33 13 L39 21 L32 31 L37 39 L33 48" fill="none" stroke="#3d0f0b" stroke-width="2.4" stroke-linejoin="round" stroke-opacity=".6"/><path d="M38.5 3 L34.5 13 L40.5 21 L33.5 31 L38.5 39 L34.5 48" fill="none" stroke="#f6d9d2" stroke-width=".8" stroke-opacity=".5"/></svg></span></span>
          <span class="when">${texteEnveloppe(l, e)}</span>
          <span class="title">${l.titre}</span>
          <span class="post">${cachet(l, i)}<span class="stamp">${dessinTimbre(l.timbre)}</span></span>
        </span>
      </button>`;
    const bouton = li.querySelector(".env");
    bouton.addEventListener("click", () => toucherEnveloppe(bouton, l, i));
    pile.appendChild(li);
    if (premiereFois) apparition.observe(li);
    else li.classList.add("in");
  });

  if (!premiereFois) requestAnimationFrame(() => requestAnimationFrame(() => pile.classList.remove("instant")));
  majAttente();
}

function majEnveloppe(i) {
  const bouton = pile.querySelectorAll(".env")[i];
  if (!bouton) return;
  const e = etat(lettres[i], i);
  bouton.className = `env ${e}`;
  bouton.querySelector(".when").textContent = texteEnveloppe(lettres[i], e);
}

// "une lettre t'attend" : sinon le 21 décembre elle doit chercher la lettre tout en bas
function majAttente() {
  const note = $("#waiting");
  const pasLues = lettres.map((l, i) => i).filter((i) => ouverte(lettres[i]) && !lues.has(i));
  if (!pasLues.length) { note.hidden = true; return; }
  note.hidden = false;
  note.innerHTML = `${pasLues.length === 1 ? "Une lettre t'attend" : pasLues.length + " lettres t'attendent"}<svg viewBox="0 0 14 14"><path d="M7 2v9M3 7l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  note.onclick = () => pile.querySelectorAll(".env")[pasLues[0]].scrollIntoView({ behavior: "smooth", block: "center" });
}


// son
let son = lire("sandy-son") !== "off";
const sons = { ouverture: new Audio("ouverture.wav"), lanterne: new Audio("lanterne.wav") };

function jouer(nom) {
  if (!son) return;
  sons[nom].currentTime = 0;
  sons[nom].play().catch(() => {});
}

function dessinerBoutonSon() {
  $("#sound").innerHTML = `<svg viewBox="0 0 24 24"><path d="M4 9h3l4-4v14l-4-4H4z" fill="currentColor"/>${son
    ? '<path d="M15 9.5a3.5 3.5 0 0 1 0 5M17.5 7a7 7 0 0 1 0 10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'
    : '<path d="M15.5 9.5l5 5M20.5 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'}</svg>`;
}

$("#sound").addEventListener("click", () => {
  son = !son;
  ecrire("sandy-son", son ? "on" : "off");
  dessinerBoutonSon();
  if (son) jouer("lanterne");
});
dessinerBoutonSon();


// ouverture d'une enveloppe
async function toucherEnveloppe(bouton, l, i) {
  if (!heureChargee) {
    await heureOk;
    bouton = pile.querySelectorAll(".env")[i] || bouton; // la liste a pu être redessinée entre temps
  }

  if (!ouverte(l)) {
    bouton.classList.remove("nope");
    void bouton.offsetWidth; // pour relancer l'animation
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
    confettis(cx, cy);
    vibrer(15);
    jouer("ouverture");
  }
  lacherLanternes(cx, cy);
  // on laisse le temps au rabat de s'ouvrir et aux lanternes de partir
  setTimeout(() => ouvrirLettre(i), premiereFois ? 1200 : 900);
}


// compte à rebours (tableau des départs)
let nbOuvertes = lettres.filter(ouverte).length;

function majCompteur(t) {
  const label = $("#countLabel");
  const cases = $("#boxes");
  if (APERCU) { label.textContent = "Aperçu, toutes les enveloppes sont ouvertes."; cases.hidden = true; return; }
  const prochaine = lettres.find((l) => !ouverte(l));
  if (!prochaine) { label.textContent = "Toutes les lettres sont arrivées."; cases.hidden = true; return; }

  label.textContent = `La prochaine arrive le ${nomDate(prochaine)}`;
  cases.hidden = false;
  const s = Math.max(0, Math.floor((dateLettre(prochaine) - t) / 1000));
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

// une palette : le haut tombe, puis le bas se rabat
function basculer(p, v) {
  if (!p || p.dataset.v === v) return;
  const haut = p.querySelector(".hi i");
  const bas = p.querySelector(".lo i");
  const avant = p.dataset.v;
  p.dataset.v = v;
  if (avant === undefined || !p.animate) {
    haut.textContent = v;
    bas.textContent = v;
    return;
  }
  const tombe = document.createElement("span");
  const rabat = document.createElement("span");
  tombe.className = "hi fl";
  tombe.innerHTML = `<i>${avant}</i>`;
  rabat.className = "lo fl";
  rabat.innerHTML = `<i>${v}</i>`;
  rabat.style.transform = "rotateX(90deg)";
  haut.textContent = v;
  p.append(tombe, rabat);
  tombe.animate([{ transform: "rotateX(0deg)" }, { transform: "rotateX(-90deg)" }], { duration: 150, easing: "ease-in", fill: "forwards" });
  rabat.animate([{ transform: "rotateX(90deg)" }, { transform: "rotateX(0deg)" }], { duration: 150, delay: 150, easing: "ease-out", fill: "forwards" })
    .onfinish = () => { bas.textContent = v; tombe.remove(); rabat.remove(); };
}

let jourAffiche = debutJour(maintenant()).getTime();

function chaqueSeconde() {
  const t = maintenant();
  const nouveauJour = debutJour(t).getTime() !== jourAffiche;
  jourAffiche = debutJour(t).getTime();
  const n = lettres.filter(ouverte).length;
  if (n !== nbOuvertes) {
    const nouvelle = n > nbOuvertes;
    nbOuvertes = n;
    afficherEnveloppes();
    majTrajet();
    if (nouvelle) { message("Une nouvelle lettre vient d'arriver."); vibrer([20, 60, 20]); }
  } else if (nouveauJour) {
    afficherEnveloppes();
    majTrajet();
  }
  majCompteur(t);
}

heureOk.then(chaqueSeconde);


// trajet de l'avion
const DEPART = new Date(ANNEE, 9, 12);
const DUREE = 70; // jours
const COURBE = "M16 40 C 96 0, 224 0, 304 40";

$("#route").innerHTML = `<defs><radialGradient id="rgl"><stop offset="0" stop-color="#ffb35c" stop-opacity=".55"/><stop offset="1" stop-color="#ffb35c" stop-opacity="0"/></radialGradient></defs>
  <path id="rAll" d="${COURBE}" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1.4" stroke-dasharray="3 5" stroke-linecap="round"/>
  <path id="rDone" d="${COURBE}" fill="none" stroke="#ffb35c" stroke-width="2" stroke-linecap="round" stroke-dasharray="0 999"/>
  <g id="rMarks"></g>
  <text x="16" y="58" text-anchor="middle" class="rt">12 oct.</text>
  <text x="304" y="58" text-anchor="middle" class="rt">21 déc.</text>
  <g id="rPlane"><circle r="13" fill="url(#rgl)"/><g transform="translate(-10 0)" fill="#f6efe1">${PLANE}</g></g>`;

const trajet = $("#rAll");
const LONGUEUR = trajet.getTotalLength();

const joursDeVoyage = () => Math.round((debutJour(maintenant()) - DEPART) / UN_JOUR);
const avancement = () => (APERCU ? 37 / DUREE : Math.min(1, Math.max(0, joursDeVoyage() / DUREE)));

function texteTrajet() {
  if (APERCU) return "Aperçu, jour 37 sur 70";
  const j = joursDeVoyage();
  if (j < 0) return "Le voyage commence le 12 octobre";
  if (j === 0) return "Jour du départ, bon vol";
  if (j < DUREE) return `Jour ${j} sur ${DUREE}`;
  if (j === DUREE) return "Jour 70, c'est le retour";
  return "Voyage terminé, bienvenue à la maison";
}

function placerAvion(p) {
  p = Math.max(0, Math.min(1, p || 0));
  const pos = LONGUEUR * p;
  const a = trajet.getPointAtLength(pos);
  const b = trajet.getPointAtLength(p >= 1 ? pos - 1 : Math.min(LONGUEUR, pos + 1));
  let angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
  if (p >= 1) angle += 180;
  // arrondi, sinon safari reçoit des 1e-7 et l'avion saute
  $("#rPlane").setAttribute("transform", `translate(${a.x.toFixed(2)} ${a.y.toFixed(2)}) rotate(${angle.toFixed(2)}) scale(.8)`);
  $("#rDone").setAttribute("stroke-dasharray", `${pos.toFixed(2)} ${(LONGUEUR + 10).toFixed(2)}`);
}

function dessinerEtapes() {
  $("#rMarks").innerHTML = lettres.map((l, i) => {
    const pt = trajet.getPointAtLength((LONGUEUR * Math.round((dateLettre(l) - DEPART) / UN_JOUR)) / DUREE);
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


// lanternes célestes à l'ouverture
// une partie part de l'enveloppe, le reste monte du bas. elles passent derrière la lettre.
function lacherLanternes(x, y) {
  if (!Element.prototype.animate) return;
  const W = innerWidth;
  const H = innerHeight;
  const nb = W < 500 ? 36 : 48;
  for (let k = 0; k < nb; k++) {
    const proche = Math.random(); // 0 = loin, 1 = proche
    const taille = 12 + proche * 20;
    const depuisEnveloppe = k < nb * 0.45;
    const sx = depuisEnveloppe ? x + (Math.random() - 0.5) * 170 : Math.random() * W;
    const sy = depuisEnveloppe ? y + (Math.random() - 0.5) * 40 : H + 20 + Math.random() * 80;
    const hauteur = sy + 160 + Math.random() * 120;
    const derive = (Math.random() - 0.5) * 70;
    const opacite = 0.55 + proche * 0.45;

    const lanterne = document.createElement("span");
    lanterne.className = "sky";
    lanterne.style.setProperty("--s", taille + "px");
    lanterne.style.left = sx - taille / 2 + "px";
    lanterne.style.top = sy - taille * 0.65 + "px";
    $("#sky").appendChild(lanterne);

    lanterne.animate([
      { transform: "translate(0,0) scale(.5)", opacity: 0 },
      { transform: `translate(${derive * 0.3}px, ${-hauteur * 0.12}px) scale(1)`, opacity: opacite, offset: 0.12 },
      { transform: `translate(${derive}px, ${-hauteur * 0.6}px) scale(.85)`, opacity: opacite, offset: 0.6 },
      { transform: `translate(${-derive * 0.5}px, ${-hauteur}px) scale(.6)`, opacity: 0 },
    ], {
      duration: 7500 - proche * 3000 + Math.random() * 1500, // les proches montent plus vite
      delay: Math.random() * (depuisEnveloppe ? 500 : 1400),
      easing: "cubic-bezier(.33,.1,.5,1)",
      fill: "backwards",
    }).onfinish = () => lanterne.remove();
  }
}


// lettre ouverte
const overlay = $("#overlay");
const papier = $("#letter");
let lettreOuverte = -1;
let enTrainDeFermer = false;
let scrollAvant = 0;
let premiereLecture = false;

// sur iphone overflow:hidden ne suffit pas pour bloquer le scroll derrière
function bloquerScroll() {
  scrollAvant = window.scrollY;
  Object.assign(document.body.style, { position: "fixed", top: `-${scrollAvant}px`, left: "0", right: "0" });
}
function debloquerScroll() {
  Object.assign(document.body.style, { position: "", top: "", left: "", right: "" });
  window.scrollTo(0, scrollAvant);
}

function ouvrirLettre(i) {
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

  // les paragraphes apparaissent un par un
  [...$("#lBody").children, $("#lSign"), $("#done")].forEach((el, k) => {
    el.style.animationDelay = 0.35 + k * 0.1 + "s";
  });
  papier.classList.remove("anim");
  void papier.offsetWidth;
  papier.classList.add("anim");

  bloquerScroll();
  $("#backdrop").classList.add("show");
  overlay.classList.add("show");
  overlay.scrollTop = 0;
  marquerLue(i);
}

function fermerLettre() {
  if (!overlay.classList.contains("show") || enTrainDeFermer) return;
  enTrainDeFermer = true;
  if (premiereLecture) jouer("lanterne");
  overlay.classList.add("closing");
  $("#backdrop").classList.add("closing");
  papier.classList.add("closing");

  setTimeout(() => {
    overlay.classList.remove("show", "closing");
    $("#backdrop").classList.remove("show", "closing");
    papier.classList.remove("closing");
    papier.style.transform = "";
    papier.style.transition = "";
    debloquerScroll();
    majEnveloppe(lettreOuverte);
    if (premiereLecture) {
      dessinerLanternes([{ i: lettreOuverte, delai: 0.2 }]);
      dessinerEtapes();
      premiereLecture = false;
    }
    majAttente();
    enTrainDeFermer = false;
  }, 280);
}

$("#close").addEventListener("click", fermerLettre);
$("#done").addEventListener("click", fermerLettre);
overlay.addEventListener("click", (e) => { if (e.target === overlay) fermerLettre(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fermerLettre(); });

// glisser la lettre vers le bas pour la fermer
let debutY = null;
let glisse = 0;
overlay.addEventListener("touchstart", (e) => {
  if (overlay.scrollTop > 0 || enTrainDeFermer) { debutY = null; return; }
  debutY = e.touches[0].clientY;
  glisse = 0;
  papier.style.transition = "none";
}, { passive: true });
overlay.addEventListener("touchmove", (e) => {
  if (debutY === null) return;
  glisse = e.touches[0].clientY - debutY;
  if (glisse > 0) papier.style.transform = `translateY(${glisse * 0.6}px)`;
}, { passive: true });
overlay.addEventListener("touchend", () => {
  if (debutY === null) return;
  debutY = null;
  papier.style.transition = "transform .25s ease";
  if (glisse > 110) fermerLettre();
  else papier.style.transform = "";
});


// c'est parti
const dejaLues = lettres.map((l, i) => i).filter((i) => ouverte(lettres[i]) && lues.has(i));
afficherEnveloppes(true, dejaLues.map((i, k) => ({ i, delai: 0.5 + k * 0.28 })));
majCompteur(maintenant());
majTrajet(true);
setInterval(chaqueSeconde, 1000);

// pour que le site marche aussi sans réseau
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
