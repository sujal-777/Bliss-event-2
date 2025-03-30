import Image from "next/image"

export default function TeamMembers() {
  return (
    <div className="bg-pink-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-serif mb-2">Organizers</h2>
        <h1 className="text-center text-4xl font-bold text-red-700 mb-12">Meet Our Lovely Team Member</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-white p-1 mb-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/vijay.png"
                  alt="Vijay Barapatre"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative bg-white rounded-lg shadow-md py-4 px-6 w-64 text-center">
              <h3 className="text-xl font-bold">Vijay Barapatre</h3>
              <p className="text-gray-600">CEO and MD</p>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-700 rounded-full"></div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-white p-1 mb-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/Gunjan.png"
                  alt="Gunjan Jagnade"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative bg-white rounded-lg shadow-md py-4 px-6 w-64 text-center">
              <h3 className="text-xl font-bold">Gunjan Jagnade</h3>
              <p className="text-gray-600">Head Management</p>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-700 rounded-full"></div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-white p-1 mb-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/Shivprasad.png"
                  alt="Shivprasad Motghare"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative bg-white rounded-lg shadow-md py-4 px-6 w-64 text-center">
              <h3 className="text-xl font-bold">Shivprasad Motghare</h3>
              <p className="text-gray-600">COO</p>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

