import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Personalized One-on-One Treatment",
      description:
        "Individualized sessions tailored to your unique needs. We carefully assess your condition and develop a customized rehabilitation plan focused on your recovery without distractions or time constraints.",
      image: "/src/assets/service1.jpg",
      features: ["Dedicated personal attention", "Flexible scheduling", "Tailored treatment plans"],
    },
    {
      id: 2,
      title: "Effective Pain Relief Therapy",
      description:
        "Utilizing gentle and evidence-based techniques to alleviate pain. Whether addressing neck, back, knee, or shoulder discomfort, our methods are designed for safe and lasting relief.",
      image: "/src/assets/service2.jpg",
      features: ["Rapid pain reduction", "Non-invasive approaches", "Minimized reliance on medication"],
    },
    {
      id: 3,
      title: "Convenient Online Video Consultations",
      description:
        "Access professional physiotherapy care remotely through secure video sessions. Receive expert guidance from the comfort and safety of your home, saving travel time without compromising quality.",
      image: "/src/assets/service3.jpg",
      features: ["Remote access", "Flexible and time-saving", "Easy appointment booking"],
    },
    {
      id: 4,
      title: "Posture Improvement Programs",
      description:
        "Learn scientifically supported techniques to improve your posture. Enhancing how you sit and stand reduces pain and increases energy for daily activities and work.",
      image: "/src/assets/service4.jpg",
      features: ["Evidence-based exercises", "Practical daily posture tips", "Long-term pain prevention"],
    },
    {
      id: 5,
      title: "Specialized Back & Neck Pain Relief",
      description:
        "Focused treatment for common spinal issues using clinically proven protocols that deliver noticeable improvement within days, enhancing your comfort and mobility.",
      image: "/src/assets/service5.jpg",
      features: ["Targeted therapies", "Fast functional recovery", "Clinically validated methods"],
    },
    {
      id: 6,
      title: "Sports Injury and Fitness Rehabilitation",
      description:
        "Supporting athletes and active individuals through safe, progressive rehabilitation. Our programs help you recover fully and return stronger to your sport or fitness routine.",
      image: "/src/assets/service6.jpg",
      features: ["Athlete-centric care", "Evidence-guided recovery", "Strength and safety focus"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              💼 Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            How We Support Your Recovery
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Evidence-based physiotherapy treatments designed to improve your health, mobility, and quality of life—delivered with personalized care.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Services Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-64 bg-secondary">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-base md:text-lg text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button className="w-full mt-4 group/btn" variant="default">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to begin your journey to better health?
          </p>
          <Button size="lg" className="gap-2">
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
