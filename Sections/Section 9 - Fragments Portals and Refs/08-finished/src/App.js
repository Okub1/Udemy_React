import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  // without importing Fragment from react, 
  // you can also use <></> (needs to be supported) 
  // or <React.Fragment></React.Fragment>
  // after importing, you can use <Fragment></Fragment>
  // basically it is built-in wrapper component, 
  // like ours "Wrapper" in /components/helpers
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
