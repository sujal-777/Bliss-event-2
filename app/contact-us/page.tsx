import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <>
      <div className="w-full bg-pink-50 py-16 relative overflow-hidden">
        <div className="container mx-auto relative z-10 flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-[#8B0000] font-serif">
            Contact Us
          </h1>
        </div>
        <br />
        <div className="flex justify-center font-bold text-center text-xl">
          <h2>Any question or remarks? Just write us a message!</h2>
        </div>

        {/* Left leaf decoration */}
        <div className="absolute left-4 md:left-40 top-1/2 -translate-y-1/2 opacity-70">
          <Image
            src="/leaf1.svg"
            width={80}
            height={120}
            alt="Decorative leaf"
            className="transform -rotate-12"
          />
        </div>

        {/* Right leaf decoration */}
        <div className="absolute right-4 md:right-40 top-1/2 -translate-y-1/2 opacity-70">
          <Image
            src="/leaf1.svg"
            width={80}
            height={120}
            alt="Decorative leaf"
            className="transform rotate-12"
          />
        </div>

        {/* Additional subtle decorative elements */}
        <div className="absolute left-1/4 bottom-8 opacity-30">
          <Image
            src="/leaf2.svg"
            width={40}
            height={60}
            alt=""
            className="transform rotate-45"
          />
        </div>
        <div className="absolute right-1/4 bottom-8 opacity-30">
          <Image
            src="/leaf2.svg"
            width={40}
            height={60}
            alt=""
            className="transform -rotate-45"
          />
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-red-700 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're ready to start planning your wedding or just have
                some questions, we're here to help. Fill out the form and we'll
                get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 70219 27602</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@theblissevents.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Nagpur, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-red-100 p-2 rounded-full text-red-700 hover:bg-red-200"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-red-100 p-2 rounded-full text-red-700 hover:bg-red-200"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-red-100 p-2 rounded-full text-red-700 hover:bg-red-200"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-red-700 mb-6">
                Send Us a Message
              </h2>
              <iframe
                aria-label="Contact Us"
                frameBorder="0" // Fixed issue here
                style={{ height: "500px", width: "100%", border: "none" }}
                src="https://forms.zohopublic.in/gbjbuzz/form/TheBlissEventsContactUsForm/formperma/gv9EYYQnvloAltFkc6v2Hs6qDPV365J0EGq-Vl3BmI4"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-700 mb-2">
              Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office in Nagpur to discuss your wedding plans in
              person.
            </p>
          </div>

          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.495749723007!2d79.06738857497851!3d21.132660484202294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c12b84ed7323%3A0xdf3341a583a98cba!2sThe%20Bliss%20Events%20-%20Wedding%20Planner%20%26%20Event%20Management%20Nagpur!5e0!3m2!1sen!2sin!4v1743107226194!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
