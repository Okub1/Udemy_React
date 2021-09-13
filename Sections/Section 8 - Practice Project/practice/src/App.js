import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

import { useState } from "react";

const SAMPLE = [
  {
    username: "Jacob",
    age: 23,
  },
  {
    username: "asdasd",
    age: 651,
  },
];

const App = () => {
  const [users, setUsers] = useState(SAMPLE);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <Form onAddUser={addUserHandler} />
      <List items={users}></List>
    </div>
  );
};

export default App;
