import Link from 'next/link'
import React from 'react'
import { GlassWaterIcon } from '../icons/icons'

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
    <Link href="#" className="flex items-center justify-center" prefetch={false}>
      <GlassWaterIcon className="h-6 w-6" />
      <span className="sr-only">Pure Water Filters</span>
    </Link>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Products
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Features
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Reviews
      </Link>
      <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
        Contact
      </Link>
    </nav>
  </header>
  )
}

export default Header
