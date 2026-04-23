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
    asin: "B0CNPHD4VY",
    title: "Renogy 200W Portable Solar Panel",
    description: "Renogy 200W Portable Solar Panel",
    image: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif",
    category: "Power",
  },
  {
    asin: "B00FA2RLX2",
    title: "Sawyer Water Filter",
    description: "Sawyer Products Mini Water Filtration System",
    image: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif",
    category: "Water",
  },
  {
    asin: "B097Y4YXFQ",
    title: "Molle Med Kit Pouch",
    description: "Upgrade Molle Rip Away Ifak Pouch, Tactical Small Belt First Aid Pouch Medical Utility EMT Pouch Only",
    image: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif",
    category: "Medical",
  },
  {
    asin: "B008MCUZZS",
    title: "3M N95 Masks",
    description: "3M 8210 Particulate Respirator, N95, Pack of 20 Disposable Respirator, NIOSH APPROVED",
    image: "https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif",
    category: "Medical",
  },
];

export { PRODUCTS, amzLink, ASSOCIATE_TAG };
