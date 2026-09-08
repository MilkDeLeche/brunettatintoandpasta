/** Restaurant photography already supplied in this project.
 * Descriptions checked visually against the actual files, 2026-09-07.
 * Interior, exterior, wine and staff photography remain on SETUP-LIST.md.
 */
export const big = (name: string) => `/img/food/${name}.webp`;
export const thumb = (name: string) => `/img/food/thumb/${name}.webp`;
const photoDescriptions: Record<string, string> = {
  DSC01335: "Beef medallions with vegetables and a red wine sauce",
  DSC01349: "Pizza with prosciutto, figs and arugula",
  DSC05501: "Fusilli with sun-dried tomatoes and cheese",
  DSC05579: "Ravioli in a creamy sauce",
  DSC06496: "Salad with tomatoes, mozzarella and basil",
  DSC06525: "Squid-ink pasta with shrimp and greens",
  DSC06626: "Pizza topped with prosciutto and arugula",
  DSC08704: "Pecan dessert with ice cream and berries",
  DSC09345: "Pizza served at a Brunetta dining table",
  DSC09489: "A seafood plate with fresh herbs",
  DSC09499: "Tiramisù with cocoa and berries",
  DSC09509: "Tiramisù served with fresh berries",
  DSC09668: "Grilled steak with rosemary potatoes",
  DSC09683: "Fish with vegetables, olives and sauce",
  DSC09697: "Slow-cooked short ribs with rosemary",
  DSC09728: "Cheese and charcuterie with grapes and preserves",
  DSC09745: "A layered dessert with fruit and a chocolate garnish",
  DSC09771: "Beef medallions with sauce and vegetables",
};
export const foodAll = Object.entries(photoDescriptions).map(([name, alt]) => ({
  name, alt: `${alt} at Brunetta`, src: big(name), thumb: thumb(name),
}));
export const feature = {
  hero: "DSC06525", heroAlt: "DSC01349", ambiance: "DSC09697",
  wine: "DSC09728", story: "DSC01335", giftOrEvents: "DSC09728",
} as const;

// Match only clearly identifiable plates. Do not assign unrelated photos to dishes.
// Final dish identification remains subject to the kitchen's menu review.
export const dishPhoto: Record<string, string> = {
  "Affettati Misto": "DSC09728",
  "Caprese": "DSC06496",
  "Fusilli Pomodoro Secchi Carciofi": "DSC05501",
  "Pappardelle Nero Gamberi": "DSC06525",
  "Costolette di Manzo al Oporto": "DSC09697",
  "Rib Eye Prime alla Griglia": "DSC09668",
  "Medaglioni al Marsala": "DSC09771",
  "Pizza Toscana": "DSC01349",
  "Torta alle Noci": "DSC08704",
  "Tiramisù": "DSC09509",
};
export function photoForDish(name: string) {
  const key = dishPhoto[name];
  return key ? { src: big(key), thumb: thumb(key), alt: `${photoDescriptions[key]} at Brunetta` } : null;
}
