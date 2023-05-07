import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'phosphor-react'

export function ProductsList() {
  return (
    <section className="grid justify-center px-4">
      <header className="text-center">
        <h2>Featured machine to rent</h2>
        <h3 className="pt-2">The most trendy machine available</h3>
      </header>
      <ul className="px-4 mt-8 grid gap-8">
        <li className=" max-w-[405px] h-[400px] bg-white rounded overflow-hidden drop-shadow-md">
          <div className="w-24 h-6 absolute -rotate-45 top-3 -left-6 text-gray-100 font-bold text-xs flex items-center justify-center bg-primary">
            featured
          </div>
          <div className=" max-w-[405px] h-[300px] flex items-center justify-center">
            <Image
              src="/mac-01.png"
              width={405}
              height={300}
              alt=""
              className="h-full min-w-[405px]"
            />
          </div>

          <div className="flex items-center justify-between p-4 h-24">
            <div>
              <h2 className="text-base">Big Bulldozer</h2>
              <div className="flex gap-1 mt-1">
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
              </div>
            </div>
            <Link href="/product/id" className="btn-small">
              Book Now
            </Link>
          </div>
        </li>
        <li className=" max-w-[405px] h-[400px] bg-white rounded overflow-hidden drop-shadow-md">
          <div className=" max-w-[405px] h-[300px] flex items-center justify-center">
            <Image
              src="/mac-02.png"
              width={405}
              height={300}
              alt=""
              className="h-full min-w-[405px]"
            />
          </div>

          <div className="flex items-center justify-between p-4 h-24">
            <div>
              <h2 className="text-base">Big Bulldozer</h2>
              <div className="flex gap-1 mt-1">
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
              </div>
            </div>
            <Link href="/product/id" className="btn-small">
              Book Now
            </Link>
          </div>
        </li>
        <li className=" max-w-[405px] h-[400px] bg-white rounded overflow-hidden drop-shadow-md">
          <div className=" max-w-[405px] h-[300px] flex items-center justify-center">
            <Image
              src="/mac-01.png"
              width={405}
              height={300}
              alt=""
              className="h-full min-w-[405px]"
            />
          </div>

          <div className="flex items-center justify-between p-4 h-24">
            <div>
              <h2 className="text-base">Big Bulldozer</h2>
              <div className="flex gap-1 mt-1">
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
                <Star size={10} weight="fill" className="text-alert-yellow" />
              </div>
            </div>
            <Link href="/product/id" className="btn-small">
              Book Now
            </Link>
          </div>
        </li>
      </ul>
    </section>
  )
}
