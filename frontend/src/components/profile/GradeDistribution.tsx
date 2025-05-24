import type { ClimbGrade } from "../../types/ProfilePage.types";

const GradeDistribution: React.FC<{ grades: ClimbGrade[] }> = ({ grades }) => {
  const maxCount = Math.max(...grades.map((g) => g.count));

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
      <h3 className="text-xl font-semibold text-slate-800 mb-6">
        Grade Distribution
      </h3>
      <div className="space-y-4">
        {grades.map((grade) => (
          <div key={grade.grade} className="flex items-center gap-4">
            <div className="w-8 text-sm font-medium text-slate-700">
              {grade.grade}
            </div>
            <div className="flex-1 bg-slate-200 rounded-full h-6 relative overflow-hidden">
              <div
                className={`h-full ${grade.color} rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2`}
                style={{ width: `${(grade.count / maxCount) * 100}%` }}
              >
                {grade.count > 0 && (
                  <span className="text-xs font-medium text-white">
                    {grade.count}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeDistribution;
