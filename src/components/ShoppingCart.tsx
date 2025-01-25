"use client"

import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import { useEffect } from 'react'

export function ShoppingCart() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    isCartOpen, 
    setIsCartOpen,
    totalItems,
    totalPrice
  } = useCart()

  // Close cart when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [setIsCartOpen])

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full">
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 sm:px-6">
              <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setIsCartOpen(false)}
              >
                <span className="sr-only">Close panel</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
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
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                  <p className="mt-1 text-sm text-gray-500">Start adding some items to your cart!</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <div className="h-full w-full">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.classList.add('bg-gradient-to-br', 'from-gray-100', 'to-gray-50', 'flex', 'items-center', 'justify-center');
                                parent.innerHTML = `
                                  <div class="text-center">
                                    <div class="text-gray-400 mb-1">
                                      <svg class="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                    </div>
                                    <span class="text-xs font-medium text-gray-600">Product Image</span>
                                  </div>
                                `;
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">R{(item.price * item.quantity).toFixed(2)}</p>
                        </div>

                        <div className="flex items-center justify-between text-sm mt-2">
                          <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50 font-bold"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium text-gray-900">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50 font-bold"
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="font-medium text-red-600 hover:text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal ({totalItems} items)</p>
                <p>R{totalPrice.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    // Handle checkout
                    alert('Checkout functionality coming soon!')
                  }}
                  className="w-full rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  Checkout
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <button
                  type="button"
                  className="font-medium text-blue-600 hover:text-blue-500"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 