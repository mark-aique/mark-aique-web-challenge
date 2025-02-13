"use client";
import style from "@/styles/styles.module.css";
import CarouselSlider from "./components/carousel/carousel_slider";
import ContactUsSection from "./components/contacts/contact_us_section";
import IntroductionSection from "./components/introduction_section";
import Navbar from "./components/nav_bar";

export default function Home() {
  return (
    <>
      <div className={style.content}>
        <div className="max-w-[1480px]">
          <Navbar />
          <div className={"mx-[12px] my-[12px] md:my-[24px]"}>
            <IntroductionSection />
            <CarouselSlider />
            <ContactUsSection />
          </div>
        </div>
      </div>
    </>
  );
}
