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
      <Composite className="grid grid-cols-3 gap-4" cols={3}>
        <CompositeItem render={(props) => <button {...props}>1</button>} />
        <CompositeItem render={(props) => <button {...props}>2</button>} />
        <CompositeItem render={(props) => <button {...props}>3</button>} />
        <CompositeItem render={(props) => <button {...props}>4</button>} />
        <CompositeItem render={(props) => <button {...props}>5</button>} />
        <CompositeItem render={(props) => <button {...props}>6</button>} />
        <CompositeItem render={(props) => <button {...props}>7</button>} />
        <CompositeItem render={(props) => <button {...props}>8</button>} />
        <CompositeItem render={(props) => <button {...props}>9</button>} />
      </Composite>
    </div>
    <div className="flex justify-between my-4">
      <div></div>
      <div><Link href="2"><Button>Próximo</Button></Link></div>
    </div>
  </div>
}
