"use client";

import React from "react";

import Image from "next/image";

const WeddingContactSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 md:mb-56 xl:mb-36 mb-8">
      {/* Background Wedding Image - Hidden on mobile */}
      <div className="md:block hidden relative">
        <Image
          src="/media/destination-wedding.68cdefbbf8b32f808bccf0f36ce6a9e8.svg"
          alt="WeddingImage"
          width={1200}
          height={675}
          className="w-full aspect-video lg:rounded-2xl object-cover"
          loading="lazy"
        />
      </div>

      {/* Contact Form Overlay */}
      <div
        className="lg:w-[26rem] md:w-80 w-full md:absolute lg:top-28 top-10 lg:right-16 right-10 bg-white rounded-2xl"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="px-8 2xl:py-10 md:py-1 py-10">
          <iframe
            title="contact-form"
            className="h-[590px] md:h-[582px] w-full overflow-hidden"
            aria-label="Bliss Events Inquiry"
            frameBorder="0"
            src="https://forms.zohopublic.in/gbjbuzz/form/BlissEventsInquiry/formperma/ttFu_ETq0oy8QNClIvp2w1e5IU0brYA14rxGfNb-ZWM"
          />
        </div>
      </div>
    </section>
  );
};

export default WeddingContactSection;
