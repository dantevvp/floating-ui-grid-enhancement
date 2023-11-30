import React from "react";
import classNames from "../utils/classNames";

const mergeRefs = (...refs) => {
  return (node) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        ref.current = node;
      }
    });
  };
};

const Label = ({ labelFor, children, ...props }) => {
  return <label htmlFor={labelFor} className="block mb-2 text-sm font-medium">{children}</label>
}

const NavInput = React.forwardRef(({ onFocus, className, style, label = null, id, ...props }, externalRef) => {
  const inputRef = React.useRef(null);
  const mergedRef = mergeRefs(inputRef, externalRef);

  /*React.useEffect(() => {
    if (autoFocus) {
      inputRef.current && inputRef.current.focus()
      inputRef.current && inputRef.current.set
    }
  }, [])*/

  const handleKeyDown = (e) => {
    const { key } = e;
    const input = inputRef.current;

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      const caretAtStart = input.selectionStart === 0;
      const caretAtEnd = input.selectionEnd === input.value.length;

      if (!(caretAtEnd && key === "ArrowRight") && !(caretAtStart && key === "ArrowLeft")) {
        e.stopPropagation();
      }
    }
  };

  const containerClasses = classNames(className, "flex flex-col");

  const handleFocus = (e) => {
    inputRef.current && inputRef.current.select();
    onFocus && onFocus(e);
  };

  return (
    <div className={containerClasses} style={style}>
      {label && <Label labelFor={id}>{label}</Label>}
      <input
        ref={mergedRef}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        id={id}
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-full p-2.5 flex-1"
        {...props} />
    </div>
  );
});

export default NavInput;
