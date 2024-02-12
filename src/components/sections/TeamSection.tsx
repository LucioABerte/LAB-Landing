"use client";
import React from "react";
import Header from "../../components/common/Header";
import TeamCard from "../../components/cards/TeamCard";
import { useTranslation } from "@/context/TranslationContext";

function TeamSection() {
  const { t } = useTranslation();

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
    <section className="flex flex-col h-[35rem] mt-[12rem] mb-[15rem]" id="team">
      <Header title={t("Team")} subtitle={t("TeamTitle")} />
      <div className="grid gap-[20%] grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:mt-[10rem] 2xl:pt-44">
        {teamData.map((team) => (
          <TeamCard
            key={team.id}
            imageUrl={team.imageUrl}
            name={team.name}
            profession={team.profession}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;