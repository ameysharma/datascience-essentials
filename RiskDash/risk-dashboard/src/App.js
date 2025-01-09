import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RiskDashboard from "./pages/RiskDashboard";
import DynamicTable from "./pages/DynamicTable";
import OtherCharts from "./pages/OtherCharts";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<RiskDashboard />} />
            <Route path="/dynamic-table" element={<DynamicTable />} />
            <Route path="/other-charts" element={<OtherCharts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
