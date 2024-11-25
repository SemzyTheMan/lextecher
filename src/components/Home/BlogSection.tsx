"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Home.module.css"

const BlogSection = ({
  className,
  hideTop,
  hideButton,
}: {
  className?: string;
  hideTop?: boolean;
  hideButton?: boolean;
}) => {
  const content = [
    {
      header:
        "Online Harassment and Social Media: Understanding the Legal Implications & Reporting Mechanism in Nigeria",
      body: "Online harassment is a global menace that is constantly pervading the internet. It is a ravaging practice commonly reported...",
      route: "/blogs/online-harassment",
    },
    {
      header: "How does Cyber security relate to Data privacy?",
      body: "The strong connection between cybersecurity and data privacy is evident, with cybersecurity protecting against unauthorized access...",
      route: "/blogs/cybersecurity-and-dataprivacy",
    },
    {
      header:
        "Is the Law dead in the AI-Metaverse relationship? The Application of Law in the Metaverse",
      body: `The Metaverse is the next itinerary of the internet, which has created an avenue
for people to recreate their daily activities...`,
      route: "/blogs/the-law-state",
    },
    {
      header: `Legal Pitfalls in E-commerce: How to Draft
 Airtight Terms and Conditions for Your Online
 Store.`,
      body: "In 1980, Michael Aldrich invented online shopping which is now known as e-commerce. This invention, which has now...",
      route: "/blogs/legal-pitfalls",
    },
    {
      header: "Cryptocurrency: Where do the Regulations Tilt? ",
      body: `Cryptocurrency, as a digital innovation, has witnessed both acceptance and rejection.
Despite its widespread adoption, it cannot...`,
      route: "/blogs/cryptocurrency",
    },
    {
      header:
        "Legal Opinion on the use of Humanoid Robotics in Amazon US Warehouses",
      body: "Robots are increasingly being utilized  to perform human roles worldwide; hence, the growing concern for workplace safety...",
      route: "/blogs/legal-opinion",
    },
  ];
  const router = useRouter();
  return (
    <section className={`p-5 md:p-[4rem] !overflow-x-hidden relative ${className} `}>
      <div className={`${hideTop && "hidden"}`}>
        <h3 className="text-center text-secondary">RESOURCES</h3>
        <h2 className="text-dark38 text-center mb-16  font-raleway text-lg md:text-2xl font-semibold">
          Here are some resources to keep you updated with industry trends
        </h2>
        <h1 className="backtext text-center text-[2rem] md:text-[6rem] font-semibold absolute top-2 md:top-4 left-[50%] transform translate-x-[-50%]">
          RESOURCES
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-10 justify-items-center">
        {content.map((data, i) => (
          <BlogCard
            onClick={() => router.push(data.route)}
            imageNo={`${i + 1}`}
            header={data.header}
            body={data.body}
            key={i}
          />
        ))}
      </div>
      <div className={`flex justify-end ${hideButton && "hidden"}`}>
        <button
          onClick={() => {
            router.push("/blogs");
          }}
          className="px-6 my-10  hover:opacity-[80%] h-10 rounded-[1.25rem] text-primary bg-secondary font-semibold"
        >
          See all our blogs
        </button>
      </div>
    </section>
  );
};

export default BlogSection;

const BlogCard = ({
  imageNo,
  header,
  body,
  onClick,
}: {
  imageNo: string;
  header: string;
  body: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: ["easeIn", "easeOut"] }}
      className={`w-full  ${styles.BlogCard}`}
    >
      <div className="relative w-full   h-[250px]">
        <Image
          src={`/images/blog-${imageNo}.png`}
          fill
          alt="blog_img"
          className=""
        />
      </div>

      <h2 className="font-raleway text-base xl:text-xl md:h-[9rem]  text-dark38 font-semibold py-5">
        {header}
      </h2>
      <p className="text-grey54 text-sm xl:text-base md:h-[4rem]">{body}</p>
      <button
        onClick={onClick}
        className="pt-11 hover:opacity-50 cursor-pointer text-sm text-secondary font-semibold underline"
      >
        Read More...
      </button>
    </motion.div>
  );
};
