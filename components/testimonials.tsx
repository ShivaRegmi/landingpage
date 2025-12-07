"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Ram Prasad Sharma",
      ward: t("Ward 5, Kathmandu", "वडा ५, काठमाडौं"),
      issue: t("Water Supply", "पानी आपूर्ति"),
      quote: t(
        "Our neighborhood had no water for 3 days. Within 24 hours of reporting on Toleमित्र, the ward chairman sent a team to fix the pipeline!",
        "हाम्रो छिमेकमा ३ दिनदेखि पानी थिएन। Toleमित्रमा रिपोर्ट गरेको २४ घण्टा भित्रमा, वडा अध्यक्षले पाइपलाइन मर्मत गर्न टोली पठाउनुभयो!",
      ),
      rating: 5,
      resolved: true,
    },
    {
      name: "Sita Devi Thapa",
      ward: t("Ward 12, Lalitpur", "वडा १२, ललितपुर"),
      issue: t("Electricity", "बिजुली"),
      quote: t(
        "The streetlight near our house was broken for months. After using Toleमित्र, it was fixed in just 2 days. Amazing service!",
        "हाम्रो घर नजिकको बत्ती महिनौंदेखि बिग्रिएको थियो। Toleमित्र प्रयोग गरेपछि, यो केवल २ दिनमा मर्मत भयो। अद्भुत सेवा!",
      ),
      rating: 5,
      resolved: true,
    },
    {
      name: "Bikash Gurung",
      ward: t("Ward 8, Bhaktapur", "वडा ८, भक्तपुर"),
      issue: t("Road Repair", "सडक मर्मत"),
      quote: t(
        "The pothole on our main road was causing accidents. Toleमित्र helped us get it repaired quickly. Thank you!",
        "हाम्रो मुख्य सडकको खाल्डोले दुर्घटनाहरू गराइरहेको थियो। Toleमित्रले हामीलाई यसलाई छिटो मर्मत गर्न मद्दत गर्यो। धन्यवाद!",
      ),
      rating: 4,
      resolved: true,
    },
    {
      name: "Kamala Rai",
      ward: t("Ward 3, Pokhara", "वडा ३, पोखरा"),
      issue: t("Waste Management", "फोहोर व्यवस्थापन"),
      quote: t(
        "Garbage was piling up for weeks. One report through Toleमित्र and regular collection started again. Very helpful!",
        "फोहोर हप्ताैंदेखि थुप्रिएको थियो। Toleमित्र मार्फत एक रिपोर्ट र नियमित संकलन फेरि सुरु भयो। धेरै उपयोगी!",
      ),
      rating: 5,
      resolved: true,
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-[#799EFF]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#6BCF7F]/20 text-[#1a1a2e] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            {t("Community Impact", "समुदायमा प्रभाव")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4 text-balance">
            {t("Real Stories,", "वास्तविक कथाहरू,")}{" "}
            <span className="text-[#799EFF]">{t("Real Solutions", "वास्तविक समाधानहरू")}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t(
              "Hear from citizens whose problems were resolved through Toleमित्र.",
              "Toleमित्र मार्फत समस्या समाधान भएका नागरिकहरूबाट सुन्नुहोस्।",
            )}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-[#799EFF]/30 mb-6" />

            <p className="text-xl md:text-2xl text-[#1a1a2e] font-medium mb-8 leading-relaxed">
              {`"${testimonials[currentIndex].quote}"`}
            </p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-[#1a1a2e]">{testimonials[currentIndex].name}</h4>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4" />
                  {testimonials[currentIndex].ward}
                </div>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? "text-[#FFDE63] fill-[#FFDE63]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#FFBC4C]/20 text-[#1a1a2e]">
                    {testimonials[currentIndex].issue}
                  </span>
                  {testimonials[currentIndex].resolved && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#6BCF7F]/20 text-[#6BCF7F]">
                      {t("Resolved", "समाधान भयो")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#799EFF] hover:text-white transition-colors"
            aria-label={t("Previous testimonial", "अघिल्लो प्रशंसापत्र")}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-[#799EFF] hover:text-white transition-colors"
            aria-label={t("Next testimonial", "अर्को प्रशंसापत्र")}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#799EFF] w-8" : "bg-[#799EFF]/30"
                }`}
                aria-label={`${t("Go to testimonial", "प्रशंसापत्रमा जानुहोस्")} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
