import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles['error-backdrop']} onClick={props.hideModel}>
      <Card className={styles["error-modal"]}>
        <header>
          <h3 className={styles["error-heading"]}>{props.heading}</h3>
        </header>
          <p className={styles["error-body"]}>{props.body}</p>
        <footer>
          <Button className={styles["error-btn-close"]} onClick={props.hideModel}>{props["btn-text"]}</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
