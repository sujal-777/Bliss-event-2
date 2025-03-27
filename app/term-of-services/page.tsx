import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Terms of Service</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">Last Updated: March 24, 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to The Bliss Events. These Terms of Service ("Terms") govern your use of our website and services.
              Please read these Terms carefully before using our website or engaging our services.
            </p>
            <p>
              By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree
              to these Terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">1. Services</h2>
            <p>
              The Bliss Events provides wedding planning and event management services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Wedding planning and coordination</li>
              <li>Venue selection and booking</li>
              <li>Vendor coordination</li>
              <li>Decor and design services</li>
              <li>Photography and videography services</li>
              <li>Catering services</li>
              <li>Entertainment services</li>
              <li>Other related wedding and event services</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">2. Service Agreements</h2>
            <p>
              All services provided by The Bliss Events are subject to a separate service agreement that outlines the
              specific services, deliverables, timelines, and fees. The service agreement will be provided to you after
              an initial consultation and before any services are rendered.
            </p>
            <p>
              The service agreement, once signed by both parties, constitutes a binding contract between you and The
              Bliss Events. In the event of any conflict between these Terms and the service agreement, the service
              agreement shall prevail.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">3. Payments and Fees</h2>
            <p>
              Our fees for services are outlined in the service agreement. Unless otherwise specified in the service
              agreement:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                A non-refundable deposit of 50% of the total fee is required to secure our services and your event date.
              </li>
              <li>
                The remaining balance is due according to the payment schedule specified in the service agreement.
              </li>
              <li>
                Additional services requested after the signing of the service agreement may incur additional fees.
              </li>
              <li>Late payments may be subject to a late fee of 2% per month on the outstanding balance.</li>
            </ul>
            <p>
              We accept payments via bank transfer, credit card, and UPI. All fees are exclusive of applicable taxes,
              which will be added to the final invoice.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">4. Cancellation and Refund Policy</h2>
            <p>Our cancellation and refund policy is as follows:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The initial deposit is non-refundable under any circumstances.</li>
              <li>
                Cancellations made more than 6 months before the event date: 50% refund of any additional payments made
                beyond the deposit.
              </li>
              <li>
                Cancellations made 3-6 months before the event date: 25% refund of any additional payments made beyond
                the deposit.
              </li>
              <li>Cancellations made less than 3 months before the event date: No refund.</li>
              <li>Postponements may be accommodated subject to our availability and may incur additional fees.</li>
            </ul>
            <p>All cancellation requests must be submitted in writing to info@theblissevents.in.</p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">5. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, images, audio clips, digital downloads, and
              software, is the property of The Bliss Events or its content suppliers and is protected by Indian and
              international copyright laws.
            </p>
            <p>
              By engaging our services, you grant us permission to use photographs, videos, and other media from your
              event for our portfolio, website, social media, and marketing materials, unless otherwise specified in
              writing.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, The Bliss Events shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use or inability to use our website or services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our website</li>
              <li>
                Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website by any
                third party
              </li>
              <li>
                Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any
                content posted, emailed, transmitted, or otherwise made available through our website or services
              </li>
            </ul>
            <p>
              Our total liability for any claims under these Terms shall not exceed the amount paid by you to The Bliss
              Events for the services related to the claim.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">7. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless The Bliss Events, its officers, directors, employees,
              and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt,
              and expenses (including but not limited to attorney's fees) arising from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use of and access to our website and services</li>
              <li>Your violation of any term of these Terms</li>
              <li>
                Your violation of any third-party right, including without limitation any copyright, property, or
                privacy right
              </li>
              <li>Any claim that your content caused damage to a third party</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">8. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising
              out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in
              Nagpur, Maharashtra, India.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon
              posting on our website. Your continued use of our website and services after any such changes constitutes
              your acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">10. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or
              eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and
              effect and enforceable.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">11. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div className="bg-pink-50 p-6 rounded-lg mt-4 mb-6">
              <p className="mb-2">
                <strong>The Bliss Events</strong>
              </p>
              <p className="mb-2">Email: info@theblissevents.in</p>
              <p className="mb-2">Phone: +91 70219 27602</p>
              <p>Address: Nagpur, Maharashtra, India</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              By using our website and services, you acknowledge that you have read and understood these Terms of
              Service.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="border-red-700 text-red-700 hover:bg-red-50">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Button>
              <Button className="bg-red-700 hover:bg-red-800 text-white">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

