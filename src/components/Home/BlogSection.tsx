import Image from "next/image";

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
    },
    {
      header: "How does Cyber security relate to Data privacy?",
      body: "The strong connection between cybersecurity and data privacy is evident, with cybersecurity protecting against unauthorized access...",
    },
    {
      header:
        "Is the Law dead in the AI-Metaverse relationship? The Application of Law in the Metaverse",
      body: `The Metaverse is the next itinerary of the internet, which has created an avenue
for people to recreate their daily activities...`,
    },
    {
      header: `Legal Pitfalls in E-commerce: How to Draft
 Airtight Terms and Conditions for Your Online
 Store.`,
      body: "In 1980, Michael Aldrich invented online shopping which is now known as e-commerce. This invention, which has now...",
    },
    {
      header: "Cryptocurrency: Where do the Regulations Tilt? ",
      body: `Cryptocurrency, as a digital innovation, has witnessed both acceptance and rejection.
Despite its widespread adoption, it cannot...`,
    },
    {
      header:
        "Legal Opinion on the use of Humanoid Robotics in Amazon US Warehouses",
      body: "Robots are increasingly being utilized  to perform human roles worldwide; hence, the growing concern for workplace safety...",
    },
  ];

  return (
    <section className={`p-[4rem] relative ${className}`}>
      <div className={`${hideTop && "hidden"}`}>
        <h3 className="text-center text-secondary">BLOG</h3>
        <h2 className="text-dark38 text-center mb-16  font-raleway text-2xl font-semibold">
          Here are some resources to keep you updated with industry trends
        </h2>
        <h1 className="backtext text-center text-[6rem] font-semibold absolute top-4 left-[50%] transform translate-x-[-50%]">
          RESOURCES
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 justify-items-center">
        {content.map((data, i) => (
          <BlogCard
            imageNo={`${i + 1}`}
            header={data.header}
            body={data.body}
            key={i}
          />
        ))}
      </div>
      <div className={`flex justify-end ${hideButton && "hidden"}`}>
        <button className="px-6 my-10  hover:opacity-[80%] h-10 rounded-[1.25rem] text-primary bg-secondary font-semibold">
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
}: {
  imageNo: string;
  header: string;
  body: string;
}) => {
  return (
    <div className=" ">
      <Image
        src={`/images/blog-${imageNo}.png`}
        width={360}
        height={250}
        alt="blog_img"
      />
      <h2 className="font-raleway text-xl h-[9rem]  text-dark38 font-semibold py-5">
        {header}
      </h2>
      <p className="text-grey54 h-[4rem]">{body}</p>
      <button className="pt-11 text-sm text-secondary font-semibold underline">
        Read More...
      </button>
    </div>
  );
};
