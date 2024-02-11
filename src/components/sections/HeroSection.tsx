'use client'
import { useTranslation } from "@/context/TranslationContext";
import MainButton from "../../components/common/MainButton";
import { Skeleton } from "@mui/material";
import { navigateToSection } from "@/hooks";

function HeroSection() {
  const { t, loadingTranslation } = useTranslation();

  return (
    <section className="2xl:py-6 xl:py-6" id="home">
    <div className="flex flex-col items-center justify-start h-full">
      <div className="pt-9 md:pt-16 xl:pt-16 2xl:pt-2 ">
        {/* Usar Skeleton en lugar de la imagen mientras se carga la traducción */}
        {loadingTranslation ? (
          <Skeleton variant="rectangular" width={600} height={300} animation="wave" />
        ) : (
          <img
            src="/images/PhotoHeader.svg"
            alt="Lab Home Studio Picture"
          />
        )}
      </div>
      <div className="xl:px-[5rem]">
        {/* Usar Skeleton en lugar del texto mientras se carga la traducción */}
        {loadingTranslation ? (
          <>
            <Skeleton variant="text" width={750} height={160} animation="wave" />
            <Skeleton variant="text" width={700} height={65} animation="wave" sx={{ marginRight: "15rem"}}/>
          </>
        ) : (
          <div className="w-full pt-6 md:pt-16 xl:pt-12 2xl:pt-12">
            <p className="font-[850] text-2xl text-darkBlue md:leading-[3rem] md:text-5xl xl:text-6xl xl:w-[90%] 2xl:text-7xl 2xl:w-[70%]">
              {t('HomeTitle')}
            </p>
            <p className="text-[1.375rem] font-[500] text-customGray pt-2 sm:text-[16px] stm:text-[18px] md:pt-6 xl:text-[1.5rem] xl:w-[70%] xl:pt-4 2xl:text-[1.6rem] 2xl:w-[65%] 2xl:pt-6">
              {t('HomeDesc')}
            </p>
          </div>
        )}
        <div className="flex flex-row items-center mt-[2rem] md:mt-[5rem]">
          <MainButton text={loadingTranslation ? t('Loading') : t('HomeButton')} classes="shadow-none w-[10.125rem] hover:bg-[#80808055] sm:w-28 md:w-[15rem]" disabled={loadingTranslation ? true : false} href="https://wa.me/5492233479633"/>
          <div className="flex items-center justify-evenly w-full">
            {/* Usar Skeleton en lugar del icono y el texto del botón mientras se carga la traducción */}
            {loadingTranslation ? (
              <>
                <Skeleton variant="circular" width={60} height={60} animation="wave" />
                <Skeleton variant="text" width={120} height={40} animation="wave" />
              </>
            ) : (
              <div className="flex items-center justify-evenly w-full xl:justify-start xl:gap-5 2xl:justify-start 2xl:gap-5">
                <img src="/images/fancy_play_icon.png" alt="play icon" className="w-[fit] pl-4 xl:pl-12 2xl:pl-12"/>
                <p className="font-bold text-normal cursor-pointer hover:text-primary text-customGray pl-4 md:text-xl texto-aumentado" onClick={() => navigateToSection("about")}>{t('HomeMore')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default HeroSection;