import { Composite, CompositeItem } from "@floating-ui/react"
import { H1 } from "../../components/Typography"
import classNames from "../../utils/classNames"
import NavGridItem from "../../components/NavGridItem"
import Link from "next/link"
import Button from "../../components/Button"

const itemSizes = [
  { width: 1, height: 1 },
  { width: 1, height: 1 },
  { width: 1, height: 1 },
  { width: 3, height: 1 },
  { width: 1, height: 1 },
  { width: 1, height: 1 },
  { width: 1, height: 1 },
  { width: 2, height: 1 },
  { width: 1, height: 1 },
  { width: 2, height: 1 },
  { width: 1, height: 1 },
]

export default function Test() {
  return <div>
    <div className="my-2">
      <H1 className="mb-2">Nivel 3</H1>
      <p>Podemos poner varios elementos de distintos anchos.</p>
      <hr/>
    </div>
    <div className="my-4">
      <Composite className="grid grid-cols-3 gap-4" cols={3} itemSizes={itemSizes}>
        <NavGridItem className="border border-black p-2 rounded-lg">1</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">2</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">3</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg" colspan={3}>4</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">5</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">6</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">7</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg" colspan={2}>8</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg" colspan={1}>9</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg" colspan={1}>10</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg" colspan={2}>11</NavGridItem>
      </Composite>
    </div>
    <div className="flex justify-between my-4">
      <div><Link href="2"><Button>Anterior</Button></Link></div>
      <div><Link href="4"><Button>Próximo</Button></Link></div>
    </div>
  </div>
}
