import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-8">
      {/* Main Image */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-[#0f1117]
          p-6
        "
      >
        <img
          src={images[selectedImage]}
          alt={title}
          className="
            w-full
            h-auto
            object-contain
            transition-transform
            duration-500
            hover:scale-[1.01]
          "
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-5 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`
              overflow-hidden
              rounded-xl
              border
              transition-all
              duration-300
              ${
                selectedImage === index
                  ? "border-violet-500"
                  : "border-white/10 hover:border-white/30"
              }
            `}
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="
                h-24
                w-40
                bg-[#0f1117]
                object-contain
              "
            />
          </button>
        ))}
      </div>
    </div>
  );
}
