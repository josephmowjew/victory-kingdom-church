import Link from 'next/link'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-heading font-bold text-2xl tracking-tight text-yellow-500 hover:text-yellow-600 transition-colors">
            Victory Kingdom Church
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8">
              <NavigationMenuItem>
                <Link href="/" className="font-heading font-medium text-base text-gray-700 hover:text-yellow-500 transition-colors duration-200">
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-heading font-medium text-base text-gray-700 hover:text-yellow-500 transition-colors duration-200">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[200px] font-heading">
                    <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-colors">
                      About Us
                    </Link>
                    <Link href="/about/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-colors">
                      Our Mission
                    </Link>
                    <Link href="/about/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-colors">
                      Leadership
                    </Link>
                    <Link href="/about/beliefs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-500 transition-colors">
                      What We Believe
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/events" className="font-heading font-medium text-base text-gray-700 hover:text-yellow-500 transition-colors duration-200">
                  Events
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/sermons" className="font-heading font-medium text-base text-gray-700 hover:text-yellow-500 transition-colors duration-200">
                  Sermons
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/shop" className="font-heading font-medium text-base text-gray-700 hover:text-yellow-500 transition-colors duration-200">
                  Shop
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className="font-heading font-medium text-base text-gray-700 hover:text-yellow-500 transition-colors duration-200">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  )
} 