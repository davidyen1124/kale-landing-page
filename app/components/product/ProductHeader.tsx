import { FileText } from "lucide-react";
import { NutritionGrade } from "@/app/components/product";

interface ProductHeaderProps {
  productName: string;
  brands: string;
  nutritionGrade: string;
}

export default function ProductHeader({
  productName,
  brands,
  nutritionGrade,
}: ProductHeaderProps) {
  return (
    <div className="p-6 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center gap-4">
        <div className="bg-green-50 p-3 rounded-full">
          <FileText className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{productName}</h3>
          <p className="text-sm text-gray-600">{brands}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <NutritionGrade grade={nutritionGrade} />
      </div>
    </div>
  );
}
