const fs = require("fs");
const s = fs.readFileSync("webflow.achunk.0facf1db0f912bb2.js", "utf8");
const marker = 'Webflow.require("ix2").init(';
const start = s.indexOf(marker);
if (start < 0) {
  console.error("init not found");
  process.exit(1);
}
let i = start + marker.length;
while (s[i] !== "{") i++;
let depth = 0;
let end = i;
for (; end < s.length; end++) {
  const ch = s[end];
  if (ch === "{") depth++;
  else if (ch === "}") {
    depth--;
    if (depth === 0) {
      end++;
      break;
    }
  }
}
const raw = s.slice(i, end);
const data = eval("(" + raw + ")");
const events = data.events || {};
const actionLists = data.actionLists || {};
console.log("EVENTS:", Object.keys(events).length);
console.log("ACTION LISTS:", Object.keys(actionLists).length);
console.log("\n=== EVENTS ===");
for (const [id, e] of Object.entries(events)) {
  const tid = (e.target && e.target.id) || "";
  const short = tid.split("|").pop();
  const listId = e.action && e.action.config && e.action.config.actionListId;
  console.log(
    [
      id,
      e.eventTypeId,
      e.animationType,
      "list:" + listId,
      "target:" + short,
      "mq:" + (e.mediaQueries || []).join(","),
    ].join(" | ")
  );
}
console.log("\n=== ACTION LIST SUMMARIES ===");
for (const [id, al] of Object.entries(actionLists)) {
  const actions = [];
  const walk = (obj) => {
    if (!obj || typeof obj !== "object") return;
    if (Array.isArray(obj)) return obj.forEach(walk);
    if (obj.actionTypeId) {
      const c = obj.config || {};
      const bits = [obj.actionTypeId];
      if (c.xValue !== undefined) bits.push("x=" + c.xValue);
      if (c.yValue !== undefined) bits.push("y=" + c.yValue);
      if (c.zValue !== undefined) bits.push("z=" + c.zValue);
      if (c.scaleX !== undefined) bits.push("sx=" + c.scaleX);
      if (c.scaleY !== undefined) bits.push("sy=" + c.scaleY);
      if (c.value !== undefined) bits.push("v=" + c.value);
      if (c.rValue !== undefined) bits.push("r=" + c.rValue);
      actions.push(bits.join(" "));
    }
    Object.values(obj).forEach(walk);
  };
  walk(al);
  console.log(
    id,
    "|",
    al.useFirstFrameAsInitialState ? "useFirstFrame" : "",
    "|",
    [...new Set(actions)].slice(0, 20).join(", ")
  );
}
