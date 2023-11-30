import { Composite, CompositeItem } from "@floating-ui/react"
import { H1 } from "../../components/Typography"
import classNames from "../../utils/classNames"
import NavGridItem from "../../components/NavGridItem"
import Link from "next/link"
import Button from "../../components/Button"
import React from "react";

export default function Test() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return <div>
    <div className="my-2">
      <H1 className="mb-2">Nivel 1</H1>
      <p>Por defecto, así se ve una grid con navegación por teclado usando <code>@floating-ui</code>.</p>
      <hr/>
    </div>
    <div className="my-4">
      <Composite className="grid grid-cols-3 gap-4" cols={3} activeIndex={activeIndex} onNavigate={setActiveIndex}>
        <NavGridItem className="border border-black p-2 rounded-lg">1</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">2</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">3</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">4</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">5</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">6</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">7</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">8</NavGridItem>
        <NavGridItem className="border border-black p-2 rounded-lg">9</NavGridItem>
      </Composite>
    </div>
    <div className="flex justify-between my-4">
      <div></div>
      <div><Link href="2"><Button>Próximo</Button></Link></div>
    </div>
  </div>
}
