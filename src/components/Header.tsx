'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "./MobileMenu"

function Header() {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center p-5 shadow-md">
      <div className="pl-2 lg:pl-48 md:flex">
        <p className="text-2xl font-semibold">atennop</p>
      </div>
      <div className="hidden md:flex space-x-4 pr-10 lg:pr-48">
          <Link
              href="/"
              className={`text-xl font-semibold hover:text-green-600 ${
                  pathname === "/" ? "border-b-2 border-green-600" : ""
              }`}
          >
          home
        </Link>
          <Link
              href="/about"
              className={`text-xl font-semibold hover:text-green-600 ${
                  pathname === "/about" ? "border-b-2 border-green-600" : ""
              }`}
          >
          about
        </Link>
      </div>
      <MobileMenu />
    </header>
  )
}

export default Header

