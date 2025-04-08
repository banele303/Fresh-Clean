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
                Comprehensive waste management services for businesses and residential properties. We handle collection,
                disposal, and recycling with a focus on environmental responsibility and regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Get a Free Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700"
                >
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Trusted by Leading Businesses Across South Africa
            </h2>
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
              We offer a wide range of waste removal and management services tailored to meet the specific needs of your
              business or property.
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
                description:
                  "Comprehensive recycling programs for paper, plastic, glass, metal, and other recyclable materials.",
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
                description:
                  "Safe handling and disposal of hazardous materials in compliance with environmental regulations.",
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
                features: ["One-time collection", "Large item disposal", "Office clearance", "Furniture recycling"],
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
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
              Different industries have unique waste management requirements. We offer specialized solutions tailored to
              specific sectors.
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
                    Our healthcare waste management services ensure safe, compliant disposal of medical waste while
                    maintaining the highest standards of hygiene and safety.
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
                    Our construction waste management services help keep your project sites clean and compliant while
                    maximizing material recycling and minimizing landfill impact.
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
                    Our hospitality waste management services address the unique needs of hotels, restaurants, and event
                    venues, focusing on food waste, recycling, and guest-facing solutions.
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
                    Our manufacturing waste solutions address industrial byproducts, hazardous materials, and production
                    waste while focusing on regulatory compliance and sustainability.
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
              <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 mb-4">
                Environmental Responsibility
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Commitment to Sustainable Waste Management
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Fresh & Clean, we're committed to environmentally responsible waste management practices. Our
                approach focuses on minimizing landfill impact through recycling, reuse, and proper disposal methods.
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
              We follow a systematic approach to waste management that ensures efficiency, compliance, and environmental
              responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Assessment & Planning",
                description:
                  "We begin with a thorough assessment of your waste management needs and develop a customized plan.",
                icon: <Recycle className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Waste audit", "Volume assessment", "Current process review", "Regulatory review"],
              },
              {
                title: "Implementation",
                description:
                  "We set up the necessary infrastructure and systems for efficient waste collection and sorting.",
                icon: <Trash2 className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Bin placement", "Collection scheduling", "Staff training", "System setup"],
              },
              {
                title: "Collection & Processing",
                description:
                  "Our team collects and processes waste according to the established schedule and protocols.",
                icon: <AlertTriangle className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Regular collection", "Waste sorting", "Recycling separation", "Proper disposal"],
              },
              {
                title: "Monitoring & Reporting",
                description:
                  "We provide ongoing monitoring and detailed reporting to track progress and ensure compliance.",
                icon: <CheckCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: [
                  "Performance tracking",
                  "Compliance documentation",
                  "Improvement recommendations",
                  "Regular reviews",
                ],
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

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Waste Management Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how our waste management solutions have helped businesses improve efficiency, reduce costs, and
              minimize environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Office Park Recycling Program",
                description:
                  "How we implemented a comprehensive recycling program for a major office park in Johannesburg.",
                image: "/placeholder.svg?height=300&width=400&text=Office+Park",
                results: ["70% reduction in landfill waste", "Cost savings of 25%", "Improved tenant satisfaction"],
              },
              {
                title: "Manufacturing Facility Waste Reduction",
                description: "Our waste management solution for a large manufacturing plant in Durban.",
                image: "/placeholder.svg?height=300&width=400&text=Manufacturing",
                results: [
                  "40% reduction in waste disposal costs",
                  "Improved regulatory compliance",
                  "Recovery of valuable materials",
                ],
              },
              {
                title: "Hospital Waste Management",
                description: "A specialized medical waste solution for a major hospital network.",
                image: "/placeholder.svg?height=300&width=400&text=Hospital",
                results: [
                  "100% compliance with healthcare regulations",
                  "Safe disposal of all medical waste",
                  "Staff safety improvements",
                ],
              },
            ].map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{study.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{study.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Read Full Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Client Feedback</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Don't just take our word for it. Here's what our satisfied clients have to say about our waste management
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Patel",
                position: "Facilities Manager, ABC Office Park",
                quote:
                  "Fresh & Clean's waste management program has transformed our office park's environmental footprint. Their recycling initiative has been embraced by all our tenants.",
                rating: 5,
              },
              {
                name: "Dr. Sarah Johnson",
                position: "Operations Director, Cape Town Medical Center",
                quote:
                  "Managing medical waste requires precision and compliance. Fresh & Clean's healthcare waste services have been flawless, giving us peace of mind.",
                rating: 5,
              },
              {
                name: "Thomas Khumalo",
                position: "Site Manager, Construction Solutions Ltd",
                quote:
                  "The construction waste management provided by Fresh & Clean has kept our sites clean and compliant. Their skip service is reliable and their staff professional.",
                rating: 4,
              },
              {
                name: "Grace Molefe",
                position: "Sustainability Officer, Green Retail Group",
                quote:
                  "As a company committed to sustainability, we needed a waste partner who shared our values. Fresh & Clean has exceeded our expectations with their eco-friendly approach.",
                rating: 5,
              },
              {
                name: "Michael van der Merwe",
                position: "Hotel Manager, Beachfront Resort",
                quote:
                  "Our guests expect the highest standards, including our environmental practices. Fresh & Clean's discreet waste management has been an essential part of our operation.",
                rating: 5,
              },
              {
                name: "Lisa Naidoo",
                position: "Production Manager, Industrial Manufacturing",
                quote:
                  "Managing industrial waste is complex, but Fresh & Clean has simplified the process for us while ensuring we meet all regulatory requirements.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
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
                question: "How often can you collect our waste?",
                answer:
                  "We offer flexible collection schedules tailored to your needs, ranging from daily to weekly or monthly collections. We can also provide on-demand services for special circumstances or seasonal fluctuations in waste volume.",
              },
              {
                question: "What types of waste do you handle?",
                answer:
                  "We handle a wide range of waste types including general waste, recyclables (paper, plastic, glass, metal), hazardous waste, e-waste, construction debris, medical waste, and more. Our specialized teams are trained to handle each waste stream according to regulatory requirements.",
              },
              {
                question: "How do you ensure regulatory compliance?",
                answer:
                  "We maintain comprehensive knowledge of all relevant waste management regulations and stay updated on changes. We provide detailed documentation of all waste handling, including waste transfer notes, hazardous waste consignment notes, and recycling certificates to ensure your business remains fully compliant.",
              },
              {
                question: "Can you help us implement a recycling program?",
                answer:
                  "Yes, we specialize in designing and implementing comprehensive recycling programs. We'll conduct a waste audit, recommend appropriate segregation systems, provide clearly marked bins, train your staff, and establish collection schedules. We also provide regular reports on recycling rates and environmental impact.",
              },
              {
                question: "What measures do you take to ensure environmental responsibility?",
                answer:
                  "Environmental responsibility is at the core of our operations. We prioritize recycling and reuse over landfill disposal, use fuel-efficient vehicles with optimized routes, employ advanced sorting technologies to maximize resource recovery, and partner with certified processing facilities that adhere to strict environmental standards.",
              },
              {
                question: "Do you provide waste management consulting services?",
                answer:
                  "Yes, our waste management consultants can help you optimize your waste processes, reduce overall waste generation, implement recycling programs, achieve compliance with regulations, and work toward sustainability goals like zero waste. We offer both one-time assessments and ongoing consulting relationships.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for More Efficient Waste Management?</h2>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Contact us today for a free consultation and waste audit. Discover how our professional waste management
                services can improve your environmental footprint and reduce costs.
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
                  Request a Free Waste Audit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Schedule a Consultation
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Contact+Us"
                alt="Contact Fresh & Clean for professional waste management services"
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
            "@type": "Service",
            name: "Fresh & Clean Waste Management Services",
            serviceType: "Waste Management",
            provider: {
              "@type": "Organization",
              name: "Fresh & Clean",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop 19a, Riverside Industrial Park, Lower Magennis Road",
                addressLocality: "Uitenhage",
                postalCode: "6230",
                addressCountry: "ZA",
              },
              telephone: "+27-41-922-4554",
              email: "info@freshandclean.co.za",
            },
            areaServed: "South Africa",
            description:
              "Comprehensive waste removal and management services for businesses and residential properties in South Africa. Recycling, general waste, hazardous waste, and specialized disposal solutions.",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "ZAR",
                price: "0.00",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Waste Management Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "General Waste Collection",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Recycling Services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hazardous Waste Disposal",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Construction Waste Removal",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-Waste Management",
                  },
                },
              ],
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Robert Patel",
              },
              reviewBody:
                "Fresh & Clean's waste management program has transformed our office park's environmental footprint. Their recycling initiative has been embraced by all our tenants.",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "87",
            },
          }),
        }}
      />
    </div>
  )
}
