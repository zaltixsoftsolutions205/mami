import { Button } from "@/components/ui/button";
import newHeroImage from "@/assets/new-hero-background.jpg"; // updated background image
import doctorImage from "@/assets/doctor.png";   // doctor image you provide
import { Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, transparent 100%), url(${newHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Flex container with image aligned to bottom */}
        <div className="flex flex-col lg:flex-row items-end gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Trusted Physiotherapy Expertise</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Restore Mobility, Relieve Pain, Reclaim Life
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Receive expert guidance for your pain and movement challenges. Our certified physiotherapists provide personalized care to help you regain your quality of life—comfortably from your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 text-white font-semibold text-base px-8 gap-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold text-base px-8">
                Learn More
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm font-semibold text-foreground">12-Hour Response Guarantee</p>
                <p className="text-xs text-gray-500">Fast and reliable appointment scheduling</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-sm font-semibold text-foreground">Certified Specialists</p>
                <p className="text-xs text-gray-500">Experienced and accredited professionals</p>
              </div>
            </div>
          </div>

          {/* Doctor Image aligned bottom */}
          <div className="flex-shrink-0">
            <img
              src={doctorImage}
              alt="Doctor"
              className="w-[900px] h-auto rounded-none shadow-none border-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
