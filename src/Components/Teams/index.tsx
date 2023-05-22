import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { useTheme } from "../../Contexts/ThemeContext";
import { useTeams } from "../../Contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Services/api/api";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Teams() {
  const { theme } = useTheme();
  const { context } = useTeams();
  const {
    state: { userList, registeredUsers },
    dispatch,
  } = context;

  useQuery({
    queryKey: ["Users"],
    queryFn: () => getUsers(dispatch),
  });

  const columnDefs = [
    { field: "name", headerName: "Name" },
    { field: "username", headerName: "UserName" },
    { field: "email", headerName: "Email ID" },
    { field: "company.name", headerName: "Company Name" },
    { field: "address.city", headerName: "City" },
  ];

  const defaultColDef = {
    filter: "agTextColumnFilter",
  };

  const allusers = useMemo(() => {
    if (!userList) return;
    return [...registeredUsers, ...userList];
  }, [userList, registeredUsers]);

  return (
    <div
      className={
        theme.name === "Dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine"
      }
      style={{ height: 480, width: 960 }}
    >
      <AgGridReact
        rowData={allusers}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
}

export default Teams;
