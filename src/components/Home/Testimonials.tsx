import Carousel from "../Carousel/Carousel";
import styles from "./Home.module.css";
const Testimonials = () => {
  return (
    <section className="bg-lightGreen relative p-[4rem]">
      <h3 className="text-center text-secondary">TESTIMONIALS</h3>
      <h2 className="text-dark38 text-center mb-16  font-raleway text-2xl font-semibold">
        Hear what others are saying about us
      </h2>
      <h1 className="backtext text-center text-[6rem] font-semibold absolute top-4 left-[50%] transform translate-x-[-50%]">
        TESTIMONIALS
      </h1>
      <div>
        <Carousel
          slides={[
            <TestimonialCard
              key="testimonial-1"
              position="Managing Associate at Famsville law firm"
              name="Temiloluwa Dosunmu, CIPP/E."
              testimony="When it comes to legal research, writing, tech-intelligence reports, and business advisory services, I trust Lex Techker Advisory to always deliver. They are a result-oriented team with a track record in solving complex problems in a nimble way. Engaging their service is the best decision I made this year. 
I strongly recommend Lex Techker Advisory to startups and individuals for research, writing and startup and business advisory."
            />,
            <TestimonialCard
              position=""
              name="Abah Success"
              testimony="As a co-founder of a prospective startup, I have interacted with your organisation and  I’m truly impressed by your attention to project development and commitment to getting my comments. I love how dedicated you are to discovering ways to better support startups alike. I am particularly grateful for the insights you provided on legal terms and rights that I was previously unaware of, which have helped me understand my rights as a co-founder."
              key="testimonial-2"
            />,
            <TestimonialCard
              name="Chiamaka Okey-Ihedi"
              position="Co-founder, Neowel Solutions"
              testimony="As the co-founder of Neowel Solutions, I sought legal guidance from Lex Techker, and I was enlightened on the value of intellectual property and the founders' agreement for my business. Due to
their focus in helping startups succeed and afford legal services, they were keen to know my preferred and most suitable payment option."
              key="testimonial-3"
            />,
          ]}
        />
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({
  testimony,
  name,
  position,
}: {
  testimony: string;
  name: string;
  position: string;
}) => {
  return (
    <div
      className={`${styles.TestimonialCard} h-[25rem] p-10 w-[37.8125rem] rounded-[1.25rem] bg-white text-grey66`}
    >
      <p className="leading-8 h-[17rem]">{testimony}</p>
      <div className="">
        <h2 className="font-raleway text-blue12 text-lg font-bold">{name}</h2>
        <p className="text-greyC9">{position}</p>
      </div>
    </div>
  );
};
