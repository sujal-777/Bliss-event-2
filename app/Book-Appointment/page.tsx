import Image from "next/image"

export default function WeddingForm() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Single Image */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center relative px-4">
        <div className="w-full max-w-md h-auto z-10">
          <Image
            src="/media/imager.png"  
            alt="Wedding couple standing in traditional attire"
            width={700}
            height={1000}
            className="object-cover rounded-lg shadow-lg"  
            priority
          />
        </div>
      </div>

      {/* Zoho Form Iframe */}
      <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
        <div className="w-full h-full min-h-[500px]">
          <iframe
            aria-label="For your love's timeless journey to meet elegance in every moment"
            frameBorder="100%"
            style={{ height: "100%", width: "500px", border: "none", minHeight: "600px" }}
            src="https://forms.zohopublic.in/gbjbuzz/form/BlissEvents/formperma/dbo_1swf1z5XqlgkXlymOgMf3XosPtpr2WIvqmNmUU4"
          />
        </div>
      </div>
    </div>
  )
}
