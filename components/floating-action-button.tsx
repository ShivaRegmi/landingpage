"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, X, AlertTriangle, Droplets, Zap, Trash2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const quickActions = [
    { icon: Droplets, label: t("Water Issue", "पानी समस्या"), color: "#799EFF", href: "/join?type=water" },
    { icon: Zap, label: t("Electricity", "बिजुली"), color: "#FFDE63", href: "/join?type=electricity" },
    { icon: Trash2, label: t("Waste", "फोहोर"), color: "#FFBC4C", href: "/join?type=waste" },
    { icon: AlertTriangle, label: t("Other", "अन्य"), color: "#FF6B6B", href: "/join?type=other" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Action Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 mb-4 animate-fade-in-up">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="flex items-center gap-3 glass rounded-full pl-4 pr-5 py-3 shadow-lg hover:scale-105 transition-transform"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${action.color}20` }}
              >
                <action.icon className="w-5 h-5" style={{ color: action.color }} />
              </div>
              <span className="font-medium text-[#1a1a2e] whitespace-nowrap">{action.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-[#1a1a2e] rotate-45" : "bg-[#FFBC4C] hover:bg-[#e5a943] animate-bounce-subtle"
        }`}
        aria-label={isOpen ? t("Close menu", "मेनु बन्द गर्नुहोस्") : t("Report a problem", "समस्या रिपोर्ट गर्नुहोस्")}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-[#1a1a2e]" />}
      </button>

      {/* Label */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 rounded-full bg-[#1a1a2e] text-white text-xs whitespace-nowrap">
          {t("Report Problem", "समस्या रिपोर्ट")}
        </div>
      )}
    </div>
  )
}
