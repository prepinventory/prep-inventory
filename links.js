// ============================================================
//  AMAZON ASSOCIATE LINKS — edit this file to add/update links
//  Replace YOUR_ASSOCIATE_TAG with your actual Associates ID
// ============================================================

const ASSOCIATE_TAG = "prepinventory-20"; // <-- your Associates tag

// Helper: auto-appends your tag to any Amazon product URL
function amzLink(asin) {
  return `https://www.amazon.com/dp/${asin}?tag=${ASSOCIATE_TAG}`;
}

// ============================================================
//  YOUR PRODUCTS — add/remove/edit entries here
//  Fields: asin, title, description, image, category
//  image: use Amazon's image CDN or host your own
// ============================================================

const PRODUCTS = [
   {
    asin: "B0843J11JW",
    title: "Mountain House Food Kit",
    description: "Mountain House Emergency Meal Assortment Kits, Freeze-Dried Survival Food Kit for Disaster Preparedness & Long-Term Storage, 30-Year Shelf Life",
    image: "https://m.media-amazon.com/images/I/81L7zvPAbyL._AC_SL1500_.jpg",
    category: "Food",
  }, 
   {
    asin: "B0F6YCRKTJ",
    title: "Percon 3600W Power Station",
    description: "Pecron Portable Power Station F3000LFP, 3072Wh Solar Generator, 3600W LiFePO4 Battery Home Backup, Fast Charging Lithium Battery ",
    image: "https://m.media-amazon.com/images/I/61ZksOWm1AL._AC_SL1500_.jpg",
    category: "Power",
  }, 
  {
    asin: "B0CNPHD4VY",
    title: "Renogy 200W Portable Solar Panel",
    description: "Renogy 200W Portable Solar Panel",
    image: "https://m.media-amazon.com/images/I/71ywtVtTIaL._AC_SL1500_.jpg",
    category: "Power",
  },
  {
    asin: "B00FA2RLX2",
    title: "Sawyer Water Filter",
    description: "Sawyer Products Mini Water Filtration System",
    image: "https://m.media-amazon.com/images/I/715vjLrpJ0L._AC_SL1500_.jpg",
    category: "Water",
  },
  {
    asin: "B0000BYCFU",
    title: "Presto Pressure Cooker",
    description: "Presto 01781 Pressure Canner and Cooker, 23 qt, Silver ",
    image: "https://m.media-amazon.com/images/I/81I3lK0gaWL._AC_SL1500_.jpg",
    category: "Food",
  },
  {
    asin: "B097Y4YXFQ",
    title: "Molle Med Kit Pouch",
    description: "Upgrade Molle Rip Away Ifak Pouch, Tactical Small Belt First Aid Pouch Medical Utility EMT Pouch Only",
    image: "https://m.media-amazon.com/images/I/71dym58PB3L._AC_SL1500_.jpg",
    category: "Medical",
  },
  {
    asin: "B008MCUZZS",
    title: "3M N95 Masks",
    description: "3M 8210 Particulate Respirator, N95, Pack of 20 Disposable Respirator, NIOSH APPROVED",
    image: "https://m.media-amazon.com/images/I/71pZn9wlmJL._SL1500_.jpg",
    category: "Medical",
  },
];

export { PRODUCTS, amzLink, ASSOCIATE_TAG };
