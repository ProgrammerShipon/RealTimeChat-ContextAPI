import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default Main;

// coding network