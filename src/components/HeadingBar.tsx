import {
  ArrowDownUp,
  Columns3,
  Download,
  Filter,
  Rows3,
  Search,
  Share2,
  Sparkles,
  Trash2,
} from "lucide-react";
import React from "react";

interface HeadingBarProps {
  activeRow?: number;
  totalRows?: number;
  activeColumn?: number;
  totalColumns?: number;
}

const HeadingBar: React.FC<HeadingBarProps> = ({
  activeRow,
  totalRows,
  activeColumn,
  totalColumns,
}) => {
  return (
    <div className="flex justify-between p-1 py-3 md:p-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center border p-1 rounded-md bg-gray-100">
          <Search className="text-gray-500 mr-2 h-4 w-4" />
          <input
            className="bg-transparent outline-none text-sm"
            placeholder="Search"
          />
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <div className="flex items-center text-gray-700">
            <Rows3 className="mr-1 h-4 w-4" />
            <span className="text-sm">
              {activeRow}/{totalRows} Row
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <Columns3 className="mr-1 h-4 w-4" />
            <span className="text-sm">
              {activeColumn}/{totalColumns} Column
            </span>
          </div>
          <div className="flex items-center text-gray-700">
            <Filter className="mr-1 h-4 w-4" />
            <span className="text-sm">0 Filter</span>
          </div>
          <div className="flex items-center text-gray-700">
            <ArrowDownUp className="mr-1 h-4 w-4" />
            <span className="text-sm">Sort</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
          <div className="flex items-center border gap-1 p-2 px-3 rounded-md bg-gray-800 text-white">
            {" "}
            {/* Changed to gray */}
            <Sparkles className="h-4 w-4" />
            <button className="text-sm">Enrich</button>
          </div>

          <div className="hidden md:flex gap-4 items-center text-gray-700">
            <Share2 className="h-4 w-4" />
            <Download className="h-4 w-4" />
            <Trash2 className="text-red-400 h-4 w-4" />
          </div>
        </div>
    </div>
  );
};

export default HeadingBar;
