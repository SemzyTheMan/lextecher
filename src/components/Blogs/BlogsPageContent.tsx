import Image from "next/image";
import { Searchicon } from "../icons/Others";
import styles from "./Blogs.module.css";
import BlogSection from "../Home/BlogSection";

const BlogsPageContent = () => {
  return (
    <div>
      <div className={`${styles.Header} h-[36.5rem] w-full`}>
        <div className="w-full h-full px-[18rem] text-center gap-7 flex flex-col justify-center items-center">
          <p className="text-white font-semibold tracking-widest">OUR BLOGS</p>
          <h1 className="font-raleway text-[2.5rem] text-dark38  font-bold">
            Articles to keep you updated with industry trends
          </h1>
          <p className="text-white text-[1.25rem] ">
            Our blogs are written from very well-researched and well known
            writers to provide you with the best articles and content for your
            reading pleasure.
          </p>
        </div>
      </div>
      <div className="p-[4rem]">
        <div className="relative w-[20rem]  h-12 ">
          <Searchicon className="absolute font-medium top-[50%] transform translate-y-[-50%] left-5   " />
          <input
            placeholder="Search"
            className="w-full h-full border border-greyC4 text-greyC4 text-lg font-medium  pl-[3rem] rounded-lg outline-0"
            type="text"
          />
        </div>
      </div>
      <div className="p-[4rem] ">
        <h2 className="py-[2rem] font-bold text-dark38 font-raleway text-[1.75rem]">
          Latest release
        </h2>
        <div className={`${styles.LatestContainer} grid grid-cols-2 `}>
          <Image
            width={612}
            height={496.75}
            src={"/images/latest_blog.jpeg"}
            alt="blog_latest"
            className="rounded-[1rem]"
          />
          <div className="flex flex-col gap-4 px-[2rem]">
            <p className="text-[12px] pt-[2rem]">13 November 2024</p>
            <h1 className="font-bold font-raleway text-[2.25rem] text-dark38">
              Online Harassment and Social Media: Understanding the Legal
              Implications & Reporting Mechanism in Nigeria
            </h1>
            <p className="text-[#111111]">
              Online harassment is a global menace that is constantly pervading
              the internet. It is a ravaging practice commonly reported...
            </p>
            <p className="underline text-secondary text-lg cursor-pointer hover:opacity-80">
              Read More...
            </p>
          </div>
        </div>
      </div>
      <div className="p-[4rem] ">
        <h2 className="py-[2rem] font-bold text-dark38 font-raleway text-[1.75rem]">
          All Posts
        </h2>
        <BlogSection hideButton hideTop className="p-0" />
      </div>
    </div>
  );
};

export default BlogsPageContent;
