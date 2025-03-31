"use client";
import { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-white py-2 px-4 flex justify-between items-center text-sm">
        <div className="hidden md:flex items-center space-x-6">
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
          <a href="https://youtube.com" className="text-red-700 hover:text-red-900">
            <Youtube className="h-4 w-4" />
          </a>
          <a href="https://facebook.com" className="text-red-700 hover:text-red-900">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com" className="text-red-700 hover:text-red-900">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://instagram.com" className="text-red-700 hover:text-red-900">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-red-700 py-3 px-6 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/media/The_Bliss_Event_Logo.46b098e2ce3b40c8e9c235bf9916a764.svg"
            alt="The Bliss Events Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center items-center space-x-8">
          {["Home", "Service", "Blogs", "Contact Us", "About Us"].map((name, index) => (
            <Link key={index} href={`/${name.replace(/ /g, "-").toLowerCase()}`} className="text-white hover:text-pink-200 text-lg font-bold">
              {name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-pink-200 text-lg font-bold flex items-center">
              More <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-red-700 shadow-lg rounded-lg w-44">
              {["Testimonials", "Privacy Policy", "Our Team", "Terms of Service", "FAQ"].map((label, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={`/${label.replace(/ /g, "-").toLowerCase()}`} className="w-full block px-4 py-2 hover:bg-gray-100">
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Corner Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/Book-Appointment" passHref>
            <Button className="hidden md:block bg-white text-red-700 hover:bg-pink-100 font-bold px-5 py-2">
              BOOK NOW
            </Button>
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 flex flex-col space-y-4 border-t">
          {["Home", "Service", "Blogs", "Contact Us", "About Us"].map((name, index) => (
            <Link key={index} href={`/${name.replace(/ /g, "-").toLowerCase()}`} className="text-black hover:text-red-700 text-lg font-bold">
              {name}
            </Link>
          ))}
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer text-lg font-bold text-black hover:text-red-700">
              More
              <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-2 space-y-2 pl-4">
              {["Testimonials", "Privacy Policy", "Our Team", "Terms of Service", "FAQ"].map((label, index) => (
                <Link key={index} href={`/${label.replace(/ /g, "-").toLowerCase()}`} className="block text-black hover:text-red-700">
                  {label}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/Book-Appointment" passHref>
            <Button className="w-full bg-red-700 text-white hover:bg-red-800 font-bold px-5 py-2">
              BOOK NOW
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}