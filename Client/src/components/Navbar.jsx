import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  
   return (
     <>
       <div className="container">
         <Link to="/">
           <h1 className="text-2xl text-center bg-slate-700 py-4">
             World Chat App{" "}
           </h1>
         </Link>

         <div className="flex justify-between py-3">
           <div>
             <h4> Chatting List </h4>
           </div>
           <div> {user?.name && `Logged in as ${user?.name}`}</div>
           <aside>
             {user && (
               <button onClick={logoutUser} className="py-1 px-5 bg-red-400">
                 {" "}
                 Logout{" "}
               </button>
             )}
             {!user && (
               <>
                 {" "}
                 <Link to="/login"> Login </Link> ||{" "}
                 <Link to="/register"> Registration </Link>{" "}
               </>
             )}
           </aside>
         </div>
       </div>
     </>
   );
};

export default Navbar;