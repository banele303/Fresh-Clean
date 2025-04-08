import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, Star, ArrowRight, Phone, Mail, Calendar, Recycle, Trash2, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Professional Waste Removal Services | Sustainable Waste Management | Fresh & Clean",
  description:
    "Comprehensive waste removal and management services for businesses and residential properties in South Africa. Recycling, general waste, hazardous waste, and specialized disposal solutions.",
  keywords:
    "waste removal services, waste management, commercial waste disposal, recycling services, hazardous waste disposal, e-waste management, construction waste removal, South Africa waste services",
  alternates: {
    canonical: "https://freshandclean.co.za/services/waste-removal",
  },
  openGraph: {
    title: "Professional Waste Removal Services | Sustainable Waste Management | Fresh & Clean",
    description:
      "Comprehensive waste removal and management services for businesses and residential properties in South Africa. Recycling, general waste, hazardous waste, and specialized disposal solutions.",
    url: "https://freshandclean.co.za/services/waste-removal",
    type: "website",
    images: [{ url: "/images/waste-removal-og.jpg", width: 1200, height: 630 }],
  },
}

export default function WasteRemovalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 mb-4">Professional Waste Management</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainable Waste Removal Solutions</h1>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Comprehensive waste management services for businesses and residential properties. We handle collection, disposal, and recycling with a focus on environmental responsibility and regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Get a Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Waste+Management"
                alt="Professional waste removal services by Fresh & Clean"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Trusted by Leading Businesses Across South Africa</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/placeholder.svg?height=60&width=180&text=Client+${i}`}
                  alt={`Client ${i} logo`}
                  width={180}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Comprehensive Waste Management Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We offer a wide range of waste removal and management services tailored to meet the specific needs of your business or property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Waste Collection",
                description: "Regular collection and responsible disposal of general business and residential waste.",
                image: "/placeholder.svg?height=300&width=400&text=General+Waste",
                features: [
                  "Scheduled collection services",
                  "Bin provision and maintenance",
                  "Waste audits and reporting",
                  "Compliance with regulations",
                ],
              },
              {
                title: "Recycling Services",
                description: "Comprehensive recycling programs for paper, plastic, glass, metal, and other recyclable materials.",
                image: "/placeholder.svg?height=300&width=400&text=Recycling",
                features: [
                  "Segregated collection systems",
                  "Recycling station setup",
                  "Staff training programs",
                  "Recycling certificates",
                ],
              },
              {
                title: "Hazardous Waste Disposal",
                description: "Safe handling and disposal of hazardous materials in compliance with environmental regulations.",
                image: "/placeholder.svg?height=300&width=400&text=Hazardous+Waste",
                features: [
                  "Chemical waste disposal",
                  "Medical waste management",
                  "Compliance documentation",
                  "Staff safety training",
                ],
              },
              {
                title: "Construction Waste Removal",
                description: "Efficient removal of construction and demolition debris from project sites.",
                image: "/placeholder.svg?height=300&width=400&text=Construction+Waste",
                features: [
                  "Skip bin provision",
                  "On-demand collection",
                  "Material separation",
                  "Recycling of suitable materials",
                ],
              },
              {
                title: "E-Waste Management",
                description: "Responsible disposal and recycling of electronic equipment and components.",
                image: "/placeholder.svg?height=300&width=400&text=E-Waste",
                features: [
                  "Secure data destruction",
                  "Component recycling",
                  "Collection services",
                  "Disposal certificates",
                ],
              },
              {
                title: "Bulk Waste Collection",
                description: "Removal of large volumes of waste for office cleanouts, renovations, or special events.",
                image: "/placeholder.svg?height=300&width=400&text=Bulk+Waste",
                features: [
                  "One-time collection",
                  "Large item disposal",
                  "Office clearance",
                  "Furniture recycling",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Specialized Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Industry-Specific Waste Management
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Different industries have unique waste management requirements. We offer specialized solutions tailored to specific sectors.
            </p>
          </div>

          <Tabs defaultValue="healthcare" className="mb-12">
            <TabsList className="mb-8 mx-auto flex justify-center">
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="construction">Construction</TabsTrigger>
              <TabsTrigger value="hospitality">Hospitality</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="healthcare">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Healthcare+Waste"
                    alt="Healthcare waste management services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Healthcare Waste Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our healthcare waste management services ensure safe, compliant disposal of medical waste while maintaining the highest standards of hygiene and safety.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Medical waste collection and disposal in compliance with healthcare regulations",
                      "Sharps container provision and collection",
                      "Pharmaceutical waste management",
                      "Biohazardous waste handling",
                      "Detailed tracking and documentation for regulatory compliance",
                      "Staff training on proper waste segregation",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Request Healthcare Waste Service
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="construction">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Construction & Demolition Waste
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our construction waste management services help keep your project sites clean and compliant while maximizing material recycling and minimizing landfill impact.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Skip bin provision in various sizes for different project needs",
                      "Regular or on-demand collection schedules",
                      "Sorting and separation of recyclable materials",
                      "Concrete, brick, and masonry recycling",
                      "Wood and metal salvage",
                      "Compliance with construction waste regulations",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Get Construction Waste Quote
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Construction+Waste"
                    alt="Construction waste management services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="hospitality">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Hospitality+Waste"
                    alt="Hospitality waste management services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Hospitality Waste Solutions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our hospitality waste management services address the unique needs of hotels, restaurants, and event venues, focusing on food waste, recycling, and guest-facing solutions.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Food waste collection and composting programs",
                      "Glass, plastic, and paper recycling systems",
                      "Cooking oil collection and recycling",
                      "Discreet waste collection to maintain guest experience",
                      "Staff training on waste reduction and sorting",
                      "Waste audits to identify improvement opportunities",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Explore Hospitality Solutions
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="manufacturing">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Manufacturing Waste Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our manufacturing waste solutions address industrial byproducts, hazardous materials, and production waste while focusing on regulatory compliance and sustainability.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Industrial waste collection and processing",
                      "Hazardous material handling and disposal",
                      "Production scrap recycling programs",
                      "Chemical waste management",
                      "Regulatory compliance documentation",
                      "Waste reduction consulting",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Request Industrial Waste Service
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Manufacturing+Waste"
                    alt="Manufacturing waste management services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sustainable Approach */}
      <section className="py-16 md:py-24 bg-green-50 dark:bg-green-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 mb-4">Environmental Responsibility</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Commitment to Sustainable Waste Management
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Fresh & Clean, we're committed to environmentally responsible waste management practices. Our approach focuses on minimizing landfill impact through recycling, reuse, and proper disposal methods.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Waste reduction strategies and consulting",
                  "Comprehensive recycling program implementation",
                  "Environmental compliance and documentation",
                  "Detailed waste audit reports and improvement recommendations",
                  "Carbon footprint reduction through optimized collection routes",
                  "Support for zero waste initiatives",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                Learn About Our Green Initiatives
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Sustainable+Waste+Management"
                alt="Sustainable waste management practices"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Our Methodology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Waste Management Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We follow a systematic approach to waste management that ensures efficiency, compliance, and environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Assessment & Planning",
                description: "We begin with a thorough assessment of your waste management needs and develop a customized plan.",
                icon: <Recycle className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Waste audit", "Volume assessment", "Current process review", "Regulatory review"],
              },
              {
                title: "Implementation",
                description: "We set up the necessary infrastructure and systems for efficient waste collection and sorting.",
                icon: <Trash2 className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Bin placement", "Collection scheduling", "Staff training", "System setup"],
              },
              {
                title: "Collection & Processing",
                description: "Our team collects and processes waste according to the established schedule and protocols.",
                icon: <AlertTriangle className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Regular collection", "Waste sorting", "Recycling separation", "Proper disposal"],
              },
              {
                title: "Monitoring & Reporting",
                description: "We provide ongoing monitoring and detailed reporting to track progress and ensure compliance.",
                icon: <CheckCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Performance tracking", "Compliance documentation", "Improvement recommendations", "Regular reviews"],
              },
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                <ul className="text-left space-y-2">
                  {step.steps.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Common Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find answers to common questions about our waste management services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "What types of waste do you collect and process?",
                answer: "We handle a wide range of waste types including general waste, recyclables (paper, plastic, glass, metal), hazardous waste, e-waste, construction debris, medical waste, and more. Our specialized teams are trained and equipped to handle each waste stream according to regulatory requirements and best practices.",
              },
              {
                question: "How often can you collect our waste?",
                answer: "We offer flexible collection schedules based on your needs, from daily collection for high-volume generators to weekly or monthly services for smaller operations. We'll work with you to determine the optimal collection frequency based on your waste volume, storage capacity, and operational requirements.",
              },
              {
                question: "Do you provide waste bins and containers?",
                answer: "Yes, we provide a variety of waste bins and containers in different sizes and configurations to suit your specific needs. This includes wheelie bins, skip bins, compactors, and specialized containers for different waste streams. We also handle the maintenance and replacement of these containers as needed.",
              },
              {
                question: "How do you ensure compliance with waste regulations?",
                answer: "We stay current with all national and local waste management regulations and ensure our processes meet or exceed compliance requirements. We provide detailed documentation of waste collection, transportation, and disposal, including waste transfer notes and certificates of disposal for regulated waste streams.",
              },
              {
                question: "Can you help us implement a recycling program?",
                answer: "We specialize in designing and implementing effective recycling programs tailored to your specific operation. This includes waste audits to identify recycling opportunities, provision of appropriate bins and signage, staff training, and ongoing monitoring and reporting to track progress and identify areas for improvement.",
              },
              {
                question: "How do you handle confidential waste?",
                answer: "We offer secure document destruction services that comply with data protection regulations. Our confidential waste service includes secure collection containers, tracked collection, and certified destruction processes. We provide certificates of destruction for your records and peace of mind.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-500 text-white mb-4">Get Started Today</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Efficient Waste Management?</h2>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Contact us today for a waste audit and customized waste management solution. Our experts will help you optimize your waste processes, reduce costs, and minimize environmental impact.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-10 w-10 text-yellow-400 mr-4
tsx file=\"app/services/landscaping/page.tsx"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Star, ArrowRight, Phone, Mail, Calendar, Leaf, Scissors, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Professional Landscaping Services | Commercial & Residential Landscaping | Fresh & Clean",
  description: "Expert landscaping services for businesses and residential properties in South Africa. Garden design, lawn maintenance, site cleanup, and complete outdoor maintenance solutions.",
  keywords: "landscaping services, commercial landscaping, residential landscaping, garden maintenance, lawn care, grass cutting, site cleanup, outdoor maintenance, South Africa landscaping",
  alternates: {
    canonical: "https://freshandclean.co.za/services/landscaping",
  },
  openGraph: {
    title: "Professional Landscaping Services | Commercial & Residential Landscaping | Fresh & Clean",
    description: "Expert landscaping services for businesses and residential properties in South Africa. Garden design, lawn maintenance, site cleanup, and complete outdoor maintenance solutions.",
    url: "https://freshandclean.co.za/services/landscaping",
    type: "website",
    images: [{ url: "/images/landscaping-og.jpg", width: 1200, height: 630 }],
  },
}

export default function LandscapingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 mb-4">Professional Landscaping</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Landscaping & Outdoor Maintenance</h1>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Comprehensive landscaping services for commercial and residential properties. From regular maintenance to complete landscape transformations, we keep your outdoor spaces looking pristine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Get a Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Professional+Landscaping"
                alt="Professional landscaping services by Fresh & Clean"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Trusted by Leading Properties Across South Africa</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={`/placeholder.svg?height=60&width=180&text=Client+${i}`}
                  alt={`Client ${i} logo`}
                  width={180}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Comprehensive Landscaping Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We offer a wide range of landscaping and outdoor maintenance services tailored to meet the specific needs of your property.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Landscape Design & Installation",
                description: "Professional landscape design and implementation to transform your outdoor spaces.",
                image: "/placeholder.svg?height=300&width=400&text=Landscape+Design",
                features: [
                  "Custom landscape planning",
                  "Plant selection and sourcing",
                  "Hardscape installation",
                  "Irrigation system design",
                ],
              },
              {
                title: "Regular Lawn Maintenance",
                description: "Ongoing lawn care services to keep your grass healthy and manicured.",
                image: "/placeholder.svg?height=300&width=400&text=Lawn+Maintenance",
                features: [
                  "Regular grass cutting",
                  "Edge trimming and detailing",
                  "Fertilization programs",
                  "Weed control treatments",
                ],
              },
              {
                title: "Garden Care & Maintenance",
                description: "Comprehensive garden maintenance to keep your plants thriving year-round.",
                image: "/placeholder.svg?height=300&width=400&text=Garden+Care",
                features: [
                  "Plant pruning and shaping",
                  "Mulching and soil care",
                  "Seasonal planting",
                  "Pest and disease management",
                ],
              },
              {
                title: "Irrigation Systems",
                description: "Installation and maintenance of efficient irrigation systems for optimal plant health.",
                image: "/placeholder.svg?height=300&width=400&text=Irrigation",
                features: [
                  "System design and installation",
                  "Smart controller setup",
                  "Regular maintenance",
                  "Water conservation solutions",
                ],
              },
              {
                title: "Site Cleanup & Clearing",
                description: "Thorough cleanup of overgrown or neglected outdoor areas.",
                image: "/placeholder.svg?height=300&width=400&text=Site+Cleanup",
                features: [
                  "Vegetation removal",
                  "Debris clearing",
                  "Surface preparation",
                  "Green waste disposal",
                ],
              },
              {
                title: "Tree Services",
                description: "Professional tree care, from pruning to removal and stump grinding.",
                image: "/placeholder.svg?height=300&width=400&text=Tree+Services",
                features: [
                  "Tree pruning and shaping",
                  "Dead tree removal",
                  "Stump grinding",
                  "Tree health assessments",
                ],
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Property Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Landscaping for Every Property Type
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We provide specialized landscaping solutions for different property types, each with unique requirements and considerations.
            </p>
          </div>

          <Tabs defaultValue="commercial" className="mb-12">
            <TabsList className="mb-8 mx-auto flex justify-center">
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="industrial">Industrial</TabsTrigger>
              <TabsTrigger value="institutional">Institutional</TabsTrigger>
            </TabsList>
            
            <TabsContent value="commercial">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Commercial+Landscaping"
                    alt="Commercial landscaping services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Commercial Property Landscaping
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Create a positive first impression and enhance your business image with our professional commercial landscaping services. We understand the unique needs of commercial properties and deliver solutions that balance aesthetics, functionality, and maintenance requirements.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Office park and corporate campus maintenance",
                      "Retail center and shopping mall landscaping",
                      "Hotel and hospitality property enhancement",
                      "Commercial entrance and signage highlighting",
                      "Parking lot landscaping and maintenance",
                      "Seasonal color rotations and special event preparation",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Commercial Landscaping Quote
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="residential">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Residential Landscaping
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Transform your home's outdoor spaces into beautiful, functional areas that reflect your personal style and enhance your quality of life. Our residential landscaping services range from regular maintenance to complete garden transformations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Custom garden design and installation",
                      "Regular lawn and garden maintenance",
                      "Outdoor living space creation",
                      "Water features and garden structures",
                      "Native and drought-resistant landscaping",
                      "Seasonal color and holiday decorations",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Residential Services
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Residential+Landscaping"
                    alt="Residential landscaping services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="industrial">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Industrial+Landscaping"
                    alt="Industrial landscaping services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Industrial Site Landscaping
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our industrial landscaping services focus on creating low-maintenance, functional outdoor spaces that enhance safety, comply with regulations, and improve the overall appearance of industrial facilities.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Factory and warehouse perimeter maintenance",
                      "Stormwater management landscaping",
                      "Security-focused landscape design",
                      "Low-maintenance plant selection",
                      "Dust control solutions",
                      "Environmental compliance landscaping",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Industrial Site Assessment
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="institutional">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Institutional Grounds Maintenance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We provide specialized landscaping services for schools, hospitals, government buildings, and other institutional properties, focusing on safety, accessibility, and creating welcoming environments.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "School and campus grounds maintenance",
                      "Hospital and healthcare facility landscaping",
                      "Government building grounds management",
                      "Sports field maintenance",
                      "Playground area landscaping",
                      "ADA-compliant landscape design",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Institutional Landscaping Quote
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Institutional+Landscaping"
                    alt="Institutional landscaping services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sustainable Approach */}
      <section className="py-16 md:py-24 bg-green-50 dark:bg-green-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 mb-4">Eco-Friendly Practices</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Sustainable Landscaping Approach
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Fresh & Clean, we're committed to environmentally responsible landscaping practices. Our sustainable approach focuses on water conservation, native plant selection, and reducing chemical usage.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Water-efficient irrigation systems and practices",
                  "Native and drought-tolerant plant selection",
                  "Organic fertilizers and pest management",
                  "Rainwater harvesting and gray water systems",
                  "Composting and green waste recycling",
                  "Reduced emissions equipment and practices",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                Learn About Our Green Practices
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Sustainable+Landscaping"
                alt="Sustainable landscaping practices"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Our Methodology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Landscaping Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We follow a systematic approach to landscaping that ensures beautiful, functional, and sustainable outdoor spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consultation & Assessment",
                description: "We begin with a thorough assessment of your property and discussion of your needs and preferences.",
                icon: <Leaf className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Site evaluation", "Client needs assessment", "Budget discussion", "Existing landscape review"],
              },
              {
                title: "Design & Planning",
                description: "Our experts develop a customized landscape plan that balances aesthetics, functionality, and sustainability.",
                icon: <Sun className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Concept development", "Plant selection", "Hardscape planning", "Irrigation design"],
              },
              {
                title: "Implementation",
                description: "Our skilled team brings the landscape plan to life with careful attention to detail and quality.",
                icon: <Scissors className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Site preparation", "Hardscape installation", "Planting", "Irrigation setup"],
              },
              {
                title: "Maintenance & Care",
                description: "We provide ongoing maintenance to ensure your landscape continues to thrive and evolve beautifully.",
                icon: <CheckCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Regular maintenance", "Seasonal care", "System adjustments", "Continuous improvements"],
              },
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{step.description}</p>
                <ul className="text-left space-y-2">
                  {step.steps.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Common Questions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find answers to common questions about our landscaping services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How often should professional landscaping maintenance be performed?",
                answer: "The frequency depends on several factors including your property type, landscape design, climate, and seasonal changes. For most properties, weekly maintenance during growing seasons and bi-weekly or monthly during dormant periods is recommended. We'll create a customized maintenance schedule based on your specific landscape needs.",
              },
              {
                question: "What is the best time of year for landscape installation?",
                answer: "While landscaping can be done year-round in many areas of South Africa, autumn and spring generally offer ideal conditions for new plantings. These seasons provide moderate temperatures and adequate moisture that help plants establish strong root systems. However, with proper care and irrigation, installations can be successful in any season.",
              },
              {
                question: "How do you handle water conservation in your landscaping designs?",
                answer: "Water conservation is a core principle in our landscape designs. We implement strategies such as drought-tolerant plant selection, efficient irrigation systems with smart controllers, proper soil preparation to improve water retention, mulching to reduce evaporation, and rainwater harvesting systems where appropriate. Our goal is to create beautiful landscapes that minimize water usage.",
              },
              {
                question: "Do you offer warranties on your landscaping work?",
                answer: "Yes, we stand behind our work with comprehensive warranties. Plant materials typically come with a one-year warranty against defects or failure when maintained by our team. Hardscape elements like patios and retaining walls carry longer warranties, often 3-5 years. Irrigation systems are warranted for parts and labor for one year. Specific warranty details are outlined in our service agreements.",
              },
              {
                question: "Can you work with my existing landscape and make improvements?",
                answer: "We specialize in landscape renovations and enhancements. Our process begins with a thorough assessment of your existing landscape to identify elements worth preserving and areas for improvement. We can work in phases to minimize disruption and spread costs over time if desired. Many clients find that strategic enhancements can transform their property without a complete redesign.",
              },
              {
                question: "How do you handle pest and disease management in landscapes?",
                answer: "We follow Integrated Pest Management (IPM) principles that emphasize prevention first through proper plant selection, cultural practices, and maintaining plant health. When interventions are necessary, we start with the least toxic options like biological controls and targeted treatments. Our technicians are trained to identify problems early when they're easier to manage with minimal intervention.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-500 text-white mb-4">Get Started Today</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Outdoor Space?</h2>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Contact us today for a landscape assessment and customized proposal. Our experts will help you create and maintain beautiful, functional outdoor spaces that enhance your property's value and your enjoyment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Phone className="h-10 w-10 text-yellow-400 mr-4" />
                  <div>
                    <p className="text-sm text-blue-200">Call us at</p>
                    <p className="text-lg font-semibold">+27 41 922 4554</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-10 w-10 text-yellow-400 mr-4" />
                  <div>
                    <p className="text-sm text-blue-200">Email us at</p>
                    <p className="text-lg font-semibold">info@freshandclean.co.za</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Request a Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  <Calendar className="mr-2 h-5 w-5" /> Schedule a Consultation
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Contact+Us"
                alt="Contact Fresh & Clean for professional landscaping services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LandscapingService",
            "name": "Fresh & Clean Professional Landscaping Services",
            "image": "https://freshandclean.co.za/images/landscaping-services.jpg",
            "url": "https://freshandclean.co.za/services/landscaping",
            "telephone": "+27-41-922-4554",
            "address": {
              "@type

