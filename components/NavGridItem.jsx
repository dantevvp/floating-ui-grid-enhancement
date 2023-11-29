import { CompositeItem } from "@floating-ui/react";
import classNames from "../utils/classNames";

export default function NavGridItem ({ children, style, colspan = 1, rowspan = 1, className, ...props }) {
  const styles = {
    gridColumn: `span ${colspan} / span ${colspan}`,
    gridRow: `span ${rowspan} / span ${rowspan}`,
    ...style,
  };

  const classes = classNames(className, "focus:bg-blue-200")
  
  return <CompositeItem className={classes} style={styles} {...props}>{children}</CompositeItem>
}
