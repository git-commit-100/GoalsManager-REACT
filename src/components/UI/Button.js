import styles from "./Button.module.css";

const Button = props => {
    return(
        <button className={`${styles.btn} ${props.className} ${props.type || 'button'}`}>
            {props.children}
        </button>
    );
}

export default Button;