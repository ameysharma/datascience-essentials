import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import PivotTableUI from "react-pivottable/PivotTableUI";
import "react-pivottable/pivottable.css";

// Sample Data
const sampleData = [
  { name: "A1", value: 15000, category: "AAA", type: "Exposure" },
  { name: "A2", value: 20000, category: "AA", type: "Exposure" },
  { name: "A3", value: 18000, category: "A", type: "Exposure" },
  { name: "Business Disruption", value: 27, category: "Operational", type: "Risk" },
  { name: "Clients Products", value: 3, category: "Operational", type: "Risk" },
  { name: "Day 1", value: 80, category: "Liquidity", type: "Liquidity Risk" },
  { name: "Day 2", value: 75, category: "Liquidity", type: "Liquidity Risk" },
  { name: "Day 3", value: 85, category: "Liquidity", type: "Liquidity Risk" },
  { name: "Equities", value: 40, category: "Equity", type: "Trading Book" },
  { name: "Bonds", value: 30, category: "Debt", type: "Trading Book" },
  { name: "Derivatives", value: 30, category: "Derivatives", type: "Trading Book" },
  { name: "Loans to Customers", value: 31.29, category: "Credit", type: "Credit Risk" },
  { name: "Loans to Banks", value: 25, category: "Credit", type: "Credit Risk" },
];

const RiskDashboard = () => {
  const [pivotData, setPivotData] = useState(sampleData);

  // Handling changes from the PivotTable UI
  const handlePivotChange = (newPivotData) => {
    setPivotData(newPivotData);
  };

  return (
    <div className="dashboard" style={{ padding: "10px" }}>
      {/* Pivot Table UI for dynamic data analysis */}
      <div className="section" style={{ marginBottom: "20px" }}>
        <h3>Interactive Pivot Table</h3>
        <PivotTableUI
          data={sampleData}
          onChange={handlePivotChange}
          rows={["category"]}
          cols={["type"]}
          rendererName="Table"
        />
      </div>

      {/* Raw Data Display as Table */}
      <div className="section" style={{ marginBottom: "20px" }}>
        <h3>Raw Data</h3>
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pivotData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.value}</td>
                <td>{row.category}</td>
                <td>{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visualization Charts */}
      <div className="row" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div className="col" style={{ flex: "1 1 30%", minWidth: "250px" }}>
          <h3>Exposure by Rating</h3>
          <BarChart width={250} height={200} data={pivotData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="col" style={{ flex: "1 1 30%", minWidth: "250px" }}>
          <h3>Operational Risk % of Loss Amounts</h3>
          <BarChart width={250} height={200} data={pivotData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>

      <div className="row" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div className="col" style={{ flex: "1 1 30%", minWidth: "250px" }}>
          <h3>Liquidity & Collateral</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={pivotData}>
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="col" style={{ flex: "1 1 30%", minWidth: "250px" }}>
          <h3>Trading Book Exposure</h3>
          <PieChart width={200} height={200}>
            <Pie data={pivotData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default RiskDashboard;
