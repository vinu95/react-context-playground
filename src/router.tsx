import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from "./Context/ThemeContext";
import App from "./App";

const Dashboard = lazy(() => import("./Components/Dashboard"));
const Teams = lazy(() => import("./Components/Teams"));
const Project = lazy(() => import("./Components/Projects"));
const UserForm = lazy(() => import("./Components/UserForm"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    ),
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/teams",
        element: <Teams />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/addMember",
        element: <UserForm />,
      },
    ],
  },
]);
