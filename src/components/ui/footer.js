import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
    <div className="container max-w-7xl flex justify-between items-center">
      <p className="text-xs text-muted-foreground">&copy; 2024 Pure Water Filters. All rights reserved.</p>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Privacy
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Terms
        </Link>
      </nav>
    </div>
  </footer>
  )
}

export default Footer
