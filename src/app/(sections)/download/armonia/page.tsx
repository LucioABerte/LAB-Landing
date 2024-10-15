'use client'
import React, { useEffect, useState } from "react";
import Header from "@/components/common/Header";
import { useTranslation } from "@/context/TranslationContext";


function NewsletterSection() {

  const {t, loadingTranslation} = useTranslation()
  const [activeTab, setActiveTab] = useState(3);
  const [imageSrc, setImageSrc] = useState("");


  useEffect(() => {
    const language = localStorage.getItem("language");
    let imagePath = "";
  
    if (activeTab === 0) {
      // Pestaña Pre-Producción
      imagePath = language === "en" ? "/images/insp.png" : "/images/insp.png";
    } else if (activeTab === 1) {
      // Pestaña Producción Musical
      imagePath = language === "en" ? "/images/test2PM1.png" : "/images/test2PM1.png";
    } else if (activeTab === 2) {
      // Pestaña Compresión
      imagePath = language === "en" ? "/images/test.png" : "/images/test.png";
    } else if (activeTab === 3) {
      // Pestaña Compresión
      imagePath = language === "en" ? "/images/ArmNeg.png" : "/images/ArmNeg.png";
    }
  
    setImageSrc(imagePath);
  }, [activeTab]); // El efecto se ejecutará cada vez que cambie la pestaña activa
  

  return ( 
    <section className="pt-[15rem] md:pt-[6rem] overflow-hidden 2xl:pt-4 lg:pt-28 stm:pt-12 " id="download">
      
          <Header title={t("Download")} subtitle={t("DownloadTitle")} />
            {/* Pestañas */}
             <div className="flex justify-center mb-8 stm:flex-col sm:flex-col sm:space-y-0 sm:space-x-2">
               <button
                className={`px-8 py-6 sm:px-4 sm:py-4 rounded-xl text-[1.05rem] ${activeTab === 0 ? 'bg-[#ffdf2b] text-[#808080]' : 'bg-[#000000] text-[#fcfcfc]'}`}
                onClick={() => setActiveTab(0)}
               >
                 Pre-Producción
               </button>
               <button
                 className={`px-8 py-6 sm:px-4 sm:py-4 rounded-xl text-[1.05rem] ${activeTab === 1 ? 'bg-[#ffdf2b] text-[#808080]' : 'bg-[#000000] text-[#fcfcfc]'}`}
                 onClick={() => setActiveTab(1)}
               >
                 Producción Musical
               </button>
               <button
                 className={`px-8 py-6 sm:px-4 sm:py-4 rounded-xl text-[1.05rem] ${activeTab === 2 ? 'bg-[#ffdf2b] text-[#808080]' : 'bg-[#000000] text-[#fcfcfc]'}`}
                 onClick={() => setActiveTab(2)}
               >
                 Compresión
               </button>
               <button
                 className={`px-8 py-6 sm:px-4 sm:py-4 rounded-xl text-[1.05rem] ${activeTab === 3 ? 'bg-[#ffdf2b] text-[#808080]' : 'bg-[#000000] text-[#fcfcfc]'}`}
                 onClick={() => setActiveTab(3)}
               >
                 Armonía Negativa
               </button>
             </div>

             {/* Contenido de las pestañas */}
             {activeTab === 0 && (
               <div className="flex flex-col md:flex-col items-center md:mt-[2.31rem] sm:mt-0 2xl:flex-row lg:flex-row">
                 <div>
                   <img
                     src={imageSrc}
                     alt="large envelop image"
                     className="md:w-[80%] sm:w-[80%] sm:ml-5 stm:w-[80%] stm:ml-6"
                   />
                 </div>
                 <div>
                    <h3 className=" mt-4 mb-4 ml-2 text-[2rem] font-bold text-white">
                        {t("DownloadSubtitle1")}
                    </h3>
                   <p className="mb-[1.44rem] ml-2 mr-8 text-normal font-semibold text-customGray sm:mb-0 sm:ml-2 stm:mb-0 stm:ml-0">
                     {t("DownloadDesc1")}
                   </p>
                   <iframe
                     className="flex h-screen w-full mb-[-8rem]"
                     src="https://2d19fcc2.sibforms.com/serve/MUIFAD_-LjtVt_vPSfMZX5APVZ30XJ3WUr6BT8aBDOCbeYcW_e5M1dmpQyGsNwboMEezLdz-6QTa7ElHJwwUjZYlbgArdTJ6-GZsnBCBJw5MyZb9o8EOOnVDDgAiHII2XWr4WIl8DDPG2QJCVqzwrkK9_ZCMFgVRDPZzLyiXyiIjJ-3gnnIuRzKD4KMguF0F4LKCCLMQ6BVkvLI7"
                     title="Formulario 1"
                   ></iframe>
                 </div>
               </div>
             )}

             {activeTab === 1 && (
               <div className="flex flex-col md:flex-col items-center md:mt-[2.31rem] sm:mt-0 2xl:flex-row lg:flex-row">
                 <div>
                   <img
                     src={imageSrc}
                     alt="large envelop image"
                     className="md:w-[80%] sm:w-[80%] sm:ml-5 stm:w-[80%] stm:ml-6"
                   />
                 </div>
                 <div>
                    <h3 className=" mt-4 mb-4 ml-2 text-[2rem] font-bold text-white">
                        {t("DownloadSubtitle2")}
                    </h3>
                   <p className="mb-[1.44rem] ml-2 mr-8 text-normal font-semibold text-customGray sm:mb-0 sm:ml-2 stm:mb-0 stm:ml-0">
                     {t("DownloadDesc2")}
                   </p>
                   <iframe
                     className="flex h-screen w-full mb-[-8rem]"
                     src="https://2d19fcc2.sibforms.com/serve/MUIFAEjyzA1MjVG4wNEq-d2IHieyUmzK0OuActlc8vOdApYmmmu3-7RebjXLjAuU0gbq_VQWKjKDjFNN87YedWUctUWFaWYwmLSPfV9Ehx5dfsvbXiSegxRxoSbHAWEh3z0AHJbxlir-no9E9ans706jyI_341ga2aPS8rcL9JflT8AmrECzxoUcMj8g0lg83Uog9A27AKXH6Z4q"
                     title="Formulario 2"
                   ></iframe>
                 </div>
               </div>
             )}

            {activeTab === 2 && (
               <div className="flex flex-col md:flex-col items-center md:mt-[2.31rem] sm:mt-0 2xl:flex-row lg:flex-row">
                 <div>
                   <img
                     src={imageSrc}
                     alt="large envelop image"
                     className="md:w-[80%] sm:w-[80%] sm:ml-5 stm:w-[80%] stm:ml-6"
                   />
                 </div>
                 <div>
                    <h3 className=" mt-4 mb-4 ml-2 text-[2rem] font-bold text-white">
                        {t("DownloadSubtitle3")}
                    </h3>
                   <p className="mb-[1.44rem] ml-2 mr-8 text-normal font-semibold text-customGray sm:mb-0 sm:ml-2 stm:mb-0 stm:ml-0">
                     {t("DownloadDesc3")}
                   </p>
                   <iframe
                     className="flex h-screen w-full mb-[-8rem]"
                     src="https://2d19fcc2.sibforms.com/serve/MUIFAH0zvJdpHIVwLC9TsYmx3B2lfEIUD-s0Sqdhpx0RyLH9vxWEHzZSohiq3KZKIFJYj-aKN-u5kEwBGOoIAlrlwKKm92y_8HunCqAx6Mk3H4iMgLFMJWm8COcTGqqkqSvDCKMnAup-G3BtRoSiL1hBD4tG3afE1drPUV2SHGQSze2Pq8cKpM_iuohcmhHbzTlm4DLuYdGQ29od"
                     title="Formulario 3"
                   ></iframe>
                 </div>
               </div>
             )}
             {activeTab === 3 && (
                <div className="flex flex-col md:flex-col items-center md:mt-[2.31rem] sm:mt-0 2xl:flex-row lg:flex-row">
                  <div>
                    <img
                      src={imageSrc}
                      alt="large envelop image"
                      className="md:w-[80%] sm:w-[80%] sm:ml-5 stm:w-[80%] stm:ml-6"
                    />
                  </div>
                  <div>
                     <h3 className=" mt-4 mb-4 ml-2 text-[2rem] font-bold text-white">
                         {t("DownloadSubtitle4")}
                     </h3>
                    <p className="mb-[1.44rem] ml-2 mr-8 text-normal font-semibold text-customGray sm:mb-0 sm:ml-2 stm:mb-0 stm:ml-0">
                      {t("DownloadDesc4")}
                    </p>
                    <iframe
                      className="flex h-screen w-full mb-[-8rem]"
                      src="https://2d19fcc2.sibforms.com/serve/MUIFAEXg8EG0iUFc9yHCArQ9KaHiOfuhq77_Tm1vERetp8mQ7rEHD0poZiPjAO8P-8Wou3-g8e3M8ciEdrCZB2BX237TuSFBcoROTApilF1KA21rluQ0QrVRHaGg1hwMRbQt34yfgJqLs-NvQ2bHqC5QfPxGzD83sGKLgoC14uVqmXSwqFROUAu3IoTZb-ANyfWaMrUcDpRsiNQE"
                      title="Formulario 4"
                    ></iframe>
                  </div>
                </div>
              )}
    </section>
  );
}

export default NewsletterSection;