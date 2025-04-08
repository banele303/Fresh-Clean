"use client"

import { useEffect } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [cleaningRef, cleaningInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [pestRef, pestInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [landscapingRef, landscapingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [wasteRef, wasteInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [industryRef, industryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Add this function after the useInView hooks
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  // Update the useEffect hook to handle both initial hash navigation and tab switching
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Remove the # from the hash
      const sectionId = hash.substring(1)

      // Set the active tab based on the hash
      if (
        sectionId === "cleaning" ||
        sectionId === "waste-removal" ||
        sectionId === "pest-control" ||
        sectionId === "landscaping"
      ) {
        // Convert section ID to tab value (e.g., waste-removal -> waste)
        const tabValue = sectionId.includes("waste")
          ? "waste"
          : sectionId.includes("pest")
            ? "pest"
            : sectionId.includes("landscaping")
              ? "landscaping"
              : "cleaning"

        // Set a small delay to ensure the component is fully rendered
        setTimeout(() => {
          const tabsElement = document.querySelector(`[data-state="active"][data-value="${tabValue}"]`)
          if (tabsElement) {
            // Programmatically click the tab
            ;(tabsElement as HTMLElement).click()
          }

          // Scroll to the section
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white py-12 md:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 mb-4">Professional Services</Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Services</h1>
            <p className="text-lg text-blue-100 dark:text-blue-200">
              Comprehensive cleaning, waste management, and maintenance solutions tailored to your business needs. We
              don't just sell products—we provide complete solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From cleaning chemicals and hygiene products to specialized cleaning services, waste removal, pest
              control, and landscaping - we're your one-stop solution provider.
            </p>
          </motion.div>

          <Tabs defaultValue="cleaning" className="mb-12" id="services-tabs">
            <TabsList className="mb-8 mx-auto flex justify-center">
              <TabsTrigger value="cleaning" onClick={() => scrollToSection("cleaning")}>
                Cleaning Services
              </TabsTrigger>
              <TabsTrigger value="waste" onClick={() => scrollToSection("waste-removal")}>
                Waste Removal
              </TabsTrigger>
              <TabsTrigger value="pest" onClick={() => scrollToSection("pest-control")}>
                Pest Control
              </TabsTrigger>
              <TabsTrigger value="landscaping" onClick={() => scrollToSection("landscaping")}>
                Landscaping
              </TabsTrigger>
            </TabsList>
            <TabsContent value="cleaning">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Floor Care & Carpet Cleaning",
                    description:
                      "Professional treatment for all flooring types including deep carpet cleaning, hard floor polishing, and specialized surface care.",
                    image: "/placeholder.svg?height=200&width=200&text=Floor+Care",
                  },
                  {
                    title: "Day-to-Day Cleaning",
                    description:
                      "Regular maintenance cleaning services to keep your premises consistently clean and presentable.",
                    image: "/placeholder.svg?height=200&width=200&text=Daily+Cleaning",
                  },
                  {
                    title: "COVID-19 Specialized Cleaning",
                    description:
                      "Comprehensive fumigation and sanitization services following strict protocols to eliminate viruses and bacteria.",
                    image: "/placeholder.svg?height=200&width=200&text=COVID+Cleaning",
                  },
                  {
                    title: "Deep Cleaning",
                    description:
                      "Thorough cleaning services for hospitals, offices, schools, and other facilities requiring the highest standards of hygiene.",
                    image: "/placeholder.svg?height=200&width=200&text=Deep+Cleaning",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="h-40 relative">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="waste">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "General Waste Collection",
                    description: "Regular collection and responsible disposal of general business waste.",
                    image: "/placeholder.svg?height=200&width=200&text=General+Waste",
                  },
                  {
                    title: "Recycling Services",
                    description: "Sorting and recycling of paper, plastic, glass, and metal waste materials.",
                    image: "/placeholder.svg?height=200&width=200&text=Recycling",
                  },
                  {
                    title: "Hazardous Waste Disposal",
                    description: "Safe handling and disposal of hazardous materials in compliance with regulations.",
                    image: "/placeholder.svg?height=200&width=200&text=Hazardous+Waste",
                  },
                  {
                    title: "Construction Waste Removal",
                    description: "Efficient removal of construction and demolition debris from project sites.",
                    image: "/placeholder.svg?height=200&width=200&text=Construction+Waste",
                  },
                  {
                    title: "E-Waste Management",
                    description: "Responsible disposal and recycling of electronic equipment and components.",
                    image: "/placeholder.svg?height=200&width=200&text=E-Waste",
                  },
                  {
                    title: "Bulk Waste Collection",
                    description: "Removal of large volumes of waste for office cleanouts or renovations.",
                    image: "/placeholder.svg?height=200&width=200&text=Bulk+Waste",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="h-40 relative">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pest">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Bee Keeping",
                    description: "Humane bee removal and relocation services by trained professionals.",
                    image: "/placeholder.svg?height=200&width=200&text=Bee+Keeping",
                  },
                  {
                    title: "Rodent Control",
                    description: "Effective baiting systems and prevention measures to eliminate rodent problems.",
                    image: "/placeholder.svg?height=200&width=200&text=Rodent+Control",
                  },
                  {
                    title: "Cockroach Treatments",
                    description:
                      "Targeted treatments to eliminate cockroach infestations from commercial and residential properties.",
                    image: "/placeholder.svg?height=200&width=200&text=Cockroach",
                  },
                  {
                    title: "Termite & Ant Treatments",
                    description:
                      "Specialized solutions to address termite and ant infestations, including preventative measures.",
                    image: "/placeholder.svg?height=200&width=200&text=Termites",
                  },
                  {
                    title: "Insect Fogging",
                    description:
                      "Comprehensive fogging treatments to control flying insects and crawling pests in indoor and outdoor spaces.",
                    image: "/placeholder.svg?height=200&width=200&text=Fogging",
                  },
                  {
                    title: "High-Risk Area Disinfection",
                    description:
                      "Specialized disinfection of refuse areas, drains, and grease traps to eliminate pests and prevent health hazards.",
                    image: "/placeholder.svg?height=200&width=200&text=Disinfection",
                  },
                  {
                    title: "Wasp Removal",
                    description: "Safe and effective removal of wasp nests from residential and commercial properties.",
                    image: "/placeholder.svg?height=200&width=200&text=Wasp+Removal",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="h-40 relative">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="landscaping">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Landscape Design & Maintenance",
                    description:
                      "Professional landscape design and ongoing maintenance services to enhance the appearance of your property.",
                    image: "/placeholder.svg?height=200&width=200&text=Landscape",
                  },
                  {
                    title: "Grass Cutting",
                    description:
                      "Regular grass cutting and lawn maintenance services to keep your grounds looking neat and professional.",
                    image: "/placeholder.svg?height=200&width=200&text=Grass+Cutting",
                  },
                  {
                    title: "Site Cleanup",
                    description:
                      "Once-off cleanup services for overgrown areas or construction sites, restoring order to outdoor spaces.",
                    image: "/placeholder.svg?height=200&width=200&text=Site+Cleanup",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="h-40 relative">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Main Service Categories */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {[
              {
                title: "Cleaning & Specialized Services",
                description:
                  "Professional cleaning solutions for all environments, from routine maintenance to specialized deep cleaning.",
                image: "/placeholder.svg?height=300&width=300&text=Cleaning",
                icon: "spray",
                id: "cleaning",
              },
              {
                title: "Waste Removal",
                description: "Comprehensive waste management and removal services for businesses of all sizes.",
                image: "/placeholder.svg?height=300&width=300&text=Waste+Removal",
                icon: "trash",
                id: "waste-removal",
              },
              {
                title: "Pest Control",
                description:
                  "Comprehensive pest management services to keep your premises free from unwanted visitors.",
                image: "/placeholder.svg?height=300&width=300&text=Pest+Control",
                icon: "bug",
                id: "pest-control",
              },
              {
                title: "Landscaping",
                description:
                  "Complete outdoor maintenance services to keep your grounds looking pristine and professional.",
                image: "/placeholder.svg?height=300&width=300&text=Landscaping",
                icon: "tree",
                id: "landscaping",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                id={category.id}
                className="bg-blue-50 dark:bg-blue-900/30 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="h-48 relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{category.description}</p>
                  <Button className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                    Explore Services
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cleaning Services */}
          <motion.div
            ref={cleaningRef}
            initial="hidden"
            animate={cleaningInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16"
            id="cleaning"
          >
            <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 mb-8">
              <Badge className="mb-2">Specialized Cleaning</Badge>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Cleaning & Specialized Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Floor Care & Carpet Cleaning",
                  description:
                    "Professional treatment for all flooring types including deep carpet cleaning, hard floor polishing, and specialized surface care.",
                  image: "/placeholder.svg?height=200&width=200&text=Floor+Care",
                  features: [
                    "Deep carpet extraction",
                    "Hard floor stripping and sealing",
                    "Marble and stone polishing",
                    "Anti-slip treatments",
                  ],
                },
                {
                  title: "Day-to-Day Cleaning",
                  description:
                    "Regular maintenance cleaning services to keep your premises consistently clean and presentable.",
                  image: "/placeholder.svg?height=200&width=200&text=Daily+Cleaning",
                  features: [
                    "Office cleaning",
                    "Washroom maintenance",
                    "Kitchen and break areas",
                    "Reception and common areas",
                  ],
                },
                {
                  title: "COVID-19 Specialized Cleaning",
                  description:
                    "Comprehensive fumigation and sanitization services following strict protocols to eliminate viruses and bacteria.",
                  image: "/placeholder.svg?height=200&width=200&text=COVID+Cleaning",
                  features: [
                    "ULV fogging",
                    "Electrostatic spraying",
                    "High-touch point disinfection",
                    "Air purification",
                  ],
                },
                {
                  title: "Deep Cleaning",
                  description:
                    "Thorough cleaning services for hospitals, offices, schools, and other facilities requiring the highest standards of hygiene.",
                  image: "/placeholder.svg?height=200&width=200&text=Deep+Cleaning",
                  features: [
                    "Hospital-grade disinfection",
                    "Air duct cleaning",
                    "High-level surface cleaning",
                    "Post-construction cleanup",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="h-40 relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-200 mb-2">Services include:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Waste Removal Services */}
          <motion.div
            ref={wasteRef}
            initial="hidden"
            animate={wasteInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16"
            id="waste-removal"
          >
            <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 mb-8">
              <Badge className="mb-2">Waste Management</Badge>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Waste Removal Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "General Waste Collection",
                  description: "Regular collection and responsible disposal of general business waste.",
                  image: "/placeholder.svg?height=200&width=200&text=General+Waste",
                  features: [
                    "Scheduled collection services",
                    "Bin provision and maintenance",
                    "Waste audits and reporting",
                    "Compliance with regulations",
                  ],
                },
                {
                  title: "Recycling Services",
                  description: "Sorting and recycling of paper, plastic, glass, and metal waste materials.",
                  image: "/placeholder.svg?height=200&width=200&text=Recycling",
                  features: [
                    "Segregated collection",
                    "Recycling station setup",
                    "Staff training programs",
                    "Recycling certificates",
                  ],
                },
                {
                  title: "Hazardous Waste Disposal",
                  description: "Safe handling and disposal of hazardous materials in compliance with regulations.",
                  image: "/placeholder.svg?height=200&width=200&text=Hazardous+Waste",
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
                  image: "/placeholder.svg?height=200&width=200&text=Construction+Waste",
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
                  image: "/placeholder.svg?height=200&width=200&text=E-Waste",
                  features: [
                    "Secure data destruction",
                    "Component recycling",
                    "Collection services",
                    "Disposal certificates",
                  ],
                },
                {
                  title: "Bulk Waste Collection",
                  description: "Removal of large volumes of waste for office cleanouts or renovations.",
                  image: "/placeholder.svg?height=200&width=200&text=Bulk+Waste",
                  features: ["One-time collection", "Large item disposal", "Office clearance", "Furniture recycling"],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="h-40 relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-200 mb-2">Services include:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Waste Management Highlight */}
            <motion.div variants={fadeIn} className="mt-12 bg-green-50 dark:bg-green-900/20 p-8 rounded-xl shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                    Eco-Friendly
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Sustainable Waste Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    At Fresh & Clean, we're committed to environmentally responsible waste management practices. Our
                    waste removal services focus on minimizing landfill impact through recycling, reuse, and proper
                    disposal methods.
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Waste reduction strategies",
                      "Recycling program implementation",
                      "Environmental compliance",
                      "Detailed waste audit reports",
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
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Sustainable+Waste+Management"
                    alt="Sustainable waste management practices"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Pest Control Services */}
          <motion.div
            ref={pestRef}
            initial="hidden"
            animate={pestInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-16"
            id="pest-control"
          >
            <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 mb-8">
              <Badge className="mb-2">Pest Management</Badge>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Pest Control Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Bee Keeping",
                  description: "Humane bee removal and relocation services by trained professionals.",
                  image: "/placeholder.svg?height=200&width=200&text=Bee+Keeping",
                  features: ["Swarm collection", "Hive relocation", "Preventative measures", "Eco-friendly approach"],
                },
                {
                  title: "Rodent Control",
                  description: "Effective baiting systems and prevention measures to eliminate rodent problems.",
                  image: "/placeholder.svg?height=200&width=200&text=Rodent+Control",
                  features: [
                    "Tamper-proof bait stations",
                    "Entry point sealing",
                    "Monitoring systems",
                    "Preventative programs",
                  ],
                },
                {
                  title: "Cockroach Treatments",
                  description:
                    "Targeted treatments to eliminate cockroach infestations from commercial and residential properties.",
                  image: "/placeholder.svg?height=200&width=200&text=Cockroach",
                  features: [
                    "Gel bait applications",
                    "Crack and crevice treatments",
                    "Monitoring systems",
                    "Follow-up inspections",
                  ],
                },
                {
                  title: "Termite & Ant Treatments",
                  description:
                    "Specialized solutions to address termite and ant infestations, including preventative measures.",
                  image: "/placeholder.svg?height=200&width=200&text=Termites",
                  features: ["Soil treatments", "Bait systems", "Barrier protection", "Regular inspections"],
                },
                {
                  title: "Insect Fogging",
                  description:
                    "Comprehensive fogging treatments to control flying insects and crawling pests in indoor and outdoor spaces.",
                  image: "/placeholder.svg?height=200&width=200&text=Fogging",
                  features: ["ULV fogging", "Thermal fogging", "Residual treatments", "Mosquito control"],
                },
                {
                  title: "High-Risk Area Disinfection",
                  description:
                    "Specialized disinfection of refuse areas, drains, and grease traps to eliminate pests and prevent health hazards.",
                  image: "/placeholder.svg?height=200&width=200&text=Disinfection",
                  features: ["Drain treatments", "Grease trap cleaning", "Refuse area sanitation", "Odor control"],
                },
                {
                  title: "Wasp Removal",
                  description: "Safe and effective removal of wasp nests from residential and commercial properties.",
                  image: "/placeholder.svg?height=200&width=200&text=Wasp+Removal",
                  features: [
                    "Nest identification",
                    "Safe removal techniques",
                    "Protective equipment",
                    "Preventative advice",
                  ],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="h-40 relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-200 mb-2">Services include:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Landscaping Services */}
          <motion.div
            ref={landscapingRef}
            initial="hidden"
            animate={landscapingInView ? "visible" : "hidden"}
            variants={fadeIn}
            id="landscaping"
          >
            <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4 mb-8">
              <Badge className="mb-2">Outdoor Maintenance</Badge>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Landscaping Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Landscape Design & Maintenance",
                  description:
                    "Professional landscape design and ongoing maintenance services to enhance the appearance of your property.",
                  image: "/placeholder.svg?height=200&width=200&text=Landscape",
                  features: ["Garden design", "Plant selection", "Irrigation systems", "Seasonal maintenance"],
                },
                {
                  title: "Grass Cutting",
                  description:
                    "Regular grass cutting and lawn maintenance services to keep your grounds looking neat and professional.",
                  image: "/placeholder.svg?height=200&width=200&text=Grass+Cutting",
                  features: ["Regular mowing", "Edge trimming", "Weed control", "Fertilization"],
                },
                {
                  title: "Site Cleanup",
                  description:
                    "Once-off cleanup services for overgrown areas or construction sites, restoring order to outdoor spaces.",
                  image: "/placeholder.svg?height=200&width=200&text=Site+Cleanup",
                  features: ["Debris removal", "Vegetation clearing", "Surface preparation", "Green waste disposal"],
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 flex flex-col"
                >
                  <div className="h-40 relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-200 mb-2">Services include:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.section
            ref={ctaRef}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="py-16 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white rounded-xl mt-16"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={staggerContainer} className="grid gap-12 lg:grid-cols-2 items-center">
                <motion.div variants={fadeIn}>
                  <Badge className="bg-blue-500 text-white mb-4">Complete Solutions</Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Ready for a cleaner, more organized environment?
                  </h2>
                  <p className="text-xl text-blue-100 dark:text-blue-200 mb-6">
                    Contact us today for a consultation and discover how our comprehensive services can transform your
                    facility. From cleaning to waste management, we've got you covered.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Request a Quote
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-700"
                    >
                      Schedule a Consultation
                    </Button>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Contact+Us"
                    alt="Contact Fresh & Clean"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  )
}

