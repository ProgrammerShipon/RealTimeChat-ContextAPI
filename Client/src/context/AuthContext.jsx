import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/services";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRegisterError, setRegisterError] = useState(null);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isLoginError, setLoginError] = useState(null);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);

  // set user
  useEffect(() => {
    const usr = localStorage.getItem("User");
    setUser(JSON.parse(usr));
  }, [isLoginLoading, isRegisterLoading]);

  // register user
  const registerUser = useCallback(async (data) => {
    setIsRegisterLoading(true);
    setRegisterError(null);
    const response = await postRequest(
      `${baseUrl}/users/register`,
      JSON.stringify(data)
    );

    if (response.error) {
      setIsRegisterLoading(false);
      return setRegisterError(response);
    }

    localStorage.setItem("User", JSON.stringify(response));

    setIsRegisterLoading(false);
    return response;
  }, []);

  // user Logout
  const logoutUser = () => {
    localStorage.removeItem("User");
    setUser(null);
  };

  // user login
  const loginUser = useCallback(async (data) => {
    console.log(data);
    setIsLoginLoading(true);
    setLoginError(null);
    const response = await postRequest(
      `${baseUrl}/users/login`,
      JSON.stringify(data)
    );
    console.log("response -> ", response);

    if (response.error) {
      setIsLoginLoading(false);
      return setLoginError(response);
    }

    localStorage.setItem("User", JSON.stringify(response));

    setIsLoginLoading(false);
    return response;
  }, []);

  const authData = {
    user,
    registerUser,
    isRegisterError,
    isRegisterLoading,
    isUserLoading,
    logoutUser,
    loginUser,
    isLoginError,
    isLoginLoading,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}