'use client'
import React from "react";
import MainButton from "../../../components/common/MainButton";
import AccordionCard from "../../../components/cards/AccordionCard"
import Header from "../../../components/common/Header";
import { useTranslation } from "@/context/TranslationContext";
import { Skeleton } from "@mui/material";


function VideoPlayerSection() {

  const {t, loadingTranslation} = useTranslation()

  return (
    <section className="flex flex-col md:flex-col justify-center items-center mt-[11.31rem] mb-44 2xl:mt-[4rem] lg:mt-[4rem]" id="about">
      {loadingTranslation ? (
          <div className="flex flex-col items-center">
            <Skeleton variant="text" width={160} height={50} animation="wave" />
            <Skeleton variant="text" width={600} height={70} animation="wave" />
          </div>
        ) : (
          <Header title={t("About")} subtitle={t("AboutTitle")}/>
        )
      }
      <div className="flex flex-row mt-20 items-center justify-center sm:flex-col 2xl:mt-6 lg:mt-4">
        <div className="flex flex-col">
          <AccordionCard />
          <MainButton
            text={loadingTranslation ? t('Loading') : t('AboutButton')}
            classes="!h-[3.01544rem] hover:bg-customGray w-[8.2925rem] text-lightBlue font-bold text-[1rem] bg-primary shadow-none mt-10"
            disabled={loadingTranslation ? true : false}
            href="https://www.instagram.com/lab.homestudio/"
            />
        </div>
      {loadingTranslation ? (
          <Skeleton variant="circular" width={500} height={500} animation="wave" />
        ) : (
          <img src="/images/PhotoHeader.png" alt="video player" className="w-fit mb-14 sm:hidden stm:hidden md:hidden xl:w-[42%] 2xl:w-[35%]"/>
        )
      }
      </div>
        
     
    </section>
  );
}

export default VideoPlayerSection;
