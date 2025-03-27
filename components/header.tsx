import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Youtube, Facebook, Linkedin, Instagram, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
export default function Header() {

  return (
    <header className="w-full">
      <div className="bg-white py-2 px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-red-700 mr-1" />
            <a href="tel:+917021927602" className="text-black hover:text-red-700">
              +91 70219 27602
            </a>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-red-700 mr-1" />
            <span className="text-black">Nagpur</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://youtube.com" aria-label="YouTube" className="text-red-700 hover:text-red-900">
            <Youtube className="h-4 w-4" />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="text-red-700 hover:text-red-900">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-red-700 hover:text-red-900">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-red-700 hover:text-red-900">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="bg-red-700 py-3 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/media/The_Bliss_Event_Logo.46b098e2ce3b40c8e9c235bf9916a764.svg" alt="The Bliss Events Logo" width={180} height={60} className="h-12 w-auto" />
          </Link>
          <Link href="/">
            <Image src="/media\The_Bliss_Event_Text_Logo.9002c106286abbf51648df952acab11c.svg" alt="The Bliss Events Logo" width={180} height={60} className="h-12 w-auto" />
          </Link>

        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-pink-200 font-medium">
            Home
          </Link>
          <Link href="/service" className="text-white hover:text-pink-200 font-medium">
            Service
          </Link>
          <Link href="/blogs" className="text-white hover:text-pink-200 font-medium">
            Blogs
          </Link>
          <Link href="/contact-us" className="text-white hover:text-pink-200 font-medium">
            Contact Us
          </Link>
          <Link href="/about-us" className="text-white hover:text-pink-200 font-medium">
            About Us
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-pink-200 font-medium flex items-center">
              More <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/gallery" className="w-full">
                  Gallery
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/testimonials" className="w-full">
                  Testimonials
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/faq" className="w-full">
                  FAQ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/pricing" className="w-full">
                  Pricing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/venues" className="w-full">
                  Venues
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/team" className="w-full">
                  Our Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/privacy-policy" className="w-full">
                  Privacy Policy
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/term-of-services" className="w-full">
                  Terms of Service
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Link href="/Book-Appointment" passHref>
      <Button className="bg-white text-red-700 hover:bg-pink-100 font-bold">
        BOOK NOW
      </Button>
    </Link>
      </div>
    </header>
  )
}

