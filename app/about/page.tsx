import Image from "next/image"
import type { Metadata } from "next"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Fresh & Clean",
  description:
    "Learn about Fresh & Clean, leaders in cleaning chemicals and hygiene products based in Uitenhage, South Africa.",
  openGraph: {
    title: "About Fresh & Clean | Leaders in Cleaning Chemicals",
    description:
      "Learn about Fresh & Clean, leaders in cleaning chemicals and hygiene products based in Uitenhage, South Africa.",
    images: [{ url: "/images/about-og.jpg", width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">About Fresh & Clean</h1>
            <p className="text-xl text-blue-100">
              We're on a mission to revolutionize cleaning standards across South Africa with our premium products and
              exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2005, Fresh & Clean began with a simple mission: to provide businesses with cleaning
                solutions that truly work. What started as a small operation in Uitenhage has grown into one of Eastern
                Cape's most trusted suppliers of cleaning chemicals and hygiene products.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, Nosipho Mabandla, identified a gap in the market for high-quality, locally produced
                cleaning products that could match or exceed the performance of international brands. With a background
                in industrial chemistry and a passion for cleanliness, she developed our first line of products in a
                small workshop.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve hundreds of businesses across South Africa, from small local establishments to large
                corporate clients, all while maintaining our commitment to quality, innovation, and exceptional customer
                service.
              </p>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Fresh & Clean company history"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">These core principles guide everything we do at Fresh & Clean.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Excellence",
                description:
                  "We never compromise on the quality of our products. Every formula is tested rigorously to ensure it meets our high standards.",
              },
              {
                title: "Environmental Responsibility",
                description:
                  "We're committed to developing eco-friendly products that are effective while minimizing environmental impact.",
              },
              {
                title: "Customer Focus",
                description:
                  "Our customers' needs drive our innovation. We listen, adapt, and deliver solutions that solve real cleaning challenges.",
              },
              {
                title: "Local Manufacturing",
                description:
                  "We proudly manufacture in South Africa, supporting local jobs and ensuring quick delivery to our customers.",
              },
              {
                title: "Continuous Innovation",
                description:
                  "We constantly research and develop new formulations to stay at the cutting edge of cleaning technology.",
              },
              {
                title: "Ethical Business Practices",
                description:
                  "We operate with integrity and transparency in all our business dealings and relationships.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <CheckCircle className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The dedicated professionals behind Fresh & Clean's success.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Nosipho Mabandla",
                role: "Founder & CEO",
                bio: "With over 20 years in the industry, Nosipho leads our company with vision and expertise.",
              },
              {
                name: "Thabo Nkosi",
                role: "Head of Product Development",
                bio: "Thabo oversees our R&D department, creating innovative cleaning solutions.",
              },
              {
                name: "Sarah van der Merwe",
                role: "Operations Manager",
                bio: "Sarah ensures our production and delivery processes run smoothly and efficiently.",
              },
              {
                name: "Michael Johnson",
                role: "Sales Director",
                bio: "Michael leads our sales team, building strong relationships with our clients.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${member.name.charAt(0)}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join the Fresh & Clean Family</h2>
            <p className="text-xl text-blue-100 mb-8">
              Discover why hundreds of businesses across South Africa trust us with their cleaning and hygiene needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Contact Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-700"
              >
                View Our Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

