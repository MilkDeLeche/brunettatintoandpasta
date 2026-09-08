import fs from "fs";
const css = fs.readFileSync("assets/reference/amrit.css", "utf8");
const keys = [
  "--biege",
  "--dark",
  "--primary",
  ".hero_section",
  ".h1_hero",
  ".caption_heading",
  ".flex_heading",
  ".featured_menu",
  ".left_side",
  ".drinks",
  ".gift_card",
  ".marquee_track",
  ".header",
  ".footer",
  ".video_section",
  ".catering",
  ".txt_lg",
  ".fullsize_section",
  ".box_testimonial",
  ".hero_headline",
  ".background_hero",
  ".overlay",
  ".featured_menu_item",
  ".image_drinks",
  ".is-colored",
  "body{",
];
for (const k of keys) {
  const escaped = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`[^{}]*${escaped}[^{]*\\{[^}]+\\}`, "g");
  const m = [...css.matchAll(re)].slice(0, 3);
  console.log(`\n==== ${k} (${m.length}) ====`);
  m.forEach((x) => console.log(x[0].slice(0, 600)));
}
