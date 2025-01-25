"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about/mission", label: "Our Mission" },
      { href: "/about/leadership", label: "Leadership" },
    ]
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/sermons",
    label: "Sermons",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center">
      {routes.map((route) => {
        const isActive = pathname === route.href ||
          (route.children && route.children.some(child => pathname === child.href))

        if (route.children) {
          return (
            <div key={route.href} className="relative group px-4">
              <button 
                className={`py-4 text-base font-medium transition-colors hover:text-yellow-500
                  ${isActive ? 'text-yellow-500' : 'text-gray-700'}`}
              >
                {route.label}
              </button>
              <div className="absolute left-0 top-full w-48 py-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                {route.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block px-6 py-3 text-sm hover:bg-gray-50
                      ${pathname === child.href ? 'text-yellow-500' : 'text-gray-700'}`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        }

        return (
          <Link
            key={route.href}
            href={route.href}
            className={`px-4 py-4 text-base font-medium transition-colors hover:text-yellow-500
              ${isActive ? 'text-yellow-500' : 'text-gray-700'}`}
          >
            {route.label}
          </Link>
        )
      })}
    </nav>
  )
} 