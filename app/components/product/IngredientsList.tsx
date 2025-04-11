import { Beaker } from "lucide-react";

interface IngredientsListProps {
  ingredients: string;
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-gray-500 text-sm uppercase font-medium mb-2">
        <Beaker className="w-4 h-4" />
        INGREDIENTS
      </div>
      <div className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl">
        {ingredients}
      </div>
    </div>
  );
}
