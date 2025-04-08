"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  imageSrc?: string
  rating?: number
}

export default function TestimonialCard({ quote, author, company, imageSrc, rating }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm h-full flex flex-col"
    >
      <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
      <p className="text-gray-700 dark:text-gray-300 mb-6 italic flex-1">"{quote}"</p>
      {rating && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"}`}
            />
          ))}
        </div>
      )}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100">{author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

