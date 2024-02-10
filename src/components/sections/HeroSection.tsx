'use client'
import { useTranslation } from "@/context/TranslationContext";
import MainButton from "../../components/common/MainButton";
import { Skeleton } from "@mui/material";

function HeroSection() {
  const { t, loadingTranslation } = useTranslation();

  const handleClick = () => {
    console.log("Clicked Button Hero section")
  }

  return (
    <section className="flex justify-between flex-col h-[85vh] mb-8 md:flex-row gap-4 items-center" id="home">
    <div>
      {/* Usar Skeleton en lugar del texto mientras se carga la traducción */}
      {loadingTranslation ? (
        <>
          <Skeleton variant="text" width={750} height={160} animation="wave" />
          <Skeleton variant="text" width={700} height={65} animation="wave" sx={{ marginRight: "15rem"}}/>
        </>
      ) : (
        <>
          <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
            {t('HomeTitle')}
          </p>
          <p className="text-[1.375rem] font-[500] text-customGray">
            {t('HomeDesc')}
          </p>
        </>
      )}
      <div className="flex gap-[1.75rem] items-center mt-[3rem]">
        <MainButton text={loadingTranslation ? t('Loading') : t('HomeButton')} classes="shadow-none w-[10.125rem] hover:bg-customGray" disabled={loadingTranslation ? true : false} onClick={handleClick}/>
        <div className="flex gap-[1.56rem] items-center">
          {/* Usar Skeleton en lugar del icono y el texto del botón mientras se carga la traducción */}
          {loadingTranslation ? (
            <>
              <Skeleton variant="circular" width={60} height={60} animation="wave" />
              <Skeleton variant="text" width={120} height={40} animation="wave" />
            </>
          ) : (
            <>
              <img src="/images/fancy_play_icon.png" alt="play icon" />
              <p className="font-bold text-normal text-customGray">{t('HomeMore')}</p>
            </>
          )}
        </div>
      </div>
    </div>
    <div className="relative w-[60%] bottom-16">
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
  </section>
);
}

export default HeroSection;