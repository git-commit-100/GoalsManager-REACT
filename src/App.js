import { useState } from "react";
import GoalsList from "./components/DisplayGoals/GoalsList";
import GoalForm from "./components/InputGoalForm/GoalForm";

function App() {
  let goalObjArr = [
    { id: 1, body: "Learn React" },
    { id: 2, body: "Go To Gym" },
    { id: 3, body: "Eat Salad" },
  ];

  const [dataGoalObj, setDataGoalObj] = useState(goalObjArr);

  const handleObjFromForm = (goalObj) => {
    setDataGoalObj((prevDataObj) => {
      return [goalObj,...prevDataObj];
    });
  };

  const handleDeleteGoal = (goalId) => {
    setDataGoalObj((prevDataObj) => {
      let tempObjArr = prevDataObj.filter((goal) => goal.id != goalId);
      return tempObjArr;
    });
  };

  //NO GOAL ERROR MSG
  let content = (
    <p
      className="no-goals"
      style={{ textAlign: "center", fontSize: "18px", fontStyle: "italic" }}
    >
      No Goals Found. Maybe Add One ?
    </p>
  );

  if (dataGoalObj.length > 0) {
    content = (
      <GoalsList
        goals={dataGoalObj}
        onHandleDeleteGoal={handleDeleteGoal}
      />
    );
  }

  return (
    <div className="App">
      <GoalForm onGetObj={handleObjFromForm} />
      {content}
    </div>
  );
}

export default App;
