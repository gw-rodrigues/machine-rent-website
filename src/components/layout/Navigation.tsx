import Image from 'next/image'
import Link from 'next/link'
import { List } from 'phosphor-react'
import { useState } from 'react'

export function Navigation() {
  const [navStatus, setNavStatus] = useState(true)
  function toggleNavigation() {
    setNavStatus(!navStatus)
  }

  return (
    <div className="w-full flex p-4 items-center justify-between bg-gray-900 shadow-md">
      <nav className="relative z-50" aria-label="primary-navigation">
        <button
          aria-label="toggle-navigation"
          aria-expanded={!navStatus}
          className="text-gray-100 z-0"
          onClick={toggleNavigation}
        >
          <List size={32} weight="fill" />
        </button>

        <ul
          className="transition-all duration-300 absolute flex flex-col gap-4 p-6 z-50 bg-gray-900 w-[50vw] h-[100vh] top-12 -translate-x-5 text-gray-200"
          aria-hidden={navStatus}
        >
          <li>
            <Link className="no-underline font-bold" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="no-underline font-bold" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="no-underline font-bold" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="no-underline font-bold" href="/faq">
              FAQ
            </Link>
          </li>
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
  )
}
