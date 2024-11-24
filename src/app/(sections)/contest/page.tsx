'use client';
import React from 'react';
import Header from '../../../components/common/Header';
import { useTranslation } from '@/context/TranslationContext';


function ContestLAB() {
  const { t } = useTranslation();
  
  const scrollToBottom = () => {
    const element = document.getElementById("scroll-target");
    if (element) {
      const topOffset = element.offsetTop; // Obtiene la distancia desde el top
      const offsetPosition = topOffset - 50; // Ajusta con el valor que necesitas
      window.scrollTo({
        top: 800,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      className="flex flex-col items-center justify-center px-6 mb-16"
      id="contest"
    >
        <img src='/images/LAB.jpg' className='h-[50%]'></img>
      {/* Header */}
      <Header title={t('Contest')} subtitle={t('ContestTitle')} />

      {/* Premios */}
      <div className="mt-4 w-full max-w-4xl ">
        <h2 className="text-2xl font-bold text-white">
        Participa enviando tu demo/canción y gana uno de nuestros premios:
        </h2>
        <ul className="mt-6 space-y-4 text-left text-lg text-gray-300">
          <li>● <b className='text-[#ffdf2b]'>Primer lugar:</b> Mezcla y Masterización (máx. 4 min).</li>
          <li>● <b className='text-[#ffdf2b]'>Segundo lugar:</b> Masterización (máx. 4 min).</li>
          <li>● <b className='text-[#ffdf2b]'>Tercer lugar:</b> 50% descuento en Mezcla y Master.</li>
        </ul>
      </div>

      {/* Botones */}
        <div className="flex flex-col sm:flex-COL gap-4 mt-8">
          {/* Botón de Bases del Concurso */}
          <button 
            className="bg-[#ffdf2b] text-black font-bold py-4 px-8 rounded-lg text-center shadow-md hover:bg-yellow-500 transition duration-300 
            sm:px-6 stm:px-8 md:px-12 xl:px-16 2xl:px-24" 
            onClick={scrollToBottom}>
            BASES DEL CONCURSO
          </button>

          {/* Botón de Formulario de Inscripción */}
          <a 
            href="https://forms.gle/VHuPb3rwbD2oWGvf9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#ffdf2b] text-black font-bold py-4 px-[21.5rem] rounded-lg text-center shadow-md hover:bg-yellow-500 transition duration-300 
            sm:px-6 stm:px-8 md:px-12 xl:px-16 2xl:px-24">
            FORMULARIO DE INSCRIPCIÓN
          </a>
        </div>

      {/* Bases Generales */}
      <div className="mt-16 w-full max-w-4xl text-gray-300" id="scroll-target">
        <h2 className="text-2xl font-bold text-white mb-4">BASES GENERALES</h2>
        <ol className="list-decimal space-y-4 pl-4 marker:text-[#ffdf2b]">
          <li>Para participar deberás seguirnos en nuestras redes sociales (Instagram y TikTok)</li>
          <li>Para participar deberás llenar el formulario con tus datos y los links correspondientes.</li>
          <li>Solo se aceptará un archivo en formato WAV o MP3 (ver especificaciones más abajo) y NO CANCIONES MEZCLADAS Y MASTERIZADAS.</li>
          <li>El último día para enviar tu inscripción será el <b className='text-[#ffdf2b]'>5 de diciembre.</b></li>
          <li>No serán válidas las inscripciones incompletas.</li>
          <li>Recuerda que sólo será posible una inscripción y una canción por usuario.</li>
          <li>Al terminar el proceso, sólo se comunicará por redes sociales y por mail a los ganadores.</li>
          <li>De ser elegidos, deberán tener el multitrack listo para enviar dentro de las 72hs.</li>
          <li>LAB Home Studio enviará los premios directamente vía mail.</li>
          <li>Los premios tienen una vigencia de 1 mes desde la notificación del premio.</li>
        </ol>
      </div>

      {/* Sección de Video */}
      <div className="mt-16 w-full max-w-4xl text-gray-300">
        <h2 className="text-2xl font-bold text-white mb-4">VIDEO (Opcional):</h2>
        <ol className="list-decimal space-y-4 pl-4 marker:text-[#ffdf2b]">
          <li>Deberás compartirnos un video (OPCIONAL) hasta 60 segundos, en formato horizontal, explicando qué significa la música en tu vida, tu proceso de composición y tus inspiraciones.</li>
          <li>El video debe publicarse en YouTube o Vimeo, en una cuenta abierta, y compartir el link en el apartado “Link de Video OPCIONAL”.</li>
        </ol>
      </div>

      {/* Sección de Audio */}
      <div className="mt-16 w-full max-w-4xl text-gray-300">
        <h2 className="text-2xl font-bold text-white mb-4">AUDIO:</h2>
        <ol className="list-decimal space-y-4 pl-4 marker:text-[#ffdf2b]">
          <li>Deberás compartir tu demo en formato WAV O MP3 mediante un link de descarga.</li>
          <li>Subí tu archivo a Google Drive, Dropbox, SoundCloud, OneDrive, etc. Asegúrate de habilitar la opción de descarga.</li>
          <li>Solo se aceptarán archivos WAV en 24 bit 48 kHz o WAV 16 bit 44.1 kHz. Se aceptan mp3 320 Kbps.</li>
          <li>La duración del tema no debe superar los 4:20 min.</li>
          <li>La canción debe ser original, no un cover.</li>
          <li>No se aceptan archivos de canciones ya procesadas ni publicadas.</li>
        </ol>
      </div>

      {/* Fechas importantes */}
      <div className="mt-16 w-full max-w-4xl text-gray-300">
        <h2 className="text-2xl font-bold text-white mb-4">FECHAS:</h2>
        <ul className="space-y-4">
          <li>● Apertura de concurso: <b className='text-[#ffdf2b]' >21 de noviembre</b>.</li>
          <li>● Cierre de concurso: <b className='text-[#ffdf2b]' >5 de diciembre</b>.</li>
          <li>● Publicación de resultados: <b className='text-[#ffdf2b]' >12 de diciembre</b>.</li>
        </ul>
      </div>

      {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* Botón de Términos y Condiciones */}
          <a 
            href="/condiciones" 
            rel="noopener noreferrer" 
            className="bg-[#ffdf2b] text-black font-bold py-4 px-8 rounded-lg text-center shadow-md hover:bg-yellow-500 transition duration-300 
            sm:px-6 stm:px-8 md:px-12 xl:px-16 2xl:px-24">
            TERMINOS Y CONDICIONES
          </a>

          {/* Botón de Formulario de Inscripción */}
          <a 
            href="https://forms.gle/VHuPb3rwbD2oWGvf9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#ffdf2b] text-black font-bold py-4 px-[21.5rem] rounded-lg text-center shadow-md hover:bg-yellow-500 transition duration-300 
            sm:px-6 stm:px-8 md:px-12 xl:px-16 2xl:px-24">
            INSCRIPCIÓN
          </a>
        </div>
    </section>
  );
}

export default ContestLAB;