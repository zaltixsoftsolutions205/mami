import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const awards = [
  {
    id: 1,
    subtitle: "For Outstanding Service and Dedication",
    images: [
      {
        src: "/src/assets/award1.jpg",
        alt: "Award Ceremony 1",
      },
      {
        src: "/src/assets/award2.jpg",
        alt: "Award Ceremony 2",
      },
    ],
    content: [
      "I am happy to receive the Global Excellence Award and the Seva Ratna Award. These awards show that my hard work and care for my patients is recognized.",
      "These awards mean a lot to me because they are not just recognition - they show that I am doing good work and helping people get better.",
      "Thank you to everyone who has supported me. I will continue to work hard and take good care of my patients.",
    ],
  },
  {
    id: 2,
    subtitle: "From Metro Health Care",
    images: [
      {
        src: "/src/assets/award4.jpg",
        alt: "Metro Health Care Award 1",
      },
      {
        src: "/src/assets/award3.jpg",
        alt: "Metro Health Care Award 2",
      },
    ],
    content: [
      "I am very grateful to receive the \"Best Physiotherapy Care\" award from Metro Health Care. This award means that the treatment I give to my patients is very good.",
      "I believe that good physiotherapy means understanding what each patient needs, teaching them the right exercises, and helping them feel confident again.",
      "I thank Metro Health Care for this award. It makes me want to keep learning and do even better work for my patients.",
    ],
  },
];

// Flatten award images
const flatImageList = awards.flatMap((award) =>
  award.images.map((image) => ({
    ...image,
    awardTitle: award.title,
  }))
);

// Personal images array with 4 images
const personalImages = [
  {
    src: "/src/assets/personal1.jpeg",
    alt: "Personal Image 1",
  },
  {
    src: "/src/assets/personal2.jpeg",
    alt: "Personal Image 2",
  },
  {
    src: "/src/assets/personal3.jpeg",
    alt: "Personal Image 3",
  },
  {
    src: "/src/assets/personal4.jpeg",
    alt: "Personal Image 4",
  
  },
];

// Combine award images and personal images for gallery
const combinedGalleryImages = [...flatImageList, ...personalImages];

// Sample video data unchanged
const videoList = [
  {
    id: 1,
    title: "Award Ceremony Highlights",
    src: "/src/assets/video1.mp4",
    thumbnail: "/src/assets/video1-thumb.png",
  },
  {
    id: 2,
    title: "Physiotherapy Demo",
    src: "/src/assets/video2.mp4",
    thumbnail: "/src/assets/video2-thumb.png",
  },
];

const Awards = () => {
  const galleryRef = useRef(null);
  const videosRef = useRef(null);

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const scrollAmount = 320;
    ref.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Awards Section */}
        <section id="awards">
          <h2 className="text-4xl font-bold text-foreground mb-6 border-b-4 border-primary inline-block pb-2">
            🏆 Awards & Recognition
          </h2>
          <div className="space-y-12">
            {awards.map((award) => (
              <div key={award.id} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-primary mb-1">{award.title}</h3>
                <p className="text-sm font-medium uppercase text-muted-foreground tracking-wide mb-4">{award.subtitle}</p>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  {award.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section (combined award + personal images) */}
        <section id="gallery" className="relative">
          <h2 className="text-4xl font-bold text-foreground mb-6 border-b-4 border-primary inline-block pb-2">
            Gallery
          </h2>

          <button
            onClick={() => scroll(galleryRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-white shadow hover:bg-primary text-primary"
            aria-label="Scroll Gallery Left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll(galleryRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-white shadow hover:bg-primary text-primary"
            aria-label="Scroll Gallery Right"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={galleryRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4 px-8"
          >
            {combinedGalleryImages.map((image, idx) => (
              <Card key={idx} className="min-w-[320px] flex-shrink-0 group relative rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 snap-start">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-72 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg text-white">
                  <p className="text-sm font-semibold">
                    {image.awardTitle ?? image.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="relative">
          <h2 className="text-4xl font-bold text-foreground mb-6 border-b-4 border-primary inline-block pb-2">
            Videos
          </h2>

          <button
            onClick={() => scroll(videosRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-white shadow hover:bg-primary text-primary"
            aria-label="Scroll Videos Left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll(videosRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-white shadow hover:bg-primary text-primary"
            aria-label="Scroll Videos Right"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={videosRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4 px-8"
          >
            {videoList.map((video) => (
              <div key={video.id} className="min-w-[320px] flex-shrink-0 rounded-lg shadow-lg overflow-hidden snap-start">
                <video
                  src={video.src}
                  controls
                  muted
                  preload="metadata"
                  poster={video.thumbnail}
                  className="w-full h-72 object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-lg font-semibold text-foreground">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
};

export default Awards;
