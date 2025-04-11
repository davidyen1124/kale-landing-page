import { OpenAIResponse } from "@/app/types";

export const doritosExampleData: OpenAIResponse = {
  products: [
    {
      product_name: "Doritos Nacho Cheese Flavored Tortilla Chips",
      brands: "Frito-Lay",
      nutrition_grade_fr: "d",
      ingredients_text:
        "Corn, Vegetable Oil (Sunflower, Canola, and/or Corn Oil), Maltodextrin (Made from Corn), and Less than 2% of Salt, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Whey, Monosodium Glutamate, Buttermilk, Romano Cheese (Cow's Milk, Cheese Cultures, Salt, Enzymes), Onion Powder, Corn Flour, Natural and Artificial Flavors, Dextrose, Tomato Powder, Whey Protein Concentrate, Spices, Lactose, Artificial Color (Yellow 6, Yellow 5, Yellow 6 Lake, Yellow 5 Lake, Red 40), Potassium Salt, Lactic Acid, Sodium Caseinate, Citric Acid, Sugar, Garlic Powder, Red and Green Bell Pepper Powder, Skim Milk, Disodium Inosinate, and Disodium Guanylate.",
      allergens_tags: ["milk"],
      nutriments: {
        energy_100g: 519,
        energy_unit: "kcal",
        fat_100g: 27.42,
        carbohydrates_100g: 60.81,
        proteins_100g: 7.36,
        salt_100g: 1.75,
        sugars_100g: 2.59,
        fiber_100g: 5.1,
        sodium_100g: 691,
        vitamin_info:
          "Contains calcium (137mg per 100g) and iron (1.16mg per 100g).",
        health_benefits:
          "Provides energy and some essential nutrients but should be consumed in moderation due to high fat and sodium content.",
        dietary_flags: [
          "Contains milk",
          "Not suitable for vegans",
          "Not gluten-free",
        ],
      },
      code: "028400070104",
    },
    {
      product_name: "Generic Tortilla Chips",
      brands: "Various",
      nutrition_grade_fr: "c",
      ingredients_text: "Corn, Vegetable Oil, Salt.",
      allergens_tags: [],
      nutriments: {
        energy_100g: 465,
        energy_unit: "kcal",
        fat_100g: 19,
        carbohydrates_100g: 65,
        proteins_100g: 7,
        salt_100g: 1.2,
        sugars_100g: 0.5,
        fiber_100g: 5,
        sodium_100g: 480,
        vitamin_info: "Contains small amounts of iron and calcium.",
        health_benefits:
          "Provides energy and dietary fiber; should be consumed in moderation due to fat and sodium content.",
        dietary_flags: ["Gluten-free", "Vegan"],
      },
      code: "000000000000",
    },
  ],
  search_preview: [
    {
      title:
        "Doritos Nacho Cheese Flavored Tortilla Chips - Shop Chips at H-E-B",
      snippet:
        "Doritos Nacho Cheese Flavored Tortilla Chips contain 150 calories per serving, with 8g of fat and 18g of carbohydrates.",
      url: "https://www.heb.com/product-detail/doritos-nacho-cheese-flavored-tortilla-chips/99552",
    },
    {
      title: "Doritos Nacho Cheese Tortilla Chips - Shop Chips at H-E-B",
      snippet:
        "Doritos Nacho Cheese Tortilla Chips have 150 calories per serving, with 8g of fat and 18g of carbohydrates.",
      url: "https://www.heb.com/product-detail/doritos-nacho-cheese-tortilla-chips/99969",
    },
    {
      title: "Doritos Nacho Cheese Tortilla Chips - Shop Chips at H-E-B",
      snippet:
        "Doritos Nacho Cheese Tortilla Chips provide 150 calories per serving, with 8g of fat and 18g of carbohydrates.",
      url: "https://www.heb.com/product-detail/doritos-nacho-cheese-tortilla-chips/2092588",
    },
  ],
};
