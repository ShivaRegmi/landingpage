"use client"

import { UserPlus, FileText, Bell, CheckCircle2, Camera, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: t("Register & Join", "दर्ता गर्नुहोस्"),
      description: t(
        "Sign up with your basic details and connect to your local ward.",
        "तपाईंको आधारभूत विवरणहरूसँग साइन अप गर्नुहोस् र तपाईंको स्थानीय वडामा जडान गर्नुहोस्।",
      ),
      color: "#799EFF",
    },
    {
      icon: FileText,
      step: "02",
      title: t("Report Issue", "समस्या रिपोर्ट गर्नुहोस्"),
      description: t(
        "Describe your problem with photos and location. It takes just 2 minutes.",
        "फोटो र स्थानसहित तपाईंको समस्या वर्णन गर्नुहोस्। यसमा केवल २ मिनेट लाग्छ।",
      ),
      color: "#FFDE63",
      extras: [Camera, MapPin],
    },
    {
      icon: Bell,
      step: "03",
      title: t("Ward Gets Notified", "वडालाई सूचना जान्छ"),
      description: t(
        "Your ward chairman receives instant notification about the issue.",
        "तपाईंको वडा अध्यक्षले समस्याको बारेमा तुरुन्त सूचना प्राप्त गर्नुहुन्छ।",
      ),
      color: "#FFBC4C",
    },
    {
      icon: CheckCircle2,
      step: "04",
      title: t("Problem Resolved", "समस्या समाधान"),
      description: t(
        "Track progress and get updates until your issue is completely resolved.",
        "प्रगति ट्र्याक गर्नुहोस् र तपाईंको समस्या पूर्ण रूपमा समाधान नभएसम्म अपडेटहरू प्राप्त गर्नुहोस्।",
      ),
      color: "#6BCF7F",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FEFFC4]/50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#FFDE63]/30 text-[#1a1a2e] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            {t("Simple Process", "सरल प्रक्रिया")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4 text-balance">
            {t("How", "कसरी")} <span className="text-[#799EFF]">Toleमित्र</span> {t("Works", "काम गर्छ")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "Four simple steps to get your community problems heard and resolved.",
              "तपाईंको समुदायका समस्याहरू सुन्न र समाधान गर्न चार सरल चरणहरू।",
            )}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#799EFF] via-[#FFDE63] to-[#6BCF7F] -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="glass rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 hover:-translate-y-2">
                  {/* Step Number */}
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </div>

                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon className="w-10 h-10" style={{ color: step.color }} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>

                  {/* Extra icons for step 2 */}
                  {step.extras && (
                    <div className="flex gap-2 mt-3">
                      {step.extras.map((ExtraIcon, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-[#FEFFC4] flex items-center justify-center">
                          <ExtraIcon className="w-4 h-4 text-[#1a1a2e]" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
