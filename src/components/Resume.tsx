import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartPulse, Dumbbell, Award } from "lucide-react";
import doctorImage from "@/assets/hero-doctor.jpeg";

const AboutMe = () => {
  const about = [
    {
      title: "Professional Philosophy",
      description:
        "As a physiotherapist, I combine scientific insight, compassionate care, and precise technique to deliver optimal rehabilitation outcomes. I am dedicated to providing comprehensive patient care and effective healthcare management. My career spans over a decade and includes valuable experience across India, Saudi Arabia, and the United Kingdom, with advanced expertise in neurological, orthopedic, and post-surgical rehabilitation.",
    },
    {
      title: "Clinical Expertise",
      description:
        "My practice centers on restoring mobility, managing pain, and improving functional independence through evidence-based physiotherapy methods. I specialize in manual therapy, electrotherapy, dry needling, and therapeutic exercise prescription, enabling patients to regain their quality of life and autonomy.",
    },
    {
      title: "Leadership in Healthcare",
      description:
        "In addition to my clinical work, I have established and managed leading healthcare facilities. As Manager and Head of Department at BM Rehabilitation Center, I oversaw facility planning, team development, and compliance with international quality standards. My leadership has fostered innovation in treatment protocols and supported continuous operational improvement.",
    },
    {
      title: "Global Credentials",
      description:
        "I hold active registrations with the Health and Care Professions Council (UK) and Dubai Health Authority, qualifying me to practice internationally. My MSc in Global Healthcare Management from Coventry University has deepened my expertise in healthcare administration, clinical governance, and interdisciplinary teamwork.",
    },
  ];

  const expertise = [
    {
      title: "Manual Therapy",
      description:
        "Extensive experience in joint mobilization, manipulation, and soft tissue therapy to address pain and enhance range of motion.",
    },
    {
      title: "Electrotherapy & Dry Needling",
      description:
        "Proficient in advanced modalities including electrotherapy and dry needling for targeted pain relief and accelerated tissue recovery.",
    },
    {
      title: "Therapeutic Exercise Prescription",
      description:
        "Tailored exercise regimens for neurological, musculoskeletal, and post-operative rehabilitation, focusing on strength restoration and functional performance.",
    },
    {
      title: "Patient-Centered Care",
      description:
        "A patient-first approach that prioritizes empathy, individual assessment, and holistic strategies for sustainable well-being.",
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-base font-semibold">
              👨‍⚕️ About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
            Dr. Ramyakrishna Mamidala
          </h2>
          <h3 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
            Physiotherapist & Healthcare Manager
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a committed physiotherapist with more than ten years of international experience in rehabilitation, patient care, and healthcare operations. My mission is to support individuals in recovery, manage pain effectively, and empower them to resume active lifestyles.
          </p>
          <p className="text-lg italic text-primary max-w-2xl mx-auto mt-4 font-semibold">
            "A scientific mind, a compassionate heart, and artistic hands."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"></div>
        </div>

        {/* About Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <img
              src={doctorImage}
              alt="Experienced Physiotherapist"
              className="w-full h-auto rounded-xl shadow-xl border-8 border-primary/10"
            />
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary to-secondary rounded-lg p-6 shadow-lg text-white max-w-xs">
              <p className="text-lg font-bold">10+ Years</p>
              <p className="text-sm">Clinical Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">Professional Journey</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Throughout my career in India, Saudi Arabia, and the United Kingdom, I have cultivated advanced skills in diverse healthcare environments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My core competencies include neurological and orthopedic rehabilitation, as well as strategic healthcare management and leadership.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary/20 bg-secondary/5">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-secondary">3</p>
                  <p className="text-sm text-gray-600">Countries Practiced In</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-600">Patients Supported</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-secondary/20 bg-secondary/5">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-secondary">100%</p>
                  <p className="text-sm text-gray-600">Commitment to Care</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8 mx-auto bg-gray-100">
            <TabsTrigger value="about" className="text-base">About</TabsTrigger>
            <TabsTrigger value="expertise" className="text-base">Expertise</TabsTrigger>
            <TabsTrigger value="certifications" className="text-base">Certifications</TabsTrigger>
          </TabsList>

          {/* ABOUT TAB */}
          <TabsContent value="about" className="space-y-6">
            {about.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HeartPulse className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* EXPERTISE TAB */}
          <TabsContent value="expertise" className="space-y-6">
            {expertise.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Dumbbell className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* CERTIFICATIONS TAB */}
          <TabsContent value="certifications" className="space-y-6">
            {certifications.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-1">
                        {item.institution}
                      </p>
                      <p className="text-base text-gray-600">{item.year}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutMe;
