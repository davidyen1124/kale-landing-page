interface NutritionGradeProps {
  grade: string;
}

export default function NutritionGrade({ grade }: NutritionGradeProps) {
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
}
