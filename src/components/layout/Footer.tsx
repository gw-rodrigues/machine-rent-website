import Link from 'next/link'
import {
  Envelope,
  FacebookLogo,
  House,
  InstagramLogo,
  Phone,
  WhatsappLogo,
  YoutubeLogo,
} from 'phosphor-react'

export function Footer() {
  return (
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
            <address className="not-italic">Street, City, Code</address>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Phone weight="fill" size={16} />
            <Link
              className="no-underline"
              href="tel:+49 000 0000000"
              target="_blank"
            >
              +49 000 0000000
            </Link>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Envelope weight="fill" size={16} />
            <Link
              className="no-underline"
              href="mailto:silvaefaneca@gmail.com"
              target="_blank"
            >
              silvaefaneca@gmail.com
            </Link>
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
      <div className="flex flex-wrap items-center justify-center gap-2 mt-8 text-center text-xs">
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
        <section className="flex gap-2">
          <Link href="https://codebe.dev" target="_blank">
            Terms and conditions
          </Link>
          <Link href="https://codebe.dev" target="_blank">
            Contact
          </Link>
        </section>
      </div>
    </footer>
  )
}
