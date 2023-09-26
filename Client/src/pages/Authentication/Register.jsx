import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
     user,
     registerUser,
     isRegisterError,
     isRegisterLoading,
   } = useAuth();
  const [isError, setError] = useState("");

  // Register User Handle
  const handleFormSubmit = (e) => {
    e.preventDefault();

    let name = e.target.elements.name?.value;
    let email = e.target.elements.email?.value;
     let password = e.target.elements.password?.value;
     if (!name) return setError("Name Is Require");
     if (!email) return setError("Email Is Require");
     if (!password) return setError("Password Is Require");
     setError(false);

     const registrationData = { name, email, password };
     
   // Register info send Auth Context 
     registerUser(registrationData);
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="p-8 w-full max-w-sm border border-slate-200 rounded-md">
          <h1 className="text-2xl font-bold mb-6 text-white text-center">
            Register a your new account 🔐
          </h1>

          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="w-full rounded-md h-12 px-4 mb-4 text-slate-700"
                type="text"
                id="name"
                placeholder="Your Full Name"
              />
            </div>
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
            {isRegisterError?.message && (
              <p className="w-full rounded-md h-12 px-4 text-red-400">
                {" "}
                {isRegisterError?.message}
              </p>
            )}

            <div>
              <button className="text-white text-base font-medium h-12 border-2 border-white rounded-md flex flex-row justify-center items-center px-6 mt-4 mx-auto">
                {isRegisterLoading ? "Creating your account" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
