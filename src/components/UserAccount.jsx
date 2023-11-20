import React, { useContext } from "react";
import Account from "./Account";
import UserEntries from "./UserEntries";
import { useAuth } from "../FirebaseConfig";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";

const UserAccount = () => {
  const currentUser = useAuth();

  return (
    <div className="user-account-container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="user-account-details-container" style={{ marginTop: '60px' }}>
        <Account />
        {currentUser && <UserEntries userId={currentUser.uid} />}
      </div>
    </div>
  );
};

export default UserAccount;
