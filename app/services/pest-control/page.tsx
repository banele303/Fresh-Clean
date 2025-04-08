import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, ArrowRight, Phone, Mail, Calendar, Shield, Bug, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Professional Pest Control Services | Eco-Friendly Pest Management | Fresh & Clean",
  description:
    "Expert pest control services for residential and commercial properties in South Africa. Humane, effective, and environmentally responsible pest management solutions. Get a free inspection today!",
  keywords:
    "pest control services, commercial pest control, residential pest management, eco-friendly pest control, rodent control, insect control, bee removal, South Africa pest services",
  alternates: {
    canonical: "https://freshandclean.co.za/services/pest-control",
  },
  openGraph: {
    title: "Professional Pest Control Services | Eco-Friendly Pest Management | Fresh & Clean",
    description:
      "Expert pest control services for residential and commercial properties in South Africa. Humane, effective, and environmentally responsible pest management solutions. Get a free inspection today!",
    url: "https://freshandclean.co.za/services/pest-control",
    type: "website",
    images: [{ url: "/images/pest-control-og.jpg", width: 1200, height: 630 }],
  },
}

export default function PestControlPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 mb-4">Professional Pest Control</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Effective & Humane Pest Management Solutions</h1>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Comprehensive pest control services for residential and commercial properties. We use environmentally
                responsible methods to eliminate pests while ensuring the safety of your family, employees, and
                customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Free Pest Inspection
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
                src="/placeholder.svg?height=800&width=600&text=Pest+Control+Services"
                alt="Professional pest control services by Fresh & Clean"
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
              Trusted by Businesses & Homeowners Across South Africa
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

      {/* Common Pests Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Pest Identification</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Common Pests We Eliminate
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We provide effective solutions for a wide range of pest problems. Identify your pest issue and learn how
              we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rodents",
                description:
                  "Rats and mice can cause significant damage to property and spread diseases. Our comprehensive rodent control solutions eliminate existing infestations and prevent future problems.",
                image: "/placeholder.svg?height=200&width=200&text=Rodents",
                signs: [
                  "Droppings in corners or along walls",
                  "Gnaw marks on food packaging or structures",
                  "Scratching noises in walls or ceilings",
                  "Nesting materials in hidden areas",
                ],
              },
              {
                name: "Cockroaches",
                description:
                  "Cockroaches are resilient pests that can spread bacteria and trigger allergies. Our targeted treatments eliminate cockroaches at all life stages.",
                image: "/placeholder.svg?height=200&width=200&text=Cockroaches",
                signs: [
                  "Dark droppings resembling coffee grounds",
                  "Musty, oily odor in infested areas",
                  "Egg casings in hidden crevices",
                  "Nocturnal sightings in kitchens or bathrooms",
                ],
              },
              {
                name: "Termites",
                description:
                  "Termites can cause extensive structural damage to buildings. Our termite control services include detection, treatment, and prevention strategies.",
                image: "/placeholder.svg?height=200&width=200&text=Termites",
                signs: [
                  "Mud tubes on exterior walls",
                  "Hollow-sounding wood",
                  "Discarded wings near windows",
                  "Visible damage to wooden structures",
                ],
              },
              {
                name: "Ants",
                description:
                  "Different ant species require different treatment approaches. We identify the specific ant species and implement targeted control measures.",
                image: "/placeholder.svg?height=200&width=200&text=Ants",
                signs: [
                  "Trails of ants leading to food sources",
                  "Small piles of soil or sand",
                  "Nests in soil, walls, or under objects",
                  "Wood shavings (carpenter ants)",
                ],
              },
              {
                name: "Bees & Wasps",
                description:
                  "While beneficial to the environment, bees and wasps can pose risks when nesting near human activity. We offer humane removal and relocation services.",
                image: "/placeholder.svg?height=200&width=200&text=Bees",
                signs: [
                  "Visible nests in eaves or trees",
                  "Increased bee/wasp activity",
                  "Buzzing sounds in walls or ceilings",
                  "Entry/exit points around structures",
                ],
              },
              {
                name: "Mosquitoes",
                description:
                  "Mosquitoes can transmit diseases and make outdoor spaces unusable. Our mosquito control reduces populations and breeding sites.",
                image: "/placeholder.svg?height=200&width=200&text=Mosquitoes",
                signs: [
                  "Standing water in yard or gutters",
                  "Increased biting activity at dawn/dusk",
                  "Larvae in water sources",
                  "Itchy, red welts on skin",
                ],
              },
              {
                name: "Bed Bugs",
                description:
                  "Bed bugs are difficult to eliminate without professional help. Our comprehensive approach targets all life stages to ensure complete eradication.",
                image: "/placeholder.svg?height=200&width=200&text=Bed+Bugs",
                signs: [
                  "Red, itchy bites in lines or clusters",
                  "Rust-colored spots on bedding",
                  "Shed skins or eggs in seams",
                  "Sweet, musty odor in heavily infested areas",
                ],
              },
              {
                name: "Flies & Mosquitoes",
                description:
                  "Flying insects can be both a nuisance and a health hazard. We offer effective control measures for various flying pests.",
                image: "/placeholder.svg?height=200&width=200&text=Flies",
                signs: [
                  "Excessive flies around trash areas",
                  "Maggots in garbage or organic matter",
                  "Fly specks on surfaces",
                  "Increased activity around food",
                ],
              },
            ].map((pest, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image src={pest.image || "/placeholder.svg"} alt={pest.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{pest.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{pest.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Common Signs:</h4>
                    <ul className="space-y-1">
                      {pest.signs.map((sign, i) => (
                        <li key={i} className="flex items-start">
                          <Bug className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Our Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Comprehensive Pest Control Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We offer a wide range of pest management solutions tailored to your specific needs and concerns.
            </p>
          </div>

          <Tabs defaultValue="residential" className="mb-12">
            <TabsList className="mb-8 mx-auto flex justify-center">
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="specialized">Specialized Services</TabsTrigger>
            </TabsList>

            <TabsContent value="residential">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Residential+Pest+Control"
                    alt="Residential pest control services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Residential Pest Control</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Protect your home and family with our comprehensive residential pest control services. We use safe,
                    effective methods to eliminate pests while minimizing the impact on your household.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Thorough home inspection to identify entry points and infestation sources",
                      "Customized treatment plans based on your specific pest issues",
                      "Child and pet-friendly treatment options",
                      "Preventative measures to stop future infestations",
                      "Regular maintenance programs available",
                      "Emergency response for urgent pest situations",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Schedule Home Inspection
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Commercial Pest Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Protect your business reputation and comply with health regulations with our discreet and effective
                    commercial pest control services. We work around your schedule to minimize disruption to your
                    operations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Comprehensive facility inspection and pest risk assessment",
                      "Industry-specific protocols for restaurants, hotels, offices, and more",
                      "HACCP and health code compliance assistance",
                      "Discreet service delivery to protect your brand reputation",
                      "Detailed documentation for audit and compliance purposes",
                      "Staff training on pest prevention best practices",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Request Business Consultation
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Commercial+Pest+Control"
                    alt="Commercial pest management services"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specialized">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=800&width=600&text=Specialized+Pest+Services"
                    alt="Specialized pest control services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Specialized Pest Services
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Some pest situations require specialized approaches. Our expert technicians are trained in advanced
                    techniques for complex or unusual pest problems.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Humane bee removal and relocation services",
                      "Termite inspection and treatment programs",
                      "Bird control and exclusion systems",
                      "Fumigation services for severe infestations",
                      "Pre-construction pest prevention",
                      "Wildlife removal and exclusion (raccoons, bats, etc.)",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                    Inquire About Specialized Services
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Our Methodology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Our Integrated Pest Management Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We follow a comprehensive, science-based approach to pest management that focuses on long-term prevention
              and control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Inspection & Identification",
                description:
                  "We begin with a thorough inspection to identify pest species, infestation sources, and contributing factors.",
                icon: <Zap className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Property assessment", "Pest identification", "Damage evaluation", "Risk assessment"],
              },
              {
                title: "Customized Treatment Plan",
                description:
                  "Based on our findings, we develop a tailored treatment plan that addresses your specific pest issues.",
                icon: <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Treatment selection", "Targeted application", "Minimal chemical use", "Safety protocols"],
              },
              {
                title: "Implementation",
                description:
                  "Our trained technicians implement the treatment plan using the most effective and appropriate methods.",
                icon: <Bug className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: ["Exclusion techniques", "Habitat modification", "Targeted treatments", "Monitoring systems"],
              },
              {
                title: "Follow-up & Prevention",
                description:
                  "We provide ongoing monitoring and preventative measures to ensure long-term pest control success.",
                icon: <CheckCircle className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
                steps: [
                  "Regular inspections",
                  "Preventative treatments",
                  "Education & recommendations",
                  "Continuous improvement",
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

      {/* Eco-Friendly Approach */}
      <section className="py-16 md:py-24 bg-green-50 dark:bg-green-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 mb-4">
                Environmentally Responsible
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Our Eco-Friendly Pest Control Commitment
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Fresh & Clean, we're committed to providing effective pest control solutions that minimize
                environmental impact. Our eco-friendly approach focuses on sustainable practices that protect both your
                property and the planet.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Integrated Pest Management (IPM) principles that reduce chemical usage",
                  "Targeted treatments that minimize impact on beneficial insects and wildlife",
                  "Environmentally responsible product selection when treatments are necessary",
                  "Non-chemical control methods whenever possible",
                  "Humane removal and exclusion techniques for wildlife",
                  "Bee conservation through professional relocation services",
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
                src="/placeholder.svg?height=800&width=600&text=Eco-Friendly+Pest+Control"
                alt="Eco-friendly pest control practices"
                fill
                className="object-cover"
              />
            </div>
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
              Find answers to common questions about our pest control services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "How safe are your pest control treatments for my family and pets?",
                answer:
                  "Safety is our top priority. We use the least toxic, most targeted treatments possible and follow strict safety protocols. We'll provide specific instructions for any precautions needed during and after treatment, such as temporary vacating of treated areas. Many of our treatments are safe for households with children and pets when used as directed.",
              },
              {
                question: "How long does it take to see results from pest control treatments?",
                answer:
                  "Results vary depending on the pest type, infestation severity, and treatment method. Some treatments show immediate results, while others may take several days to fully eliminate the pest population. Our technicians will explain the expected timeline for your specific situation and provide follow-up recommendations to ensure complete pest elimination.",
              },
              {
                question: "Do you offer eco-friendly or organic pest control options?",
                answer:
                  "Yes, we offer environmentally responsible pest control solutions that minimize environmental impact while effectively controlling pests. Our Integrated Pest Management approach focuses on prevention, monitoring, and using the least toxic methods first. We can discuss eco-friendly and organic options during your consultation.",
              },
              {
                question: "How often should I schedule pest control services?",
                answer:
                  "The frequency depends on several factors including your location, property type, pest history, and seasonal pest pressures. For most residential properties, quarterly treatments provide good year-round protection. Some commercial facilities may require monthly service. We'll recommend an optimal schedule based on your specific needs and pest concerns.",
              },
              {
                question: "What preparation is needed before a pest control treatment?",
                answer:
                  "Preparation requirements vary depending on the treatment type and target pest. We'll provide specific instructions before your appointment, which may include cleaning, removing items from certain areas, covering food preparation surfaces, or securing pets. Our goal is to make the process as convenient as possible while ensuring effective treatment.",
              },
              {
                question: "Do you provide warranties or guarantees for your pest control services?",
                answer:
                  "Yes, we stand behind our work with service guarantees. If pests return between scheduled treatments, we'll return at no additional cost to address the issue. For certain pest control programs, we offer specific guarantees. The details vary by service type, and our technicians will explain the guarantees applicable to your service plan.",
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Pest-Free Environment?</h2>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
                Contact us today for a free pest inspection and consultation. Our expert technicians will develop a
                customized solution for your specific pest concerns.
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
                  Schedule Free Inspection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Request a Quote
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Contact+Us"
                alt="Contact Fresh & Clean for professional pest control services"
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
            "@type": "PestControlService",
            name: "Fresh & Clean Professional Pest Control Services",
            image: "https://freshandclean.co.za/images/pest-control-services.jpg",
            url: "https://freshandclean.co.za/services/pest-control",
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
            description:
              "Expert pest control services for residential and commercial properties in South Africa. Humane, effective, and environmentally responsible pest management solutions.",
            serviceType: [
              "Residential Pest Control",
              "Commercial Pest Management",
              "Termite Control",
              "Rodent Control",
              "Eco-Friendly Pest Solutions",
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
                name: "Robert Patel",
              },
              reviewBody:
                "Fresh & Clean's pest control team eliminated our cockroach problem completely. Their technicians were professional, thorough, and took the time to explain the treatment process.",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "96",
            },
          }),
        }}
      />
    </div>
  )
}

