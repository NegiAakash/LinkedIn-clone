import React, { useEffect } from "react";

import GlobalStyle from "./globalStyles.js";
import Authenticated from "./Pages/Authenticated";
import UnAuthenticated from "./Pages/UnAuthenticated";

const App = () => {
  var token;
  var isAuthenticated = false;
  token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      console.log("token is present");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  isAuthenticated = token ? true : false;
  console.log(isAuthenticated);
  return (
    <>
      <GlobalStyle />
      {isAuthenticated ? <Authenticated /> : <UnAuthenticated />}
    </>
  );
};

export default App;
