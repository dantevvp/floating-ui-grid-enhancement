import { Composite, CompositeItem } from "@floating-ui/react"
import { H1 } from "../../components/Typography"
import classNames from "../../utils/classNames"
import NavGridItem from "../../components/NavGridItem"
import Link from "next/link"
import Button from "../../components/Button"

export default function Test() {
  return <div>
    <div className="my-2">
      <H1 className="mb-2">Nivel 1</H1>
      <p>Por defecto, así se ve una grid con navegación por teclado usando <code>@floating-ui</code>.</p>
      <hr/>
    </div>
    <div className="my-4">
      <Composite className="grid grid-cols-3" cols={3}>
        <NavGridItem className="border border-black">1</NavGridItem>
        <NavGridItem className="border border-black">2</NavGridItem>
        <NavGridItem className="border border-black">3</NavGridItem>
        <NavGridItem className="border border-black">4</NavGridItem>
        <NavGridItem className="border border-black">5</NavGridItem>
        <NavGridItem className="border border-black">6</NavGridItem>
        <NavGridItem className="border border-black">7</NavGridItem>
        <NavGridItem className="border border-black">8</NavGridItem>
        <NavGridItem className="border border-black">9</NavGridItem>
      </Composite>
    </div>
    <div className="my-4 flex justify-between">
      <div></div>
      <div><Link href="2"><Button>Próximo</Button></Link></div>
    </div>
  </div>
}
