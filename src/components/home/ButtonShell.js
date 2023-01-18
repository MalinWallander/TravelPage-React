import "./ButtonShell.css";

export default function ButtonShell(props) {
  const classes = props.className;
  const functions = props.onClick;

  return (
    <div className={classes} onClick={functions}>
      {props.children}
    </div>
  );
}
