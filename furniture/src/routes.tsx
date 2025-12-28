import { createBrowserRouter } from "react-router";
import HomeScreen from "./pages/App";
import ErrorScreen from "./error";
import RootLayout from "./components/layout/RootLayout";
import LoginScreen from "./pages/auth/Login";
import SignupPage from "./pages/auth/SignUp";
import AuthRootLayout from "./components/layout/AuthRootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorScreen,
    children: [
      { index: true, Component: HomeScreen }, // "/"
    ],
  },
  { path: "/login", Component: LoginScreen }, // "/login"
  {
    path: "/register",
    Component: AuthRootLayout,
    children: [
      { index: true, Component: SignupPage }, // "/register"
    ],
  },
]);
