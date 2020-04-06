import React, { useEffect } from "react";

import { useStateValue } from "../Utils/State";

function Logout() {
  const [state, dispatch] = useStateValue();
  console.log("*** state", state);
  console.log("*** dispatch", dispatch);

  useEffect(() => {
  }, []);
  return null;
}
export default Logout;
