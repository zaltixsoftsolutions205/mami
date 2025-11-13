import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Mail, MessageSquare, Video } from "lucide-react";
import { useState } from "react";

const Appointment = () => {
  // Only one consultation type now: video
  const consultationType = "video";

  return (
    <section id="contact" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-foreground">Schedule an Appointment</CardTitle>
              <p className="text-gray-600 mt-2">Online Consultation: Connect from anywhere</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Info message for video consultation */}
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-gray-700">
                  💻 Meet your healthcare provider online from the comfort of your home. Once you book, you’ll receive a secure video link via email for your scheduled consultation.
                </p>
              </div>

              {/* User details */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </Label>
                <Input id="email" type="email" placeholder="example@mail.com" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Select Date
                  </Label>
                  <Input id="date" type="date" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Select Time
                  </Label>
                  <Input id="time" type="time" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Describe Your Concern
                </Label>
                <Textarea
                  id="message"
                  placeholder="Example: I have been experiencing back pain for the past two weeks, especially when sitting."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                Confirm Booking
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-4">About Our Clinic</h3>
                <p className="opacity-90 leading-relaxed">
                  Our dedicated healthcare professionals have supported hundreds of patients on their journey to better health. We strive to provide personalized care with compassion, expertise, and attention to detail.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-primary-foreground/20">
                <div>
                  <h4 className="font-semibold mb-2">Consultation Hours</h4>
                  <ul className="space-y-1 opacity-90">
                    <li>• Monday – Friday: 9:00 AM – 5:00 PM</li>
                    <li>• Saturday: 10:00 AM – 2:00 PM</li>
                    <li>• Sunday: Closed</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="opacity-90">+91 95330 79819</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="opacity-90"> drramyakrishna.expert@gmail.com</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Follow Us</h4>
                  <p className="opacity-90">@mamiphysiocare (Twitter, Instagram, Facebook)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
