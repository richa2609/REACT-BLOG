export const FALLBACK_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600"><rect width="100%" height="100%" fill="#dcedc8"/><text x="50%" y="50%" font-family="Arial" font-size="42" fill="#2e7d32" text-anchor="middle">RICH HEALTH</text></svg>`
  );
export const onImgError = (e) => { e.target.onerror = null; e.target.src = FALLBACK_IMG; };
export const CATEGORIES = ['Salads','Protein Bowls','Fruit Salads','Dressings','Nutrition','Meal Prep'];
