import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Chat from "../pages/Chat";

const Routes = createBrowserRouter([
  {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Chat />
         }
      ]
  },
  {
      path: "/login",
      element: <Login />
  },
  {
      path: "/register",
      element: <Register />
  },
]);

export default Routes