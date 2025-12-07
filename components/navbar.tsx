"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Users, Globe, Home, Info, BookOpen, Phone, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { name: t("Home", "गृहपृष्ठ"), href: "/", icon: Home },
    { name: t("About Us", "हाम्रो बारेमा"), href: "/about", icon: Info },
    { name: t("Learn More", "थप जान्नुहोस्"), href: "/learn-more", icon: BookOpen },
    { name: t("Contact", "सम्पर्क"), href: "/contact", icon: Phone },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#799EFF]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-[#799EFF] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1a1a2e]">
              Tole<span className="text-[#799EFF]">मित्र</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 text-[#1a1a2e] hover:text-[#799EFF] font-medium transition-colors duration-200 relative group"
              >
                <link.icon className="w-4 h-4" />
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#799EFF] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side: Language + Join */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "en" ? "np" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FEFFC4] hover:bg-[#FFDE63] transition-colors text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "नेपाली" : "English"}
            </button>

            <Link href="/join">
              <Button className="btn-ripple bg-[#FFBC4C] hover:bg-[#e5a943] text-[#1a1a2e] font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <UserPlus className="w-4 h-4 mr-2" />
                {t("Join Us", "सामेल हुनुहोस्")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#FEFFC4] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#1a1a2e]" /> : <Menu className="w-6 h-6 text-[#1a1a2e]" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#799EFF]/20 animate-fade-in-up">
            {/* Mobile Language Selector */}
            <button
              onClick={() => setLanguage(language === "en" ? "np" : "en")}
              className="flex items-center gap-2 w-full px-4 py-2 mb-2 rounded-lg bg-[#FEFFC4] text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "नेपाली मा हेर्नुहोस्" : "View in English"}
            </button>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-[#1a1a2e] hover:text-[#799EFF] font-medium px-4 py-3 rounded-lg hover:bg-[#FEFFC4] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
              <Link href="/join" onClick={() => setIsOpen(false)}>
                <Button className="bg-[#FFBC4C] hover:bg-[#e5a943] text-[#1a1a2e] font-semibold w-full rounded-full mt-2">
                  <UserPlus className="w-4 h-4 mr-2" />
                  {t("Join Us", "सामेल हुनुहोस्")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
