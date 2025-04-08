import type { Metadata } from "next"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"

export const metadata: Metadata = {
  title: "Products | Fresh & Clean",
  description:
    "Browse our complete range of cleaning chemicals, hygiene products, and washroom solutions for your business.",
  openGraph: {
    title: "Products | Fresh & Clean",
    description:
      "Browse our complete range of cleaning chemicals, hygiene products, and washroom solutions for your business.",
    images: [{ url: "/images/products-og.jpg", width: 1200, height: 630 }],
  },
}

export default function ProductsPage() {
  // Product categories
  const categories = [
    "All Products",
    "Cleaning Chemicals",
    "Hand Hygiene",
    "Dispensers",
    "Washroom Accessories",
    "Eco-Friendly Range",
  ]

  // Sample products
  const products = [
    {
      name: "Multi-Surface Cleaner",
      description: "Professional-grade cleaner for all washable surfaces",
      price: "R149.99",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "Cleaning Chemicals",
    },
    {
      name: "Hand Sanitizer Dispenser",
      description: "Touchless dispenser with long-lasting battery",
      price: "R299.99",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "Dispensers",
    },
    {
      name: "Industrial Degreaser",
      description: "Heavy-duty formula for tough cleaning challenges",
      price: "R199.99",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "Cleaning Chemicals",
    },
    {
      name: "Antibacterial Hand Soap",
      description: "Gentle yet effective hand cleaning solution",
      price: "R89.99",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "Hand Hygiene",
    },
    {
      name: "Eco-Friendly All-Purpose Cleaner",
      description: "Plant-based formula that's tough on dirt but gentle on the planet",
      price: "R129.99",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "Eco-Friendly Range",
    },
    {
      name: "Paper Towel Dispenser",
      description: "High-capacity dispenser for busy washrooms",
      price: "R249.99",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "Dispensers",
    },
    {
      name: "Toilet Bowl Cleaner",
      description: "Powerful formula that eliminates stains and odors",
      price: "R79.99",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "Cleaning Chemicals",
    },
    {
      name: "Hand Dryer",
      description: "Energy-efficient automatic hand dryer",
      price: "R1,299.99",
      imageSrc: "/placeholder.svg?height=300&width=300",
      category: "Washroom Accessories",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Products</h1>
            <p className="text-lg text-blue-100">
              Browse our complete range of professional cleaning chemicals and hygiene products designed for businesses
              that demand the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <Filter className="h-5 w-5 text-gray-500" />
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${index}`}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked={category === "All Products"}
                        />
                        <label htmlFor={`category-${index}`} className="ml-2 text-gray-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="price-1"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="price-1" className="ml-2 text-gray-700">
                        Under R100
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="price-2"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="price-2" className="ml-2 text-gray-700">
                        R100 - R200
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="price-3"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="price-3" className="ml-2 text-gray-700">
                        R200 - R500
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="price-4"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label htmlFor="price-4" className="ml-2 text-gray-700">
                        Over R500
                      </label>
                    </div>
                  </div>
                </div>

                {/* Apply Filters Button */}
                <Button className="w-full bg-blue-700 hover:bg-blue-800">Apply Filters</Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              {/* Sort Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <p className="text-gray-600">Showing {products.length} products</p>
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5 text-gray-500" />
                  <select className="border-gray-300 rounded-md text-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              {/* Products */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageSrc={product.imageSrc}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Previous page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Next page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-blue-100 mb-6">
                We offer custom solutions tailored to your specific needs. Contact our team for personalized assistance.
              </p>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Request a Custom Solution
              </Button>
            </div>
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Bulk Orders</h3>
              <p className="text-blue-100 mb-6">
                Need large quantities for your business? We offer special pricing for bulk orders. Fill out the form
                below and our team will get back to you with a quote.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-blue-900 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-blue-900 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <textarea
                  placeholder="Tell us about your requirements"
                  rows={3}
                  className="w-full px-4 py-2 rounded-md bg-blue-900 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Request Quote</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

