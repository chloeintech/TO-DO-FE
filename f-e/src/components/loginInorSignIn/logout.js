import React from "react"
import { getCookie} from "../../common"

const LogOut = () => {

    const handleLogout = () => {
    getCookie.delete("jwt_token")
    window.location.href = "/loggedout";

  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogOut;