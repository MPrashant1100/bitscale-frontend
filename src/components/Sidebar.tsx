const Sidebar = () => {
    const topSidebarItems = [
      { label: "Files", icon: "/file.svg" },
      { label: "Puzzle", icon: "/puzzle-piece-01.svg" },
      { label: "Circle", icon: "/intersect-circle.svg" },
    ];
  
    const bottomSidebarItems = [
      { label: "Coins-Stacked", icon: "/coins-stacked-01.svg" },
      { label: "Credit Card", icon: "/credit-card-02.svg" },
    ];
  
    return (
      <aside className="w-16 min-h-[calc(100vh-20px)] border-r border-gray-300 text-gray-800 flex flex-col justify-between py-4">
        <div className="flex flex-col items-center">
          {topSidebarItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center my-3 hover:text-blue-400 cursor-pointer"
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6 mb-1" />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          {bottomSidebarItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center my-3 hover:text-blue-400 cursor-pointer"
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6 mb-1" />
            </div>
          ))}
        </div>
      </aside>
    );
  };
  
  export default Sidebar;
  