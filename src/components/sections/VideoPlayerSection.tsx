"use client";
import React from "react";
import MainButton from "../../components/common/MainButton";
import AccordionCard from "../cards/AccordionCard"
import Header from "../common/Header";
import { useTranslation } from "@/context/TranslationContext";


function VideoPlayerSection() {

  const { t } = useTranslation()

  return (
    <section className="flex flex-col md:flex-col justify-center items-center mt-[11.31rem] mb-44" id="about">
      <Header title={t("About")} subtitle={t("AboutTitle")} />
      <div className="flex flex-row mt-20 mb-10 items-center justify-center sm:flex-col 2xl:mt-6">
        <div className="flex flex-col">
          <AccordionCard />
          <MainButton
            text={t('AboutButton')}
            classes="!h-[3.01544rem] hover:bg-customGray w-[8.2925rem] text-lightBlue font-bold text-[1rem] bg-primary shadow-none mt-10"
            href="https://www.instagram.com/lab.homestudio/"
          />
        </div>
        <img src="/images/PhotoHeader.png" alt="video player" className="w-fit mb-14 sm:hidden stm:hidden md:hidden xl:w-[42%] 2xl:w-[35%]"/>
      </div>
    </section>
  );
}

export default VideoPlayerSection;