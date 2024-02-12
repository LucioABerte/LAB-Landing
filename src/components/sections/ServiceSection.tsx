"use client";
import React from "react";
import Header from "../../components/common/Header";
import ServiceCard from "../../components/cards/ServiceCard";
import { useTranslation } from "@/context/TranslationContext";

function ServiceSection() {
  const { t } = useTranslation();

  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/rec.png",
      title: t('ServRec'),
      description: t('ServRecDesc'),
    },
    {
      id: 1,
      iconUrl: "/images/mixing.png",
      title: t("ServMix"),
      description: t("ServMixDesc")
    },
    {
      id: 2,
      iconUrl: "/images/mastering.png",
      title: t("ServMas"),
      description: t("ServMasDesc")
    },
  ];

  return (
    <section id="services" className="pt-[20rem]">
      <Header title={t("Services")} subtitle={t("ServTitle")} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;