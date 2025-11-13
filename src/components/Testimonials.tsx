import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Shiva kumar Kumar",
      text: "I visited BM Rehabilitation Center for severe shoulder pain due to a sports injury. Despite undergoing multiple investigations elsewhere, I couldn't find the root cause or relief. However, at BM Rehab, Dr. Ramyakrishna, a highly skilled physiotherapy specialist, quickly identified the issue and provided effective treatment. Within just two days, I felt significantly better. I highly recommend BM Rehabilitation Center to anyone in need of expert physiotherapy care",
      rating: 5,
    },
    {
      id: 2,
      name: "Naveen Kumar Alampally",
      text: "I will strongly suggest dr . Ramyakrishna mamidala (Physiotherapist) madam.She listen the complications of patient with patience and provides proper treatment .Thank you very much madam",
      rating: 5,
    },
    {
      id: 3,
      name: "Singireddy Prathibha Reddy",
      text: "I visited BM Rehabilitation Center with severe back pain, and I was extremely impressed with their services. The staff is not only highly skilled but also exceptionally friendly and cooperative, making the entire experience very comfortable. The center maintains excellent standards, and their dedication to patient care is commendable. Thanks to their expert treatment, I am truly happy with the services at BM Rehabilitation Center and highly recommend it to anyone seeking quality physiotherapy care! Thanks to Dr Ramyakrishna",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-base font-semibold">
              ⭐ Our Clients
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">What People Say</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from people who got better with our help
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
