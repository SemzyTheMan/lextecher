import Image from "next/image";
import AboutImg from "../assets/about_us.png";
const AboutUsSection = () => {
  return (
    <section className="h-[42.75rem] w-full grid grid-cols-2 place-items-center px-[4rem]">
      <Image src={AboutImg} width={450} height={410} alt="about_img" />
      <div className="relative">
        <h3 className="text-secondary">ABOUT US</h3>
        <h2 className="text-dark38 mt-6 mb-12 font-raleway font-semibold text-2xl">
          Who we are{" "}
        </h2>
        <p className="text-grey54 leading-9">
          At Lex Techker Advisory, we specialize in helping tech startups
          navigate and overcome complex legal hurdles, guiding them from the lab
          to the market with confidence. Our services include comprehensive
          legal research, expert writing, and tailored advisory solutions
          designed to ensure compliance and promote sustainable growth. We
          provide strategic counsel that empowers startups to mitigate risks,
          protect their intellectual property, and stay ahead in a competitive
          market. Our mission is to be a trusted partner for innovation,
          ensuring that legal challenges never stand in the way of progress.
        </p>
        <h1 className="backtext font-raleway text-[6rem] leading-[6rem] font-semibold absolute -top-[1.4rem] left-0">ABOUT US </h1>
      </div>
    </section>
  );
};

export default AboutUsSection;
