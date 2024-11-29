import Image from "next/image";

const OurTeam = () => {
  return (
    <section className="p-5 md:p-[4rem] relative">
      <h3 className="text-center text-secondary">OUR TEAM</h3>
      <h2 className="text-primary text-center mb-16  font-raleway text-lg md:text-2xl font-semibold">
        Meet our team of Professionals
      </h2>
      <h1 className="backtext text-center text-[2rem] md:text-[6rem] font-semibold absolute top-2 md:top-4 left-[50%] transform translate-x-[-50%]">
        OUR TEAM
      </h1>
      <div className="md:flex grid grid-cols-2 md:justify-center items-center gap-10 md:gap-[6rem]">
        <OurTeamCard img="1" name="Iyinpemi Adegbenga" role="Founder" />
        <OurTeamCard img="2" name="Temilola Akinola" role="Co-Founder" />
        <OurTeamCard img="3" name="Sunmibola Onifade" role="Co-Founder" />
        <OurTeamCard
          img="4"
          name="Oluwatobiloba Aturu"
          role="Legal Researcher"
        />
      </div>
      <div className="md:flex grid grid-cols-2 place-items-center md:justify-center mt-12 md:items-center gap-10 md:gap-[6rem]">
        <OurTeamCard img="5" name="Femi Kolawole" role="Legal Researcher" />
        <OurTeamCard img="6" name="Tolulope Idowu" role="Lead Lawyer" />
        <OurTeamCard
          className="col-span-full place-items-center items "
          img="7"
          name="Salome Olonode"
          role="Assisting Lawyer"
        />
      </div>

      <div className="flex justify-end">
        <button className="md:px-6 my-10 font-raleway hover:opacity-[80%] underline text-secondary font-semibold">
          See More Details
        </button>
      </div>
    </section>
  );
};

export default OurTeam;

const OurTeamCard = ({
  name,
  role,
  img,
  className,
}: {
  img: string;
  name: string;
  role: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-[160px] relative h-[168px] rounded-[50%]">
        <Image
          src={`/images/team-${img}.jpeg`}
          alt="team_img"
          fill
          className="rounded-[50%]"
        />
      </div>

      <h1 className="text-dark38 mt-5 mb-2 text-[12px] text-nowrap  md:text-xl font-raleway font-semibold">
        {name}
      </h1>
      <p className="text-greyE8 text-[10px] md:text-sm">{role}</p>
    </div>
  );
};
