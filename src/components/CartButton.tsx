"use client"

import { useCart } from '@/contexts/CartContext'

export function CartButton() {
  const { totalItems, setIsCartOpen } = useCart()

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-gray-700 hover:text-yellow-500 transition-colors"
    >
      <span className="sr-only">Shopping cart</span>
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-yellow-500 text-xs text-white flex items-center justify-center font-medium">
          {totalItems}
        </span>
      )}
    </button>
  )
} 