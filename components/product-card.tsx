"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  name: string
  description: string
  price: string
  imageSrc: string
  slug?: string
  rating?: number
  isNew?: boolean
  isBestSeller?: boolean
}

export default function ProductCard({
  name,
  description,
  price,
  imageSrc,
  slug = "#",
  rating,
  isNew,
  isBestSeller,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
    >
      <div className="relative h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        {isNew && <Badge className="absolute top-2 left-2 bg-blue-600">New</Badge>}
        {isBestSeller && <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">Best Seller</Badge>}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-1">{description}</p>
        {rating && (
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">{rating}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">{price}</span>
          <Button size="sm" className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
            <ShoppingCart className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

