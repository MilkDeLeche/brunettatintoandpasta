import fs from "fs";

function inspect(label, path) {
  const buf = fs.readFileSync(path);
  console.log("\n====", label, "bytes", buf.length, "bom", buf.slice(0, 4).toString("hex"));
  const text = buf.toString("utf8");
  console.log(text.slice(0, 800).replace(/\s+/g, " "));
  const urls = [...text.matchAll(/https?:\/\/[a-zA-Z0-9.-]+\.[a-z]{2,}/g)].map((m) => m[0]);
  console.log("urls", [...new Set(urls)].slice(0, 20));
}

inspect("d3 dump", "assets/reference_2/reference_2.txt");
inspect("d4 dump", "assets/reference_4/reference_4.txt");
inspect("d3 html", "assets/reference_2/template/home.html");
