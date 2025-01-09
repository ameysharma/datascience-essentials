import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

const DynamicTable = () => {
  const [tableData, setTableData] = useState([
    { risk: "Risk A", level: "High", description: "Potential for data breach" },
    { risk: "Risk B", level: "Medium", description: "Operational disruption" },
    { risk: "Risk C", level: "Low", description: "Minor compliance issue" },
  ]);

  const [newRow, setNewRow] = useState({ risk: "", level: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const addRow = () => {
    setTableData([...tableData, newRow]);
    setNewRow({ risk: "", level: "", description: "" });
  };

  return (
    <div>
      <h2>Dynamic Risk Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Risk</th>
            <th>Level</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.risk}</td>
              <td>{row.level}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form>
        <Form.Group>
          <Form.Label>Risk</Form.Label>
          <Form.Control
            type="text"
            name="risk"
            value={newRow.risk}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Level</Form.Label>
          <Form.Control
            type="text"
            name="level"
            value={newRow.level}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={newRow.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={addRow} className="mt-2">
          Add Row
        </Button>
      </Form>
    </div>
  );
};

export default DynamicTable;
