"use client";
import React, { useEffect, useRef } from "react";
import {
  ContractIcon,
  CyberSecurityIcon,
  DataPrivacyIcon,
  IntellectualIcon,
  LegalAdvisoryIcon,
  PartnershipIcon,
  RegulatoryIcon,
  ResearchIcon,
  TechAdvisoryIcon,
} from "../icons/HomeIcons";
import styles from "./Home.module.css";
import { useScroll } from "@/context/ScrollContext";
import { motion } from "framer-motion";

const OurServices = () => {
  const { registerSection } = useScroll();
  const sectionRef = useRef(null);

  useEffect(() => {
    registerSection("services", sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.Background} p-5 md:p-[4rem] w-full relative  h-fit bg-lightGreen`}
    >
      <h3 className="text-center text-secondary">OUR SERVICES</h3>
      <h1 className="backtext text-center text-[2rem] md:text-[6rem] text-nowrap font-semibold absolute top-[1rem] md:top-0 left-[50%] transform translate-x-[-50%]">
        OUR SERVICES
      </h1>
      <p className="text-dark38 text-center mb-16  font-raleway text-2xl font-semibold">{`What we do & how we can help you`}</p>
      <div className="grid md:grid-cols-3 gap-14 justify-items-center">
        <ContentCard
          icon={<ResearchIcon />}
          header="Research & Writing"
          body="We carry out thorough research and write articles on legal developments, analyzing emerging tech trends, inventions and innovations, and tech policies worldwide"
        />
        <ContentCard
          icon={<CyberSecurityIcon />}
          header="Cybersecurity"
          body="We provide cybersecurity services by helping businesses comply with laws, handle breaches, and implement best practices."
        />
        <ContentCard
          icon={<IntellectualIcon />}
          header="Intellectual Property"
          body="We specialize in protecting and enforcing intellectual property rights including patents, trademarks, copyrights, and trade secrets."
        />
        <ContentCard
          icon={<DataPrivacyIcon />}
          header="Data Privacy & Protection"
          body="We navigate laws, and proffer advice on compliance and data protection strategies."
        />
        <ContentCard
          icon={<ContractIcon />}
          header="Contract Negotiation & Drafting"
          body="We draft and negotiate tech-related contracts."
        />
        <ContentCard
          icon={<PartnershipIcon />}
          header="Partnerships & Training"
          body="We partner with various industry stakeholders to work on projects that require both legal and tech expertise, and provide training services where required."
        />
        <ContentCard
          icon={<TechAdvisoryIcon />}
          header="Tech Advisory Role"
          body="We help Tech start-ups build from the Lab to the market. We also help incumbent firms leverage breakthrough tecnologies to remain relevant."
        />
        <ContentCard
          icon={<LegalAdvisoryIcon />}
          header="Legal Advisory Role"
          body="We provide legal advisory services to Tech startups and incumbents, helping them navigate compliance and legal challenges."
        />
        <ContentCard
          icon={<RegulatoryIcon />}
          header="Regulatory Compliance"
          body="We implement and maintain processes and practices that ensure adherence to relevant laws, regulations, and industry standards."
        />
      </div>
    </section>
  );
};

export default OurServices;

const ContentCard = ({
  icon,
  header,
  body,
}: {
  icon: React.ReactNode;
  header: string;
  body: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="w-full max-w-[20.125rem] flex flex-col gap-3 items-center place-items-center"
    >
      {icon}
      <h1 className=" md:text-lg font-raleway text-center font-semibold">{header}</h1>
      <p className="text-sm md:text-base text-center leading-8 text-grey54">
        {body}
      </p>
    </motion.div>
  );
};
