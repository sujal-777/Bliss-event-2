import Image from "next/image";

export default function WeddingForm() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Image */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center relative">
        <div className="w-[95%] max-w-xl h-auto z-10"> {/* Reduced size by 5% */}
          <Image
            src="/imager.png"
            alt="Wedding couple standing in traditional attire"
            width={665} // Reduced by 5%
            height={950} // Reduced by 5%
            className="object-cover rounded-lg" // Removed shadow-lg
            priority
          />
        </div>
      </div>

      {/* Zoho Form Iframe */}
      <div className="w-full md:w-1/2 p-2 md:p-4 flex flex-col justify-center">
        <div className="w-full h-full min-h-[600px] flex items-center">
          <iframe
            aria-label="For your love's timeless journey to meet elegance in every moment"
            frameBorder="0"
            style={{
              height: "100%",
              width: "100%",
              maxWidth: "500px",
              border: "none",
              minHeight: "600px",
            }}
            src="https://forms.zohopublic.in/gbjbuzz/form/BlissEvents/formperma/dbo_1swf1z5XqlgkXlymOgMf3XosPtpr2WIvqmNmUU4"
          />
        </div>
      </div>
    </div>
  );
}
