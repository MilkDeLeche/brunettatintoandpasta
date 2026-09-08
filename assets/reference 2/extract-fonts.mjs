import fs from "fs";
const html = fs.readFileSync("assets/reference 2/template/index.html", "utf8");
const families = [...html.matchAll(/font-family:([A-Za-z][A-Za-z0-9 _-]+)/g)].map((m) => m[1].trim());
console.log([...new Set(families)].filter((f) => !/inherit|serif|sans|monospace|system|ui-|emoji|apple|Segoe|Arial|Helvetica|Times|Georgia|Inter Variable/i.test(f) || /Afacad|Inter|Playfair|Instrument|Geist|DM |Manrope|Satoshi|Fraunces/i.test(f)));

// Also search for Inter
for (const name of ["Afacad", "Inter", "Instrument", "Playfair", "Geist", "Manrope", "DM Sans", "Space Grotesk", "Syne"]) {
  const n = (html.match(new RegExp(name, "g")) || []).length;
  if (n) console.log(name, n);
}

// Extract text content snippets near Celebration
const idx = html.indexOf("Celebration");
console.log("near Celebration", html.slice(Math.max(0, idx - 200), idx + 400).replace(/\s+/g, " ").slice(0, 500));
