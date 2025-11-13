import { Card, CardContent } from "@/components/ui/card";
import { Video, CheckCircle, Clock, Zap } from "lucide-react";

const VideoConsultationGuide = () => {
  const steps = [
    {
      id: 1,
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Book Your Slot",
      description: "Fill the form and choose 'Video Call'. Pick a date and time that works for you.",
    },
    {
      id: 2,
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "We Send You a Link",
      description: "After booking, we send you a video call link by email. Just click the link at your scheduled time.",
    },
    {
      id: 3,
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Start Your Video Call",
      description: "No special software needed! Just click and join. Talk to our doctor face-to-face from home.",
    },
    {
      id: 4,
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Get Your Plan",
      description: "Get advice, exercises, and a treatment plan. We'll help you know what to do at home.",
    },
  ];

  return (
    <section id="video-consultation" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              💻 Video Consultation
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            How Video Consultation Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get professional help from home. It's easy, safe, and saves your time!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <Card key={step.id} className="hover:shadow-xl transition-all duration-300 border-2 border-primary/10">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="text-2xl font-bold text-primary">Step {step.id}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Requirements */}
        <div className="mt-16 bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 md:p-12 border-2 border-gray-100">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">What You Need</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-foreground">Equipment:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Phone, tablet, or computer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Camera and microphone</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Internet connection</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-foreground">Preparation:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Wear comfortable clothes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Join from a quiet place</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Test your internet before</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoConsultationGuide;
