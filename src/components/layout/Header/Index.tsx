import { useRouter } from 'next/router'
import { Calendar, CurrencyCircleDollar, Phone, Star } from 'phosphor-react'

export function Header() {
  const { pathname } = useRouter()
  console.log(pathname.replace('/', ''))
  return (
    <header className="h-[500px] flex flex-col bg-gray-700">
      <div className="absolute w-full h-[500px] bg-banner-top bg-no-repeat bg-cover bg-center z-[0]"></div>
      <div className="absolute w-full h-[500px] bg-banner-mid bg-no-repeat bg-cover bg-center z-[1]"></div>
      <div className="absolute w-full h-[500px] bg-banner-bot bg-no-repeat bg-cover bg-center z-[2]"></div>

      <div className="z-10 h-[500px] flex flex-col items-center justify-between px-4 py-20 bg-banner-overlay bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 jus">
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
          <div className="flex gap-4">
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
  )
}
