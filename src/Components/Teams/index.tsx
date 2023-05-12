import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Services/api/api";
import { useTheme } from "../../Hooks/useTheme";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Teams() {
  const { theme } = useTheme();
  const { data: rowData } = useQuery({
    queryKey: ["Users"],
    queryFn: getUsers,
  });

  const [columnDefs] = useState([
    { field: "name" },
    { field: "username" },
    { field: "email" },
    { field: "company.name" },
    { field: "address.city" },
  ]);

  const defaultColDef = {
    filter: "agTextColumnFilter",
  };

  return (
    <div
      className={
        theme.name === "Dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine"
      }
      style={{ height: 480, width: 800 }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
}

export default Teams;
