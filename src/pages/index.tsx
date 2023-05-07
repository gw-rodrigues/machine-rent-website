import { ProductsFeatured } from '@/components/products/Featured'
import { ContactFormFull } from '@/components/layout/ContactFormFull'
import { Testimonials } from '@/components/reviews/Testimonials'

export default function Home() {
  return (
    <>
      <ProductsFeatured />
      <ContactFormFull />
      <Testimonials />
    </>
  )
}
