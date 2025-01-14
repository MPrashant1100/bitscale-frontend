import { ArrowLeft, UserRoundPen } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isAutoSave, setIsAutoSave] = useState(true);

  const handleToggle = () => {
    setIsAutoSave(!isAutoSave);
  };

  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4 text-gray-500" />
        <h2 className="text-sm font-medium text-gray-500 ">Name of the file</h2>
      </div>
      <div className="flex items-center gap-4">
        {/* Toggle Switch */}
        <div className="flex items-center gap-2">
          <div
            className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${
              isAutoSave ? "bg-green-400" : "bg-gray-300"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                isAutoSave ? "translate-x-4" : "translate-x-0"
              }`}
            ></div>
          </div>
          <span className="text-sm text-gray-600">Auto Save</span>
        </div>
        <UserRoundPen className="w-5 h-5 text-red-400" />
      </div>
    </div>
  );
};

export default Header;
