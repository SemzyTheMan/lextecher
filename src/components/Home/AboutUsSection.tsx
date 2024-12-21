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
      className="md:h-[42.75rem] overflow-x-hidden mt-[3rem] md:mt-0 w-full flex flex-col-reverse md:grid md:grid-cols-2 place-items-center px-8 md:px-[4rem]"
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
          At Lex Techker Advisory, we specialize in a rich blend of
          technological/digital innovation expertise and legal knowledge.
          <br />
          With a focus on moving Nigeria and the general African continent to
          become a top player in the global Tech/digital innovation market, we
          help tech start-ups overcome complex tech entrepreneurship and legal
          hurdles, guiding them from the lab to the market through our
          expertise.
          <br />
          Our services include comprehensive research and writing services, and
          tailored consultancy solutions designed to help your startup scale in
          the global market.
          <br />
          Our mission is to be your trusted partner for innovations, ensuring
          that you overcome every challenge standing in the way of the progress
          of your Tech startup.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="backtext font-raleway text-[2rem] md:text-[6rem] md:leading-[6rem] font-semibold absolute top-0 md:-top-[1.4rem] left-0"
        >
          ABOUT US{" "}
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutUsSection;
