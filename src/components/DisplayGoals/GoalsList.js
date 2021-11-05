import styles from "./GoalsList.module.css";
import Card from "../UI/Card";
import GoalsListItem from "./GoalsListItem";

const GoalsList = (props) => {
  return (
    <Card className={styles["goals-list-section"]}>
      <ul className={styles["goals-list"]}>
        {props.goals.map((goalObj) => {
          return (
            <GoalsListItem
              key={goalObj.id}
              id={goalObj.id}
              body={goalObj.body}
              onDelete={props.onHandleDeleteGoal}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default GoalsList;
