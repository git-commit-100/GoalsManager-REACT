import styles from "./GoalsList.module.css";
import GoalsListItem from "./GoalsListItem";

const GoalsList = (props) => {
  return (
    <div className={styles["goals-list-section"]}>
      <ul className={styles["goals-list"]}>
        {props.onShowList.map((goalObj) => {
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
    </div>
  );
};

export default GoalsList;
