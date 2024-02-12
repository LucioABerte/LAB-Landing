"use client";
import React from "react";
import Header from "../../components/common/Header";
import TestimonialCard from "../../components/cards/TestimonialCard";
import { useTranslation } from "@/context/TranslationContext";

function TestimonialSection() {
  const { t } = useTranslation();

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
      <Header title={t("Testimonials")} subtitle={t("TestsTitle")} />
      <div className="grid grid-cols-2 gap-12 sm:grid-cols-1 stm:grid-cols-1 md:grid-cols-2 mt-8 md:mt-[6.75rem] xl:gap-8 2xl:gap-4">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;