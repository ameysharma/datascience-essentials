import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FaChartBar, FaTable, FaChartPie } from "react-icons/fa"; // Importing icons from react-icons

const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "black",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        color: "white",
      }}
    >
      <h4 className="text-center" style={{ color: "white" }}>Dashboard</h4>
      <Nav className="flex-column">
        <Nav.Link 
          as={Link} 
          to="/" 
          style={{ color: "white", padding: "15px 10px", display: "flex", alignItems: "center" }}
        >
          <FaChartBar style={{ marginRight: "10px" }} /> Risk Dashboard
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/dynamic-table" 
          style={{ color: "white", padding: "15px 10px", display: "flex", alignItems: "center" }}
        >
          <FaTable style={{ marginRight: "10px" }} /> Dynamic Table
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/other-charts" 
          style={{ color: "white", padding: "15px 10px", display: "flex", alignItems: "center" }}
        >
          <FaChartPie style={{ marginRight: "10px" }} /> Other Charts
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
