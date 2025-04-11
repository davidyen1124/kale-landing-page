"use server";

import OpenAI from "openai";
import { OpenAIResponseSchema } from "@/app/types";
import { auth } from "@/app/auth";

export async function searchFoodProducts(
  query: string,
  imageBase64: string,
  imageType?: string
) {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Authentication required");
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const userMessage = query || "";
  const imageBase64Data = imageBase64 || "";

  try {
    const inputContent: Array<{
      role: string;
      content:
        | string
        | Array<{ type: string; text?: string; image_url?: string }>;
    }> = [];

    if (userMessage) {
      inputContent.push({
        role: "user",
        content: `Find detailed nutritional information about ${userMessage}. Include both packaged products and generic food items. For packaged products, provide accurate brand information, nutrition grade, and comprehensive ingredient lists. For generic foods, provide standard nutritional values. Highlight any common allergens, health benefits, and potential dietary concerns. Prioritize accurate and up-to-date information from reputable sources. Always provide values for fiber content, sodium levels, vitamin information, health benefits, and dietary flags even if estimated or marked as 'Unknown' when exact data is unavailable.`,
      });
    }

    if (imageBase64Data) {
      let processedImageUrl = imageBase64Data;
      if (!imageBase64Data.startsWith("data:image/")) {
        const mimeType = imageType || "image/jpeg";
        processedImageUrl = `data:${mimeType};base64,${imageBase64Data}`;
      }

      const imageInputContent: Array<{
        type: string;
        text?: string;
        image_url?: string;
      }> = [
        {
          type: "input_text",
          text: userMessage
            ? `Identify this food item (${userMessage}) and provide detailed nutritional information. Include both packaged products and generic food items. Analyze visible ingredients, portion size, and packaging information if available. Be specific about nutrition values, allergens, additives, and health implications. For packaged items, identify the exact brand version when possible. Always provide values for fiber content, sodium levels, vitamin information, health benefits, and dietary flags even if estimated or marked as 'Unknown' when exact data is unavailable.`
            : "Identify this food item and provide detailed nutritional information. Include both packaged products and generic food items. Analyze visible ingredients, portion size, and packaging information if available. Be specific about nutrition values, allergens, additives, and health implications. For packaged items, identify the exact brand version when possible. Always provide values for fiber content, sodium levels, vitamin information, health benefits, and dietary flags even if estimated or marked as 'Unknown' when exact data is unavailable.",
        },
        {
          type: "input_image",
          image_url: processedImageUrl,
        },
      ];

      inputContent.push({
        role: "user",
        content: imageInputContent,
      });
    }

    if (inputContent.length === 0) {
      throw new Error("No query or image provided");
    }

    const response = await openai.responses.create({
      model: "gpt-4o",
      input: inputContent as any,
      text: {
        format: {
          type: "json_schema",
          name: "search_results",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              products: {
                type: "array",
                description:
                  "List of food items that match the query. Include both packaged products AND generic food items like fruits, vegetables, etc. Always return at most 3 items for any valid food query.",
                items: {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    product_name: {
                      type: "string",
                      description: "Name of the product",
                    },
                    brands: {
                      type: "string",
                      description: "Brand(s) of the product",
                    },
                    nutrition_grade_fr: {
                      type: "string",
                      description: "French nutrition grade (a, b, c, d, e)",
                      enum: ["a", "b", "c", "d", "e"],
                    },
                    ingredients_text: {
                      type: "string",
                      description: "Ingredients list for the product",
                    },
                    allergens_tags: {
                      type: "array",
                      description: "Array of allergens",
                      items: {
                        type: "string",
                      },
                    },
                    nutriments: {
                      type: "object",
                      additionalProperties: false,
                      description:
                        "Nutritional information per 100g of product",
                      properties: {
                        energy_100g: {
                          type: "number",
                          description: "Energy per 100g in kcal/kJ",
                        },
                        energy_unit: {
                          type: "string",
                          description: "Unit of energy (kcal, kJ)",
                        },
                        fat_100g: {
                          type: "number",
                          description: "Fat per 100g in grams",
                        },
                        carbohydrates_100g: {
                          type: "number",
                          description: "Carbohydrates per 100g in grams",
                        },
                        proteins_100g: {
                          type: "number",
                          description: "Proteins per 100g in grams",
                        },
                        salt_100g: {
                          type: "number",
                          description: "Salt per 100g in grams",
                        },
                        sugars_100g: {
                          type: "number",
                          description: "Sugars per 100g in grams",
                        },
                        fiber_100g: {
                          type: "number",
                          description:
                            "Dietary fiber per 100g in grams. If exact value is unknown, use a reasonable estimate or 0.",
                        },
                        sodium_100g: {
                          type: "number",
                          description:
                            "Sodium per 100g in milligrams. If exact value is unknown, use a reasonable estimate or 0.",
                        },
                        vitamin_info: {
                          type: "string",
                          description:
                            "Information about key vitamins and minerals in the product. Use 'Unknown' or general information if specific data isn't available.",
                        },
                        health_benefits: {
                          type: "string",
                          description:
                            "Potential health benefits of consuming this food. Use general information about food type if specific benefits aren't well established.",
                        },
                        dietary_flags: {
                          type: "array",
                          description:
                            "Dietary considerations like vegan, gluten-free, keto-friendly, etc. Include an empty array or ['Unknown'] if information isn't available.",
                          items: {
                            type: "string",
                          },
                        },
                      },
                      required: [
                        "energy_100g",
                        "energy_unit",
                        "fat_100g",
                        "carbohydrates_100g",
                        "proteins_100g",
                        "salt_100g",
                        "sugars_100g",
                        "fiber_100g",
                        "sodium_100g",
                        "vitamin_info",
                        "health_benefits",
                        "dietary_flags",
                      ],
                    },
                    code: {
                      type: "string",
                      description: "Product identifier code",
                    },
                  },
                  required: [
                    "product_name",
                    "brands",
                    "nutrition_grade_fr",
                    "ingredients_text",
                    "allergens_tags",
                    "nutriments",
                    "code",
                  ],
                },
              },
              search_preview: {
                type: "array",
                description: "Search result information",
                items: {
                  type: "object",
                  additionalProperties: false,
                  properties: {
                    title: {
                      type: "string",
                      description: "Title of the search result",
                    },
                    snippet: {
                      type: "string",
                      description: "Short snippet from the search result",
                    },
                    url: {
                      type: "string",
                      description: "URL of the search result",
                    },
                  },
                  required: ["title", "snippet", "url"],
                },
              },
            },
            required: ["products", "search_preview"],
          },
        },
      },
      tools: [
        {
          type: "web_search_preview",
          user_location: {
            type: "approximate",
          },
          search_context_size: "medium",
        },
      ],
      reasoning: {},
      temperature: 0.5,
      max_output_tokens: 10000,
      top_p: 1,
    });

    try {
      const rawData = JSON.parse(response.output_text);
      const data = OpenAIResponseSchema.parse(rawData);
      return data;
    } catch (jsonError: unknown) {
      console.error("JSON parsing error:", jsonError);
      throw new Error(
        `Failed to parse OpenAI response: ${
          jsonError instanceof Error ? jsonError.message : String(jsonError)
        }`
      );
    }
  } catch (error: Error | unknown) {
    console.error("OpenAI API error:", error);
    if (error && typeof error === "object" && "response" in error) {
      const apiError = error as {
        response: {
          status: number;
          headers: Record<string, string>;
          data: unknown;
        };
      };
      console.error("API response error:", {
        status: apiError.response.status,
        headers: apiError.response.headers,
        data: apiError.response.data,
      });
    }
    throw error;
  }
}
