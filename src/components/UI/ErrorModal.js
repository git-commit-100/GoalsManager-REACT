import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

//splitting error modal into other components so we can move it at root level "only inside the DOM"
const BackdropOverlay = (props) => {
  return (
    <div className={styles["error-backdrop"]} onClick={props.hideModel}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles["error-modal"]}>
      <header>
        <h3 className={styles["error-heading"]}>{props.heading}</h3>
      </header>
      <p className={styles["error-body"]}>{props.body}</p>
      <footer>
        <Button className={styles["error-btn-close"]} onClick={props.hideModel}>
          {props["btn-text"]}
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackdropOverlay hideModel={props.hideModel} />,
        document.getElementById("backdrop-overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          heading={props.heading}
          body={props.body}
          btn-text={props["btn-text"]}
          hideModel={props.hideModel}
        />,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default ErrorModal;
