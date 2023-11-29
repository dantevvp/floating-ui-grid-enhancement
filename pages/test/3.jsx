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
      <Composite className="grid grid-cols-3" cols={3} itemSizes={itemSizes}>
        <NavGridItem className="border border-black">1</NavGridItem>
        <NavGridItem className="border border-black">2</NavGridItem>
        <NavGridItem className="border border-black">3</NavGridItem>
        <NavGridItem className="border border-black" colspan={3}>4</NavGridItem>
        <NavGridItem className="border border-black">5</NavGridItem>
        <NavGridItem className="border border-black">6</NavGridItem>
        <NavGridItem className="border border-black">7</NavGridItem>
        <NavGridItem className="border border-black" colspan={2}>8</NavGridItem>
        <NavGridItem className="border border-black" colspan={1}>9</NavGridItem>
        <NavGridItem className="border border-black" colspan={1}>10</NavGridItem>
        <NavGridItem className="border border-black" colspan={2}>11</NavGridItem>
      </Composite>
    </div>
    <div className="my-4 flex justify-between">
      <div><Link href="2"><Button>Anterior</Button></Link></div>
      <div><Link href="4"><Button>Próximo</Button></Link></div>
    </div>
  </div>
}
