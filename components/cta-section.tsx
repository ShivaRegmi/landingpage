"use client"

import Link from "next/link"
import { ArrowRight, Users, CheckCircle, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[#799EFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl glass-dark p-8 sm:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-40 h-40 bg-[#FFDE63] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#799EFF] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FFDE63] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#1a1a2e]" />
                </div>
                <span className="text-[#FFDE63] font-semibold">
                  {t("Join 15,000+ Citizens", "१५,०००+ नागरिकहरूसँग सामेल हुनुहोस्")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
                {t("Ready to Make Your", "तपाईंको")}{" "}
                <span className="text-[#FFDE63]">{t("Voice Heard?", "आवाज सुनाउन तयार हुनुहुन्छ?")}</span>
              </h2>
              <p className="text-gray-300 max-w-xl mb-6">
                {t(
                  "Join Toleमित्र today and be part of a community that actively works to solve local problems.",
                  "आज Toleमित्रमा सामेल हुनुहोस् र स्थानीय समस्याहरू समाधान गर्न सक्रिय रूपमा काम गर्ने समुदायको हिस्सा बन्नुहोस्।",
                )}
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { icon: CheckCircle, text: t("Free to use", "निःशुल्क") },
                  { icon: Clock, text: t("Quick response", "छिटो प्रतिक्रिया") },
                  { icon: Shield, text: t("Secure & private", "सुरक्षित") },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm"
                  >
                    <item.icon className="w-4 h-4 text-[#FFDE63]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/join">
                <Button className="btn-ripple bg-[#FFDE63] hover:bg-[#FFBC4C] text-[#1a1a2e] font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  {t("Join Now", "अहिले सामेल हुनुहोस्")} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
                >
                  {t("Contact Us", "सम्पर्क गर्नुहोस्")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
