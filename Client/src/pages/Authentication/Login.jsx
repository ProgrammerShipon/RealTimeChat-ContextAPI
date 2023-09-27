import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { user, loginUser,
     isLoginError,
     isLoginLoading} = useAuth()
  const [isError, setError] = useState("");
    const location = useLocation();

    if (user?.email) {
      return <Navigate to="/" state={{ from: location }} replace />;
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
     let password = e.target.elements.password?.value;
     if (!email) return setError("Email Is Require");
     if (!password) return setError("Password Is Require");
     setError(false);
     
     const loginData = { email, password };
     console.log(loginData);
     loginUser(loginData);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 w-full max-w-sm border border-slate-200 rounded-md">
        <h1 className="text-2xl font-bold mb-6 text-white text-center">
          Log in to your account 🔐
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="w-full rounded-md h-12 px-4 mb-4 text-slate-700"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="w-full rounded-md h-12 px-4 text-slate-700"
              type="password"
              id="password"
              placeholder="Your Password"
            />
          </div>

          {isError && (
            <p className="w-full rounded-md h-12 px-4 text-red-400">
              {" "}
              {isError}
            </p>
          )}

          {isLoginError && (
            <p className="w-full rounded-md h-12 px-4 text-red-400">
              {" "}
              {isLoginError?.message}
            </p>
          )}

          <div>
            <button className="text-white text-base font-medium h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6 mt-4 mx-auto">
              {isLoginLoading ? "Getting you in" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
