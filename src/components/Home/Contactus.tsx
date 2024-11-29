"use client";
import Image from "next/image";
import { ContactDate } from "../icons/HomeIcons";
import styles from "./Home.module.css";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "@/context/ScrollContext";

const Contactus = () => {
  const { registerSection } = useScroll();
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    registerSection("contact", sectionRef.current);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus(" Message sent successfully!");
      } else {
        setStatus("An Error occurred, please try again");
      }
    } catch (error) {
      setStatus(`${error}`);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="#contact"
      className={`p-5 md:p-[4rem]  grid md:grid-cols-2 place-items-center bg-lightGreen ${styles.Background}`}
    >
      <div className="relative">
        <h2 className="text-secondary">CONTACT</h2>
        <p className="text-primary  mb-8 md:mt-5  font-raleway text-lg md:text-2xl font-semibold">
          Here is how you can reach us
        </p>
        <h2 className="backtext text-center text-[2rem] md:text-[6rem] font-semibold absolute -top-3 md:-top-8 left-0 ">
          CONTACT
        </h2>
        <p className="text-grey54 text-sm md:text-base mb-[4rem] leading-7 md:leading-9">
          {` We're here to help and answer any question you might have. We look
          forward to hearing from you. We'll assess your situation and offer
          opinion on what you might need to do next. For general inquiries,
          please fill out the form below or email us at`}{" "}
          <span className="italic font-semibold text-[#05A58D]">
            lextechkeradvisory@gmail.com
          </span>
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="w-full sm:w-[25rem] flex flex-col gap-5"
          action="
        "
        >
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            className={`${inputClass}`}
            placeholder="Name"
          />
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="text"
            className={`${inputClass}`}
            placeholder="Email"
          />
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="border text-grey54 rounded-[1.25rem] outline-0 p-4 border-greyD9  h-[7.1875rem]"
            placeholder="Message"
          />
          <button
            disabled={formData.message == "" || status == "Sending..."}
            type="submit"
            className="text-primary disabled:opacity-30 mb-1 mt-8 text-lg font-semibold bg-secondary h-[3.75rem] rounded-[1.25rem]"
          >
            Submit
          </button>
          <p className="text-primary py-2 text-lg text-center">{status}</p>
        </form>
        <button className=" w-full  sm:w-[25rem]  text-white text-lg font-semibold bg-primary rounded-[1.25rem] h-[3.75rem] ">
          <a
            className="flex justify-center items-center gap-3"
            href="https://calendly.com/lextechkeradvisory/consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactDate />
            <p>Book a consultation</p>
          </a>
        </button>
      </div>
      <div className="relative w-[250px] my-[2rem] md:my-0 h-[237px] md:w-[450px] md:h-[433px]">
        <Image src="/images/contact_img.png" alt="contactus" fill />
      </div>
    </section>
  );
};

export default Contactus;
const inputClass =
  "border text-grey54 rounded-[1.25rem] px-4 border-greyD9 h-[3.75rem] outline-0";
