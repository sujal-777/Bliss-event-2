import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-red-700 mb-4">Privacy Policy</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">Last Updated: March 24, 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              At The Bliss Events, we are committed to protecting your privacy and ensuring the security of your
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fill out forms on our website</li>
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Contact us via email, phone, or other communication channels</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>The personal information we may collect includes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Wedding date and details</li>
              <li>Payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device and usage
              patterns. This information may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring website addresses</li>
              <li>Other usage statistics</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing and completing transactions</li>
              <li>Sending administrative information, such as confirmations and updates</li>
              <li>Responding to your inquiries and requests</li>
              <li>Personalizing your experience on our website</li>
              <li>Sending marketing and promotional communications (with your consent)</li>
              <li>Analyzing usage patterns and trends to improve our website and services</li>
              <li>Protecting against fraudulent or unauthorized transactions</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Disclosure of Your Information</h2>
            <p>We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Service Providers:</strong> We may share your information with third-party vendors, service
                providers, and contractors who perform services on our behalf.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
                response to valid requests by public authorities.
              </li>
              <li>
                <strong>Protection of Rights:</strong> We may disclose your information to protect our rights, privacy,
                safety, or property, and that of our customers or others.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities and
              to improve your experience on our website. You can set your browser to refuse all or some browser cookies,
              or to alert you when cookies are being sent. However, if you disable or refuse cookies, some parts of our
              website may not function properly.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal
              information. However, please be aware that no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section
              below.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Children's Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If you are a parent or guardian and believe that your child has
              provided us with personal information, please contact us, and we will take steps to delete such
              information.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the "Last
              Updated" date at the top of the policy will be revised accordingly. We encourage you to review this
              Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-red-700 mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact
              us at:
            </p>
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
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="border-red-700 text-red-700 hover:bg-red-50">
                <Link href="/term-of-services">Terms of Service</Link>
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

