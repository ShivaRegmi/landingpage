"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#FEFFC4] via-white to-[#799EFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#FFDE63]/30 text-[#1a1a2e] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-6">
            We&apos;d Love to <span className="text-[#799EFF]">Hear From You</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, suggestions, or need support? Our team is here to help you make your community better.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a2e] mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of these channels. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email Us", info: "contact@tolemitra.com", sub: "For general inquiries" },
                  { icon: Phone, title: "Call Us", info: "+977-1-234567", sub: "Mon-Fri, 9am-6pm" },
                  { icon: MapPin, title: "Visit Us", info: "Kathmandu, Nepal", sub: "Ward No. 10, Baneshwor" },
                  { icon: Clock, title: "Response Time", info: "Within 24 Hours", sub: "We value your time" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[#FEFFC4]/30 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#799EFF]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#799EFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1a2e]">{item.title}</h3>
                      <p className="text-[#799EFF] font-medium">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#799EFF] hover:bg-[#5a7fd6] text-white rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">Send Us a Message</h2>
                    <p className="text-gray-600 text-sm">Fill out the form below and we&apos;ll respond promptly.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">First Name</label>
                      <Input
                        type="text"
                        placeholder="Your first name"
                        className="rounded-xl border-gray-200 focus:border-[#799EFF] focus:ring-[#799EFF]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Last Name</label>
                      <Input
                        type="text"
                        placeholder="Your last name"
                        className="rounded-xl border-gray-200 focus:border-[#799EFF] focus:ring-[#799EFF]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="rounded-xl border-gray-200 focus:border-[#799EFF] focus:ring-[#799EFF]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="What's this about?"
                      className="rounded-xl border-gray-200 focus:border-[#799EFF] focus:ring-[#799EFF]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us more about your inquiry..."
                      rows={4}
                      className="rounded-xl border-gray-200 focus:border-[#799EFF] focus:ring-[#799EFF]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#799EFF] hover:bg-[#5a7fd6] text-white font-semibold py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
