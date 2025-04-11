import { AlertTriangle } from "lucide-react";

interface AllergensListProps {
  allergens: string[];
}

export default function AllergensList({ allergens }: AllergensListProps) {
  if (!allergens || allergens.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-amber-600 text-sm uppercase font-medium mb-2">
        <AlertTriangle className="w-4 h-4" />
        ALLERGENS
      </div>
      <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
        <div className="text-amber-800 leading-relaxed">
          <ul className="list-disc list-inside space-y-1">
            {allergens.map((allergen: string, i: number) => (
              <li key={i}>{allergen.replace("en:", "")}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
