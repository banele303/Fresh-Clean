import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, Star, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Professional Cleaning Services | Commercial & Industrial Cleaning | Fresh & Clean",
  description:
    "Expert commercial cleaning services for businesses in South Africa. Specialized floor care, deep cleaning, COVID-19 sanitization, and daily maintenance services. Get a free quote today!",
  keywords:
    "commercial cleaning services, professional cleaning company, office cleaning, industrial cleaning, COVID-19 sanitization, deep cleaning services, floor care specialists, South Africa cleaning services",
  alternates: {
    canonical: "https://freshandclean.co.za/services/cleaning",
  },
  openGraph: {
    title: "Professional Cleaning Services | Commercial & Industrial Cleaning | Fresh & Clean",
    description:
      "Expert commercial cleaning services for businesses in South Africa. Specialized floor care, deep cleaning, COVID-19 sanitization, and daily maintenance services. Get a free quote today!",
    url: "https://freshandclean.co.za/services/cleaning",
    type: "website",
    images: [{ url: "/images/cleaning-services-og.jpg", width: 1200, height: 630 }],
  },
}

export default function CleaningServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 mb-4">Professional Cleaning</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Commercial Cleaning Services</h1>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Comprehensive cleaning solutions tailored to your business needs. From routine maintenance to
                specialized deep cleaning, we deliver spotless results every time.
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
                src="/placeholder.svg?height=800&width=600&text=Professional+Cleaning"
                alt="Professional cleaning services by Fresh & Clean"
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
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Comprehensive Cleaning Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We offer a wide range of professional cleaning services designed to meet the unique needs of your
              business, ensuring a clean, healthy, and productive environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial Office Cleaning",
                description:
                  "Comprehensive cleaning services for offices of all sizes, ensuring a clean and productive work environment.",
                image: "/placeholder.svg?height=300&width=400&text=Office+Cleaning",
                features: [
                  "Reception and common areas",
                  "Workstations and meeting rooms",
                  "Kitchen and break areas",
                  "Washroom sanitization",
                ],
              },
              {
                title: "Industrial Cleaning",
                description: "Specialized cleaning solutions for factories, warehouses, and industrial facilities.",
                image: "/placeholder.svg?height=300&width=400&text=Industrial+Cleaning",
                features: [
                  "Factory floor cleaning",
                  "Machinery and equipment cleaning",
                  "High-level dust removal",
                  "Industrial waste management",
                ],
              },
              {
                title: "Healthcare Facility Cleaning",
                description: "Hospital-grade cleaning and sanitization services for medical facilities.",
                image: "/placeholder.svg?height=300&width=400&text=Healthcare+Cleaning",
                features: [
                  "Operating room sanitization",
                  "Patient room turnover",
                  "Medical waste handling",
                  "Infection control protocols",
                ],
              },
              {
                title: "Educational Institution Cleaning",
                description: "Comprehensive cleaning services for schools, colleges, and universities.",
                image: "/placeholder.svg?height=300&width=400&text=School+Cleaning",
                features: [
                  "Classroom and corridor cleaning",
                  "Cafeteria sanitization",
                  "Gymnasium and sports facilities",
                  "Library and study areas",
                ],
              },
              {
                title: "Retail & Shopping Center Cleaning",
                description: "Specialized cleaning services for retail environments and shopping centers.",
                image: "/placeholder.svg?height=300&width=400&text=Retail+Cleaning",
                features: [
                  "Sales floor maintenance",
                  "Entrance and display cleaning",
                  "Food court sanitization",
                  "Parking area cleaning",
                ],
              },
              {
                title: "Event & Post-Construction Cleaning",
                description: "Thorough cleaning services after events or construction projects.",
                image: "/placeholder.svg?height=300&width=400&text=Event+Cleaning",
                features: [
                  "Debris removal",
                  "Surface cleaning and polishing",
                  "Dust and particulate removal",
                  "Final inspection and touch-ups",
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

      {/* Specialized Services */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Specialized Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Specialized Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Beyond standard cleaning, we offer specialized services to address specific cleaning challenges and
              requirements.
            </p>
          </div>

          <Tabs defaultValue="floor-care" className="mb-12">
            <TabsList className="mb-8 mx-auto flex justify-center">
              <TabsTrigger value="floor-care">Floor Care</TabsTrigger>
              <TabsTrigger value="covid">COVID-19 Sanitization</TabsTrigger>
              <TabsTrigger value="deep-cleaning">Deep Cleaning</TabsTrigger>
              <TabsTrigger value="high-level">High-Level Cleaning</TabsTrigger>
            </TabsList>

            <TabsContent value="floor-care">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Floor+Care+Services"
                    alt="Professional floor care and carpet cleaning services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Professional Floor Care & Carpet Cleaning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our specialized floor care services extend the life of your flooring investments while maintaining
                    their appearance. We use industry-leading equipment and techniques to deliver exceptional results
                    across all flooring types.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Deep carpet extraction and hot water cleaning",
                      "Hard floor stripping, sealing, and polishing",
                      "Marble and natural stone restoration and maintenance",
                      "Anti-slip treatments for safety compliance",
                      "Specialized treatments for different floor types",
                      "Regular maintenance programs to extend floor life",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Request Floor Care Service
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="covid">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    COVID-19 Sanitization & Disinfection
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our comprehensive COVID-19 sanitization services help businesses maintain safe environments for
                    employees and customers. We use hospital-grade disinfectants and advanced application methods to
                    eliminate viruses and bacteria.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "ULV fogging for comprehensive coverage",
                      "Electrostatic spraying for surface disinfection",
                      "High-touch point focused treatments",
                      "Air purification and ventilation system cleaning",
                      "Regular sanitization programs",
                      "Emergency response for confirmed cases",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Schedule Sanitization Service
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=COVID-19+Sanitization"
                    alt="COVID-19 sanitization and disinfection services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="deep-cleaning">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Deep+Cleaning"
                    alt="Professional deep cleaning services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Comprehensive Deep Cleaning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our deep cleaning services go beyond regular maintenance to address accumulated dirt, grime, and
                    contaminants. Ideal for periodic refreshes or before special events, our deep cleaning restores your
                    facility to peak condition.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Hospital-grade disinfection of all surfaces",
                      "Air duct and ventilation system cleaning",
                      "High-level surface cleaning (light fixtures, vents)",
                      "Post-construction cleanup and debris removal",
                      "Upholstery and furniture deep cleaning",
                      "Window and glass cleaning (interior and exterior)",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Schedule Deep Cleaning
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="high-level">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    High-Level & Specialized Cleaning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our specialized high-level cleaning services address hard-to-reach areas and special surfaces that
                    require expert attention. Our trained technicians use specialized equipment to safely access and
                    clean elevated areas.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "High ceiling and light fixture cleaning",
                      "Exterior window and facade cleaning",
                      "Roof and gutter cleaning",
                      "Solar panel cleaning and maintenance",
                      "Industrial equipment and machinery cleaning",
                      "Specialized surface treatments (marble, wood, etc.)",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Request Specialized Cleaning
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=High-Level+Cleaning"
                    alt="High-level and specialized cleaning services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Our Advantage</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Why Choose Fresh & Clean
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              With years of experience and a commitment to excellence, we deliver cleaning services that exceed
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced & Trained Staff",
                description:
                  "Our cleaning professionals undergo rigorous training and background checks to ensure the highest standards of service.",
                icon: "👨‍💼",
              },
              {
                title: "Eco-Friendly Practices",
                description:
                  "We use environmentally responsible cleaning products and methods to minimize our ecological footprint.",
                icon: "🌱",
              },
              {
                title: "Customized Cleaning Plans",
                description:
                  "We develop tailored cleaning solutions based on your specific needs, schedule, and budget.",
                icon: "📝",
              },
              {
                title: "Advanced Equipment & Technology",
                description:
                  "We invest in state-of-the-art cleaning equipment and technologies to deliver superior results.",
                icon: "🔧",
              },
              {
                title: "Comprehensive Quality Control",
                description:
                  "Our rigorous quality control processes ensure consistent excellence in every cleaning project.",
                icon: "✅",
              },
              {
                title: "24/7 Emergency Response",
                description:
                  "We offer round-the-clock emergency cleaning services to address unexpected situations promptly.",
                icon: "🚨",
              },
            ].map((advantage, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{advantage.description}</p>
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
              Our Cleaning Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how our cleaning services have transformed facilities and businesses across South Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Major Office Complex Transformation",
                description:
                  "How we implemented a comprehensive cleaning program for a 50,000 sq ft office complex in Johannesburg.",
                image: "/placeholder.svg?height=300&width=400&text=Office+Complex",
                results: ["50% reduction in sick days", "Improved tenant satisfaction", "LEED certification achieved"],
              },
              {
                title: "Healthcare Facility Sanitization",
                description: "Our specialized cleaning protocols for a major hospital during the COVID-19 pandemic.",
                image: "/placeholder.svg?height=300&width=400&text=Healthcare+Facility",
                results: [
                  "Zero cross-contamination incidents",
                  "99.9% pathogen elimination",
                  "Staff safety maintained",
                ],
              },
              {
                title: "Industrial Facility Maintenance",
                description: "Ongoing cleaning and maintenance for a large manufacturing plant in Durban.",
                image: "/placeholder.svg?height=300&width=400&text=Industrial+Facility",
                results: ["Improved workplace safety", "Extended equipment lifespan", "Regulatory compliance achieved"],
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
              Don't just take our word for it. Here's what our satisfied clients have to say about our cleaning
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "Facility Manager, ABC Corporation",
                quote:
                  "Fresh & Clean has transformed our office environment. Their attention to detail and consistent quality have made a noticeable difference in our workplace.",
                rating: 5,
              },
              {
                name: "Dr. Michael Naidoo",
                position: "Medical Director, Cape Town Medical Center",
                quote:
                  "In healthcare, cleanliness is critical. Fresh & Clean's specialized sanitization services have helped us maintain the highest standards of hygiene and safety.",
                rating: 5,
              },
              {
                name: "Thomas Khumalo",
                position: "Operations Manager, Industrial Solutions Ltd",
                quote:
                  "Managing a large industrial facility comes with unique cleaning challenges. Fresh & Clean has consistently delivered exceptional results, even in our most demanding areas.",
                rating: 4,
              },
              {
                name: "Lisa van der Merwe",
                position: "Principal, Greenwood Academy",
                quote:
                  "Our school environment has never been cleaner. Parents and staff have commented on the noticeable improvement since we started working with Fresh & Clean.",
                rating: 5,
              },
              {
                name: "Robert Patel",
                position: "Store Manager, Retail Excellence",
                quote:
                  "Customer experience is everything in retail. Fresh & Clean ensures our stores are immaculate, creating a positive shopping environment for our customers.",
                rating: 5,
              },
              {
                name: "Grace Molefe",
                position: "HR Director, Tech Innovations",
                quote:
                  "Employee wellbeing is a priority for us. Fresh & Clean's COVID-19 sanitization program has helped our team feel safe and confident in the workplace.",
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
              Find answers to common questions about our cleaning services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "What types of businesses do you provide cleaning services for?",
                answer:
                  "We provide cleaning services for a wide range of businesses including offices, healthcare facilities, educational institutions, retail stores, industrial facilities, and more. Our services are customized to meet the specific needs of each industry and facility type.",
              },
              {
                question: "How do you ensure the quality of your cleaning services?",
                answer:
                  "We maintain strict quality control measures including regular inspections, supervisor oversight, and client feedback systems. Our cleaning teams follow detailed checklists specific to each facility, and we conduct both scheduled and surprise quality audits to ensure consistent excellence in our service delivery.",
              },
              {
                question: "What cleaning products do you use? Are they environmentally friendly?",
                answer:
                  "We prioritize the use of environmentally friendly and non-toxic cleaning products that are effective yet safe for people, pets, and the planet. For specialized cleaning needs, we select appropriate hospital-grade disinfectants and industry-specific solutions while still minimizing environmental impact whenever possible.",
              },
              {
                question: "How do you handle security and confidentiality in sensitive environments?",
                answer:
                  "We take security and confidentiality very seriously. All our staff undergo thorough background checks and sign confidentiality agreements. We implement strict protocols for sensitive environments including secure access procedures, supervised cleaning when required, and specialized training for staff working in confidential areas such as financial institutions or healthcare facilities.",
              },
              {
                question: "Can you accommodate cleaning outside of business hours?",
                answer:
                  "Yes, we offer flexible scheduling including early morning, evening, overnight, and weekend cleaning services to minimize disruption to your business operations. Many of our clients prefer after-hours cleaning, and we're fully equipped to accommodate these requirements with reliable staff and supervisors available at all hours.",
              },
              {
                question: "What COVID-19 precautions do your cleaning teams take?",
                answer:
                  "Our teams follow comprehensive COVID-19 protocols including wearing appropriate PPE, maintaining social distancing, regular health screenings, and using hospital-grade disinfectants effective against viruses. We stay updated with the latest health guidelines and continuously adapt our procedures to ensure maximum safety for both our clients and staff.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Cleaner, Healthier Environment?</h2>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Contact us today for a free consultation and quote. Discover how our professional cleaning services can
                transform your facility and create a more productive environment.
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
                alt="Contact Fresh & Clean for professional cleaning services"
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
            "@type": "CleaningService",
            name: "Fresh & Clean Professional Cleaning Services",
            image: "https://freshandclean.co.za/images/cleaning-services.jpg",
            url: "https://freshandclean.co.za/services/cleaning",
            telephone: "+27-41-922-4554",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Shop 19a, Riverside Industrial Park, Lower Magennis Road",
              addressLocality: "Uitenhage",
              postalCode: "6230",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-33.7544",
              longitude: "25.4022",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
            sameAs: ["https://www.facebook.com/freshandclean", "https://www.linkedin.com/company/fresh-and-clean"],
            priceRange: "$$",
            servesCuisine: "Not Applicable",
            areaServed: "South Africa",
            description:
              "Professional commercial cleaning services for businesses in South Africa. Specialized floor care, deep cleaning, COVID-19 sanitization, and daily maintenance services.",
            serviceType: [
              "Commercial Cleaning",
              "Industrial Cleaning",
              "Office Cleaning",
              "Healthcare Facility Cleaning",
              "COVID-19 Sanitization",
            ],
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
                "Fresh & Clean has transformed our office environment. Their attention to detail and consistent quality have made a noticeable difference in our workplace.",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "124",
            },
          }),
        }}
      />
    </div>
  )
}

