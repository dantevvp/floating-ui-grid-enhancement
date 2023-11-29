import { Composite, CompositeItem } from "@floating-ui/react"
import { H1 } from "../../components/Typography"
import classNames from "../../utils/classNames"
import NavGridItem from "../../components/NavGridItem"
import Link from "next/link"
import Button from "../../components/Button"

const itemSizes = [
  { width: 1, height: 1 },  // 1
  { width: 1, height: 1 },  // 2
  { width: 1, height: 2 },  // 3
  { width: 1, height: 1 },  // 4
  { width: 1, height: 1 },  // 5
  { width: 2, height: 2 },  // 6
  { width: 1, height: 1 },  // 7
  { width: 1, height: 1 },  // 8
  { width: 3, height: 1 },  // 9
  { width: 1, height: 1 },  // btn-prev
  { width: 1, height: 1 },  // btn-next
]

export default function Test() {
  return <div>
    <Composite cols={3} itemSizes={itemSizes}>
      <div className="my-2">
        <H1 className="mb-2">Nivel 4</H1>
        <p>También distintas alturas.</p>
        <hr/>
      </div>
      <div className="my-4 grid grid-cols-3">
        <NavGridItem className="border border-black">1</NavGridItem>
        <NavGridItem className="border border-black">2</NavGridItem>
        <NavGridItem className="border border-black" rowspan={2}>3</NavGridItem>
        <NavGridItem className="border border-black">4</NavGridItem>
        <NavGridItem className="border border-black">5</NavGridItem>
        <NavGridItem className="border border-black" colspan={2} rowspan={2}>6</NavGridItem>
        <NavGridItem className="border border-black">7</NavGridItem>
        <NavGridItem className="border border-black">8</NavGridItem>
        <NavGridItem className="border border-black" colspan={3}>9</NavGridItem>
      </div>
      <hr />
      <p>No tenemos por qué clickear más el botón de "Próximo".</p>
      <hr />
      <div className="my-4 flex justify-between">
        <CompositeItem render={(props) => <a href="3" {...props}><Button>Anterior</Button></a>}></CompositeItem>
        <CompositeItem render={(props) => <a href="5" {...props}><Button>Próximo</Button></a>}></CompositeItem>
      </div>
    </Composite>
  </div>
}
