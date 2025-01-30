'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden z-50">
      <button
        onClick={toggleMenu}
        className="text-2xl font-bold focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>
          <div
              className={`absolute top-16 right-0 w-full shadow-md transition-all duration-300 ease-in-out transform ${
                  isOpen
                      ? 'opacity-75 translate-y-0'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
              } bg-white dark:bg-black`}
          >
              <nav className="flex flex-col items-center py-4">
                  <Link
                      href="/"
                      onClick={toggleMenu}
                      className="w-full text-center py-2 text-xl font-bold hover:bg-green-100 dark:hover:bg-gray-800 transition-colors duration-300 text-black dark:text-white"
                  >
                      home
                  </Link>
                  <Link
                      href="/about"
                      onClick={toggleMenu}
                      className="w-full text-center py-2 text-xl font-bold hover:bg-green-100 dark:hover:bg-gray-800 transition-colors duration-300 text-black dark:text-white"
                  >
                      about
                  </Link>
              </nav>
          </div>
    </div>
  )
}

export default MobileMenu