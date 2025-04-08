import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, Star, ArrowRight, Phone, Mail, Calendar, Leaf, Scissors, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Professional Landscaping Services | Commercial & Residential Landscaping | Fresh & Clean",
  description:
    "Expert landscaping services for businesses and residential properties in South Africa. Garden design, lawn maintenance, site cleanup, and complete outdoor maintenance solutions.",
  keywords:
    "landscaping services, commercial landscaping, residential landscaping, garden maintenance, lawn care, grass cutting, site cleanup, outdoor maintenance, South Africa landscaping",
  alternates: {
    canonical: "https://freshandclean.co.za/services/landscaping",
  },
  openGraph: {
    title: "Professional Landscaping Services | Commercial & Residential Landscaping | Fresh & Clean",
    description:
      "Expert landscaping services for businesses and residential properties in South Africa. Garden design, lawn maintenance, site cleanup, and complete outdoor maintenance solutions.",
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
                Comprehensive landscaping services for commercial and residential properties. From regular maintenance
                to complete landscape transformations, we keep your outdoor spaces looking pristine.
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Trusted by Leading Properties Across South Africa
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
              Comprehensive Landscaping Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We offer a wide range of landscaping and outdoor maintenance services tailored to meet the specific needs
              of your property.
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
                features: ["Vegetation removal", "Debris clearing", "Surface preparation", "Green waste disposal"],
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

      {/* Property Types */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Property Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Landscaping for Every Property Type
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We provide specialized landscaping solutions for different property types, each with unique requirements
              and considerations.
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
                    Create a positive first impression and enhance your business image with our professional commercial
                    landscaping services. We understand the unique needs of commercial properties and deliver solutions
                    that balance aesthetics, functionality, and maintenance requirements.
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
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Residential Landscaping</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Transform your home's outdoor spaces into beautiful, functional areas that reflect your personal
                    style and enhance your quality of life. Our residential landscaping services range from regular
                    maintenance to complete garden transformations.
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
                    Our industrial landscaping services focus on creating low-maintenance, functional outdoor spaces
                    that enhance safety, comply with regulations, and improve the overall appearance of industrial
                    facilities.
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
                    We provide specialized landscaping services for schools, hospitals, government buildings, and other
                    institutional properties, focusing on safety, accessibility, and creating welcoming environments.
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
              <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 mb-4">
                Eco-Friendly Practices
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Sustainable Landscaping Approach
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Fresh & Clean, we're committed to environmentally responsible landscaping practices. Our sustainable
                approach focuses on water conservation, native plant selection, and reducing chemical usage.
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
              We follow a systematic approach to landscaping that ensures beautiful, functional, and sustainable outdoor
              spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consultation & Assessment",
                description:
                  "We begin with a thorough assessment of your property and discussion of your needs and preferences.",
                icon: <Leaf className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Site evaluation", "Client needs assessment", "Budget discussion", "Existing landscape review"],
              },
              {
                title: "Design & Planning",
                description:
                  "Our experts develop a customized landscape plan that balances aesthetics, functionality, and sustainability.",
                icon: <Sun className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Concept development", "Plant selection", "Hardscape planning", "Irrigation design"],
              },
              {
                title: "Implementation",
                description:
                  "Our skilled team brings the landscape plan to life with careful attention to detail and quality.",
                icon: <Scissors className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Site preparation", "Hardscape installation", "Planting", "Irrigation setup"],
              },
              {
                title: "Maintenance & Care",
                description:
                  "We provide ongoing maintenance to ensure your landscape continues to thrive and evolve beautifully.",
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

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Landscaping Transformations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how our landscaping solutions have transformed properties and outdoor spaces across South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Headquarters Renovation",
                description: "A complete landscape transformation for a corporate headquarters in Johannesburg.",
                image: "/placeholder.svg?height=300&width=400&text=Corporate+HQ",
                results: [
                  "Enhanced corporate image",
                  "Created functional outdoor meeting spaces",
                  "Reduced water usage by 40%",
                ],
              },
              {
                title: "Residential Estate Common Areas",
                description: "Ongoing maintenance and seasonal enhancements for a large residential estate.",
                image: "/placeholder.svg?height=300&width=400&text=Residential+Estate",
                results: [
                  "Increased property values",
                  "Improved resident satisfaction",
                  "Created cohesive community spaces",
                ],
              },
              {
                title: "Hotel Entrance Redesign",
                description: "A dramatic entrance redesign for a luxury hotel in Cape Town.",
                image: "/placeholder.svg?height=300&width=400&text=Hotel+Entrance",
                results: [
                  "Created memorable first impression",
                  "Improved traffic flow",
                  "Enhanced night lighting features",
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
                    View Project Gallery
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
              Don't just take our word for it. Here's what our satisfied clients have to say about our landscaping
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "Property Manager, ABC Office Park",
                quote:
                  "Fresh & Clean's landscaping team has transformed our office park. The attention to detail and consistent maintenance have made a significant difference in our property's appearance.",
                rating: 5,
              },
              {
                name: "Robert Patel",
                position: "HOA President, Greenview Estates",
                quote:
                  "Our community has never looked better. The seasonal color rotations and attention to detail have increased property values and resident satisfaction.",
                rating: 5,
              },
              {
                name: "Grace Molefe",
                position: "Facilities Director, Cape Town Hotel",
                quote:
                  "The landscape redesign by Fresh & Clean has dramatically improved our guests' first impression. Their maintenance team keeps everything looking pristine year-round.",
                rating: 4,
              },
              {
                name: "Thomas Khumalo",
                position: "Operations Manager, Industrial Park",
                quote:
                  "Managing landscaping for an industrial site requires special attention to safety and functionality. Fresh & Clean understands our needs and delivers consistently.",
                rating: 5,
              },
              {
                name: "Lisa van der Merwe",
                position: "School Principal, Greenwood Academy",
                quote:
                  "Our school grounds are not only beautiful but safe and functional for our students. Fresh & Clean's team is always professional and accommodating of our schedule.",
                rating: 5,
              },
              {
                name: "Michael Naidoo",
                position: "Homeowner, Durban",
                quote:
                  "I've tried several landscaping companies over the years, but Fresh & Clean is by far the best. My garden has never looked better, and their team is always reliable.",
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
              Find answers to common questions about our landscaping services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How often should I schedule lawn maintenance?",
                answer:
                  "The frequency of lawn maintenance depends on several factors including the season, grass type, and local climate. In general, during the growing season (spring and summer), weekly mowing is recommended. During slower growth periods, every 2-3 weeks may be sufficient. Our team can assess your specific lawn and recommend an optimal maintenance schedule.",
              },
              {
                question: "Do you provide eco-friendly landscaping options?",
                answer:
                  "Yes, we specialize in sustainable landscaping practices. We offer native plant selections that require less water and maintenance, water-efficient irrigation systems, organic fertilizers and pest control methods, and environmentally responsible maintenance practices. Our team can design a beautiful landscape that minimizes environmental impact while maximizing visual appeal.",
              },
              {
                question: "What's the best time of year for major landscaping projects?",
                answer:
                  "While we can undertake projects year-round, the ideal time for major landscaping work in South Africa is typically during the autumn months (March to May). The moderate temperatures and upcoming rainy season help new plants establish themselves. However, different aspects of landscaping work can be scheduled throughout the year based on specific needs and plant types.",
              },
              {
                question: "How do you handle irrigation and water conservation?",
                answer:
                  "We design and install efficient irrigation systems that minimize water waste while ensuring optimal plant health. Our solutions include drip irrigation, smart controllers that adjust watering based on weather conditions, rainwater harvesting systems, and proper hydrozoning (grouping plants with similar water needs). We also provide regular system maintenance to prevent leaks and ensure continued efficiency.",
              },
              {
                question: "Can you work with my existing landscape design?",
                answer:
                  "Absolutely. We're experienced in enhancing and maintaining existing landscapes. Our team can work with your current design to improve problem areas, replace underperforming plants, add seasonal color, or simply provide regular maintenance to keep everything looking its best. We'll assess your current landscape and provide recommendations based on your goals and budget.",
              },
              {
                question: "Do you offer commercial landscape maintenance contracts?",
                answer:
                  "Yes, we specialize in commercial landscape maintenance contracts tailored to the specific needs of your property. Our contracts can include regular mowing, pruning, fertilization, pest control, irrigation maintenance, seasonal color rotations, and more. We offer flexible scheduling options and comprehensive service packages with detailed reporting and quality assurance measures.",
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
                Contact us today for a free consultation and quote. Our landscaping experts will help you create and
                maintain beautiful outdoor spaces that enhance your property's value and appeal.
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
                  Request a Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Schedule a Site Visit
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
            "@type": "Service",
            name: "Fresh & Clean Landscaping Services",
            serviceType: "Landscaping",
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
              "Expert landscaping services for businesses and residential properties in South Africa. Garden design, lawn maintenance, site cleanup, and complete outdoor maintenance solutions.",
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
              name: "Landscaping Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Landscape Design & Installation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Regular Lawn Maintenance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Garden Care & Maintenance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Irrigation Systems",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Site Cleanup & Clearing",
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
                name: "Sarah Johnson",
              },
              reviewBody:
                "Fresh & Clean's landscaping team has transformed our office park. The attention to detail and consistent maintenance have made a significant difference in our property's appearance.",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "78",
            },
          }),
        }}
      />
    </div>
  )
}
