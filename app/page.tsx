"use client";
import Image from "next/image";
import Link from "next/link";
import { Droplets, ArrowRight, CheckCircle, Star, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import TestimonialCard from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-blue-900 dark:to-slate-900 text-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-10"></div>
        </div>
        <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div variants={fadeIn} className="space-y-6">
              <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 mb-4">
                Industry Leaders Since 2005
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Leaders in Pest Control & Cleaning Chemicals & Hygiene Solutions
              </h1>
              <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200">
                Professional cleaning solutions designed for businesses that
                demand the highest standards of cleanliness and hygiene. Serving
                Eastern Cape and beyond with excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                >
                  Explore Products
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-blue-600 hover:bg-white hover:text-blue-700"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/hero.jpeg"
                alt="Professional cleaning products by Fresh & Clean"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "18+", label: "Years Experience" },
              { value: "500+", label: "Happy Clients" },
              { value: "150+", label: "Products" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex flex-col items-center justify-center text-center"
              >
                <span className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 md:py-24 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Our Comprehensive Service Offerings
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              From cleaning chemicals and hygiene products to specialized
              services, we're your one-stop solution provider.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Cleaning & Specialized Services",
                description:
                  "Professional cleaning solutions including floor care, daily maintenance, COVID-19 specialized cleaning, and deep cleaning for various facilities.",
                icon: "spray",
                image: "/cleaning2.jpg",
              },
              {
                title: "Waste Removal Services",
                description:
                  "Comprehensive waste management including general waste collection, recycling, hazardous waste disposal, and e-waste management.",
                icon: "trash",
                image: "/waste.jpg",
              },
              {
                title: "Pest Control Services",
                description:
                  "Comprehensive pest management including bee keeping, rodent control, insect treatments, and specialized disinfection services.",
                icon: "bug",
                image: "/pes1.webp",
              },
              {
                title: "Landscaping Services",
                description:
                  "Complete outdoor maintenance including landscape design, regular grass cutting, and site cleanup services.",
                icon: "tree",
                image: "/land.jpg",
              },
              {
                title: "Hygiene Products",
                description:
                  "Complete range of dispensers, soaps, and sanitizers for optimal hand hygiene and washroom facilities.",
                icon: "hand",
                image: "/products.jpeg",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="h-80 relative">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-5">
                    {feature.icon === "trash" ? (
                      <Trash2 className="w-6 h-6 text-white" />
                    ) : (
                      <Droplets className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 p-0 text-blue-600 dark:text-blue-400"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4">How We Work</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Our Simple Process
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              We follow a systematic approach to ensure you receive the best
              possible service and solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "1",
                title: "Consultation",
                description:
                  "We begin by understanding your specific needs and challenges.",
              },
              {
                step: "2",
                title: "Assessment",
                description:
                  "Our experts visit your facility to assess current conditions.",
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "We deliver and install all necessary products and equipment.",
              },
              {
                step: "4",
                title: "Follow-up",
                description:
                  "Regular check-ins to ensure your continued satisfaction.",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 transform -translate-x-8"></div>
                )}
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm relative z-10">
                  <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        ref={productsRef}
        initial="hidden"
        animate={productsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 md:py-24 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
          >
            <div>
              <Badge className="mb-4">Our Products</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400">
                Discover our most popular cleaning and hygiene solutions.
              </p>
            </div>
            <Link
              href="/products"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center"
            >
              View all products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          <Tabs defaultValue="cleaning" className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="cleaning">Cleaning Products</TabsTrigger>
              <TabsTrigger value="hygiene">Hygiene Products</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
            </TabsList>
            <TabsContent value="cleaning">
              <motion.div
                variants={staggerContainer}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              >
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Multi-Surface Cleaner"
                    description="Professional-grade cleaner for all washable surfaces"
                    price="R149.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Multi-Surface"
                    rating={4.8}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Industrial Degreaser"
                    description="Heavy-duty formula for tough cleaning challenges"
                    price="R199.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Degreaser"
                    rating={4.9}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Floor Cleaner"
                    description="Specialized formula for all floor types"
                    price="R129.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Floor+Cleaner"
                    rating={4.7}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Glass & Window Cleaner"
                    description="Streak-free formula for perfect clarity"
                    price="R89.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Glass+Cleaner"
                    rating={4.6}
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="hygiene">
              <motion.div
                variants={staggerContainer}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              >
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Antibacterial Hand Soap"
                    description="Gentle yet effective hand cleaning solution"
                    price="R89.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Hand+Soap"
                    rating={4.7}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Hand Sanitizer"
                    description="70% alcohol-based sanitizer with moisturizers"
                    price="R69.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Sanitizer"
                    rating={4.8}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Toilet Cleaner"
                    description="Powerful formula that eliminates stains and odors"
                    price="R79.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Toilet+Cleaner"
                    rating={4.5}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Air Freshener"
                    description="Long-lasting fragrance for fresh environments"
                    price="R59.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Air+Freshener"
                    rating={4.6}
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
            <TabsContent value="equipment">
              <motion.div
                variants={staggerContainer}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              >
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Hand Sanitizer Dispenser"
                    description="Touchless dispenser with long-lasting battery"
                    price="R299.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Dispenser"
                    rating={4.9}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Industrial Vacuum"
                    description="Heavy-duty vacuum for commercial spaces"
                    price="R1,999.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Vacuum"
                    rating={4.8}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Floor Polisher"
                    description="Professional floor polishing machine"
                    price="R2,499.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Polisher"
                    rating={4.7}
                  />
                </motion.div>
                <motion.div variants={fadeIn}>
                  <ProductCard
                    name="Pressure Washer"
                    description="High-pressure cleaning system"
                    price="R1,799.99"
                    imageSrc="/placeholder.svg?height=300&width=300&text=Pressure+Washer"
                    rating={4.9}
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>

          <motion.div
            variants={fadeIn}
            className="bg-blue-50 dark:bg-blue-900/30 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                  New Arrival
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Eco-Friendly Product Line
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Introducing our new range of environmentally friendly cleaning
                  products. These powerful formulations deliver exceptional
                  cleaning performance while minimizing environmental impact.
                  Perfect for businesses committed to sustainability.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Biodegradable ingredients",
                    "Recyclable packaging",
                    "No harsh chemicals",
                    "Cruelty-free",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Explore Eco Range
                </Button>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Eco+Products"
                  alt="Eco-friendly cleaning products"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              We're proud to serve businesses across South Africa with our
              premium cleaning solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3"
          >
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="Fresh & Clean has transformed our facility maintenance. Their products are effective and their service is exceptional."
                author="Sarah Johnson"
                company="Hospitality Manager, Eastern Cape Hotel Group"
                rating={5}
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="We've been using Fresh & Clean products for over 5 years. The quality is consistent and our washrooms have never been better."
                author="Michael Ndlovu"
                company="Facilities Director, Port Elizabeth Office Park"
                rating={5}
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <TestimonialCard
                quote="Their eco-friendly range has helped us meet our sustainability goals without compromising on cleaning power."
                author="Lisa van der Merwe"
                company="Operations Manager, Green Retail Solutions"
                rating={4}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden mx-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=CEO"
                    alt="CEO of Fresh & Clean"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                  "At Fresh & Clean, we're committed to providing the highest
                  quality cleaning solutions and exceptional service. Our
                  mission is to help businesses maintain pristine environments
                  that promote health, safety, and productivity. We're grateful
                  for the trust our clients place in us and strive every day to
                  exceed their expectations."
                </p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  Nosipho Mabandla
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Founder & CEO, Fresh & Clean
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-16 md:py-24 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Case Studies
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              See how we've helped businesses transform their cleaning and
              hygiene practices.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Eastern Cape Hospital",
                category: "Healthcare",
                description:
                  "How we implemented a comprehensive cleaning protocol that reduced infection rates by 35%.",
                image: "/placeholder.svg?height=300&width=400&text=Hospital",
              },
              {
                title: "Beachfront Hotel Chain",
                category: "Hospitality",
                description:
                  "Our custom hygiene program that improved guest satisfaction scores by 28%.",
                image: "/placeholder.svg?height=300&width=400&text=Hotel",
              },
              {
                title: "Port Elizabeth Office Park",
                category: "Commercial",
                description:
                  "A tailored cleaning solution that reduced sick days by 22% and improved productivity.",
                image: "/placeholder.svg?height=300&width=400&text=Office",
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-2">{study.category}</Badge>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {study.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 text-blue-600 dark:text-blue-400"
                  >
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeIn} className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Find answers to common questions about our products and services.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="max-w-3xl mx-auto">
            {[
              {
                question: "What areas do you service?",
                answer:
                  "We primarily serve the Eastern Cape region, including Uitenhage, Port Elizabeth, East London, and surrounding areas. For clients outside these areas, please contact us to discuss service options.",
              },
              {
                question: "Are your products environmentally friendly?",
                answer:
                  "Yes, we offer a comprehensive range of eco-friendly products that are biodegradable and made from sustainable ingredients. Look for our 'Eco-Friendly' label when browsing our product catalog.",
              },
              {
                question: "Do you offer bulk discounts?",
                answer:
                  "Yes, we offer special pricing for bulk orders. The discount varies based on the products and quantities ordered. Contact our sales team for a customized quote.",
              },
              {
                question:
                  "How quickly can you respond to pest control emergencies?",
                answer:
                  "We offer emergency pest control services with a response time of 24 hours or less for most locations in our service area. For urgent situations, please call our emergency hotline.",
              },
              {
                question:
                  "Can you create custom cleaning solutions for specific industries?",
                answer:
                  "We specialize in developing tailored cleaning and hygiene programs for specific industries including healthcare, hospitality, education, and manufacturing. Our team will work with you to understand your unique requirements.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="mb-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="bg-blue-500 text-white mb-4">
                Get Started Today
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to elevate your cleaning standards?
              </h2>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-6">
                Contact us today for a consultation and discover how Fresh &
                Clean can transform your facility maintenance. Our team is ready
                to create a customized solution for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black"
                >
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
            <motion.div
              variants={fadeIn}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/placeholder.svg?height=800&width=600&text=Contact+Us"
                alt="Contact Fresh & Clean"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
