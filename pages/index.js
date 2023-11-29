import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Button from '../components/Button'
import { H1 } from '../components/Typography'

export default function Home() {
  return (
    <div className="container mx-auto my-auto">
      <div className="grid place-items-center gap-4 h-screen">
        <div className="grid place-items-center">
          <H1 className="mb-4">Navegando con el teclado</H1>
          <Link href="test/1"><Button>Ver demo</Button></Link>
        </div>
      </div>
    </div>
  )
}
