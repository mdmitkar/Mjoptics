// 40 Realistic mock products explicitly built for the premium Spectacles Page

const brandNames = [
  "John Jacobs | Supreme",
  "Vincent Chase | Air",
  "Lenskart Studio | Blu",
  "Hustlr | Pro",
  "Essentials | Classic",
  "Ray-Ban | Wayfarer",
  "Oakley | Holbrook",
  "Prada | Linea Rossa",
];

const styles = [
  "Aviator",
  "Wayfarer",
  "Round",
  "Cat-Eye",
  "Geometric",
  "Browline",
  "Rimless",
  "Half-Rim",
];

const generateProducts = () => {
  const products = [];

  for (let i = 1; i <= 40; i++) {
    const isPremium = i % 5 === 0;
    const basePrice = Math.floor(Math.random() * 3000) + 999;

    products.push({
      id: i,
      name: `${brandNames[i % brandNames.length]} ${styles[i % styles.length]}`,
      size: ["Small", "Medium", "Wide", "Extra Wide"][
        Math.floor(Math.random() * 4)
      ],
      rating: (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1),
      ratingCount: Math.floor(Math.random() * 3000) + 120,
      price: basePrice,
      originalPrice: basePrice + Math.floor(Math.random() * 2000) + 1000,
      discount: isPremium
        ? Math.floor(Math.random() * 20) + 10
        : Math.floor(Math.random() * 40) + 30, // Premium items have lower discounts
      // Cycle through the available 4 product images
      swatches: [
        { colorCode: "#1A1A1A", image: `/assets/product_${(i % 4) + 1}.png` },
        {
          colorCode: "#8B4513",
          image: `/assets/product_${((i + 1) % 4) + 1}.png`,
        },
      ],
    });
  }
  return products;
};

export const spectaclesData = generateProducts();
