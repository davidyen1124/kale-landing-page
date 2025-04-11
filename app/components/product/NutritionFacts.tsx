import { BarChart3 } from "lucide-react";

interface Nutriments {
  energy_100g: number;
  energy_unit: string;
  fat_100g: number;
  carbohydrates_100g: number;
  proteins_100g: number;
  sugars_100g: number;
  salt_100g: number;
  fiber_100g?: number;
  sodium_100g?: number;
}

interface NutritionFactsProps {
  nutriments: Nutriments;
}

export default function NutritionFacts({ nutriments }: NutritionFactsProps) {
  if (!nutriments) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-gray-500 text-sm uppercase font-medium mb-2">
        <BarChart3 className="w-4 h-4" />
        NUTRITION (per 100g)
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="bg-gray-50 p-3 rounded-xl">
          <div className="text-xs text-gray-500 font-medium">Energy</div>
          <div className="text-gray-800 font-medium">
            {nutriments.energy_100g} {nutriments.energy_unit}
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl">
          <div className="text-xs text-gray-500 font-medium">Fat</div>
          <div className="text-gray-800 font-medium">
            {nutriments.fat_100g}g
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl">
          <div className="text-xs text-gray-500 font-medium">Carbohydrates</div>
          <div className="text-gray-800 font-medium">
            {nutriments.carbohydrates_100g}g
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl">
          <div className="text-xs text-gray-500 font-medium">Proteins</div>
          <div className="text-gray-800 font-medium">
            {nutriments.proteins_100g}g
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl">
          <div className="text-xs text-gray-500 font-medium">Sugars</div>
          <div className="text-gray-800 font-medium">
            {nutriments.sugars_100g}g
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl">
          <div className="text-xs text-gray-500 font-medium">Salt</div>
          <div className="text-gray-800 font-medium">
            {nutriments.salt_100g}g
          </div>
        </div>
        {nutriments.fiber_100g && (
          <div className="bg-gray-50 p-3 rounded-xl">
            <div className="text-xs text-gray-500 font-medium">Fiber</div>
            <div className="text-gray-800 font-medium">
              {nutriments.fiber_100g}g
            </div>
          </div>
        )}
        {nutriments.sodium_100g && (
          <div className="bg-gray-50 p-3 rounded-xl">
            <div className="text-xs text-gray-500 font-medium">Sodium</div>
            <div className="text-gray-800 font-medium">
              {nutriments.sodium_100g}mg
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
