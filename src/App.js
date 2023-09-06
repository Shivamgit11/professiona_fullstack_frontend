import * as React from "react";

import "./App.css";

import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";

//router start

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  { //only for testing
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);

//router end

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
