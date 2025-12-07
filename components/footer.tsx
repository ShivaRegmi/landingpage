"use client"

import Link from "next/link"
import { Users, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t("Home", "गृहपृष्ठ"), href: "/" },
    { name: t("About Us", "हाम्रो बारेमा"), href: "/about" },
    { name: t("Learn More", "थप जान्नुहोस्"), href: "/learn-more" },
    { name: t("Contact", "सम्पर्क"), href: "/contact" },
  ]

  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#799EFF] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Tole<span className="text-[#799EFF]">मित्र</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              {t(
                "Connecting communities to ward authorities for faster problem resolution. Building stronger neighborhoods together.",
                "छिटो समस्या समाधानको लागि समुदायहरूलाई वडा अधिकारीहरूसँग जोड्दै। सँगै बलियो छिमेकहरू निर्माण गर्दै।",
              )}
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded text-xs bg-[#6BCF7F]/20 text-[#6BCF7F]">
                {t("Verified", "प्रमाणित")}
              </span>
              <span className="px-2 py-1 rounded text-xs bg-[#799EFF]/20 text-[#799EFF]">{t("Secure", "सुरक्षित")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#FFDE63] mb-4">{t("Quick Links", "द्रुत लिंकहरू")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#799EFF] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[#FFDE63] mb-4">{t("Contact Us", "सम्पर्क गर्नुहोस्")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#799EFF]" />
                contact@tolemitra.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#799EFF]" />
                +977-1-234567
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#799EFF]" />
                {t("Kathmandu, Nepal", "काठमाडौं, नेपाल")}
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-[#FFDE63] mb-4">{t("Follow Us", "हामीलाई फलो गर्नुहोस्")}</h3>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "Youtube" },
              ].map(({ Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#799EFF]/20 flex items-center justify-center hover:bg-[#799EFF] transition-colors group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">
              {t(
                "Stay updated with community news and success stories.",
                "समुदायका समाचार र सफलताका कथाहरूसँग अपडेट रहनुहोस्।",
              )}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            {t("Made with", "बनाइएको")} <Heart className="w-4 h-4 text-[#FF6B6B] fill-[#FF6B6B]" />{" "}
            {t("for Nepal", "नेपालको लागि")}
          </p>
          <p className="text-gray-400 text-sm">© 2025 Toleमित्र. {t("All rights reserved.", "सर्वाधिकार सुरक्षित।")}</p>
        </div>
      </div>
    </footer>
  )
}
