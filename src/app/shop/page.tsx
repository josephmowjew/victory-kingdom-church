import { MainNav } from "@/components/MainNav"
import { ShopClient } from "./ShopClient"

// Mock data for church merchandise
const products = [
  {
    id: 1,
    name: "Victory Kingdom T-Shirt",
    price: 24.99,
    image: "/products/tshirt.jpg",
    description: "Comfortable cotton t-shirt with church logo"
  },
  {
    id: 2,
    name: "Daily Devotional Book",
    price: 19.99,
    image: "/products/book.jpg",
    description: "365 days of spiritual guidance and reflection"
  },
  {
    id: 3,
    name: "Worship Album",
    price: 14.99,
    image: "/products/album.jpg",
    description: "Live worship recordings from our services"
  },
  {
    id: 4,
    name: "Prayer Journal",
    price: 12.99,
    image: "/products/journal.jpg",
    description: "Beautiful journal for your spiritual journey"
  },
  {
    id: 5,
    name: "Coffee Mug",
    price: 16.99,
    image: "/products/mug.jpg",
    description: "Start your day with faith and coffee"
  },
  {
    id: 6,
    name: "Bible Study Guide",
    price: 29.99,
    image: "/products/guide.jpg",
    description: "Comprehensive guide for deeper biblical understanding"
  }
]

export default function ShopPage() {
  return (
    <div>
      <MainNav />
      
      {/* Shop Header */}
      <header className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Church Shop</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Support our ministry and share your faith with our collection of church merchandise.
            All proceeds go towards supporting our community outreach programs.
          </p>
        </div>
      </header>

      {/* Product Grid with Shopping Cart */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ShopClient products={products} />
      </main>

      {/* Shopping Information */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600">All transactions are processed securely</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Orders typically ship within 2-3 business days</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Support Our Mission</h3>
              <p className="text-gray-600">Proceeds support our community programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 