import { ContactFormFull } from '@/components/layout/ContactFormFull'
import { ProductsList } from '@/components/products/List'

export default function Home() {
  return (
    <>
      <ProductsList />
      <ContactFormFull />
    </>
  )
}
