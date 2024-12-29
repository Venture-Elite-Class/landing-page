import React from 'react'
import Link from 'next/link'
import { CTAButton } from '../ui/CTAButton'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <Link href={href} className="text-lg relative group">
    <span className="relative mono">
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </span>
  </Link>
)

const NAVIGATION_ITEMS = [
  { href: '/courses', label: 'Courses' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-black/[.1] dark:border-white/[.1] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl serif">
              EliteClass
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            {NAVIGATION_ITEMS.map(({ href, label }) => (
              <NavLink key={href} href={href}>
                {label}
              </NavLink>
            ))}
          </div>
          <div className="flex-shrink-0">
            <CTAButton>
              <span>Get Certified</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar