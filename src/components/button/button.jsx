import classes from "./button.module.css";

export default function Button({ children, onClick, isActive, ...props }) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </button>
  );
}
