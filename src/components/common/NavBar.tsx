"use client";

import { useEffect, useState } from "react";
import { navigateToSection } from "@/hooks";
import { useTranslation } from '../../context/TranslationContext';
import Skeleton from "@mui/material/Skeleton";

// Componente que muestra el skeleton o la palabra traducida según el estado de carga
function SkeletonOrTranslatedText({ loading, translatedText, onClick }: { loading: boolean, translatedText: string, onClick: () => void }) {
  return loading ? (
    <Skeleton variant="text" width={60} height={32} sx={{ backgroundColor:"#2a2a2acc" }}/>
  ) : (
    <p className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray" onClick={onClick}>
      {translatedText}
    </p>
  );
}

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'es'>('en');
  const { setLanguage, t, loadingTranslation, setLoadingTranslation } = useTranslation();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLanguageChange = (lang: 'en' | 'es') => { // Especifica el tipo de dato para el parámetro lang
    setActiveLanguage(lang);
    setLanguage(lang);
  };

  useEffect(() => {
    setLoadingTranslation(true);
    setTimeout(() => {
      setLoadingTranslation(false);
    }, 3000);
  }, [activeLanguage]);

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20  ">
      {/* DESKTOP */}
      <div className='hidden lg:block animate-in fade-in zoom-in bg-black text-white p-4 pr-8'>
        <div className="flex justify-between md:mx-[5rem] pr-24">
          <div>
            <img src="/images/LAB.svg" alt="logo" className="w-[65%]"/>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none pr-48">
              <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav1')} onClick={() => navigateToSection('home')} />
              <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav2')} onClick={() => navigateToSection('services')} />
              <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav3')} onClick={() => navigateToSection('about')} />
              <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav4')} onClick={() => navigateToSection('testimonials')} />
              <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav5')} onClick={() => navigateToSection('team')} />
              <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav6')} onClick={() => navigateToSection('download')} />
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <div className="flex items-center justify-center gap-4 w-28 h-8">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-9 h-8 pt-1 rounded-md transition-colors duration-700  ${activeLanguage === 'en' ? 'bg-primary' : 'text-white'}`}
                disabled={loadingTranslation ? true : false}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`w-9 h-8 pt-1 rounded-md transition-colors duration-700  ${activeLanguage === 'es' ? 'bg-primary' : 'text-white'}`}
                disabled={loadingTranslation ? true : false}
              >
                ES
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* MOBILE */}
      <div className="">

      <div
        className={` block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-black py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-[#000000f3] text-lightBlue py-2" : ""
        } `}
        >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img
              src="/images/bar_logo.svg"
              alt="logo"
              className="w-[10rem]"
              />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <img
              src="/svgs/x.svg"
              className="w-[80%] cursor-pointer animate-in fade-in zoom-in"
              onClick={toggleMenu}
              />
              ) : (
                <img
                src="/svgs/hamburger.svg"
                alt="logo"
                className="w-[80%] cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
                />
                )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                Home
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                Services
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                About Us
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                Testimonials
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                Our Team
              </p>
              <p
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                Download
              </p>
            </div>
          </div>
        ) : (
          <div></div>
          )}
      </div>
      </div>
    </div>
  );
}

export default NavBar;
