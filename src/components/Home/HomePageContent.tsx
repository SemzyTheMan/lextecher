import AboutUsSection from "./AboutUsSection";
import BlogSection from "./BlogSection";
import Contactus from "./Contactus";
import HeaderSection from "./HeaderSection";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import Testimonials from "./Testimonials";

const HomePageContent = () => {
  return (
    <>
      <HeaderSection />
      <AboutUsSection />
      <OurServices />
      <BlogSection />
      <Testimonials />
      <OurTeam />
      <Contactus />
    </>
  );
};

export default HomePageContent;
