import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import {
  Calendar,
  CurrencyCircleDollar,
  List,
  Phone,
  Star,
} from 'phosphor-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`w-full min-h-screen ${inter.className}`}>
      <div className="w-full flex p-4 items-center justify-between bg-gray-900 shadow-md">
        <nav>
          <List size={32} className="text-gray-100 cursor-pointer" />
          <ul className="hidden flex flex-col gap-4 p-6">
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </nav>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={182}
            height={29}
            alt="Logo Silva&Faneca"
          />
        </Link>
      </div>
      <header className="h-[500px] flex flex-col bg-gray-700 z-0">
        <div className="absolute w-full h-[500px] bg-banner-overlay bg-no-repeat bg-cover bg-center z-40"></div>
        <div className="absolute w-full h-[500px] bg-banner-top bg-no-repeat bg-cover bg-center z-10"></div>
        <div className="absolute w-full h-[500px] bg-banner-mid bg-no-repeat bg-cover bg-center z-20"></div>
        <div className="absolute w-full h-[500px] bg-banner-bot bg-no-repeat bg-cover bg-center z-30"></div>
        <div className="z-50 h-[500px] flex flex-col items-center justify-between px-4 py-20">
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 jus">
              <div className="w-36 flex flex-col items-center">
                <CurrencyCircleDollar
                  size={32}
                  weight="fill"
                  className="text-gray-300"
                />
                <p className="font-bold text-gray-300 drop-shadow-md">
                  best prices
                </p>
              </div>
              <div className="w-36 flex flex-col items-center">
                <Star size={32} weight="fill" className="text-gray-300" />
                <p className="font-bold text-gray-300 drop-shadow-md">
                  make reviews
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-36 flex flex-col items-center">
                <Calendar size={32} weight="fill" className="text-gray-300" />
                <p className="font-bold text-gray-300 drop-shadow-md">
                  get reservations
                </p>
              </div>
              <div className="w-36 flex flex-col items-center">
                <Phone size={32} weight="fill" className="text-gray-300" />
                <p className="font-bold text-gray-300 drop-shadow-md">
                  support 24/7
                </p>
              </div>
            </div>
          </div>
          <h1 className="text-gray-200 text-3xl text-center font-bold drop-shadow-lg">
            Machines that fit your needs
          </h1>
        </div>
      </header>
      <main className="py-8">
        <section>
          <header className="flex flex-col items-center gap-2">
            <h2>Featured machine to rent</h2>
            <h3>The most trendy machine available</h3>
          </header>
          <ul className="px-4 mt-8 grid gap-8">
            <li className=" max-w-[405px] h-[400px] bg-gray-100 rounded overflow-hidden drop-shadow-md">
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
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                  </div>
                </div>
                <Link href="/product/id" className="btn-small">
                  Book Now
                </Link>
              </div>
            </li>
            <li className=" max-w-[405px] h-[400px] bg-gray-100 rounded overflow-hidden drop-shadow-md">
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
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                  </div>
                </div>
                <Link href="/product/id" className="btn-small">
                  Book Now
                </Link>
              </div>
            </li>
            <li className=" max-w-[405px] h-[400px] bg-gray-100 rounded overflow-hidden drop-shadow-md">
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
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                    <Star size={10} weight="fill" className="text-alert-red" />
                  </div>
                </div>
                <Link href="/product/id" className="btn-small">
                  Book Now
                </Link>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer>footer</footer>
    </div>
  )
}
