"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Users, MessageSquare, CheckCircle, Droplets, Zap, Trash2, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FEFFC4] via-white to-[#799EFF]/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#799EFF]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#FFDE63]/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFBC4C]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 border border-[#799EFF]/30">
              <span className="w-2 h-2 bg-[#6BCF7F] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#1a1a2e]">{t("Connecting Communities", "समुदायहरू जोड्दै")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight text-balance">
              {t("Your Voice,", "तपाईंको आवाज,")}{" "}
              <span className="text-[#799EFF]">{t("Your Community,", "तपाईंको समुदाय,")}</span>{" "}
              <span className="bg-gradient-to-r from-[#FFBC4C] to-[#FFDE63] bg-clip-text text-transparent">
                {t("Your Solution", "तपाईंको समाधान")}
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl text-pretty">
              {t(
                "Toleमित्र bridges the gap between citizens and ward authorities. Report issues like water supply, electricity problems, and more – and get them resolved faster.",
                "Toleमित्रले नागरिक र वडा अधिकारीहरू बीचको खाडललाई जोड्छ। पानी आपूर्ति, बिजुली समस्या जस्ता समस्याहरू रिपोर्ट गर्नुहोस् - र तिनीहरूलाई छिटो समाधान गर्नुहोस्।",
              )}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                { icon: Droplets, label: t("Water", "पानी"), color: "#799EFF" },
                { icon: Zap, label: t("Electricity", "बिजुली"), color: "#FFDE63" },
                { icon: Trash2, label: t("Waste", "फोहोर"), color: "#FFBC4C" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 glass px-3 py-2 rounded-full hover:scale-105 transition-transform cursor-pointer"
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/join">
                <Button className="btn-ripple bg-[#FFBC4C] hover:bg-[#e5a943] text-[#1a1a2e] font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  {t("Get Started", "सुरु गर्नुहोस्")} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/learn-more">
                <Button
                  variant="outline"
                  className="border-2 border-[#799EFF] text-[#1a1a2e] hover:bg-[#799EFF] hover:text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
                >
                  {t("Learn More", "थप जान्नुहोस्")}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              {[
                { target: 2847, suffix: "+", label: t("Issues Resolved", "समस्या समाधान") },
                { target: 52, suffix: "+", label: t("Wards Connected", "वडा जोडिएको") },
                { target: 15000, suffix: "+", label: t("Happy Citizens", "खुशी नागरिक") },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#799EFF]">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Main Card with Glassmorphism */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 glass rounded-3xl shadow-2xl p-6 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-[#799EFF]/10 to-[#FFDE63]/10 rounded-2xl flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 bg-[#799EFF] rounded-full flex items-center justify-center animate-bounce-subtle">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a2e]">{t("Community Hub", "समुदाय हब")}</h3>
                  <p className="text-sm text-gray-600 text-center px-4">
                    {t("One platform for all your community concerns", "तपाईंको समुदायका सबै समस्याहरूको लागि एक प्लेटफर्म")}
                  </p>
                </div>
              </div>

              {/* Floating Cards with Glassmorphism */}
              <div
                className="absolute top-10 left-0 glass rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="w-10 h-10 bg-[#FF6B6B] rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">{t("New Report", "नयाँ रिपोर्ट")}</p>
                  <p className="text-xs text-[#FF6B6B] font-medium">{t("Urgent", "जरुरी")}</p>
                </div>
              </div>

              <div
                className="absolute bottom-10 right-0 glass rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-10 h-10 bg-[#6BCF7F] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e]">{t("Issue Resolved", "समस्या समाधान")}</p>
                  <p className="text-xs text-[#6BCF7F] font-medium">{t("Complete", "पूरा")}</p>
                </div>
              </div>

              <div
                className="absolute top-1/4 right-0 glass rounded-2xl shadow-lg p-3 flex items-center gap-2 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-8 h-8 bg-[#FFBC4C] rounded-full flex items-center justify-center">
                  <Mic className="w-4 h-4 text-[#1a1a2e]" />
                </div>
                <p className="text-xs font-semibold text-[#1a1a2e]">{t("Voice Report", "आवाज रिपोर्ट")}</p>
              </div>

              <div
                className="absolute bottom-1/4 left-0 bg-[#FFD93D] rounded-2xl shadow-lg p-3 animate-float"
                style={{ animationDelay: "0.75s" }}
              >
                <p className="text-xs font-bold text-[#1a1a2e]">{t("In Progress...", "प्रगतिमा...")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
