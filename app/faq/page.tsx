"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "How can i communicate with Bliss Events during the planning process?",
    answer:
      "Call our dedicated phone line +91-9545717217 to speak directly with our team or Drop us an email at customersupport@theblissevents.in with your inquiries or details, and we'll promptly respond.",
  },
  {
    question: "What is Bliss Event's cancellation Policy?",
    answer:
      "Bliss Events' cancellation policy varies based on timing and services. We request early notice and handle cancellations case by case. Refunds, if applicable, adhere to the terms in our contract. For specifics, refer to your agreement or contact us directly.",
  },
  {
    question: "Do I need to make an Appointment at the Wedding?",
    answer:
      "Yes, it's recommended to make an appointment for the wedding. Scheduling ensures our availability and allows us to dedicate focused time to discuss and plan your special day according to your preferences and needs.",
  },
  {
    question: "How do i book Events for my Wedding?",
    answer:
      "Contact us via phone or email to check availability and schedule a consultation. Finalize details, sign an agreement, and secure your booking for a seamless wedding planning experience with Bliss Events!",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="w-full bg-pink-50 py-16 relative overflow-hidden">
        <div className="container mx-auto relative z-10 flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-[#8B0000] font-serif">
          Frequently Asked Questions
          </h1>
        </div>
        <br />

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

      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        {/* FAQ Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/faq-image.png"
            alt="FAQ Section"
            width={1100}
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* FAQ Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          {/* FAQ Header */}
          <h1 className="text-5xl font-serif font-bold text-red-600">FAQ</h1>
          <p className="text-lg font-bold mt-2">Need To Ask Some Questions</p>

          {/* FAQ Questions */}
          <div className="mt-6 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="flex items-center w-full text-left text-lg font-semibold hover:text-red-600 transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="w-8 h-8 flex items-center justify-center border border-red-500 rounded-full text-red-500 font-bold mr-3">
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                  {faq.question}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-700 pl-12">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
