"use client";
import Image from "next/image";
import AboutImg from "../assets/about_us.png";
import { useEffect, useRef } from "react";
import { useScroll } from "@/context/ScrollContext";
import { motion } from "framer-motion";
const AboutUsSection = () => {
  const { registerSection } = useScroll();
  const sectionRef = useRef(null);

  useEffect(() => {
    registerSection("about", sectionRef.current);
  }, []);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="md:h-[42.75rem] mt-[3rem] md:mt-0 w-full flex flex-col-reverse md:grid md:grid-cols-2 place-items-center px-8 md:px-[4rem]"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: ["easeIn", "easeOut"] }}
        className="relative my-[2rem]  md:my-0 w-[250px] h-[237px] md:w-[450px] md:h-[410px]"
      >
        <Image src={AboutImg} fill alt="about_img" />
      </motion.div>

      <div className="relative">
        <motion.h3
          variants={textVariants}
          initial={"hidden"}
          whileInView={"show"}
          className="text-secondary"
        >
          ABOUT US
        </motion.h3>
        <motion.h2
          variants={textVariants}
          initial={"hidden"}
          whileInView={"show"}
          className="text-dark38 md:mt-6 mb-12 font-raleway font-semibold text-lg  md:text-2xl"
        >
          Who we are{" "}
        </motion.h2>
        <motion.p
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: ["easeIn", "easeOut"] }}
          className="text-grey54 text-sm  md:text-base leading-7 md:leading-9"
        >
          At Lex Techker Advisory, we specialize in helping tech startups
          navigate and overcome complex legal hurdles, guiding them from the lab
          to the market with confidence. Our services include comprehensive
          legal research, expert writing, and tailored advisory solutions
          designed to ensure compliance and promote sustainable growth. We
          provide strategic counsel that empowers startups to mitigate risks,
          protect their intellectual property, and stay ahead in a competitive
          market. Our mission is to be a trusted partner for innovation,
          ensuring that legal challenges never stand in the way of progress.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="backtext font-raleway text-[2rem] md:text-[6rem] md:leading-[6rem] font-semibold absolute top-0 md:-top-[1.4rem] left-0"
        >
          ABOUT US{" "}
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutUsSection;
