import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartPulse, Dumbbell, Award, MapPin, Users, Clock, Target } from "lucide-react";
import doctorImage from "@/assets/hero-doctor.jpg";

const AboutMe = () => {
  const about = [
    {
      title: "Professional Philosophy",
      description:
        "As a physiotherapist, I integrate scientific knowledge, empathetic care, and meticulous technique to achieve the best rehabilitation results. I am committed to offering thorough patient care and efficient healthcare management. My professional journey extends beyond ten years and encompasses significant experience in India, Saudi Arabia, and the United Kingdom, with specialized skills in neurological, orthopedic, and post-surgical rehabilitation.",
    },
    {
      title: "Clinical Expertise",
      description:
        "My practice focuses on enhancing mobility, alleviating pain, and promoting functional independence through evidence-based physiotherapy techniques.I specialize in manual therapy, electrotherapy, dry needling, and the prescription of therapeutic exercises, which empower patients to recover their quality of life and autonomy.",
    },
    {
      title: "Leadership in Healthcare",
      description:
        "In addition to my clinical responsibilities, I have founded and overseen prominent healthcare facilities. As the Manager and Head of Department at BM Rehabilitation Center, I was responsible for facility planning, team development, and ensuring adherence to international quality standards. My leadership has encouraged innovation in treatment protocols and facilitated ongoing operational enhancements.",
    },
    {
      title: "Global Credentials",
      description:
        "I possess current registrations with the Health and Care Professions Council (UK) and the Dubai Health Authority, which enables me to practice on an international level.My Master of Science from Coventry University has enhanced my knowledge in healthcare administration, clinical governance, and collaborative teamwork.",
    },
  ];

  const expertise = [
    {
      title: "Manual Therapy",
      description:
        "Extensive experience in joint mobilization, manipulation, and soft tissue therapy to address pain and enhance range of motion.",
      icon: <Dumbbell className="w-7 h-7 text-primary" />,
    },
    {
      title: "Electrotherapy & Dry Needling",
      description:
        "Proficient in advanced modalities including electrotherapy and dry needling for targeted pain relief and accelerated tissue recovery.",
      icon: <Target className="w-7 h-7 text-primary" />,
    },
    {
      title: "Therapeutic Exercise Prescription",
      description:
        "Tailored exercise regimens for neurological, musculoskeletal, and post-operative rehabilitation, focusing on strength restoration and functional performance.",
      icon: <HeartPulse className="w-7 h-7 text-primary" />,
    },
    {
      title: "Patient-Centered Care",
      description:
        "A patient-first approach that prioritizes empathy, individual assessment, and holistic strategies for sustainable well-being.",
      icon: <Users className="w-7 h-7 text-primary" />,
    },
  ];

  const certifications = [
    {
      title: "MSc Global Healthcare Management",
      institution: "Coventry University, United Kingdom",
      year: "Completed",
    },
    {
      title: "HCPC Registration",
      institution: "Health and Care Professions Council (UK)",
      year: "Active",
    },
    {
      title: "DHA Registration",
      institution: "Dubai Health Authority",
      year: "Active",
    },
    {
      title: "Manager & Department Head",
      institution: "BM Rehabilitation Center",
      year: "Senior Leadership",
    },
  ];

  // Animation/Visibility code
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  return (
    <section
      id="about"
      className={`py-20 bg-white transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 animate-fade-in">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-base font-semibold hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              👨‍⚕️ About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-2 animate-fade-in-up">
            Dr. Ramyakrishna Mamidala
          </h2>
          <h3 className="text-2xl md:text-3xl text-primary font-semibold mb-6 animate-fade-in-up animation-delay-200">
            Physiotherapist & Healthcare Manager
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            I am a committed physiotherapist with more than ten years of international experience in rehabilitation, patient care, and healthcare operations. My mission is to support individuals in recovery, manage pain effectively, and empower them to resume active lifestyles.
          </p>
          <p className="text-lg italic text-primary max-w-2xl mx-auto mt-4 font-semibold animate-fade-in-up animation-delay-600">
            "A physiotherapist has the brain of scientist the heart of a humanist and the hands of an Artist.."
          </p>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mt-8 animate-scale-x animation-delay-800"></div>
        </div>

        {/* Main grid with bigger image and requested content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1 flex justify-center group">
            <div className="relative overflow-hidden rounded-full shadow-2xl border-4 border-white transform group-hover:scale-105 transition-all duration-700 ease-out">
              <img
                src={doctorImage}
                alt="Experienced Physiotherapist"
                className="w-[28rem] h-[28rem] object-cover transform group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            <div className="absolute -bottom-6 right-1/2 transform translate-x-1/2 bg-gray-800 rounded-md px-6 py-3 shadow-2xl text-white text-center max-w-xs hover:bg-primary transition-all duration-300 hover:scale-110 cursor-pointer group">
              <p className="text-lg font-semibold group-hover:animate-pulse">10+ Years</p>
              <p className="text-xs">Clinical Experience</p>
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-float-slow"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/30 rounded-full animate-float"></div>
          </div>

          {/* Content - UPDATED as per your request */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4 animate-fade-in-right">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Professional Journey
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                During my professional journey across India, Saudi Arabia, and the United Kingdom, I have developed advanced skills across various healthcare settings. My primary areas of expertise encompass neurological and orthopedic rehabilitation, along with strategic healthcare management and leadership. This international experience has equipped me with a unique, culturally-competent approach to patient care, allowing me to effectively tailor rehabilitation programs to diverse populations. I am proficient in leveraging cutting-edge technologies and evidence-based practices to drive optimal patient outcomes. Furthermore, my background in healthcare management enables me to lead multidisciplinary teams, optimize clinical workflows, and contribute to the strategic development of rehabilitation services, ensuring both clinical excellence and operational efficiency.
              </p>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right animation-delay-300">
              {[
                { number: "10+", label: "Years Experience", icon: <Clock className="w-5 h-5" /> },
                { number: "3", label: "Countries Practiced In", icon: <MapPin className="w-5 h-5" /> },
                { number: "500+", label: "Patients Supported", icon: <Users className="w-5 h-5" /> },
                { number: "100%", label: "Commitment to Care", icon: <HeartPulse className="w-5 h-5" /> }
              ].map(({number, label, icon}, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 bg-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 group hover:border-primary/50 relative overflow-hidden"
                  tabIndex={0}
                  role="button"
                  aria-pressed="false"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <CardContent className="p-4 text-center relative z-10">
                    <div className="flex justify-center mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <p className="text-2xl font-bold text-primary group-hover:animate-pulse">{number}</p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8 mx-auto bg-gray-100 rounded-md border border-gray-200 p-1">
            {[
              { value: "about", label: "About" },
              { value: "expertise", label: "Expertise" },
              { value: "certifications", label: "Certifications" }
            ].map((tab) => (
              <TabsTrigger 
                key={tab.value}
                value={tab.value} 
                className="text-base transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:scale-105"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ABOUT TAB */}
          <TabsContent
            value="about"
            className="space-y-6 transition-all duration-500 ease-out"
          >
            {about.map((item, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-primary shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 group overflow-hidden"
                tabIndex={0}
                role="button"
                aria-pressed="false"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <HeartPulse className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* EXPERTISE TAB */}
          <TabsContent
            value="expertise"
            className="grid md:grid-cols-2 gap-6 transition-all duration-500 ease-out"
          >
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-primary shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 group overflow-hidden h-full"
                tabIndex={0}
                role="button"
                aria-pressed="false"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <CardContent className="p-8 relative h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-primary/30 transition-colors duration-300">
                    <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-500 ease-out"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* CERTIFICATIONS TAB */}
          <TabsContent
            value="certifications"
            className="space-y-6 transition-all duration-500 ease-out"
          >
            {certifications.map((item, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-primary shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 group overflow-hidden"
                tabIndex={0}
                role="button"
                aria-pressed="false"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Award className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-1 group-hover:text-primary/80 transition-colors duration-300">
                        {item.institution}
                      </p>
                      <p className="text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{item.year}</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-primary">
                      <Award className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out; }
        .animate-scale-x { animation: scale-x 0.8s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default AboutMe;
