import styles from "./GoalsListItem.module.css";

const GoalsListItem = (props) => {
  const deleteGoal = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["goal-item"]} onClick={deleteGoal}>
      <p className={styles["goal-info"]}>{props.body}</p>
    </li>
  );
};

export default GoalsListItem;
