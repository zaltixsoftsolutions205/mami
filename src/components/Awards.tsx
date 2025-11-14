import { Card } from "@/components/ui/card";

const awardsContent = [
  {
    id: 1,
    title: "Global Excellence Award & Seva Ratna Award",
    description: [
      "Receiving these awards has been a proud and emotional moment for me.",
      "They reflect the trust my patients place in me and the dedication I bring into every treatment session.",
      "These recognitions inspire me to continue learning and to provide the best possible physiotherapy care.",
    ],
  },
  {
    id: 2,
    title: "Best Physiotherapy Care – Metro Health Care",
    description: [
      "I am humbled to receive the ‘Best Physiotherapy Care’ award from Metro Health Care.",
      "To me, physiotherapy is more than treatment—it is understanding each patient, guiding them with care, and helping them regain hope and confidence.",
      "I am grateful for this recognition and will keep striving to deliver excellent patient care.",
    ],
  },
];

const personalImages = [
  { src: "/src/assets/personal1.jpeg", alt: "Personal Image 1" },
  { src: "/src/assets/personal2.jpeg", alt: "Personal Image 2" },
  { src: "/src/assets/personal3.jpeg", alt: "Personal Image 3" },
  { src: "/src/assets/personal4.jpeg", alt: "Personal Image 4" },
];

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

const combinedMedia = [
  ...personalImages.map((img) => ({ type: "image", ...img })),
  ...videoList.map((vid) => ({ type: "video", ...vid })),
];

const Awards = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ⭐ Awards Section */}
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-8 border-b-4 border-primary inline-block pb-2">
            Awards & Recognition
          </h2>

          <div className="space-y-10">
            {awardsContent.map((award) => (
              <div key={award.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {award.title}
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  {award.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ Gallery + Videos Section (Original Code) */}
        <div>
          <h2 className="text-4xl font-bold text-foreground mb-8 border-b-4 border-primary inline-block pb-2">
            Gallery & Videos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {combinedMedia.map((item, idx) =>
              item.type === "image" ? (
                <Card
                  key={idx}
                  className="rounded-lg shadow hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Card>
              ) : (
                <Card
                  key={item.id}
                  className="rounded-lg shadow hover:shadow-2xl transition-shadow duration-300"
                >
                  <video
                    src={item.src}
                    controls
                    muted
                    preload="metadata"
                    poster={item.thumbnail}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="p-2 bg-white">
                    <p className="text-center text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                  </div>
                </Card>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Awards;
