import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="w-full bg-pink-50 py-16 relative overflow-hidden">
        <div className="container mx-auto relative z-10 flex justify-center items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-center text-[#8B0000] font-serif">Privacy Policy</h1>
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
        <div className="container mx-auto px-4 w-screen max-w-8xl ">
          <div className="prose prose-lg max-w-none">
            {/* Information Collection */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Information Collection</h2>
            <p className="text-gray-800 mb-4">
              At Bliss Events, we are committed to safeguarding your privacy. This Privacy Policy outlines how we
              collect, use, disclose, and protect your personal information. By engaging with our services, you consent
              to the practices described in this policy.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Contact Information: Names, email addresses, phone numbers.</li>
              <li>Event Details: Wedding date, venue, preferences.</li>
              <li>Billing Information: Invoicing and payment details.</li>
              <li>Communication: Correspondence and feedback.</li>
            </ul>

            {/* How We Use Cookies */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-gray-800 mb-6">
              At Bliss Events, we use cookies to enhance your browsing experience and provide personalized services.
              Cookies are small text files stored on your device that help us analyze website usage, improve
              functionality, and tailor content to your preferences.
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Essential Cookies:</p>
                  <p>
                    Necessary for the basic functionality of our website. They enable features such as page navigation
                    and access to secure areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Analytical/Performance Cookies:</p>
                  <p>
                    Allow us to recognize and count the number of visitors, analyze web traffic, and improve our
                    website's performance. This data is aggregated and anonymized
                  </p>
                </div>
              </div>
1
              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Functionality Cookies:</p>
                  <p>
                    Enhance your experience by remembering your preferences{" "}
                    <a href="mailto:customersupport@theblissevents.in" className="text-[#C00000]">
                      customersupport@theblissevents.in
                    </a>
                    . For instance, they may remember your language or region selection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C00000] mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Targeting/Advertising Cookies:</p>
                  <p>
                    These cookies may be set through our site by advertising partners. They are used to build a profile
                    of your interests and show you relevant ads on other sites.
                  </p>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-800 mb-6">
              We do not sell, trade, or transfer your personal information to third parties. Information may be shared
              with vendors only for event-related purposes with your consent.
            </p>

            {/* Data Protection */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Data Protection</h2>
            <p className="text-gray-800 mb-4">
              At Bliss Events, we are dedicated to safeguarding your privacy through our Data Protection Policy. We
              collect and process only essential personal data required for our wedding management services, ensuring it
              is handled securely and transparently. Our commitment extends to robust security measures, limited data
              sharing with explicit consent, and compliance with data protection laws.
            </p>
            <p className="text-gray-800 mb-4">
              You have the right to access, correct, or delete your information, and we retain data only as long as
              necessary. Our website utilizes cookies for an enhanced browsing experience, with options for managing
              preferences. We regularly review and update our practices to align with legal requirements, and any
              concerns or inquiries can be directed to{" "}
              <a href="mailto:customersupport@theblissevents.in" className="text-[#C00000]">
                customersupport@theblissevents.in
              </a>
              .
            </p>
            <p className="text-gray-800 mb-6">
              By choosing Bliss Events, you entrust us with your data, and we honor that trust by prioritizing your
              privacy every step of the way.
            </p>

            {/* Your Rights */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-800 mb-4">
              You have the right to access, correct, or delete your personal data. You can also opt out of promotional
              communications at any time.
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>You have the right to access your personal data held by Bliss Events upon request.</li>
              <li>You can request the correction of any inaccuracies in your personal information.</li>
              <li>You have the right to request the deletion of your personal data when it is no longer needed.</li>
              <li>Manage your preferences for cookies used on our website through your browser settings.</li>
              <li>Upon request, receive your personal data in a commonly used and machine-readable format.</li>
            </ul>

            {/* Changes to the Cookie Policy */}
            <h2 className="text-3xl font-bold text-[#C00000] mt-8 mb-4">Changes to the Cookie Policy</h2>
            <p className="text-gray-800 mb-6">
              We may update our cookie policy to reflect changes in our practices or for legal reasons. Any changes will
              be posted on this page. If you have any questions or concerns about our use of cookies, please contact us
              at{" "}
              <a href="mailto:customersupport@theblissevents.in" className="text-[#C00000]">
                customersupport@theblissevents.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

