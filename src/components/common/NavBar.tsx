"use client";
import { useEffect, useState } from "react";
import { navigateToSection } from "@/hooks";
import { useTranslation } from '../../context/TranslationContext';
import { Album, Download, Equalizer, Headphones, Mic, Speaker } from "@mui/icons-material";


function NavBar() {
  const [menu, setMenu] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'es'>('en');
  const { setLanguage, t, setLoadingTranslation } = useTranslation();
  const [selectedItem, setSelectedItem] = useState<string>('');

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLanguageChange = (lang: 'en' | 'es') => {
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
    }, 2500);
  }, [activeLanguage]);

  return (
    <div className="sticky top-0  md:shadow-none z-20">
      {/* DESKTOP */}
      <div className='lg:block animate-in fade-in zoom-in bg-black text-white sm:hidden stm:hidden'>
        <div className="flex items-center justify-between h-24 mx-[5rem]">
          <img src="/images/barLAB_logo.svg" alt="logo" className="w-20"/>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none ">
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'home' ? 'selected' : ''}`} onClick={() => handleNavRoute('home')}>
              {t('nav1')}
            </p>
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'services' ? 'selected' : ''}`} onClick={() => handleNavRoute('services')}>
              {t('nav2')}
            </p>
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'about' ? 'selected' : ''}`} onClick={() => handleNavRoute('about')}>
              {t('nav3')}
            </p>
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'testimonials' ? 'selected' : ''}`} onClick={() => handleNavRoute('testimonials')}>
              {t('nav4')}
            </p>
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'team' ? 'selected' : ''}`} onClick={() => handleNavRoute('team')}>
              {t('nav5')}
            </p>
            <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'download' ? 'selected' : ''}`} onClick={() => handleNavRoute('download')}>
              {t('nav6')}
            </p>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <div className="flex items-center justify-center gap-4 w-28 h-8 text-white ">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-9 h-8 pt-1 rounded-md transition-colors duration-700 texto-aumentado ${activeLanguage === 'en' ? 'bg-primary' : 'text-white '}`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange('es')}
                className={`w-9 h-8 pt-1 rounded-md transition-colors duration-700 texto-aumentado ${activeLanguage === 'es' ? 'bg-primary' : 'text-whit'}`}
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
        }`}
        >
          <div className="flex justify-between mx-[10px] md:mx-12">
            <div className="flex items-center">
              {menu ? (
                <img
                src="/svgs/x.svg"
                className="w-[80%] cursor-pointer animate-in fade-in zoom-in texto-aumentado"
                onClick={toggleMenu}
                alt="menu close"
                />
                ) : (
                  <img
                  src="/svgs/hamburger.svg"
                  alt="menu Open"
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
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('es')}
                  className={`w-7 h-6 pt-[3px] text-sm rounded-md text-white transition-colors duration-700  texto-aumentado md:w-8 md:h-7 ${activeLanguage === 'es' ? 'bg-primary' : 'text-white'}`}
                >
                  ES
                </button>
            </div>
          </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right mt-20 md:my-[8rem]">
            <div className="flex flex-col gap-8 mt-8 mx-8 md:mx-12">
              <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado">
                <Album fontSize="small"/> 
                <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'home' ? 'selected' : ''}`} onClick={() => handleNavRoute('home')}>
                  {t('nav1')}
                </p>
              </div>
              <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado">
                <Mic fontSize="small"/> 
                <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'services' ? 'selected' : ''}`} onClick={() => handleNavRoute('services')}>
                  {t('nav2')}
                </p>
              </div>
              <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado">
                <Equalizer fontSize="small"/> 
                <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'about' ? 'selected' : ''}`} onClick={() => handleNavRoute('about')}>
                  {t('nav3')}
                </p>
              </div>
              <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado">
                <Speaker fontSize="small"/> 
                <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'testimonials' ? 'selected' : ''}`} onClick={() => handleNavRoute('testimonials')}>
                  {t('nav4')}
                </p>
              </div>
              <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado">
                <Headphones fontSize="small"/> 
                <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'team' ? 'selected' : ''}`} onClick={() => handleNavRoute('team')}>
                  {t('nav5')}
                </p>
              </div>
              <div className="flex flex-row gap-4 sm:gap-2 sm:ml-[-20px] texto-aumentado">
                <Download fontSize="small"/> 
                <p className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray texto-aumentado ${selectedItem === 'download' ? 'selected' : ''}`} onClick={() => handleNavRoute('download')}>
                  {t('nav6')}
                </p>
              </div>
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