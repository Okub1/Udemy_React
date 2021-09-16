import "./Form.css";
import Card from "./Card";
import Modal from "./Modal/Modal";

import { useState } from "react";

const Form = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.toString().length === 0
    ) {
      setShow(true);
      setContent("Please enter a valid name and age (non-empty values).");
      return;
    } else if (enteredAge < 0) {
      setShow(true);
      setContent("Please enter a valid age (>0).");
    } else {
      console.log(enteredAge);

      const newUser = {
        username: enteredUsername,
        age: enteredAge,
      };

      props.onAddUser(newUser);
    }

    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <div>
      <Card>
        <form className="form" onSubmit={submitHandler}>
          <label>UserName</label>
          <input
            className="text-input"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label>Age (Years)</label>
          <input
            className="text-input"
            type="number"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <input className="button" type="submit" value="Add User" />
        </form>
      </Card>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        title="Invalid input"
        content={content}
      />
    </div>
  );
};

export default Form;
