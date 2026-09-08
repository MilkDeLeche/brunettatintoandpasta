export type PriceOption = { label: string; price: string };
export type SelectionItem = { name: string; price: string; qty: number };

export function priceOptions(value: string): PriceOption[] {
  return value.split("/").flatMap(part => {
    const match = part.trim().match(/^(.*?)\s*(\$\d+(?:\.\d{1,2})?)$/);
    return match ? [{ label: match[1].trim(), price: match[2] }] : [];
  });
}

export const priceCents = (price: string) =>
  /^\$\d+(?:\.\d{1,2})?$/.test(price) ? Math.round(Number(price.slice(1)) * 100) : 0;

// Restore only known dishes and current prices. Bad or stale storage cannot
// break the menu, inject markup, or manufacture an incorrect total.
export function restoreSelection(raw: string | null, catalog: Map<string, string>): SelectionItem[] {
  try {
    const saved: unknown = JSON.parse(raw ?? "[]");
    if (!Array.isArray(saved)) return [];
    const valid = new Map<string, SelectionItem>();
    for (const item of saved) {
      if (!item || typeof item.name !== "string" || !catalog.has(item.name) ||
          !Number.isInteger(item.qty) || item.qty < 1 || item.qty > 99) continue;
      const qty = Math.min(99, (valid.get(item.name)?.qty ?? 0) + item.qty);
      valid.set(item.name, { name: item.name, price: catalog.get(item.name)!, qty });
    }
    return [...valid.values()];
  } catch { return []; }
}
