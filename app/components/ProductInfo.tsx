import {
  FileText,
  Beaker,
  AlertTriangle,
  BarChart3,
  FileSearch,
} from "lucide-react";
import { Product, SearchPreviewItem } from "@/app/types";

interface ProductInfoProps {
  product: Product;
  searchPreview?: SearchPreviewItem[];
}

export default function ProductInfo({
  product,
  searchPreview,
}: ProductInfoProps) {
  const renderNutritionGrade = (grade: string) => {
    const gradeColors: Record<string, string> = {
      a: "bg-green-500",
      b: "bg-light-green-500",
      c: "bg-yellow-500",
      d: "bg-orange-500",
      e: "bg-red-500",
    };

    const color = gradeColors[grade.toLowerCase()] || "bg-gray-400";

    return (
      <div className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white font-bold uppercase`}
        >
          {grade}
        </div>
        <span className="text-sm text-gray-600">Nutrition Grade</span>
      </div>
    );
  };

  return (
    <div>
      <div className="p-6 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="bg-green-50 p-3 rounded-full">
            <FileText className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {product.product_name}
            </h3>
            <p className="text-sm text-gray-600">{product.brands}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {renderNutritionGrade(product.nutrition_grade_fr)}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm uppercase font-medium mb-2">
            <Beaker className="w-4 h-4" />
            INGREDIENTS
          </div>
          <div className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl">
            {product.ingredients_text}
          </div>
        </div>

        {product.allergens_tags && product.allergens_tags.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 text-amber-600 text-sm uppercase font-medium mb-2">
              <AlertTriangle className="w-4 h-4" />
              ALLERGENS
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <div className="text-amber-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-1">
                  {product.allergens_tags.map((allergen: string, i: number) => (
                    <li key={i}>{allergen.replace("en:", "")}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {product.nutriments && (
          <div className="mb-6">
            <div className="flex items-center gap-2 text-gray-500 text-sm uppercase font-medium mb-2">
              <BarChart3 className="w-4 h-4" />
              NUTRITION (per 100g)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3 rounded-xl">
                <div className="text-xs text-gray-500 font-medium">Energy</div>
                <div className="text-gray-800 font-medium">
                  {product.nutriments.energy_100g}{" "}
                  {product.nutriments.energy_unit}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <div className="text-xs text-gray-500 font-medium">Fat</div>
                <div className="text-gray-800 font-medium">
                  {product.nutriments.fat_100g}g
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <div className="text-xs text-gray-500 font-medium">
                  Carbohydrates
                </div>
                <div className="text-gray-800 font-medium">
                  {product.nutriments.carbohydrates_100g}g
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <div className="text-xs text-gray-500 font-medium">
                  Proteins
                </div>
                <div className="text-gray-800 font-medium">
                  {product.nutriments.proteins_100g}g
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <div className="text-xs text-gray-500 font-medium">Sugars</div>
                <div className="text-gray-800 font-medium">
                  {product.nutriments.sugars_100g}g
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <div className="text-xs text-gray-500 font-medium">Salt</div>
                <div className="text-gray-800 font-medium">
                  {product.nutriments.salt_100g}g
                </div>
              </div>
              {product.nutriments.fiber_100g && (
                <div className="bg-gray-50 p-3 rounded-xl">
                  <div className="text-xs text-gray-500 font-medium">Fiber</div>
                  <div className="text-gray-800 font-medium">
                    {product.nutriments.fiber_100g}g
                  </div>
                </div>
              )}
              {product.nutriments.sodium_100g && (
                <div className="bg-gray-50 p-3 rounded-xl">
                  <div className="text-xs text-gray-500 font-medium">
                    Sodium
                  </div>
                  <div className="text-gray-800 font-medium">
                    {product.nutriments.sodium_100g}mg
                  </div>
                </div>
              )}
            </div>
          </div>
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
            <div className="flex items-center gap-2 text-gray-500 text-sm uppercase font-medium mb-2">
              <FileSearch className="w-4 h-4" />
              SOURCES
            </div>
            <div className="space-y-3">
              {searchPreview.slice(0, 3).map((item, i) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="block bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition"
                >
                  <h4 className="font-medium text-blue-600 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm truncate">
                    {item.snippet}
                  </p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
