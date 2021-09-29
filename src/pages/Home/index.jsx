import { ProductsHeader } from '../../components/ProductsHeader'
import { ProductsTable } from '../../components/ProductsTable'

import './style.scss'

export function Home() {
  return (
    <>
      <main className="main">
        <ProductsHeader />
        <ProductsTable />
      </main>
    </>
  )
}