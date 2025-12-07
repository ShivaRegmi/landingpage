import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Users,
  MessageSquare,
  TrendingUp,
  Globe,
  Smartphone,
  ChevronDown,
} from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "No more waiting in long queues at government offices. Report issues from your phone in minutes.",
  },
  {
    icon: Shield,
    title: "Transparent Process",
    description: "Track your complaint status in real-time. Know exactly where your issue stands.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Your concerns go directly to the ward chairman. No middlemen, no delays.",
  },
  {
    icon: TrendingUp,
    title: "Faster Resolution",
    description: "Issues get prioritized and resolved faster with our efficient tracking system.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    description: "See the collective impact as more issues get resolved in your neighborhood.",
  },
  {
    icon: Smartphone,
    title: "Easy to Use",
    description: "Simple interface designed for everyone, regardless of technical expertise.",
  },
]

const faqs = [
  {
    question: "How do I register on Toleमित्र?",
    answer:
      "Simply click on 'Join Us', fill in your basic details including your ward number, and verify your phone number. You'll be ready to report issues in under 5 minutes.",
  },
  {
    question: "What types of issues can I report?",
    answer:
      "You can report various community issues including water supply problems, electricity outages, road damage, waste management, street lighting, and other civic concerns.",
  },
  {
    question: "How long does it take for issues to be resolved?",
    answer:
      "Resolution time varies based on the complexity of the issue. Simple issues may be resolved within 24-48 hours, while infrastructure problems may take longer. You'll receive regular updates on progress.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We use industry-standard encryption and security measures. Your personal details are only shared with relevant authorities handling your complaint.",
  },
  {
    question: "Can I track multiple issues at once?",
    answer:
      "Yes! You can report and track multiple issues simultaneously through your dashboard. Each issue has its own tracking ID and status updates.",
  },
]

export default function LearnMorePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FEFFC4] via-white to-[#799EFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#799EFF]/10 text-[#799EFF] font-semibold px-4 py-2 rounded-full text-sm mb-4">
                Learn More
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-6">
                Empowering Citizens, <span className="text-[#799EFF]">Transforming Communities</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover how Toleमित्र is revolutionizing the way citizens interact with local government. Our platform
                makes civic engagement simple, transparent, and effective.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/join">
                  <Button className="bg-[#799EFF] hover:bg-[#5a7fd6] text-white font-semibold px-8 py-6 rounded-full shadow-lg">
                    Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="font-medium text-[#1a1a2e]">Report issues in 2 minutes</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#799EFF]/10 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-[#799EFF]" />
                    <span className="font-medium text-[#1a1a2e]">Direct ward connection</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#FFDE63]/20 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-[#FFBC4C]" />
                    <span className="font-medium text-[#1a1a2e]">Real-time tracking</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="font-medium text-[#1a1a2e]">100% Free to use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FFDE63]/30 text-[#1a1a2e] font-semibold px-4 py-2 rounded-full text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              Benefits of Using <span className="text-[#799EFF]">Toleमित्र</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform is designed with citizens in mind, offering features that make civic engagement effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-[#FEFFC4]/30 to-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#799EFF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#799EFF] transition-colors">
                  <benefit.icon className="w-7 h-7 text-[#799EFF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Detail */}
      <section className="py-20 bg-[#799EFF]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              The <span className="text-[#799EFF]">Toleमित्र</span> Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Citizen Reports Issue",
                description:
                  "A community member notices a problem - broken water pipe, power outage, road damage, etc. They open Toleमित्र and describe the issue with photos and location.",
                color: "#799EFF",
              },
              {
                step: "2",
                title: "System Routes to Ward",
                description:
                  "Our intelligent system automatically routes the complaint to the appropriate ward office based on location and issue type.",
                color: "#FFDE63",
              },
              {
                step: "3",
                title: "Ward Takes Action",
                description:
                  "Ward officials receive instant notification, assess the issue, and dispatch appropriate teams or resources to resolve it.",
                color: "#FFBC4C",
              },
              {
                step: "4",
                title: "Issue Resolved & Feedback",
                description:
                  "Once resolved, citizens receive notification and can provide feedback, completing the civic engagement loop.",
                color: "#799EFF",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>
                  {index < 3 && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#FFBC4C]/20 text-[#1a1a2e] font-semibold px-4 py-2 rounded-full text-sm mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-[#FEFFC4]/30 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#FEFFC4]/50 transition-colors">
                  <h3 className="font-semibold text-[#1a1a2e] pr-4">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-[#799EFF] flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#799EFF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Join the Movement?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Be part of thousands of citizens making their communities better, one issue at a time.
          </p>
          <Link href="/join">
            <Button className="bg-[#FFDE63] hover:bg-[#FFBC4C] text-[#1a1a2e] font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Join Toleमित्र Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
