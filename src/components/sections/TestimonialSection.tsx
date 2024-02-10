'use client'
import React from "react";
import Header from "../../components/common/Header";
import TestimonialCard from "../../components/cards/TestimonialCard";
import { useTranslation } from "@/context/TranslationContext";
import { Skeleton } from "@mui/material";

function TestimonialSection() {

  const {t, loadingTranslation} = useTranslation();

  const appReviewData = [
    
    {
      id: 0,
      imageUrl: "/images/rol.jpg",
      reviewerName: "Esto es Rol - ARG",
      review: t("Rol")
    },
    {
      id: 1,
      imageUrl: "/images/moon.jpg",
      reviewerName: "Radio Moonglow - USA",
      review: t("Moon")
    },
    {
      id: 2,
      imageUrl: "/images/tim.jpg",
      reviewerName: "Tim Mattsing - SWE",
      review: t("Tim")
    },
    {
      id: 3,
      imageUrl: "/images/sinopia.jpg",
      reviewerName: "Sinopia - Kalmar",
      review: t("Sinopia")
    },
    {
      id: 4,
      imageUrl: "/images/clopez.jpg",
      reviewerName: "C.Lopez - ARG",
      review: t("Clopez")
    },
    {
      id: 5,
      imageUrl: "/images/martin.jpg",
      reviewerName: "Martin P. - BS AS",
      review: t("Martin")
    },
  ];
  return (
    <section className="mt-[5rem]" id="testimonials">
      {loadingTranslation ? (
            <div className="flex flex-col items-center">
              <Skeleton variant="text" width={160} height={50} animation="wave" />
              <Skeleton variant="text" width={600} height={70} animation="wave" />
            </div>
          ) : ( <Header title={t("Testimonials")} subtitle={t("TestsTitle")} /> )
        }
      {loadingTranslation ? (
        <div className="flex flex-row items-start justify-start flex-col-2 gap-12 mt-16">
          <div className="flex flex-col gap-24">
            <div className="flex flex-row gap-8">
              <Skeleton variant="rectangular" width={80} height={80} animation="wave" />
              <Skeleton variant="text" width={680} height={80} animation="wave" />
            </div>
            <div className="flex flex-row gap-8">
              <Skeleton variant="rectangular" width={80} height={80} animation="wave" />
              <Skeleton variant="text" width={680} height={80} animation="wave" />
            </div>
            <div className="flex flex-row gap-8">
              <Skeleton variant="rectangular" width={80} height={80} animation="wave" />
              <Skeleton variant="text" width={680} height={80} animation="wave" />
            </div>
          </div>
          <div className="flex flex-col gap-24">
            <div className="flex flex-row gap-8">
              <Skeleton variant="rectangular" width={80} height={80} animation="wave" />
              <Skeleton variant="text" width={600} height={80} animation="wave" />
            </div>
            <div className="flex flex-row gap-8">
              <Skeleton variant="rectangular" width={80} height={80} animation="wave" />
              <Skeleton variant="text" width={600} height={80} animation="wave" />
            </div>
            <div className="flex flex-row gap-8">
              <Skeleton variant="rectangular" width={80} height={80} animation="wave" />
              <Skeleton variant="text" width={600} height={80} animation="wave" />
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
          {appReviewData.map((review) => (
            <TestimonialCard
              key={review.id}
              imageUrl={review.imageUrl}
              review={review.review}
              reviewerName={review.reviewerName}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TestimonialSection;
