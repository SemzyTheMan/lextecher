import Image from "next/image";
import { InputIcon } from "../icons/HomeIcons";
import styles from "./Home.module.css";

const HeaderSection = () => {
  return (
    <header
      className={`w-full grid grid-cols-2  h-[37.5rem] place-items-center px-[4rem] bg-primary ${styles.HeaderBg}`}
    >
      <div>
        <p className="text-white text-[2.5rem] font-semibold">
          Navigating legal complexities{" "}
          <span className="text-lightOrange italic">should not</span> hinder
          your tech innovations. Let’s grow your company, not your legal
          headaches.
        </p>
        <div className="relative mt-[3rem] bg-white  w-[27rem] h-[3.5rem] rounded-[1.25rem]">
          <input
            type="text"
            placeholder="Ask us a question..."
            className="w-full text-grey66 pr-[5rem]  pl-[2.5rem] outline-0 h-full rounded-[1.25rem]"
          />
          <div className="absolute  h-[3.5rem] hover:opacity-[90%] cursor-pointer w-[4.75rem] grid place-items-center bg-secondary rounded-[1.25rem] top-0 right-0">
            <InputIcon />
          </div>
        </div>
      </div>
      <Image
        src={"/images/header_img.png"}
        width={350}
        height={340}
        alt="header_img"
      />
    </header>
  );
};

export default HeaderSection;
