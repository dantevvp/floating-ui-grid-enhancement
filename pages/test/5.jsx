import { Composite, CompositeItem } from "@floating-ui/react"
import { H1 } from "../../components/Typography"
import classNames from "../../utils/classNames"
import NavGridItem from "../../components/NavGridItem"
import Link from "next/link"
import Button from "../../components/Button"
import React from "react"
import NavInput from "../../components/NavInput"

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
        <NavGridItem render={(props) => <NavInput id="name" name="name" label="Nombre" type="text" {...props} />} />
        <NavGridItem render={(props) => <NavInput id="last_name" name="last_name" label="Apellido" type="text" {...props} />} />
        <NavGridItem render={(props) => <NavInput id="age" nama="age" label="Edad" type="text" {...props} />} />
        <NavGridItem render={(props) => <NavInput id="phone" name="phone" label="Teléfono" type="text" {...props} />} />
      </div>
      <div className="my-4 flex justify-between">
        <CompositeItem render={(props) => <a href="4" {...props}><Button>Anterior</Button></a>}></CompositeItem>
        <CompositeItem render={(props) => <a href="6" {...props}><Button>Próximo</Button></a>}></CompositeItem>
      </div>
    </Composite>
  </div>
}
