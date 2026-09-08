import fs from "fs";
const html = fs.readFileSync("assets/reference 2/template/index.html", "utf8");
const dump = fs.readFileSync("assets/reference 2/reference_2.txt", "utf8");

const fontFaces = [...html.matchAll(/@font-face\{[^}]+\}/g)].map((m) => m[0]);
console.log("fontFaces count", fontFaces.length);
fontFaces.slice(0, 8).forEach((f) => console.log(f.slice(0, 250), "\n---"));

const families = [...html.matchAll(/font-family:"([^"]+)"/g)].map((m) => m[1]);
console.log("families", [...new Set(families)].slice(0, 30));

const families2 = [...html.matchAll(/fontFamily&quot;:&quot;([^&]+)/g)].map((m) => m[1]);
console.log("families2", [...new Set(families2)].slice(0, 30));

const google = [...html.matchAll(/https:\/\/fonts\.googleapis\.com[^"'\s]+/g)].map((m) => m[0]);
console.log("google", [...new Set(google)].slice(0, 20));

const imgs = [...dump.matchAll(/https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9]+\.(?:jpg|jpeg|png|webp|svg)/g)].map(
  (m) => m[0]
);
console.log("imgs", [...new Set(imgs)].slice(0, 50));

// Find CSS module URLs
const css = [...html.matchAll(/https:\/\/framerusercontent\.com\/[^"']+\.css[^"']*/g)].map((m) => m[0]);
console.log("css", [...new Set(css)].slice(0, 20));
