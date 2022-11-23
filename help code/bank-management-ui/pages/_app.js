import "../styles/globals.css";
import AppContext from "../AppContext";
import { useEffect, useState } from "react";

let id_track = "";

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState({ userID: "", userRole: "" });

  useEffect(() => {
    id_track = userData.userID;
  }, [userData]);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      <Component {...pageProps} userData={userData} setUserData={setUserData} />
    </AppContext.Provider>
  );
}

export default MyApp;
export { id_track };
