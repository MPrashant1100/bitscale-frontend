import MainComponent from "./MainComponent";
import Sidebar from "./Sidebar";

const DashboardContainer = () => {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />
  
        {/* Main Content */}
        <div className="flex-1">
          <MainComponent />
        </div>
      </div>
    );
  };
  
  export default DashboardContainer;
  