import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import Select from "react-select";
import {
  Col,
  Row,
  Card,
  CardHeader,
} from "reactstrap";

export default function App() {

  const [search, setSearch] = useState("");
  const [selectedstatus, setSelectedStatus] = useState(null);

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ];

  const handleStatus = [
    { value: "Animation", label: "Animation" },
    { value: "Sci-Fi", label: "Sci-Fi" },
    { value: "Drama", label: "Drama" },
  ];

  return (

    <div>
      <Row>
        <Col md={12}>
          <Card>
            <CardHeader>
              <Row>
                <Col md={5}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Title"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Col>
                <Col md={5}>
                  <Select
                    isClearable={true}
                    onChange={setSelectedStatus}
                    value={selectedstatus}
                    options={handleStatus}
                    placeholder="Select Genre"
                    isSearchable={true}
                  />
                </Col>

                <DataTable
                  title="Movies"
                  columns={columns}
                  data={data}
                  customStyles={customStyles}
                />

              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>

    </div>


  );
}
