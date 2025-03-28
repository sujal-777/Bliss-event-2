import Image from "next/image";

export function ImageCollageAlt() {
  return (
    <div className="relative w-full h-[500px] md:h-[550px] flex justify-center items-center">
      {/* Single Image */}
      <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden">
        <Image
          src="/About2.png" // Replace with actual image path
          alt="Wedding couple in traditional attire"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default ImageCollageAlt; // ✅ Ensure default export
