import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from "./Contexts/ThemeContext";
import { UserProvider } from "./Contexts/UserContext";
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
        <UserProvider>
          <App />
        </UserProvider>
      </CustomThemeProvider>
    ),
    children: [
      {
        index: true,
        element: (
            <Dashboard />
        ),
      },
      {
        path: "/dashboard",
        element: (
            <Dashboard />
        ),
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
