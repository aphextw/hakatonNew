import classes from "./textbutton.module.css";

export default function TextButton({ children, onClick, isActive, ...props }) {
  return (
    <a
      onClick={onClick}
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </a>
  );
}
