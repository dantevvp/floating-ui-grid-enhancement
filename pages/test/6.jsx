import { Composite, CompositeItem } from "@floating-ui/react"
import { H1 } from "../../components/Typography"
import classNames from "../../utils/classNames"
import NavGridItem from "../../components/NavGridItem"
import Link from "next/link"
import Button from "../../components/Button"
import React from "react"
import NavInput from "../../components/NavInput"

const itemSizes = [
  { width: 2, height: 2 },  // 1
  { width: 2, height: 1 },  // 2
  { width: 2, height: 1 },  // 3
  { width: 1, height: 1 },  // 4
  { width: 1, height: 1 },  // 5
  { width: 2, height: 1 },  // 6 disabled
  { width: 4, height: 1 },  // 7
  { width: 4, height: 1 },  // 8
  { width: 3, height: 1 },  // 9
  { width: 1, height: 1 },  // 10
  { width: 2, height: 1 },  // 11 disabled
  { width: 1, height: 1 },  // 12
  { width: 1, height: 1 },  // 13
  { width: 1, height: 1 },  // 14
]

export default function Test() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return <div>
    <Composite cols={4} itemSizes={itemSizes} activeIndex={activeIndex} onNavigate={setActiveIndex} disabledIndices={[5, 10, 14]}>
      <div className="my-2">
        <H1 className="mb-2">Nivel 6</H1>
        <p>Un último ejemplo más completo</p>
        <hr/>
      </div>
      <div className="my-4 grid grid-cols-4 gap-2 mx-[400px]">
        <NavGridItem colspan={2} rowspan={2} render={(props) => <NavInput id="name" name="name" label="Foto" type="text" {...props} />} />
        <NavGridItem colspan={2} render={(props) => <NavInput id="last_name" name="last_name" label="Nombre" type="text" {...props} />} />
        <NavGridItem colspan={2} render={(props) => <NavInput id="age" nama="age" label="Apellido" type="text" {...props} />} />
        <NavGridItem render={(props) => <Button {...props}>Editar</Button>} />
        <NavGridItem render={(props) => <Button {...props}>Eliminar</Button>} />
        <NavGridItem colspan={2} />
        <NavGridItem colspan={4} render={(props) => <NavInput id="name" name="name" label="Dirección línea 1" type="text" {...props} />} />
        <NavGridItem colspan={4} render={(props) => <NavInput id="name" name="name" label="Dirección línea 2" type="text" {...props} />} />
        <NavGridItem colspan={3} render={(props) => <NavInput id="name" name="name" label="Teléfono" type="text" {...props} />} />
        <NavGridItem render={(props) => <NavInput id="name" name="name" label="Nombre" type="text" {...props} />} />
        <NavGridItem colspan={2} />
        <NavGridItem render={(props) => <Button {...props}>Cancelar</Button>} />
        <NavGridItem render={(props) => <Button {...props}>Guardar</Button>} />
      </div>
      <div className="my-4 flex justify-between">
        <CompositeItem render={(props) => <a href="5" {...props}><Button>Anterior</Button></a>}></CompositeItem>
      </div>
    </Composite>
  </div>
}
