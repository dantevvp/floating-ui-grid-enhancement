import classNames from "../utils/classNames";

const H1 = ({ children, className, ...props }) => {
  const classes = classNames(className, "text-3xl font-bold")
  
  return (
    <h1 className={classes}>{children}</h1>
  )
};

const H2 = ({ children, className, ...props }) => {
  const classes = classNames(className, "text-3xl font-bold")
  
  return (
    <h1 className={classes}>{children}</h1>
  )
};

const H3 = ({ children, className, ...props }) => {
  const classes = classNames(className, "text-3xl font-bold")
  
  return (
    <h1 className={classes}>{children}</h1>
  )
};

const H4 = ({ children, className, ...props }) => {
  const classes = classNames(className, "text-3xl font-bold")
  
  return (
    <h1 className={classes}>{children}</h1>
  )
};

export { H1, H2, H3, H4 };
