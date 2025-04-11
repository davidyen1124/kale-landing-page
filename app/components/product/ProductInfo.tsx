import { Beaker, FileSearch, FileText } from "lucide-react";
import { Product, SearchPreviewItem } from "@/app/types";
import {
  ProductHeader,
  IngredientsList,
  AllergensList,
  NutritionFacts,
} from "@/app/components/product";

interface ProductInfoProps {
  product: Product;
  searchPreview?: SearchPreviewItem[];
}

export default function ProductInfo({
  product,
  searchPreview,
}: ProductInfoProps) {
  return (
    <div>
      <ProductHeader
        productName={product.product_name}
        brands={product.brands}
        nutritionGrade={product.nutrition_grade_fr}
      />

      <div className="p-6">
        <IngredientsList ingredients={product.ingredients_text} />

        {product.allergens_tags && product.allergens_tags.length > 0 && (
          <AllergensList allergens={product.allergens_tags} />
        )}

        {product.nutriments && (
          <NutritionFacts nutriments={product.nutriments} />
        )}

        {product.nutriments?.dietary_flags &&
          product.nutriments.dietary_flags.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 text-green-600 text-sm uppercase font-medium mb-2">
                <FileText className="w-4 h-4" />
                DIETARY INFORMATION
              </div>
              <div className="flex flex-wrap gap-2">
                {product.nutriments.dietary_flags.map((flag, i) => (
                  <span
                    key={i}
                    className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {flag}
                  </span>
                ))}
              </div>
            </div>
          )}

        {product.nutriments?.health_benefits && (
          <div className="mb-6">
            <div className="flex items-center gap-2 text-blue-600 text-sm uppercase font-medium mb-2">
              <Beaker className="w-4 h-4" />
              HEALTH BENEFITS
            </div>
            <div className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-xl">
              {product.nutriments.health_benefits}
            </div>
          </div>
        )}

        {product.nutriments?.vitamin_info && (
          <div className="mb-6">
            <div className="flex items-center gap-2 text-purple-600 text-sm uppercase font-medium mb-2">
              <Beaker className="w-4 h-4" />
              VITAMINS & MINERALS
            </div>
            <div className="text-gray-700 leading-relaxed bg-purple-50 p-4 rounded-xl">
              {product.nutriments.vitamin_info}
            </div>
          </div>
        )}

        {searchPreview && searchPreview.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 text-indigo-600 text-sm uppercase font-medium mb-2">
              <FileSearch className="w-4 h-4" />
              AI INSIGHTS
            </div>
            <div className="bg-indigo-50 rounded-xl p-4">
              <div className="text-gray-700 leading-relaxed space-y-3">
                {searchPreview.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="bg-white border border-indigo-100 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    </div>
                    <p>{item.snippet}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
