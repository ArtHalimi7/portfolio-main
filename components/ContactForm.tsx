"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MagicButton from "./ui/MagicButton";
import { FaPaperPlane, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./ui/GradientBg";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.current) return;

    // Prevent duplicate submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_edxi3zr", // Replace with your service ID
        "template_k7mg7ap", // Replace with your template ID
        form.current,
        "-NWp731-hJ2KBhmcB" // Replace with your public key
      )
      .then(
        () => {
          setSubmitted(true);
          setIsSubmitting(false);
          form.current?.reset();
          // Add a timeout to reset the form after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-[-10px]">
      {/* Left side - Gradient Background */}
      <div className="hidden lg:block w-full lg:w-4/12 h-full min-h-[550px] relative rounded-l-2xl overflow-hidden">
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0"
          className="opacity-80"
          interactive={true}
          size="100%"
          gradientBackgroundEnd="rgb(157, 78, 221)"
        />
      </div>

      {/* Right side - Contact Form */}
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto p-8 backdrop-blur-xl rounded-r-2xl border border-white/10 bg-black/20"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center text-[#9d4edd] font-medium p-8 border border-[#9d4edd] rounded-lg bg-black/50"
            >
              <FaPaperPlane className="w-12 h-12 mx-auto mb-4 text-[#9d4edd] drop-shadow-[0_0_10px_rgba(157,78,221,0.5)]" />
              <span className="text-white text-lg">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </span>
            </motion.div>
          ) : (
            <form
              ref={form}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()} // Only prevent default, don't trigger submit
            >
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Get In Touch
              </h2>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="w-5 h-5 text-[#9d4edd] drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]" />
                </div>
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 px-4 py-4 bg-black/50 backdrop-blur-sm border border-[#9d4edd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d4edd] focus:border-transparent text-white"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MdEmail className="w-5 h-5 text-[#9d4edd] drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]" />
                </div>
                <motion.input
                  whileFocus="focus"
                  variants={inputVariants}
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your Email"
                  className="w-full pl-12 px-4 py-4 bg-black/50 backdrop-blur-sm border border-[#9d4edd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d4edd] focus:border-transparent text-white"
                />
              </div>

              <div className="relative">
                <div className="absolute left-0 top-4 pl-4 pointer-events-none">
                  <BiMessageRoundedDetail className="w-5 h-5 text-[#9d4edd] drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]" />
                </div>
                <motion.textarea
                  whileFocus="focus"
                  variants={inputVariants}
                  name="message"
                  required
                  placeholder="Your Message"
                  rows={4}
                  className="w-full pl-12 px-4 py-4 bg-black/50 backdrop-blur-sm border border-[#9d4edd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9d4edd] focus:border-transparent text-white resize-none"
                />
              </div>

              <motion.div
                className="flex justify-center pt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MagicButton
                  title={isSubmitting ? "Sending..." : "Send Message"}
                  icon={<FaPaperPlane className="w-4 h-4" />}
                  position="right"
                  handleClick={handleSubmit}
                />
              </motion.div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
