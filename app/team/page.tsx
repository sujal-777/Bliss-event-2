import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Vijay Barapatre",
      role: "Founder & Lead Planner",
      image: "/media/vijay-barapatre.0bb4c00fd3f4113fcd1b72ba99012796.svg",
      bio: "With over 10 years of experience in wedding planning, Vijay has a passion for creating magical moments for couples. Her attention to detail and creative vision have made her one of the most sought-after wedding planners in Nagpur.",
      email: "Vijay@theblissevents.in",
      phone: "+91 70219 27602",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Atherva Dhakulkar",
      role: "Head Management",
      image: "/media/atharva-dhakulkar .175d120ffb061e19f71b29aafe3092ad.svg",
      bio: "Atherva brings creativity and innovation to every event, ensuring each wedding has its unique style and charm. His background in design and visual arts helps him create stunning wedding concepts that leave a lasting impression.",
      email: "Atherva@theblissevents.in",
      phone: "+91 98765 43210",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Praveen Bhagavatula",
      role: " COO",
      image: "/media/praveen-bhagavatula.6b3a0b1908b29a260f86254f268c5f3e.svg",
      bio: "Praveen has an eye for detail and transforms venues into breathtaking spaces that reflect each couple's personality. Her expertise in floral arrangements and thematic decor has earned her recognition in the wedding industry.",
      email: "anita@theblissevents.in",
      phone: "+91 87654 32109",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "shiv Prasad",
      role: "Chief Sales Officer",
      image: "/media/shiv-prasad.cf01b92fe570be768282b93a7b8a2581.svg",
      bio: "shiv ensures that every client receives personalized attention and that their needs are met throughout the planning process. His excellent communication skills and warm personality make clients feel comfortable and valued.",
      email: "Shiv@theblissevents.in",
      phone: "+91 76543 21098",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Chinu Makkad",
      role: "Creative Head",
      image: "/media/chinu-makkad.0eeed966e0594e295bd1e83a37b7967f.svg",
      bio: "Chinu handles all the logistical aspects of wedding planning, ensuring that everything runs smoothly on the big day. Her organizational skills and ability to solve problems quickly make her an invaluable member of the team.",
      email: "chinu@theblissevents.in",
      phone: "+91 65432 10987",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "Gunjan Jagnade",
      role: "Photography Director",
      image: "/media/gunjan-jagnade .5abd6d075ffba932a188d9c18a06763e.svg",
      bio: "Gunjan leads our photography team, capturing beautiful moments that couples will cherish forever. His artistic approach and technical expertise result in stunning wedding photographs that tell a unique story.",
      email: "Gunjan@theblissevents.in",
      phone: "+91 54321 09876",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },


    },
   
    
  ]

  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Our Team</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Meet the dedicated professionals behind The Bliss Events who work tirelessly to make your wedding dreams
            come true.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-1">{member.name}</h3>
                  <p className="text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:text-red-900"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:text-red-900"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:text-red-900"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                    <Button variant="outline" className="text-red-700 border-red-700 hover:bg-red-50">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-700 mb-2">Our Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At The Bliss Events, we believe in a collaborative approach to wedding planning. Our team works together
              to ensure every aspect of your wedding is perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Service",
                description:
                  "We take the time to understand your vision and preferences to create a wedding that reflects your unique style.",
              },
              {
                title: "Collaborative Planning",
                description:
                  "Our team members collaborate closely, bringing their specialized expertise to every aspect of your wedding.",
              },
              {
                title: "Attention to Detail",
                description:
                  "We believe that the small details make a big difference, and we ensure nothing is overlooked in your wedding planning.",
              },
            ].map((approach, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-700 mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-pink-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-red-700 mb-4">Join Our Team</h2>
                <p className="text-gray-600 mb-6">
                  We're always looking for talented and passionate individuals to join our team. If you have a flair for
                  wedding planning and want to be part of creating magical moments, we'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-700 mr-2" />
                    <span className="text-gray-700">Send your resume to: careers@theblissevents.in</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-700 mr-2" />
                    <span className="text-gray-700">Call us for inquiries: +91 70219 27602</span>
                  </div>
                </div>
                <Button className="mt-6 bg-red-700 hover:bg-red-800 text-white">View Open Positions</Button>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/team-group.jpg"
                  alt="The Bliss Events Team"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to schedule a consultation and let our expert team help you create the wedding of your
            dreams.
          </p>
          <Button className="bg-white text-red-700 hover:bg-pink-100">Book a Consultation</Button>
        </div>
      </section>
    </>
  )
}

