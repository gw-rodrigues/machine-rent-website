import Image from 'next/image'
import { CircleWavyCheck, Star } from 'phosphor-react'

export function Testimonials() {
  return (
    <section className="grid justify-center px-4">
      <header className="text-center">
        <h2>Testimonials</h2>
        <h3 className="pt-2">
          We are committed to making our clients happy with our services
        </h3>
      </header>
      <ul className="px-4 mt-8 grid gap-8">
        <li className=" max-w-[405px] bg-white rounded overflow-hidden drop-shadow-md p-8">
          <div className=" max-w-[405px] flex items-center gap-4">
            <figure className="flex  items-center w-[50px] h-[50px] rounded-full overflow-hidden">
              <Image
                src="/mac-01.png"
                width={405}
                height={300}
                alt=""
                className="min-h-full min-w-full"
              />
            </figure>

            <div>
              <h3 className="text-sm">Testimonials</h3>
              <div className="flex items-center gap-1 text-gray-200 font-bold text-xs">
                <CircleWavyCheck size={12} weight="fill" />
                <span>verified</span>
              </div>
            </div>
          </div>

          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-1 mt-2">
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
          </div>
        </li>
        <li className=" max-w-[405px] bg-white rounded overflow-hidden drop-shadow-md p-8">
          <div className=" max-w-[405px] flex items-center gap-4">
            <figure className="flex  items-center w-[50px] h-[50px] rounded-full overflow-hidden">
              <Image
                src="/mac-01.png"
                width={405}
                height={300}
                alt=""
                className="min-h-full min-w-full"
              />
            </figure>

            <div>
              <h3 className="text-sm">Testimonials</h3>
              <div className="flex items-center gap-1 text-gray-200 font-bold text-xs">
                <CircleWavyCheck size={12} weight="fill" />
                <span>verified</span>
              </div>
            </div>
          </div>

          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-1 mt-2">
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
          </div>
        </li>
        <li className=" max-w-[405px] bg-white rounded overflow-hidden drop-shadow-md p-8">
          <div className=" max-w-[405px] flex items-center gap-4">
            <figure className="flex  items-center w-[50px] h-[50px] rounded-full overflow-hidden">
              <Image
                src="/mac-01.png"
                width={405}
                height={300}
                alt=""
                className="min-h-full min-w-full"
              />
            </figure>

            <div>
              <h3 className="text-sm">Testimonials</h3>
              <div className="flex items-center gap-1 text-gray-200 font-bold text-xs">
                <CircleWavyCheck size={12} weight="fill" />
                <span>verified</span>
              </div>
            </div>
          </div>

          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-1 mt-2">
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
            <Star size={10} weight="fill" className="text-alert-yellow" />
          </div>
        </li>
      </ul>
    </section>
  )
}
