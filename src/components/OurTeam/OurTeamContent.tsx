import Image from "next/image";
import styles from "./OurTeam.module.css";

const OurTeamContent = () => {
  const nameClass =
    "w-[16rem] text-dark38 font-semibold leading-9 pt-3 md:pt-0 font-raleway text-xl md:text-[2rem]";
    const roleClass = "py-3 md:py-5 text-greyE8 md:text-secondary md:text-xl ";
  return (
    <section>
      <div className={`${styles.Header} h-[28.625rem] md:h-[36.5rem] w-full`}>
        <div className="w-full h-full gap-7 flex flex-col justify-center items-center">
          <p className="text-white font-semibold tracking-widest">OUR TEAM</p>
          <h1 className="font-raleway text-[2.5rem] text-dark38  font-bold">
            Meet our Team
          </h1>
        </div>
      </div>
      <div className="p-5 py-[3rem] md:p-[4rem] grid md:grid-cols-[1fr_2fr] md:gap-[6rem]">
        <MyImage src={"/images/team-1.jpeg"} />
        <div>
          <h1 className={`${nameClass}`}>Iyinpemi Adegbenga</h1>
          <p className={`${roleClass}`}>Founder</p>
          <div className="flex flex-col gap-7 text-sm md:text-base text-grey54 leading-7 md:leading-9">
            <p>
              Iyinpemi is a law graduate from the University of Lagos. She is a
              legal researcher, writer, and tech consultant. Growing up with an
              unexplainable love for innovations, Iyinpemi was thrilled at her
              discovery of this fast-growing legal field called Technology law.
            </p>
            <p>
              {" "}
              Starting up as just a writing platform, Lex Techker began as a
              group of girlfriends posting insightful content about Techlaw on
              their social media pages. Gradually, it began to mean more than
              just a writing platform as it quickly progressed into a team of
              like-minded individuals building a Techlaw advisory. 
            </p>
            <p>
              Driven by a quest for excellence, Iyinpemi took advantage of the
              situation and interned at various law firms, including Habeeb
              Oredola (Barristers and Solicitors) where she acquired significant
              experience, particularly in legal research, legal opinion
              drafting, and legal writing. She has earned certificates of
              internship from leading platforms like the Hilton Top Solicitors
              Virtual Female Internship and JIIPCC Mentorship and Internship
              Programme. 
            </p>
            <p>
              {" "}
              With her strong desire for personal growth, Iyinpemi participated
              in an advanced masterclass on Fintech contracts with Musstarred
              and holds an NFT certificate in Web3 marketing from Hive3 and a
              certificate in intellectual property from WIPO. She also holds a
              certificate in  Harvard University’s online course on Technology
              Entrepreneurship: from Lab to Market. Thus, Iyinpemi is an expert
              who continues to develop her legal knowledge across various fields
              of law. 
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 py-[3rem] md:p-[4rem] bg-lightGreen flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] md:gap-[6rem]">
        <div>
          <h1 className={`${nameClass}`}>Temilola Akinola</h1>
          <p className={`${roleClass}`}>Co-Founder</p>
          <div className="flex flex-col gap-7 text-sm md:text-base text-grey54 leading-7 md:leading-9">
            <p>
              Temilola Akinola is a law graduate from the University of Lagos.
              She is a legal researcher, writer, and tech consultant.
            </p>
            <p>
              Dedicated to the core values of Lex Techker Advisory, Temilola
              prioritizes learning and personal development by taking courses in
              cybersecurity. She is also currently an intern at the Hilton Top
              Solicitors Female Virtual Internship Programme. Temilola is the
              Head of the Directorate of Partnership and Strategies of WALSA
              (West African Law Students Association).
            </p>
          </div>
        </div>
        <MyImage src={"/images/team-2.jpeg"} />
      </div>
      <div className="p-5 py-[3rem] md:p-[4rem] grid md:grid-cols-[1fr_2fr] md:gap-[6rem]">
        <MyImage src={"/images/team-3.jpeg"} />
        <div>
          <h1 className={`${nameClass}`}>Sunmibola Onifade</h1>
          <p className={`${roleClass}`}>Co-Founder</p>
          <div className="flex flex-col gap-7 text-sm md:text-base text-grey54 leading-7 md:leading-9">
            <p>
              Sunmibola Onifade is a law graduate from the University of Lagos.
              She is a Legal researcher and writer
            </p>
            <p>
              Having a great interest in technology law, Sunmi joined the duo in
              research and writing, posting insightful content on her social
              media pages.
            </p>
            <p>
              As an advocate for personal development, Sunmi has interned in
              reputable law firms like Afe Babalola & Co and The Law Crest LLP.
              Through this avenue, she has enhanced her legal research and
              writing skills.
            </p>
            <p>
              She is a certified Associate of the Institute of Chartered
              Mediators and Conciliators with a solid foundation in mediation
              and conciliation. Sunmibola also has experience writing articles
              on technology law topics such as Intellectual Property and Data
              Privacy.
            </p>
            <p>
              With her strong passion for technology law, she is determined to
              address the legal complexities of the tech industry.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 py-[3rem] md:p-[4rem] bg-lightGreen flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] md:gap-[6rem]">
        <div>
          <h1 className={`${nameClass}`}>Oluwatobiloba Aturu</h1>
          <p className={`${roleClass}`}>Legal Researcher</p>
          <div className="text-sm md:text-base text-grey54 leading-7 md:leading-9">
            <p>
              Oluwatobiloba Aturu is a Law student at the University of Lagos.
              He is among the Legal researchers and writers at Lex Techker where
              he provides profound and practical guidance to help clients
              mitigate potential risks. Over time, he has developed and expanded
              his knowledge of technology law and is well-versed in topics such
              as robotics, user-generated content, and e-commerce. Passionate
              about the intersection of technology and law, Tobiloba can think
              critically and this has made him able to communicate complex
              concepts in a more relatable way. He possesses Public speaking,
              editing, and proficiency in MS Office as a skill.
            </p>
          </div>
        </div>
        <MyImage src={"/images/team-4.jpeg"} />
      </div>
      <div className="p-5 py-[3rem] md:p-[4rem] grid md:grid-cols-[1fr_2fr] md:gap-[6rem]">
        <MyImage src={"/images/team-5.jpeg"} />
        <div>
          <h1 className={`${nameClass}`}>Femi Kolawole</h1>
          <p className={`${roleClass}`}>Legal Researcher</p>
          <div className="text-sm md:text-base text-grey54 leading-7 md:leading-9">
            <p>
              Femi Kolawole is a Law graduate from the University of Lagos and
              he is one of the Legal researchers and writers. Having gained a
              good mastery of Intellectual Property and the intersection of law
              and technology at WIPO Academy summer school, he seeks to
              enlighten techpreneurs on the importance of IP protection. He is
              also an intermediate Python developer with an interest in Machine
              Learning and Web Development.
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 py-[3rem] md:p-[4rem] bg-lightGreen flex flex-col-reverse md:grid md:grid-cols-[2fr_1fr] md:gap-[6rem]">
        <div>
          <h1 className={`${nameClass}`}>Tolulope Idowu</h1>
          <p className={`${roleClass}`}>Lead Lawyer</p>
          <div className="text-sm md:text-base text-grey54 leading-7 md:leading-9">
            <p>
              Tolulope Idowu is a legal practitioner. He is currently the Lead
              Associate at A.A. Ademidun & Co, Ibadan, Oyo state. Through his
              years of practicing Law, Tolulope has become an expert in
              navigating the legal complexities of Nigeria&apos;s digital
              economy. Already called to the Nigerian Bar as a barrister and
              solicitor of the Supreme Court of Nigeria, Tolulope possesses an
              in-depth understanding of Nigerian law which keeps improving as he
              practices. In addition to this, Tolulope is very passionate about
              the emerging field of Data Protection especially in Africa. As a
              result, he is a member of Lex Techker where he heads the legal
              advisory team.
            </p>
          </div>
        </div>
        <MyImage src={"/images/team-6.jpeg"} />
      </div>
      <div className="p-5 py-[3rem] md:p-[4rem] grid md:grid-cols-[1fr_2fr] md:gap-[6rem]">
        <MyImage src={"/images/team-7.jpeg"} />
        <div>
          <h1 className={`${nameClass}`}>Salome Olonode</h1>
          <p className={`${roleClass}`}>Assisting Lawyer</p>
          <div className="text-sm md:text-base text-grey54 leading-7 md:leading-9">
            <p>
              Salome Olonode is a legal and compliance officer at both the
              Fintech Industry and Lex Techker. She has worked with clients
              ranging from leading card schemes to payment processors. She
              specializes in transborder issues but routinely advises on payment
              systems, data protection, anti-money laundering, and regulatory
              compliance, amongst others. She is a graduate of the prestigious
              University of Lagos and has won several awards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamContent;
const MyImage = ({ src }: { src: string }) => (
  <div className="w-full relative h-[400px] md:w-[450px] md:h-[450px]">
    {" "}
    <Image fill className="rounded-[1.25rem]" src={src} alt="team_member" />
  </div>
);
