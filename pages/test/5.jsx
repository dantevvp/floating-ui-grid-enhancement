import { Composite, CompositeItem, useListNavigation } from "@floating-ui/react"
import { H1 } from "../../components/Typography"
import classNames from "../../utils/classNames"
import NavGridItem from "../../components/NavGridItem"
import Link from "next/link"
import Button from "../../components/Button"
import { useMergeRefs } from "@floating-ui/react"
import React from "react"

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

const NavInput = React.forwardRef(({ onFocus, className, label, id, ...props }, externalRef) => {
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

  const containerClasses = className;

  const handleFocus = (e) => {
    inputRef.current && inputRef.current.select();
    onFocus && onFocus(e);
  };

  return (
    <div className={containerClasses}>
      <Label labelFor={id}>{label}</Label>
      <input
        ref={mergedRef}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        id={id}
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        {...props} />
    </div>
  );
});

const itemSizes = [
  { width: 1, height: 1 },  // 1
  { width: 1, height: 1 },  // 2
  { width: 1, height: 1 },  // 3
  { width: 1, height: 1 },  // 4
  { width: 1, height: 1 },  // 5
  { width: 1, height: 1 },  // 6
]

export default function Test() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return <div>
    <Composite cols={2} itemSizes={itemSizes} activeIndex={activeIndex} onNavigate={setActiveIndex}>
      <div className="my-2">
        <H1 className="mb-2">Nivel 5</H1>
        <p>La cosa va tomando <code>{"<form>"}</code>a...</p>
        <hr/>
      </div>
      <div className="my-4 grid grid-cols-2 gap-2">
        <NavGridItem render={(props) => <NavInput id="name" name="name" label="Nombre" type="text" autoFocus {...props} />} />
        <NavGridItem render={(props) => <NavInput id="last_name" name="last_name" label="Apellido" type="text" {...props} />} />
        <NavGridItem render={(props) => <NavInput id="age" nama="age" label="Edad" type="text" {...props} />} />
        <NavGridItem render={(props) => <NavInput id="phone" name="phone" label="Teléfono" type="text" {...props} />} />
      </div>
      <div className="my-4 flex justify-between">
        <CompositeItem render={(props) => <a href="4" {...props}><Button>Anterior</Button></a>}></CompositeItem>
        <CompositeItem render={(props) => <a href="5" {...props}><Button>Próximo</Button></a>}></CompositeItem>
      </div>
    </Composite>
  </div>
}
