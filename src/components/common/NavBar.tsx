"use client";
import { useEffect, useState } from "react";
import { navigateToSection } from "@/hooks";
import { useTranslation } from '../../context/TranslationContext';
import Skeleton from "@mui/material/Skeleton";
import { Album, Download, Equalizer, Headphones, Mic, Speaker } from "@mui/icons-material";

// Componente que muestra el skeleton o la palabra traducida según el estado de carga
function SkeletonOrTranslatedText({ loading, translatedText, onClick, selected }: { loading: boolean, translatedText: string, onClick: () => void, selected: boolean }) {
  return loading ? (
    <Skeleton variant="text" width={60} height={32} sx={{ backgroundColor:"#2a2a2acc" }}/>
  ) : (
    <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selected ? 'selected' : ''}`} onClick={onClick}>
      {translatedText}
    </p>
  );
}

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'es'>('en');
  const { setLanguage, t, loadingTranslation, setLoadingTranslation } = useTranslation();
  const [selectedItem, setSelectedItem] = useState<string>('');

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLanguageChange = (lang: 'en' | 'es') => { // Especifica el tipo de dato para el parámetro lang
    setActiveLanguage(lang);
    setLanguage(lang);
  };

  const handleNavRoute = (section: string) => {
    navigateToSection(section)
    setMenu(false);
    setSelectedItem(section);
  }
  useEffect(() => {
    setLoadingTranslation(true);
    setTimeout(() => {
      setLoadingTranslation(false);
    }, 2000);
  }, [activeLanguage]);

  return (
    <div className="sticky top-0  md:shadow-none z-20">
      {/* DESKTOP */}
      <div className='lg:block animate-in fade-in zoom-in bg-black text-white sm:hidden stm:hidden'>
        <div className="flex items-center justify-between h-24 mx-[5rem]">
          <img src="/images/barLAB_logo.svg" alt="logo" className="w-20"/>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none ">
            <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav1')} onClick={() => handleNavRoute('home')} selected={selectedItem === 'home'} />
            <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav2')} onClick={() => handleNavRoute('services')} selected={selectedItem === 'services'} />
            <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav3')} onClick={() => handleNavRoute('about')} selected={selectedItem === 'about'} />
            <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav4')} onClick={() => handleNavRoute('testimonials')} selected={selectedItem === 'testimonials'} />
            <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav5')} onClick={() => handleNavRoute('team')} selected={selectedItem === 'team'} />
            <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav6')} onClick={() => handleNavRoute('download')} selected={selectedItem === 'download'} />
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <div className="flex items-center justify-center gap-4 w-28 h-8 text-white ">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-9 h-8 pt-1 rounded-md transition-colors duration-700 ${activeLanguage === 'en' ? 'bg-primary' : 'text-white '}`}
                disabled={loadingTranslation ? true : false}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`w-9 h-8 pt-1 rounded-md transition-colors duration-700 ${activeLanguage === 'es' ? 'bg-primary' : 'text-whit'}`}
                disabled={loadingTranslation ? true : false}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-black py-2 animate-in fade-in zoom-in md:py-4 ${
          menu ? " bg-[#000000f3] text-lightBlue" : ""
        } `}
        >
          <div className="flex justify-between mx-[10px] md:mx-12">
            <div className="flex items-center">
              {menu ? (
                <img
                src="/svgs/x.svg"
                className="w-[80%] cursor-pointer animate-in fade-in zoom-in texto-aumentado"
                onClick={toggleMenu}
                />
                ) : (
                  <img
                  src="/svgs/hamburger.svg"
                  alt="logo"
                  className="w-[80%] cursor-pointer animate-in fade-in zoom-in texto-aumentado"
                  onClick={toggleMenu}
                  />
                  )}
            </div>
            <div>
              <img
                src="/images/barLAB_logo.svg"
                alt="logo"
                className="w-[5rem]"
                />
            </div>
            <div className="flex items-center gap-2 ml-[-15px]">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`w-7 h-6 pt-[3px] text-sm text-white rounded-md transition-colors duration-700  texto-aumentado md:w-8 md:h-7 ${activeLanguage === 'en' ? 'bg-primary' : 'text-white'}`}
                  disabled={loadingTranslation ? true : false}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`w-7 h-6 pt-[3px] text-sm rounded-md text-white transition-colors duration-700  texto-aumentado md:w-8 md:h-7 ${activeLanguage === 'es' ? 'bg-primary' : 'text-white'}`}
                  disabled={loadingTranslation ? true : false}
                >
                  ES
                </button>
            </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right mt-20 md:my-[8rem]">
            <div className="flex flex-col gap-8 mt-8 mx-8 md:mx-12">
              {loadingTranslation ? (
                <div className="flex flex-row items-center gap-2">
                  <Skeleton variant="circular" width={20} height={20} sx={{ backgroundColor:"#2a2a2acc" }}/>
                  <Skeleton variant="text" width={60} height={32} sx={{ backgroundColor:"#2a2a2acc" }}/>
                </div>
              ):(
                <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado"
                  >
                  <Album fontSize="small"/> <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav1')} onClick={() => handleNavRoute('home')} selected={selectedItem === 'home'} />
                </div>
              )}
              {loadingTranslation ? (
                <div className="flex flex-row items-center gap-2">
                  <Skeleton variant="circular" width={20} height={20} sx={{ backgroundColor:"#2a2a2acc" }}/>
                  <Skeleton variant="text" width={60} height={32} sx={{ backgroundColor:"#2a2a2acc" }}/>
                </div>
              ):(
                <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado"
                  >
                  <Mic fontSize="small"/> <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav2')} onClick={() => handleNavRoute('services')} selected={selectedItem === 'services'} />
                </div>
              )}
              {loadingTranslation ? (
                <div className="flex flex-row items-center gap-2">
                  <Skeleton variant="circular" width={20} height={20} sx={{ backgroundColor:"#2a2a2acc" }}/>
                  <Skeleton variant="text" width={60} height={32} sx={{ backgroundColor:"#2a2a2acc" }}/>
                </div>
              ):(
                <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado"
                  >
                  <Equalizer fontSize="small"/> <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav3')} onClick={() => handleNavRoute('about')} selected={selectedItem === 'about'} />
                </div>
              )}
              {loadingTranslation ? (
                <div className="flex flex-row items-center gap-2">
                  <Skeleton variant="circular" width={20} height={20} sx={{ backgroundColor:"#2a2a2acc" }}/>
                  <Skeleton variant="text" width={60} height={32} sx={{ backgroundColor:"#2a2a2acc" }}/>
                </div>
              ):(
                <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado"
                  >
                  <Speaker fontSize="small"/> <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav4')} onClick={() => handleNavRoute('testimonials')} selected={selectedItem === 'testimonials'} />
                </div>
              )}
              {loadingTranslation ? (
                <div className="flex flex-row items-center gap-2">
                  <Skeleton variant="circular" width={20} height={20} sx={{ backgroundColor:"#2a2a2acc" }}/>
                  <Skeleton variant="text" width={60} height={32} sx={{ backgroundColor:"#2a2a2acc" }}/>
                </div>
              ):(
                <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado"
                  >
                  <Headphones fontSize="small"/> <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav5')} onClick={() => handleNavRoute('team')} selected={selectedItem === 'team'} />
                </div>
              )}
              {loadingTranslation ? (
                <div className="flex flex-row items-center gap-2">
                  <Skeleton variant="circular" width={20} height={20} sx={{ backgroundColor:"#2a2a2acc" }}/>
                  <Skeleton variant="text" width={60} height={32} sx={{ backgroundColor:"#2a2a2acc" }}/>
                </div>
              ):(
                <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado"
                  >
                  <Download fontSize="small"/> <SkeletonOrTranslatedText loading={loadingTranslation} translatedText={t('nav6')} onClick={() => handleNavRoute('download')} selected={selectedItem === 'download'} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div></div>
          )}
      </div>
    </div>
  );
}

export default NavBar;
