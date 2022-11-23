import { createContext } from "react";

const authContext = createContext({
  userData: {},
  setUserData: (userObj) => {},
});

export default authContext;
