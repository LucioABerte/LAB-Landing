'use client'
import React from "react";
import Header from "../../../components/common/Header";
import TeamCard from "../../../components/cards/TeamCard";
import { useTranslation } from "@/context/TranslationContext";
import { Skeleton } from "@mui/material";

function TeamSection() {

  const {t, loadingTranslation} = useTranslation()

  const teamData = [
    {
      id: 0,
      imageUrl: "/images/lucio.jpg",
      name: "Lucio Berté",
      profession: "Music Producer, Mixing & Mastering Eng",
    },
    {
      id: 1,
      imageUrl: "/images/jazmin.jpg",
      name: "Jazmín Berté",
      profession: "Marketing Director",
    },
  ];
  return (
    <section className="flex flex-col h-[35rem] mt-[12rem] 2xl:mt-[6rem] lg:mt-[4rem] lg:mb-[12rem] sm:mb-[24rem] stm:mb-[30rem] md:mb-[40rem] " id="team">
      {loadingTranslation ? (
          <div className="flex flex-col items-center">
            <Skeleton variant="text" width={160} height={50} animation="wave" />
            <Skeleton variant="text" width={600} height={70} animation="wave" />
          </div>
        ) : ( 
          <Header title={t("Team")} subtitle={t("TeamTitle")} /> 
        )
      }
      {loadingTranslation ? (
          <div className="flex flex-row items-center justify-center gap-[20rem] mt-16">
            <Skeleton variant="rectangular" width={600} height={400} animation="wave" />
            <Skeleton variant="rectangular" width={600} height={400} animation="wave" />
          </div>
        ) : (
          <div className="grid gap-[20%] grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:mt-[10rem] 2xl:pt-[6rem]">
            {teamData.map((team) => (
              <TeamCard
                key={team.id}
                imageUrl={team.imageUrl}
                name={team.name}
                profession={team.profession}
              />
            ))}
          </div>
        )
      }
    </section>
  );
}

export default TeamSection;
