import "./Form.css";
import Card from "./Card";

import { useState } from "react";

const Form = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = {
        username: enteredUsername,
        age: enteredAge
    }

    props.onAddUser(newUser);
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <label>UserName</label>
        <input
          className="text-input"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          required
        />
        <label>Age (Years)</label>
        <input
          className="text-input"
          type="number"
          min="0"
          step="1"
          value={enteredAge}
          onChange={ageChangeHandler}
          required
        />
        <input className="button" type="submit" value="Add User" />
      </form>
    </Card>
  );
};

export default Form;
