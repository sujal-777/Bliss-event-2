import Image from "next/image";

export function ImageCollage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] md:h-[550px]">
      <div className="relative w-[100%] h-[100%] rounded-lg overflow-hidden">
        <Image
          src="/media/About1.png" // Ensure this path is correct
          alt="Wedding couple in traditional attire"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
