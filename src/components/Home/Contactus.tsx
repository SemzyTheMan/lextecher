import Image from "next/image";
import { ContactDate } from "../icons/HomeIcons";
import styles from "./Home.module.css"
const Contactus = () => {
  return (
    <section className={`p-[4rem] grid grid-cols-2 place-items-center bg-lightGreen ${styles.Background}`}>
      <div className="relative">
        <h2 className="text-secondary">CONTACT</h2>
        <p className="text-primary  mb-8 mt-5  font-raleway text-2xl font-semibold">
          Here is how you can reach us
        </p>
        <h2 className="backtext text-center text-[6rem] font-semibold absolute -top-8 left-0 ">
          CONTACT
        </h2>
        <p className="text-grey54 mb-[4rem] leading-9">
          {` We're here to help and answer any question you might have. We look
          forward to hearing from you. We'll assess your situation and offer
          opinion on what you might need to do next. For general inquiries,
          please fill out the form below or email us at`}{" "}
          <span className="italic font-semibold text-[#05A58D]">
            lextechkeradvisory@gmail.com
          </span>
        </p>

        <form
          className="w-[25rem] flex flex-col gap-5"
          action="
        "
        >
          <input type="text" className={`${inputClass}`} placeholder="Name" />
          <input type="text" className={`${inputClass}`} placeholder="Email" />
          <textarea
            className="border text-grey54 rounded-[1.25rem] outline-0 p-4 border-greyD9  h-[7.1875rem]"
            placeholder="Message"
          />
          <button className="text-primary mb-3 mt-8 text-lg font-semibold bg-secondary h-[3.75rem] rounded-[1.25rem]">
            Submit
          </button>
          <button className="flex justify-center text-white text-lg font-semibold bg-primary rounded-[1.25rem] h-[3.75rem] items-center gap-3">
            <ContactDate />
            <p>Book a consultation</p>
          </button>
        </form>
      </div>
      <Image
        src="/images/contact_img.png"
        alt="contactus"
        width={450}
        height={433}
      />
    </section>
  );
};

export default Contactus;
const inputClass =
  "border text-grey54 rounded-[1.25rem] px-4 border-greyD9 h-[3.75rem] outline-0";