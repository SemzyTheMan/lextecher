import Image from "next/image";

const OurTeam = () => {
  return (
    <section className="p-[4rem] relative">
      <h3 className="text-center text-secondary">OUR TEAM</h3>
      <h2 className="text-primary text-center mb-16  font-raleway text-2xl font-semibold">
        Meet our team of Professionals
      </h2>
      <h1 className="backtext text-center text-[6rem] font-semibold absolute top-4 left-[50%] transform translate-x-[-50%]">
        OUR TEAM
      </h1>
      <div className="flex justify-center items-center gap-[6rem]">
        <OurTeamCard img="1" name="Iyinpemi Adegbenga" role="Founder" />
        <OurTeamCard img="2" name="Temilola Akinola" role="Co-Founder" />
        <OurTeamCard img="3" name="Sunmibola Onifade" role="Co-Founder" />
        <OurTeamCard
          img="4"
          name="Oluwatobiloba Aturu"
          role="Legal Researcher"
        />
      </div>
      <div className="flex justify-center mt-12 items-center gap-[6rem]">
        <OurTeamCard img="5" name="Femi Kolawole" role="Legal Researcher" />
        <OurTeamCard img="6" name="Tolulope Idowu" role="Lead Lawyer" />
        <OurTeamCard img="7" name="Salome Olonode" role="Assisting Lawyer" />
      </div>
      <div className="flex justify-end">
        <button className="px-6 my-10 font-raleway hover:opacity-[80%] underline text-secondary font-semibold">
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
}: {
  img: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`/images/team-${img}.png`}
        alt="team_img"
        width={160}
        height={160}
        className="rounded-[50%]"
      />
      <h1 className="text-primart mt-5 mb-2 text-xl font-raleway font-semibold">
        {name}
      </h1>
      <p className="text-greyE8 text-sm">{role}</p>
    </div>
  );
};
