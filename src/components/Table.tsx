import { CirclePlay } from "lucide-react";
import React, { useState } from "react";

interface TableRow {
  [key: string]: string;
}

interface ColumnData {
  key: string;
  title: string;
  icon: string;
}

const tableData = [
  {
    input: "Nov 12, 2024 at 14:08 PM",
    action: "Bitscale Evaluation - Account relevant",
    enrich: "Bitscale Evaluation - Account relevant",
  },
  {
    input: "Oct 12, 2023 at 14:08 PM",
    action: "⚠️ cell data size exceeds limit",
    enrich: "BMW Evaluation - Relevancy check",
  },
  {
    input: "Feb 12, 2024 at 23:08 PM",
    action: "🔗 https://www.linkedin.com",
    enrich: "Google Evaluation - Lilevancy check",
  },
  {
    input: "Oct 12, 2024 at 06:44 AM",
    action: "⏳ Loading data, Please wait",
    enrich: "Apple Evaluation - Olvancy check",
  },
  {
    input: "Jan 13, 2024 at 17:08 PM",
    action: "⏳ Loading data, Please wait",
    enrich: "Figma Evaluation - Evancy check",
  },
];

const colData = [
  {
    key: "input",
    title: "Input Column",
    icon: "/input.svg",
  },
  {
    key: "action",
    title: "Action Column",
    icon: "/action.svg",
  },
  {
    key: "enrich",
    title: "Enrich Company",
    icon: "/enrish.svg",
  },
];

const Table: React.FC = () => {
  const [data, setData] = useState<TableRow[]>(tableData);
  const [columns, setColumns] = useState<ColumnData[]>(colData);

  // Helper function to format the current date
  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return now.toLocaleDateString("en-US", options);
  };

  // Add a new row
  const addRow = () => {
    const newRow: TableRow = columns.reduce((acc, col) => {
      if (col.key === "input") {
        acc[col.key] = getCurrentDate();
      } else {
        acc[col.key] = "";
      }
      return acc;
    }, {} as TableRow);
    setData([...data, newRow]);
  };

  // Add a new column
  const addColumn = () => {
    const newKey = `column${columns.length + 1}`;
    const newColumn: ColumnData = {
      key: newKey,
      title: `New Column ${columns.length + 1}`,
      icon: "/default_column.svg",
    };
    setColumns([...columns, newColumn]);
    setData(data.map((row) => ({ ...row, [newKey]: "" })));
  };

  // Handle input change
  const handleInputChange = (
    rowIndex: number,
    key: string,
    value: string
  ) => {
    const updatedData = data.map((row, index) =>
      index === rowIndex ? { ...row, [key]: value } : row
    );
    setData(updatedData);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2 w-10"></th>
            <th className="border border-gray-300 p-2 w-10"></th>
            {columns.map((col, colIndex) => (
              <th key={colIndex} className="border border-gray-300 p-2">
                <img
                  src={col.icon}
                  alt={col.title}
                  className="inline-block w-6 h-6 mr-2"
                />
                {col.title}
              </th>
            ))}
            <th className="border border-gray-300 p-2">
              <button onClick={addColumn} className="text-blue-500 underline">
                + Add New Column
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{rowIndex + 1}</td>
              {/* Second Column with Play Icon */}
              <td className="border border-gray-300 p-2 text-center">
                <CirclePlay className="text-blue-400 w-6 h-6 inline-block" />
              </td>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={row[col.key]}
                    onChange={(e) =>
                      handleInputChange(rowIndex, col.key, e.target.value)
                    }
                    className="w-full bg-transparent outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={columns.length + 3} className="border border-gray-300 p-2 text-center">
              <button onClick={addRow} className="text-blue-500 underline">
                + Add Row
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
