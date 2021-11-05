import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./GoalForm.module.css";
import ErrorModal from "../UI/ErrorModal";

//driver component
const GoalForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState();

  const handleInputChange = (e) => {
    //input chnages when something is wriiten
    setInputValue(e.target.value);
  };

  const hideErrorModel = ()=>{
    setShowModal(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //checking if input is empty
    if (inputValue.trim().length === 0) {
      setShowModal({
        heading: "Invalid Input !",
        body: "Input Cannot Be Empty. Try Again !",
        btnTxt:"Okay"
      });
      return;
    }
    let inputObj = { id: Math.random(), body: inputValue };
    //send to parent
    props.onGetObj(inputObj);
    setInputValue("");
  };

  return (
    <div>
      {showModal && (
        <ErrorModal heading={showModal.heading} body={showModal.body} btn-text={showModal.btnTxt} hideModel={hideErrorModel}/>
      )}
      <Card className={styles["goal-form"]}>
        <form onSubmit={handleSubmit}>
          <label>Add Your Goal Here</label>
          <input
            type="text"
            className={styles["goal-input"]}
            id="goal-input-field"
            autoComplete="off"
            spellCheck="false"
            onChange={handleInputChange}
            value={inputValue}
          />
          <Button className={styles["submit-btn"]} type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default GoalForm;
