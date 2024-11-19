import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "../icons/FooterIcons";

const Footer = () => {
  const headerClass = "text-secondary text-sm md:text-xl font-semibold mb-6";

  return (
    <>
      <section className="md:p-[4rem] px-5 py-[3rem]  grid relative gap-8 text-white md:grid-cols-12 bg-primary">
        <h2 className="font-bold text-[4rem] md:text-[13.75rem] footerbacktext absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ">
          LEXTECHER
        </h2>
        <div className="md:col-span-3">
          <Image
            src={"/images/logo.png"}
            className="mr-auto mb-8"
            width={200}
            height={71.19}
            alt="logo"
          />
          <p className="md:leading-8 text-[12px] w-[75%] md:w-full md:text-base">
            Your trusted legal partner for innovation, inventions, and tech
            policies worldwide.
          </p>
        </div>
        <div className="flex items-start text-[12px] md:text-base gap-[3rem] md:hidden">
          <div className=" ">
            <h2 className={`${headerClass} `}>Company</h2>
            <p className="mb-8 cursor-pointer">About us</p>
            <p className="cursor-pointer">Our Team</p>
          </div>
          <div className=" ">
            <h2 className={`${headerClass}`}>Resources</h2>
            <p className="cursor-pointer">Resources</p>
          </div>
        </div>
        <div className="md:col-span-2 hidden md:block">
          <h2 className={`${headerClass}`}>Company</h2>
          <p className="mb-8 cursor-pointer">About us</p>
          <p className="cursor-pointer">Our Team</p>
        </div>
        <div className="md:col-span-2 hidden md:block">
          <h2 className={`${headerClass}`}>Resources</h2>
          <p className="cursor-pointer">Resources</p>
        </div>
        <div className="md:col-span-5 text-[12px] md:text-base  md:justify-self-end flex flex-col gap-8">
          <h2 className={`${headerClass}`}>Contacts</h2>
          <div className="flex items-center gap-3">
            <MailIcon />
            <p>lextechkeradvisory@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon />
            <p className="font-bold">(+234) 7083963708, (+234) 8142485201</p>
          </div>
          <div className="flex gap-3 items-start">
            <FacebookIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
          </div>
        </div>
      </section>
      <div className="md:pl-[4rem] px-5  py-2 md:py-6 bg-white">
        <p className="text-grey54 text-[10px] md:text-sm">
          Copyright © 2024 LexTechker. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
