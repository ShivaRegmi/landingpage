"use client"

import { useState, useEffect } from "react"
import { TrendingUp, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function LiveCounter() {
  const { t } = useLanguage()

  const [stats, setStats] = useState({
    total: 5847,
    resolved: 4892,
    inProgress: 623,
    pending: 332,
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        total: prev.total + Math.floor(Math.random() * 3),
        resolved: prev.resolved + Math.floor(Math.random() * 2),
        inProgress: prev.inProgress + Math.floor(Math.random() * 2) - 1,
        pending: prev.pending + Math.floor(Math.random() * 2) - 1,
      }))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-8 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[#6BCF7F] rounded-full animate-pulse" />
            <span className="text-white/70 text-sm">{t("Live Updates", "लाइभ अपडेट")}</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <TrendingUp className="w-5 h-5 text-[#799EFF]" />
            <span className="text-2xl font-bold">{stats.total.toLocaleString()}</span>
            <span className="text-white/70 text-sm">{t("Total Reports", "कुल रिपोर्टहरू")}</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <CheckCircle className="w-5 h-5 text-[#6BCF7F]" />
            <span className="text-2xl font-bold">{stats.resolved.toLocaleString()}</span>
            <span className="text-white/70 text-sm">{t("Resolved", "समाधान")}</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <Clock className="w-5 h-5 text-[#FFD93D]" />
            <span className="text-2xl font-bold">{stats.inProgress}</span>
            <span className="text-white/70 text-sm">{t("In Progress", "प्रगतिमा")}</span>
          </div>

          <div className="flex items-center gap-3 text-white">
            <AlertTriangle className="w-5 h-5 text-[#FF6B6B]" />
            <span className="text-2xl font-bold">{stats.pending}</span>
            <span className="text-white/70 text-sm">{t("Pending", "पेन्डिङ")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
