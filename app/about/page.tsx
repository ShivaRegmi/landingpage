import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Target, Eye, Heart, Award, Users, Building } from "lucide-react"

const team = [
  { name: "Rajesh Sharma", role: "Founder & CEO", image: "/professional-nepali-man-portrait.jpg" },
  { name: "Sunita Thapa", role: "Community Manager", image: "/professional-nepali-woman-portrait.jpg" },
  { name: "Bikash Gurung", role: "Technical Lead", image: "/young-nepali-man-tech-professional.jpg" },
]

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "Every decision we make puts our community members at the center.",
  },
  {
    icon: Award,
    title: "Transparency",
    description: "We believe in open communication between citizens and authorities.",
  },
  { icon: Users, title: "Inclusivity", description: "Every voice matters, regardless of background or social status." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#FEFFC4] via-white to-[#799EFF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-[#799EFF]/10 text-[#799EFF] font-semibold px-4 py-2 rounded-full text-sm mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a2e] mb-6">
              Building Bridges Between <span className="text-[#799EFF]">People & Government</span>
            </h1>
            <p className="text-lg text-gray-600">
              Toleमित्र was born from a simple idea: what if every citizen could easily communicate their problems to
              local authorities and see real change happen?
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#799EFF]/10 to-[#799EFF]/5 rounded-3xl p-8">
              <div className="w-16 h-16 bg-[#799EFF] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower every citizen with a direct line to their local government, ensuring no problem goes unheard
                and no community is left behind. We strive to make civic engagement simple, accessible, and effective
                for everyone.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFDE63]/20 to-[#FFDE63]/5 rounded-3xl p-8">
              <div className="w-16 h-16 bg-[#FFDE63] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#1a1a2e]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">Our Vision</h2>
              <p className="text-gray-600">
                A Nepal where every tole (neighborhood) thrives, where citizens actively participate in community
                development, and where local governance is transparent, responsive, and accountable to the people it
                serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#FEFFC4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These principles guide everything we do at Toleमित्र.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#FFBC4C]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#FFBC4C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working to make community engagement easier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-[#1a1a2e]">{member.name}</h3>
                <p className="text-[#799EFF] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#799EFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: "10,000+", label: "Active Users" },
              { icon: Building, number: "50+", label: "Wards Connected" },
              { icon: Award, number: "500+", label: "Issues Resolved" },
              { icon: Heart, number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
