import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Personalized One-on-One Treatment",
      description:
        "Individualized sessions tailored to your unique needs. We carefully assess your condition and develop a customized rehabilitation plan focused on your recovery without distractions or time constraints.",
      details: "Typical session: 45 minutes. Ideal for clients seeking focused, individualized care.",
      image: "/src/assets/service1.jpg",
      features: ["Dedicated personal attention", "Flexible scheduling", "Tailored treatment plans"],
    },
    {
      id: 2,
      title: "Effective Pain Relief Therapy",
      description:
        "Utilizing gentle and evidence-based techniques to alleviate pain. Whether addressing neck, back, knee, or shoulder discomfort, our methods are designed for safe and lasting relief.",
      details: "Sessions combine manual therapy and guided exercises to reduce pain and restore function.",
      image: "/src/assets/service2.jpg",
      features: ["Rapid pain reduction", "Non-invasive approaches", "Minimized reliance on medication"],
    },
    {
      id: 3,
      title: "Convenient Online Video Consultations",
      description:
        "Access professional physiotherapy care remotely through secure video sessions. Receive expert guidance from the comfort and safety of your home, saving travel time without compromising quality.",
      details: "Remote follow-ups and exercise progressions provided. Great for busy or remote patients.",
      image: "/src/assets/service3.jpg",
      features: ["Remote access", "Flexible and time-saving", "Easy appointment booking"],
    },
    {
      id: 4,
      title: "Posture Improvement Programs",
      description:
        "Learn scientifically supported techniques to improve your posture. Enhancing how you sit and stand reduces pain and increases energy for daily activities and work.",
      details: "Includes ergonomic advice and daily habit changes to produce lasting benefits.",
      image: "/src/assets/service4.jpg",
      features: ["Evidence-based exercises", "Practical daily posture tips", "Long-term pain prevention"],
    },
    {
      id: 5,
      title: "Specialized Back & Neck Pain Relief",
      description:
        "Focused treatment for common spinal issues using clinically proven protocols that deliver noticeable improvement within days, enhancing your comfort and mobility.",
      details: "Personalized spinal programs that focus on restoring mobility and reducing flare-ups.",
      image: "/src/assets/service5.jpg",
      features: ["Targeted therapies", "Fast functional recovery", "Clinically validated methods"],
    },
    {
      id: 6,
      title: "Sports Injury and Fitness Rehabilitation",
      description:
        "Supporting athletes and active individuals through safe, progressive rehabilitation. Our programs help you recover fully and return stronger to your sport or fitness routine.",
      details: "Performance-focused rehab with return-to-sport planning and strength progression.",
      image: "/src/assets/service6.jpg",
      features: ["Athlete-centric care", "Evidence-guided recovery", "Strength and safety focus"],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              💼 Our Services
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6"
          >
            How We Support Your Recovery
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Evidence-based physiotherapy treatments designed to improve your health, mobility, and quality of life—delivered with personalized care.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Animated Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 h-full flex flex-col cursor-pointer">
                {/* Animated Image Section */}
                <div className="relative overflow-hidden h-64 bg-secondary">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6 space-y-4 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-base md:text-lg mt-2"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0.95 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Animated Features List */}
                    <motion.div 
                      className="space-y-2 mt-4"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-primary flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-base md:text-lg text-gray-600 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Additional details */}
                  <motion.p 
                    className="text-sm text-muted-foreground mt-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    {service.details}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Call to Action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          className="mt-16 text-center"
        >
          <motion.p 
            className="text-lg text-muted-foreground mb-6"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ready to begin your journey to better health?
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="gap-2 relative overflow-hidden">
              <motion.span
                className="relative z-10"
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.span>
              
              <motion.span
                className="absolute inset-0 flex items-center justify-center text-white z-20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Get Started Now!
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.span>
              
              {/* Button hover effect background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;