import classNames from "../utils/classNames"
import React from "react"

const Button = React.forwardRef(({ children, className, ...props }, ref) => {
  const classes = classNames(className, "bg-blue-500 hover:bg-blue-300 rounded-md text-white p-2")
  
  return <button ref={ref} className={classes} {...props}>{children}</button>
})

export default Button;
