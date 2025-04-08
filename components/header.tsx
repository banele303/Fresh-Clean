"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Phone, Mail, MapPin, Droplets, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "Cleaning Services", href: "/services/cleaning" },
        { name: "Waste Removal", href: "/services/waste-removal" },
        { name: "Pest Control", href: "/services/pest-control" },
        { name: "Landscaping", href: "/services/landscaping" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "bg-white dark:bg-gray-900"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-blue-700 dark:bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="tel:+27419224554" className="flex items-center gap-1 hover:text-blue-200">
                <Phone className="h-4 w-4" />
                <span>041 922 4554</span>
              </a>
              <a href="mailto:nosipho@freshandclean.co.za" className="flex items-center gap-1 hover:text-blue-200">
                <Mail className="h-4 w-4" />
                <span>nosipho@freshandclean.co.za</span>
              </a>
            </div>
            <div className="flex items-center gap-1 mt-2 sm:mt-0">
              <MapPin className="h-4 w-4" />
              <span>Shop 19a, Riverside Industrial Park, Uitenhage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div className="font-bold text-xl text-gray-900 dark:text-gray-100">
                fresh<span className="text-blue-600 dark:text-blue-400">&</span>clean
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium flex items-center gap-1"
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                        >
                          <div className="py-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                >
                  {item.name}
                </Link>
              )
            })}
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Get a Quote</Button>
            <ThemeToggle />
          </motion.nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4 border-b dark:border-gray-700">
                    <Link href="/" className="flex items-center gap-2">
                      <div className="relative w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                        <Droplets className="h-4 w-4 text-white" />
                      </div>
                      <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                        fresh<span className="text-blue-600 dark:text-blue-400">&</span>clean
                      </div>
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 py-8">
                    {navigation.map((item) => {
                      if (item.children) {
                        return (
                          <div key={item.name} className="space-y-2">
                            <button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg py-2 flex items-center justify-between w-full"
                            >
                              {item.name}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                              />
                            </button>
                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 space-y-2 border-l border-gray-200 dark:border-gray-700">
                                    {item.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-base py-1"
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      }
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-lg py-2"
                        >
                          {item.name}
                        </Link>
                      )
                    })}
                  </nav>
                  <div className="mt-auto">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Get a Quote</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

