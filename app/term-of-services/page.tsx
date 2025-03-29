import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <>
      <div className="w-full bg-pink-50 py-16 relative overflow-hidden">
        <div className="container mx-auto relative z-10 flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-[#8B0000] font-serif">Terms of Service</h1>
        </div>
        <br />

        {/* Left leaf decoration */}
        <div className="absolute left-4 md:left-40 top-1/2 -translate-y-1/2 opacity-70">
          <Image src="/leaf1.svg" width={80} height={120} alt="Decorative leaf" className="transform -rotate-12" />
        </div>

        {/* Right leaf decoration */}
        <div className="absolute right-4 md:right-40 top-1/2 -translate-y-1/2 opacity-70">
          <Image src="/leaf1.svg" width={80} height={120} alt="Decorative leaf" className="transform rotate-12" />
        </div>

        {/* Additional subtle decorative elements */}
        <div className="absolute left-1/4 bottom-8 opacity-30">
          <Image src="/leaf2.svg" width={40} height={60} alt="" className="transform rotate-45" />
        </div>
        <div className="absolute right-1/4 bottom-8 opacity-30">
          <Image src="/leaf2.svg" width={40} height={60} alt="" className="transform -rotate-45" />
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 w-screen max-w-8xl">
          <div className="prose prose-lg max-w-none">
            {/* Legal Disclaimer */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Legal Disclaimer</h2>
            <p className="text-gray-800 mb-6">
              This Legal Disclaimer governs the use of The Bliss Event's website and services. By accessing or using our
              website and services, you agree to the terms outlined in this disclaimer. The information provided on this
              website is for general informational purposes only. We strive to ensure the accuracy, timeliness, and
              completeness of the information provided; however, we make no representations or warranties of any kind,
              express or implied, about the accuracy, reliability, suitability, or availability concerning the website
              or the information, products, services, or related graphics contained on the website for any purpose. Any
              reliance you place on such information is strictly at your own risk.
            </p>

            {/* Credit Reporting Terms of Service */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Credit Reporting Terms of Service</h2>
            <p className="text-gray-800 mb-6">
              The Bliss Events specializes in curating memorable and magical weddings for our cherished clients. In
              order to ensure transparency, trust, and efficient financial transactions, we outline the following Credit
              Reporting Terms of Service. 1. Credit Reporting Overview: a. Credit Scores: As a wedding planning company,
              'THE BLISS EVENTS' acknowledges the importance of maintaining a positive credit score. We understand that
              our creditworthiness can influence our business relationships and financial transactions with vendors. b.
              Credit Reports: We value accurate credit reporting and regularly monitor our credit reports. This helps us
              to review and rectify any discrepancies, ensuring the accuracy of our financial history. 'THE BLISS
              EVENTS' values transparency, integrity, and reliability in all our business dealings. By abiding by these
              Credit Reporting Terms of Service, we aim to maintain a positive credit standing, foster strong
              relationships with our vendors, and ensure seamless financial transactions in our pursuit to create
              unforgettable weddings for our clients.
            </p>

            {/* Ownership of Site Agreement to Terms of Use */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Ownership of Site Agreement to Terms of Use</h2>
            <p className="text-gray-800 mb-6">
              By accessing and using this website, you acknowledge that you have read, understood, and agreed to comply
              with the terms outlined in this Ownership of Site Agreement and the Terms of Use. All content, including
              but not limited to text, images, graphics, logos, audio clips, video clips, and software, displayed or
              accessible on this Site, is the property of The Bliss Events or its licensors and is protected by
              copyright, trademark, and other intellectual property laws. If you have any questions or concerns
              regarding this Ownership of Site Agreement or the Terms of Use, please feel free to contact us at
              +91-9545717217.
            </p>

            {/* Provision of Services */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Provision of Services</h2>
            <p className="text-gray-800 mb-4">
              This Provision of Services Agreement sets forth the terms and conditions under which The Bliss Events
              agrees to provide services to the client.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <p>All taxes including the service tax will be charged extra as applicable.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <p>Notice of cancellation must be made in writing to The Bliss Events.</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <p>
                  Within 7 days after the advance amount is received, if the event is cancelled by the client, then the
                  client will be entitled to 50% of the total paid amount, less any supplier cancellation charges.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <p>
                  Within 15 days after the advance amount is received, if the event is cancelled by the client then the
                  client will be entitled to 20% of the total paid less any supplier cancellation charges.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <p>
                  After 15 days, if the event is canceled by the client then, will not be entitled to get back any of
                  the total paid less any supplier cancellation charges.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <p>
                  Please note that irrespective of the above-mentioned cancellations slabs, there would be a service
                  charge of 10% which would be applicable in case of cancellation of services after the booking is made
                  with us.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <p>
                  The Bliss Events is not liable for any interruption or disturbance/cancellation in the event/program
                  due to Natural Disaster/Riots/Fire/Flood/Cyclone/Curfew etc.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <p>
                  In concern to refund of unused / un-utilized services (which are paid for and canceled in advance) the
                  refund amount would be calculated on the basis of cancellation policy as explained above and the money
                  would be accordingly refunded to the person who has made the payment to us. Please note that it may
                  take 4 – 8 weeks for the refund process due to banking procedures. If the refund is made to the credit
                  card account or to Bank account, the bank charges would be debited from the refund amount.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-800 mb-6">
              The Limitation of Liability clause within our agreements at The Bliss Events is a protective measure that
              defines the extent of our responsibility in case of unforeseen situations. While we strive to deliver
              exceptional services, this clause outlines that we are not liable for indirect, consequential, or
              incidental damages arising from the use of our services or website. At The Bliss Events, our commitment
              remains unwavering in delivering exceptional service, and this clause serves as a framework to ensure a
              fair and balanced working relationship for both parties involved.
            </p>

            {/* Accounts, Passwords and Security */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Accounts, Passwords and Security</h2>
            <p className="text-gray-800 mb-6">
              Protecting your account at The Bliss Events is paramount. We prioritize security by encouraging users to
              safeguard their account credentials diligently. Creating robust passwords and keeping them confidential is
              essential to prevent unauthorized access. We employ industry-standard security measures, yet users should
              remain vigilant against potential threats. If any suspicious activity is noticed, we urge immediate
              reporting to our support team. Our commitment to security extends to educating users about phishing risks
              and ensuring compliance with our security policies. At The Bliss Events, your account's safety is a top
              priority, and together, we work towards a secure and trusted environment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

