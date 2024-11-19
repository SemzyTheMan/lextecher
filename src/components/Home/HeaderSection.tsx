"use client";
import Image from "next/image";
import { InputIcon } from "../icons/HomeIcons";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
const HeaderSection = () => {
  return (
    <header
      className={`w-full grid md:grid-cols-2 !overflow-x-hidden   md:h-[37.5rem] place-items-center px-4 md:px-[4rem] bg-primary ${styles.HeaderBg}`}
    >
      <div className="mt-[2rem] md:mt-0">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="text-white text-[1.25rem] w-[80%] md:w-auto  leading-[2.5rem] md:leading-normal md:text-[2.5rem] font-semibold"
        >
          Navigating legal complexities{" "}
          <span className="text-lightOrange italic">should not</span> hinder
          your tech innovations. Let’s grow your company, not your legal
          headaches.
        </motion.p>
        <div className="relative w-[75%]  mt-[3rem] bg-white  md:w-[27rem] h-[2.5rem] md:h-[3.5rem] rounded-[1.25rem]">
          <input
            type="text"
            placeholder="Ask us a question..."
            className=" w-full text-grey66 pr-[5rem]  pl-[2.5rem] outline-0 h-full rounded-[1.25rem]"
          />
          <div className="absolute  h-[2.5rem] md:h-[3.5rem] hover:opacity-[90%] cursor-pointer  w-[3.5rem] md:w-[4.75rem] grid place-items-center bg-secondary rounded-[1.25rem] top-0 right-0">
            <InputIcon />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: ["easeIn", "easeOut"] }}
        className="relative w-[250px] h-[237px] my-10 md:my-0 md:w-[350px] md:h-[340px]"
      >
        <Image src={"/images/header_img.png"} fill alt="header_img" />
      </motion.div>
    </header>
  );
};

export default HeaderSection;
