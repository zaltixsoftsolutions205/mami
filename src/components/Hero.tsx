import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import newHeroImage from "@/assets/new-hero-background.png";
import { Shield, ArrowRight, X, Star, CheckCircle } from "lucide-react";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleBookConsultation = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  // Animation styles
  const animationStyles = `
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    @keyframes floatSlow {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-15px);
      }
    }
    @keyframes floatSlower {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-8px);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 0.4s ease forwards;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animate-float-slow {
      animation: floatSlow 4s ease-in-out infinite;
    }
    .animate-float-slower {
      animation: floatSlower 5s ease-in-out infinite;
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <section
        id="home"
        ref={sectionRef}
        className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white"
      >
        {/* Background Gradient and Image */}
        <div
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, transparent 100%), url(${newHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Animated floating elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          <div
            className={`absolute top-1/4 left-10 w-6 h-6 bg-green-200 rounded-full opacity-60 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-60 animate-float-slow" : "opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          ></div>
          <div
            className={`absolute top-1/3 right-20 w-8 h-8 bg-green-100 rounded-full opacity-40 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-40 animate-float" : "opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          ></div>
          <div
            className={`absolute bottom-1/4 left-20 w-4 h-4 bg-green-300 rounded-full opacity-50 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-50 animate-float-slower" : "opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          ></div>
          <div
            className={`absolute top-1/2 right-10 w-10 h-10 bg-green-50 rounded-full opacity-30 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-30 animate-float-slow" : "opacity-0"
            }`}
            style={{ transitionDelay: "1100ms" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Content - Text */}
            <div className="lg:w-1/2 max-w-2xl">
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6 transform transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">
                  Expert Physiotherapy Care
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-2 mb-6">
                {["Restore Movement,", "Relieve Pain,", "Reclaim Your Life"].map((line, index) => (
                  <h1
                    key={index}
                    className={`text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight transform transition-all duration-700 ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                  >
                    {line}
                  </h1>
                ))}
              </div>

              {/* Subtext */}
              <p
                className={`text-lg text-gray-600 mb-8 leading-relaxed transform transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                Personalized physiotherapy designed to help you recover, 
                strengthen, and move freely. Experience expert care and 
                guided rehabilitation — from the comfort of your home 
                through secure video consultations.
              </p>

              {/* CTA Button */}
              <div
                className={`flex flex-col sm:flex-row gap-4 mb-8 transform transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "1100ms" }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base px-8 gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  onClick={handleBookConsultation}
                >
                  Book Video Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div
                className={`flex items-center gap-6 mb-8 transform transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "1300ms" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">100+ Patients</span>
                </div>
              </div>

              {/* Highlight Points */}
              <div
                className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "1500ms" }}
              >
                <div className="border-l-4 border-green-600 pl-4 group hover:border-green-700 transition-all duration-300 hover:translate-x-1">
                  <p className="text-sm font-semibold text-foreground group-hover:text-green-700 transition-colors duration-300">
                    Fast Appointment Response
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    Quick and reliable consultation scheduling
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 group hover:border-green-600 transition-all duration-300 hover:translate-x-1">
                  <p className="text-sm font-semibold text-foreground group-hover:text-green-700 transition-colors duration-300">
                    Certified Physiotherapist
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    Trusted, experienced, and patient-focused care
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Popup Form positioned down a bit */}
            <div className="lg:w-1/2 relative max-w-md pt-24">
              {isFormOpen && (
                <div
                  className="relative bg-white rounded-xl shadow-2xl p-8 border-2 border-green-600 animate-fadeInUp"
                  role="dialog"
                  aria-modal="true"
                >
                  {/* Close Button */}
                  <button
                    onClick={closeForm}
                    className="absolute top-4 right-4 text-green-700 hover:text-green-900 transition transform hover:scale-110 duration-300"
                    aria-label="Close form"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">
                    Book Your Video Consultation
                  </h2>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600 transition-all duration-300"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600 transition-all duration-300"
                        placeholder="+123 456 7890"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="reason"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Reason for Consulting (optional)
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        rows={3}
                        className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600 transition-all duration-300"
                        placeholder="Describe your concerns or questions"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit Booking Request
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "2000ms" }}
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
