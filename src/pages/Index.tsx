import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import VideoConsultationGuide from "@/components/VideoConsultationGuide";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Resume />
      <Services />
      <VideoConsultationGuide />
      <Testimonials />
      <Awards />
      <Appointment />
      <Footer />
    </div>
  );
};

export default Index;
