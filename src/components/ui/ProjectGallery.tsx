import { useState } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ProjectGallery({ images, title }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-neutral-900
        "
      >
        <img
          src={images[selectedImage]}
          alt={title}
          className="
            aspect-video
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-[1.02]
          "
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto">
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
              className="h-20 w-32 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
