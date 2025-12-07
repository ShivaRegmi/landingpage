"use client"

import { Droplets, Zap, Trash2, AlertTriangle, Shield, Clock, ChevronRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Droplets,
      title: t("Water Supply Issues", "पानी आपूर्ति समस्या"),
      description: t(
        "Report water shortages, contamination, or pipeline problems directly to authorities.",
        "पानीको अभाव, प्रदूषण, वा पाइपलाइन समस्याहरू सिधै अधिकारीहरूलाई रिपोर्ट गर्नुहोस्।",
      ),
      color: "#799EFF",
      reports: 127,
    },
    {
      icon: Zap,
      title: t("Electricity Problems", "बिजुली समस्या"),
      description: t(
        "Power outages, voltage fluctuations, or damaged infrastructure – report instantly.",
        "बिजुली कटौती, भोल्टेज उतार-चढाव, वा क्षतिग्रस्त पूर्वाधार – तुरुन्तै रिपोर्ट गर्नुहोस्।",
      ),
      color: "#FFDE63",
      reports: 89,
    },
    {
      icon: Trash2,
      title: t("Waste Management", "फोहोर व्यवस्थापन"),
      description: t(
        "Garbage collection delays, illegal dumping, or sanitation concerns addressed promptly.",
        "फोहोर संकलन ढिलाइ, अवैध डम्पिंग, वा सरसफाइ चिन्ताहरू तुरुन्तै सम्बोधन।",
      ),
      color: "#FFBC4C",
      reports: 156,
    },
    {
      icon: AlertTriangle,
      title: t("Road & Infrastructure", "सडक र पूर्वाधार"),
      description: t(
        "Potholes, damaged roads, broken streetlights – keep your community safe.",
        "खाल्डाखुल्डी, क्षतिग्रस्त सडक, भाँचिएको बत्ती – तपाईंको समुदायलाई सुरक्षित राख्नुहोस्।",
      ),
      color: "#799EFF",
      reports: 203,
    },
    {
      icon: Shield,
      title: t("Safety Concerns", "सुरक्षा चिन्ता"),
      description: t(
        "Report security issues and get connected to local authorities immediately.",
        "सुरक्षा समस्याहरू रिपोर्ट गर्नुहोस् र तुरुन्तै स्थानीय अधिकारीहरूसँग जोडिनुहोस्।",
      ),
      color: "#FFDE63",
      reports: 45,
    },
    {
      icon: Clock,
      title: t("Quick Response", "छिटो प्रतिक्रिया"),
      description: t(
        "Track your complaints in real-time and receive updates on resolution progress.",
        "तपाईंको गुनासोहरू वास्तविक समयमा ट्र्याक गर्नुहोस् र समाधान प्रगतिमा अपडेटहरू प्राप्त गर्नुहोस्।",
      ),
      color: "#FFBC4C",
      reports: null,
    },
  ]

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#799EFF]/10 text-[#799EFF] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            {t("What We Solve", "हामी के समाधान गर्छौं")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4 text-balance">
            {t("Community Problems,", "समुदायका समस्याहरू,")}{" "}
            <span className="text-[#799EFF]">{t("Community Solutions", "समुदायका समाधानहरू")}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
            {t(
              "From basic utilities to infrastructure concerns, Toleमित्र helps you report and resolve issues that affect your daily life.",
              "आधारभूत सुविधाहरूदेखि पूर्वाधार चिन्ताहरूसम्म, Toleमित्रले तपाईंको दैनिक जीवनलाई असर गर्ने समस्याहरू रिपोर्ट गर्न र समाधान गर्न मद्दत गर्छ।",
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass p-6 rounded-2xl border border-transparent hover:border-[#799EFF]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>
                {feature.reports && (
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#FEFFC4] text-[#1a1a2e]">
                    {feature.reports} {t("this month", "यो महिना")}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="flex items-center text-[#799EFF] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {t("Report Now", "अहिले रिपोर्ट गर्नुहोस्")} <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
