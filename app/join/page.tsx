"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Users, Shield, Zap, ArrowRight, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function JoinPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    wardNumber: "",
    address: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-[#FEFFC4] via-white to-[#799EFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Benefits */}
            <div className="hidden lg:block space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-4">
                  Join <span className="text-[#799EFF]">Toleमित्र</span> Today
                </h1>
                <p className="text-lg text-gray-600">
                  Become part of a growing community of active citizens making their neighborhoods better.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Users, title: "Connect with Your Ward", description: "Direct line to local authorities" },
                  { icon: Zap, title: "Quick Issue Resolution", description: "Report and track problems easily" },
                  { icon: Shield, title: "Safe & Secure", description: "Your data is always protected" },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-[#799EFF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#799EFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1a2e]">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#799EFF] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">10,000+ Citizens Already Joined</span>
                </div>
                <p className="text-white/80 text-sm">
                  Join the movement and help build stronger communities across Nepal.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                          step >= s ? "bg-[#799EFF] text-white" : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                      </div>
                      {s < 3 && (
                        <div className={`w-12 sm:w-20 h-1 mx-2 rounded ${step > s ? "bg-[#799EFF]" : "bg-gray-100"}`} />
                      )}
                    </div>
                  ))}
                </div>

                {step === 1 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-[#1a1a2e]">Personal Details</h2>
                      <p className="text-gray-600 text-sm">Let&apos;s start with your basic information</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Full Name</label>
                      <Input
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Phone Number</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+977 98XXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-xl"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#799EFF] hover:bg-[#5a7fd6] text-white font-semibold py-6 rounded-full"
                    >
                      Continue <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-[#1a1a2e]">Location Details</h2>
                      <p className="text-gray-600 text-sm">Help us connect you to your ward</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Ward Number</label>
                      <Input
                        name="wardNumber"
                        type="text"
                        placeholder="e.g., Ward 10"
                        value={formData.wardNumber}
                        onChange={handleChange}
                        className="rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Address</label>
                      <Input
                        name="address"
                        type="text"
                        placeholder="Your locality/tole name"
                        value={formData.address}
                        onChange={handleChange}
                        className="rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Create Password</label>
                      <div className="relative">
                        <Input
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={handleChange}
                          className="rounded-xl pr-12"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="flex-1 rounded-full"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[#799EFF] hover:bg-[#5a7fd6] text-white font-semibold rounded-full"
                      >
                        Continue
                      </Button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">Welcome to Toleमित्र!</h2>
                    <p className="text-gray-600 mb-6">
                      Your account has been created successfully. You&apos;re now ready to start reporting issues and
                      making your community better.
                    </p>
                    <div className="space-y-3">
                      <Link href="/">
                        <Button className="w-full bg-[#799EFF] hover:bg-[#5a7fd6] text-white font-semibold py-6 rounded-full">
                          Go to Dashboard
                        </Button>
                      </Link>
                      <Link href="/learn-more">
                        <Button variant="outline" className="w-full rounded-full bg-transparent">
                          Learn How to Report Issues
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}

                {step < 3 && (
                  <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link href="#" className="text-[#799EFF] font-semibold hover:underline">
                      Sign In
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
