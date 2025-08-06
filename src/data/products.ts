export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  prices: {
    small?: { pack: string; price: number };
    large?: { pack: string; price: number };
    default?: { pack: string; price: number };
  };
  features?: string[];
}

export const products: Product[] = [
  {
    id: "mixed-dry-fruits-honey-nuts",
    name: "Mixed Dry Fruits & Honey Nuts",
    description: "A perfect blend of premium nuts and dried fruits drizzled with pure honey. Rich in antioxidants, vitamins, and minerals that boost immunity and provide sustained energy.",
    image: "/products/mixed-fruit.png",
    prices: {
      small: { pack: "Small Pack (50g)", price: 50 },
      large: { pack: "Large Pack (250g)", price: 200 }
    },
    features: [
      "Premium quality nuts and dried fruits",
      "Pure honey coating",
      "Rich in antioxidants and vitamins",
      "Boosts immunity and energy"
    ]
  },
  {
    id: "raw-cashew",
    name: "Raw Cashew",
    description: "Premium quality raw cashews, rich in healthy fats and minerals, perfect for snacking or cooking.",
    image: "/products/cashew.png",
   prices: {
      small: { pack: "Small Pack (50g)", price: 50 },
      large: { pack: "Large Pack (250g)", price: 200 }
    },
    features: [
      "Premium quality raw cashews",
      "Rich in healthy fats and minerals",
      "Perfect for snacking or cooking",
      "Natural and unprocessed"
    ]
  },
  {
    id: "badam-almonds",
    name: "Badam (Almonds)",
    description: "Premium quality almonds, packed with protein and healthy fats, perfect for daily nutrition.",
    image: "/products/badam.png",
    prices: {
      default: { pack: "1kg Pack", price: 820 }
    },
    features: [
      "Premium quality almonds",
      "Packed with protein and healthy fats",
      "Perfect for daily nutrition",
      "Natural and unprocessed"
    ]
  },
  {
    id: "figs",
    name: "Figs",
    description: "Naturally sweet and nutritious dried figs, perfect for snacking or adding to recipes. High in fiber, calcium, and antioxidants that support digestive health and bone strength.",
    image: "/products/figs.png",
    prices: {
      small: { pack: "100g Pack", price: 120 },
      large: { pack: "250g Pack", price: 280 }
    },
    features: [
      "Naturally sweet and nutritious",
      "High in fiber and calcium",
      "Rich in antioxidants",
      "Supports digestive health and bone strength"
    ]
  },
  {
    id: "dates",
    name: "Dates",
    description: "Soft, sweet and nutritious dates that provide instant energy and essential nutrients. Rich in fiber, potassium, and natural sugars that support heart health and provide sustained energy.",
    image: "/products/dates.png",
    prices: {
      small: { pack: "250g Pack", price: 180 },
      large: { pack: "500g Pack", price: 340 }
    },
    features: [
      "Soft, sweet and nutritious",
      "Provides instant energy",
      "Rich in fiber and potassium",
      "Supports heart health"
    ]
  },
  {
    id: "pure-honey",
    name: "Pure Honey",
    description: "100% pure, raw honey with no additives or preservatives. Packed with antioxidants and natural enzymes that boost immunity, soothe sore throats, and provide natural energy.",
    image: "/products/honey.png",
    prices: {
      small: { pack: "250g Bottle", price: 220 },
      large: { pack: "500g Bottle", price: 420 }
    },
    features: [
      "100% pure and raw",
      "No additives or preservatives",
      "Packed with antioxidants",
      "Boosts immunity and soothes sore throats"
    ]
  },
  {
    id: "walnuts",
    name: "Walnuts",
    description: "Premium quality walnuts with their distinctive brain-like shape and exceptional nutritional profile. Rich in omega-3 fatty acids, antioxidants, and proteins that support brain health and reduce inflammation.",
    image: "/products/walnuts.png",
    prices: {
      default: { pack: "500g Pack", price: 580 }
    },
    features: [
      "Premium quality walnuts",
      "Rich in omega-3 fatty acids",
      "High in antioxidants and proteins",
      "Supports brain health and reduces inflammation"
    ]
  },
  {
    id: "mixed-nuts",
    name: "Mixed Nuts",
    description: "A delicious blend of premium nuts including cashews, almonds, walnuts, and pistachios. This nutrient-dense mix provides a perfect balance of proteins, healthy fats, and essential minerals for overall wellness.",
    image: "/products/mixed-nuts.png",
    prices: {
      small: { pack: "250g Pack", price: 320 },
      large: { pack: "500g Pack", price: 620 }
    },
    features: [
      "Premium blend of nuts",
      "Includes cashews, almonds, walnuts, and pistachios",
      "Perfect balance of proteins and healthy fats",
      "Rich in essential minerals"
    ]
  }
]; 