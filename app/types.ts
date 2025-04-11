import { z } from 'zod';

export const NutrimentsSchema = z.object({
  energy_100g: z.number(),
  energy_unit: z.string(),
  fat_100g: z.number(),
  carbohydrates_100g: z.number(),
  proteins_100g: z.number(),
  salt_100g: z.number(),
  sugars_100g: z.number(),
  fiber_100g: z.number(),
  sodium_100g: z.number(),
  vitamin_info: z.string(),
  health_benefits: z.string(),
  dietary_flags: z.array(z.string()),
});

export const ProductSchema = z.object({
  product_name: z.string(),
  brands: z.string(),
  nutrition_grade_fr: z.enum(['a', 'b', 'c', 'd', 'e']),
  ingredients_text: z.string(),
  allergens_tags: z.array(z.string()),
  nutriments: NutrimentsSchema,
  code: z.string(),
});

export const SearchPreviewItemSchema = z.object({
  title: z.string(),
  snippet: z.string(),
  url: z.string(),
});

export const OpenAIResponseSchema = z.object({
  products: z.array(ProductSchema),
  search_preview: z.array(SearchPreviewItemSchema),
});

export type Nutriments = z.infer<typeof NutrimentsSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type SearchPreviewItem = z.infer<typeof SearchPreviewItemSchema>;
export type OpenAIResponse = z.infer<typeof OpenAIResponseSchema>; 