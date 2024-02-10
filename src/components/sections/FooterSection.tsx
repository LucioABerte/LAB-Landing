'use client'

import React from "react";
import { Separator } from "../../components/ui/separator";
import { useTranslation } from "@/context/TranslationContext";
import { Skeleton } from "@mui/material";
import SocialMediaCard from "../cards/SocialMediaCard";


function FooterSection() {

  const {t, loadingTranslation} = useTranslation()
  
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="text-lightBlue text-[1rem] font-serif">
          {loadingTranslation ? 
            (
              <Skeleton variant="text" width={400} height={40}/>
            ) :(
              t("Footer")
            )
          }
        </div>
        <SocialMediaCard/>
      </div>
      <Separator />
      <div className="pb-[1rem]">
      </div>
    </section>
  );
}

export default FooterSection;
