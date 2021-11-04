import { useState } from "react";
import styles from "./GoalForm.module.css";

//driver component
const goalForm = (props) => {
  const [isInputValid, setIsInputValid] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = () => {
    //input chnages when something is wriiten
    setIsInputValid(true);
    let value = document.getElementById("goal-input-field").value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //checking if input is empty
    if (inputValue.trim().length === 0) {
      setIsInputValid(false);
      document.getElementById("goal-input-field").placeholder =
        "cannot be empty...";
      return;
    }
    let inputObj = { id: Math.random(), body: inputValue };
    //send to parent
    props.onGetObj(inputObj);
    setInputValue("");
  };

  return (
    <div className={styles["goal-form"]}>
      <form onSubmit={handleSubmit}>
        <label>Add Your Goal Here</label>
        <input
          type="text"
          className={`${styles["goal-input"]} ${
            !isInputValid && styles["invalid"]
          }`}
          id="goal-input-field"
          autoComplete="off"
          spellCheck="false"
          onChange={handleInputChange}
          value={inputValue}
        />
        <button className={styles["submit-btn"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default goalForm;
