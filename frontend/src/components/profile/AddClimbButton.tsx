import { Plus } from "lucide-react";

const AddClimbButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
  >
    <Plus className="h-5 w-5" />
    Add New Climb
  </button>
);

export default AddClimbButton;
