import AboutUsSection from "./AboutUsSection";
import BlogSection from "./BlogSection";
import HeaderSection from "./HeaderSection";
import OurServices from "./OurServices";
import Testimonials from "./Testimonials";

const HomePageContent = () => {
  return (
    <>
      <HeaderSection />
      <AboutUsSection />
      <OurServices />
      <BlogSection />
      <Testimonials />
    </>
  );
};

export default HomePageContent;
