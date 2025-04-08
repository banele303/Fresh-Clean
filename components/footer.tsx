"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Droplets, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={fadeIn}>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div className="font-bold text-xl text-white">
                fresh<span className="text-blue-400">&</span>clean
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Leaders in cleaning chemicals & hygiene products. Providing complete solutions for washrooms since 2005.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+27419224554"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>041 922 4554</span>
              </a>
              <a
                href="mailto:nosipho@freshandclean.co.za"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>nosipho@freshandclean.co.za</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Shop 19a, Riverside Industrial Park, Lower Magennis Road, Uitenhage</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/cleaning-chemicals" className="text-gray-400 hover:text-white transition-colors">
                  Cleaning Chemicals
                </Link>
              </li>
              <li>
                <Link href="/products/hand-hygiene" className="text-gray-400 hover:text-white transition-colors">
                  Hand Hygiene
                </Link>
              </li>
              <li>
                <Link href="/products/dispensers" className="text-gray-400 hover:text-white transition-colors">
                  Dispensers
                </Link>
              </li>
              <li>
                <Link
                  href="/products/washroom-accessories"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Washroom Accessories
                </Link>
              </li>
              <li>
                <Link href="/products/eco-friendly" className="text-gray-400 hover:text-white transition-colors">
                  Eco-Friendly Range
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest product updates and industry news.
            </p>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Subscribe</Button>
              </div>
              <div className="flex gap-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Fresh & Clean. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </footer>
  )
}

