import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import {
  Calendar,
  CurrencyCircleDollar,
  List,
  Phone,
  Star,
  CircleWavyCheck,
  House,
  Envelope,
  FacebookLogo,
  WhatsappLogo,
  InstagramLogo,
  YoutubeLogo,
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
      <main className="py-8 flex flex-col gap-8">
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

        <section className="relative h-auto">
          <div className="absolute z-0 w-full h-[600px] overflow-hidden">
            <div className="h-full bg-banner-form bg-cover bg-no-repeat animate-breathe">
              <div className="bg-gray-900/40 h-full"></div>
            </div>
          </div>

          <div className="relative z-10 px-4 py-8 mx-4 mt-40 rounded bg-gray-100 text-gray-700 ">
            <header className="text-center">
              <h2>Plan the booking with us</h2>
              <h3 className="pt-2">
                Get in touch with us. We answer promptly to all messages.
              </h3>
            </header>
            <form className="grid grid-cols-1 gap-2 mt-8">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <label htmlFor="phone">Telephone:</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Telephone"
                required
              />
              <label htmlFor="checkin">Check-in:</label>
              <input
                type="date"
                name="checkin"
                id="checkin"
                placeholder="Check-in"
                required
              />
              <label htmlFor="checkout">Check-out:</label>
              <input
                type="date"
                name="checkout"
                id="checkout"
                placeholder="Check-out"
                required
              />
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
                required
              ></textarea>
              <div className="flex gap-2 items-center my-2">
                <input type="checkbox" name="terms" id="terms" required />
                <span className="text-sm">I consent to the GDPR Terms.</span>
              </div>
              <button className="btn-big" type="submit">
                Send Email
              </button>
            </form>
          </div>
        </section>

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
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
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
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
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
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
                <Star size={10} weight="fill" className="text-alert-red" />
              </div>
            </li>
          </ul>
        </section>
      </main>
      <footer className="relative mt-8 bg-gray-900 text-gray-100 text-xs py-8 px-4 before:absolute before:left-0 before:-top-[.9vw] before:w-full before:h-[2vw]  before:bg-primary before:-rotate-1 before:-z-10">
        <div className="flex flex-col gap-8">
          <section>
            <h3 className="text-white text-base">About SILVA&FANECA</h3>
            <p className="mt-2">
              SILVA&FANECA GmbH is committed to delivering a high level of
              expertise, customer service, and attention to detail to the market
              of machinery renting .
            </p>
          </section>
          <section>
            <h3 className="text-white text-base">Contact</h3>
            <div className="flex items-center gap-4 mt-2">
              <House weight="fill" size={16} />
              <span>Street, City, Code</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Phone weight="fill" size={16} />
              <span>Street, City, Code</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Envelope weight="fill" size={16} />
              <span>Street, City, Code</span>
            </div>
          </section>
          <section>
            <h3 className="text-white text-base">Socials</h3>
            <div className="flex gap-4 mt-2">
              <Link href="https://facebook.com" target="_blank">
                <FacebookLogo weight="fill" size={24} />
              </Link>
              <Link href="https://whatsapp.com" target="_blank">
                <WhatsappLogo weight="fill" size={24} />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <InstagramLogo weight="fill" size={24} />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <YoutubeLogo weight="fill" size={24} />
              </Link>
            </div>
          </section>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 text-center">
          <section>
            <p>2023 # Silva&Faneca GmbH.</p>
            <p>
              Developed by{' '}
              <Link href="https://codebe.dev" target="_blank">
                CodeBe
              </Link>
              .
            </p>
          </section>
          <section>
            <Link href="https://codebe.dev" target="_blank">
              Terms and conditions
            </Link>
            <Link href="https://codebe.dev" target="_blank">
              Contact
            </Link>
          </section>
        </div>
      </footer>
    </div>
  )
}
