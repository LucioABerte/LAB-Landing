'use client'
import React from "react";
import MainButton from "../common/MainButton";
import { useTranslation } from "@/context/TranslationContext";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  action?: () => void;
}

function ServiceCard({ iconUrl, title, description, action }: IProps) {

  const { t } = useTranslation();

  return (
    <div className="flex flex-grow flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
      <div>
        <img src={iconUrl} alt="service icon" />
      </div>
      <p className="text-[2.25rem] font-[700] text-lightBlue">{title}</p>
      <p className="text-normal text-customGray">{description}</p>
      <MainButton text={t("ServiceButtons")} action={action} classes="w-[10.125rem] hover:bg-customGray" />
    </div>
  );
}

export default ServiceCard;
