import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Us | Fresh & Clean",
  description:
    "Get in touch with Fresh & Clean for all your cleaning chemical, hygiene product, and service needs. Based in Uitenhage, serving businesses across South Africa.",
  openGraph: {
    title: "Contact Us | Fresh & Clean",
    description:
      "Get in touch with Fresh & Clean for all your cleaning chemical, hygiene product, and service needs. Based in Uitenhage, serving businesses across South Africa.",
    images: [{ url: "/images/contact-og.jpg", width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-yellow-500 text-black hover:bg-yellow-600 mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 dark:text-blue-200">
              Have questions or need assistance? Our team is here to help you find the perfect solutions for your
              business needs. Reach out today and experience our exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="waste-removal">Waste Removal</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="landscaping">Landscaping</option>
                    <option value="products">Cleaning Products</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    I consent to Fresh & Clean processing my personal data in accordance with the Privacy Policy.
                  </label>
                </div>
                <Button className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Information</h2>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-100 dark:border-gray-700 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Shop 19a, Riverside Industrial Park
                        <br />
                        Lower Magennis Road
                        <br />
                        Uitenhage
                        <br />
                        Eastern Cape, South Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a href="tel:+27419224554" className="hover:text-blue-600 dark:hover:text-blue-400">
                          041 922 4554
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        <a
                          href="mailto:info@freshandclean.co.za"
                          className="hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          info@freshandclean.co.za
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Business Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden h-[300px] bg-gray-200 dark:bg-gray-700 relative">
                {/* This would be replaced with an actual map component */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Interactive Map Would Be Embedded Here</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
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
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
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
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                  >
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
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  >
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
                      className="h-5 w-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4">Our Coverage</Badge>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Areas We Serve</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Fresh & Clean provides services throughout the Eastern Cape region and beyond. Our main service areas
              include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                region: "Uitenhage",
                cities: ["Uitenhage Central", "Despatch", "KwaNobuhle", "Bloemendal"],
              },
              {
                region: "Port Elizabeth",
                cities: ["Gqeberha Central", "Walmer", "Summerstrand", "Newton Park", "Humewood"],
              },
              {
                region: "East London",
                cities: ["East London CBD", "Beacon Bay", "Gonubie", "Vincent", "Nahoon"],
              },
              {
                region: "Other Areas",
                cities: ["Grahamstown", "Jeffreys Bay", "Humansdorp", "St Francis Bay", "Kareedouw"],
              },
            ].map((area, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{area.region}</h3>
                <ul className="space-y-2">
                  {area.cities.map((city, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{city}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Don't see your area listed? Contact us to inquire about service availability in your location. We're
              continuously expanding our coverage to serve more communities across South Africa.
            </p>
            <Button className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
              Check Service Availability
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4">Common Questions</Badge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Find answers to common questions about our services and how to get in touch with us.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Do you offer free consultations?",
                  answer:
                    "Yes, we offer free consultations and quotes for all our services. Our team will assess your specific needs and provide a detailed proposal tailored to your requirements.",
                },
                {
                  question: "How quickly can you respond to service requests?",
                  answer:
                    "For standard service requests, we typically respond within 24-48 hours. For urgent matters, we offer emergency response services with same-day attention in most areas we serve.",
                },
                {
                  question: "Do you provide services to residential properties?",
                  answer:
                    "While our primary focus is on commercial and industrial clients, we do offer selected services to residential properties, particularly for larger estates or complexes. Contact us to discuss your specific needs.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept various payment methods including EFT, credit cards, and debit orders for recurring service contracts. We can also accommodate special payment arrangements for large corporate clients.",
                },
                {
                  question: "Do you offer service contracts?",
                  answer:
                    "Yes, we offer flexible service contracts ranging from monthly to annual agreements. Our contracts can be customized based on your specific requirements and frequency of service needed.",
                },
                {
                  question: "How do I request a quote for your services?",
                  answer:
                    "You can request a quote by filling out the contact form on this page, calling our office directly, or sending us an email. Please provide as much detail as possible about your requirements to help us prepare an accurate quote.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 dark:bg-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your cleaning, waste management, pest control, or landscaping needs. Our team is
            ready to provide the solutions your business deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Fresh & Clean",
            description:
              "Get in touch with Fresh & Clean for all your cleaning chemical, hygiene product, and service needs.",
            mainEntity: {
              "@type": "Organization",
              name: "Fresh & Clean",
              telephone: "+27-41-922-4554",
              email: "info@freshandclean.co.za",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop 19a, Riverside Industrial Park, Lower Magennis Road",
                addressLocality: "Uitenhage",
                postalCode: "6230",
                addressCountry: "ZA",
              },
              openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-41-922-4554",
                contactType: "customer service",
                areaServed: "ZA",
                availableLanguage: ["en"],
              },
            },
          }),
        }}
      />
    </div>
  )
}
