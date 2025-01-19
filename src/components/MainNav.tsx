import Link from 'next/link'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Victory Kingdom Church
              </Link>
            </div>

            {/* Main Navigation */}
            <NavigationMenu className="ml-6 flex space-x-8">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                      <Link href="/about/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Our Mission
                      </Link>
                      <Link href="/about/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Leadership
                      </Link>
                      <Link href="/about/beliefs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        What We Believe
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/events" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Events
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/sermons" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Sermons
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/shop" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Shop
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  )
} 