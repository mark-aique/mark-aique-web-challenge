'use client'
import style from "@/styles/styles.module.css";
import IntroductionSection from "./components/introduction_section";
import Navbar from "./components/nav_bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={style.content}>
        <div className={"mx-[12px] my-[12px] md:my-[24px] max-w-[1480px]"}>
          <IntroductionSection />
        </div>
      </div>
    </>
  );
}
