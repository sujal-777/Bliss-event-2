import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Youtube,
  Facebook,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Header() {
  return (
    <header className="w-full">
      <div className="bg-white py-2 px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 text-red-700 mr-1" />
            <a
              href="tel:+917021927602"
              className="text-black hover:text-red-700"
            >
              +91 70219 27602
            </a>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-red-700 mr-1" />
            <span className="text-black">Nagpur</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            className="text-red-700 hover:text-red-900"
          >
            <Youtube className="h-4 w-4" />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-red-700 hover:text-red-900"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="text-red-700 hover:text-red-900"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-red-700 hover:text-red-900"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="bg-red-700 py-3 px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/media/The_Bliss_Event_Logo.46b098e2ce3b40c8e9c235bf9916a764.svg"
              alt="The Bliss Events Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <Link href="/">
            <Image
              src="/media/The_Bliss_Event_Text_Logo.9002c106286abbf51648df952acab11c.svg"
              alt="The Bliss Events Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Navigation Section (Adjusted Position) */}
        <nav className="hidden md:flex flex-grow justify-center items-center space-x-8">
          <Link
            href="/"
            className="text-white hover:text-pink-200 text-lg font-bold"
          >
            Home
          </Link>
          <Link
            href="/service"
            className="text-white hover:text-pink-200 text-lg font-bold"
          >
            Service
          </Link>
          <Link
            href="/blogs"
            className="text-white hover:text-pink-200 text-lg font-bold"
          >
            Blogs
          </Link>
          <Link
            href="/contact-us"
            className="text-white hover:text-pink-200 text-lg font-bold"
          >
            Contact Us
          </Link>
          <Link
            href="/about-us"
            className="text-white hover:text-pink-200 text-lg font-bold"
          >
            About Us
          </Link>

          {/* Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-pink-200 text-lg font-bold flex items-center">
              More <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-red-700 shadow-lg rounded-lg w-44">
              {[
                
                { href: "/testimonials", label: "Testimonials" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/team", label: "Our Team" },
                { href: "/term-of-services", label: "Terms of Service" },
                { href: "/faq", label: "FAQ" },
              ].map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link
                    href={item.href}
                    className="w-full block px-4 py-2 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Book Now Button */}
        <Link href="/Book-Appointment" passHref>
          <Button className="bg-white text-red-700 hover:bg-pink-100 font-bold px-5 py-2">
            BOOK NOW
          </Button>
        </Link>
      </div>
    </header>
  );
}
