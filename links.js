// ============================================================
//  AMAZON ASSOCIATE LINKS — edit this file to add/update links
//  Replace YOUR_ASSOCIATE_TAG with your actual Associates ID
// ============================================================

const ASSOCIATE_TAG = "yourtag-20"; // <-- your Associates tag

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
    asin: "B09G9FPHY6",
    title: "Kindle Paperwhite",
    description: "Waterproof, 6.8\" display, adjustable warm light. The best Kindle yet.",
    image: "https://m.media-amazon.com/images/I/61PGgKB-RIL._AC_SX679_.jpg",
    category: "Tech",
  },
  {
    asin: "B08N5WRWNW",
    title: "Echo Dot (5th Gen)",
    description: "Improved audio, built-in motion sensor, Alexa smart home hub.",
    image: "https://m.media-amazon.com/images/I/718SKrPQLoL._AC_SX679_.jpg",
    category: "Tech",
  },
  {
    asin: "B07PVCVBN4",
    title: "Instant Pot Duo 7-in-1",
    description: "Pressure cooker, slow cooker, rice cooker, steamer, and more.",
    image: "https://m.media-amazon.com/images/I/71P5c4yFPbL._AC_SX679_.jpg",
    category: "Kitchen",
  },
  {
    asin: "B09B8YWXDF",
    title: "Hydro Flask 32 oz",
    description: "Keeps drinks cold 24 hrs, hot 12 hrs. Leakproof, dishwasher-safe lid.",
    image: "https://m.media-amazon.com/images/I/61qJB4QSHFL._AC_SX679_.jpg",
    category: "Kitchen",
  },
];

export { PRODUCTS, amzLink, ASSOCIATE_TAG };
