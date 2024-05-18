'use client'
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/Header";
import { Input } from "../../../components/ui/input";
import { useTranslation } from "@/context/TranslationContext";
import { CircularProgress, Modal, Skeleton } from "@mui/material";
import Confetti from "react-dom-confetti";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";




function NewsletterSection() {

  const {t, loadingTranslation} = useTranslation()
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    } else if (email.length < 11) {
      setError("Email address must be at least 11 characters long.");
      return false;
    }
    setError(null);
    return true;
  };

  const downloadPDF = () => {
    // Ruta al archivo PDF en la raíz del proyecto
    const pdfPath = t("DownloadGuide");
    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = t("DownloadGuideName");
    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();
    // Limpia el enlace del DOM después de la descarga
    document.body.removeChild(link);
  };

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language === "en") {
      // Si el idioma es inglés, establece la ruta de la imagen en inglés
      setImageSrc(`/images/guideeng.jpg`);
    } else {
      // Si el idioma es español o no está definido, establece la ruta de la imagen en español
      setImageSrc(`/images/guidespa.jpg`);
    }
  }, []); // Solo se ejecuta una vez al montar el componente
  

  const handleDownload = () => {
    if (validateEmail()) {
      setLoading(true);

      fetch('/api/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
        .then(response => {
          if (response.ok) {
            downloadPDF();
            setSnackbarOpen(true);
          } else {
            throw new Error('Error saving email.');
          }
        })
        .catch(error => {
          console.error('Error saving email:', error);
          // Maneja el error aquí
        })
        .finally(() => setLoading(false));
    }
  };

  return ( 
    <section className="pt-[15rem] md:pt-[6rem] overflow-hidden 2xl:pt-4 lg:pt-28 stm:pt-12 " id="download">
      <Confetti
        active={snackbarOpen}
        config={{
          angle: 50,
          spread: 360,
          startVelocity: 20,
          elementCount: 100,
          dragFriction: 0.05,
          duration: 15000,
          stagger: 4,
          width: `25px`,
          height: `25px`,
          colors: ["#000000", "#ffdf2b", "#fcfcfc", "#808080", "#ffbb00"],
        }}
      />
      {loadingTranslation ? (
          <div className="flex flex-col items-center">
            <Skeleton variant="text" width={160} height={50} animation="wave" />
            <Skeleton variant="text" width={900} height={80} animation="wave" />
          </div>
        ) : ( 
          <Header title={t("Download")} subtitle={t("DownloadTitle")} />
       )
      }
      {loadingTranslation ? (
          <div className="flex flex-row items-start justify-start gap-[6rem] mt-16 ">
              <Skeleton variant="rectangular" width={350} height={300} animation="wave" sx={{ marginLeft: "5rem", borderRadius: "8%"}}/>
            <div className="flex flex-col">
              <Skeleton variant="text" width={1000} height={80} animation="wave" />
              <Skeleton variant="text" width={700} height={100} animation="wave" sx={{ marginLeft: "10rem"}}/>
              <Skeleton variant="text" width={700} height={100} animation="wave" sx={{ marginLeft: "10rem"}}/>
              <div className="w-[70%] h-[3.5rem] mt-[1.6rem] ml-[10rem]">
                
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-col items-center md:mt-[2.31rem] sm:mt-0 2xl:flex-row lg:flex-row">
            <div>
              <img
                src={imageSrc}
                alt="large envelop image"
                className="md:w-[80%] sm:w-[80%] sm:ml-5 stm:w-[80%] stm:ml-6"
              />
            </div>
            <div>
              <p className="mb-[1.44rem] ml-16 text-normal font-semibold text-customGray sm:mb-0 sm:ml-2 stm:mb-0 stm:ml-0">
                {t("DownloadDesc")}
              </p>
              <iframe width="540" height="305"  className="flex h-screen w-full" src="https://2d19fcc2.sibforms.com/serve/MUIFAFEf099CLsm_BI6IKS3suumQbG_XM3lwO8cy7vurbta0EmNq6k6IlQAd-rpKvY6FpTl-kk5GK3tckqBEV_t0WKd2CcrL2prQVRCY0PF5VxFMfJmBar2JULy5JLlVc_oZKK0FU6C8A-PVQHJizGz8DGLh-U1oqFVf3E6lou3AljVqmpBOcVhZCTzPPBO50VHzo4a_QdcAPOzu"></iframe>
             {/* <div className="flex flex-col items-center mt-12">
                <Input
                  type="email"
                  placeholder={t("email")}
                  className="w-[60%] h-[3.8125rem] rounded-xl newsletter-box-shadow sm:w-full stm:w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <div className="w-[60%] h-[3.5rem] mt-[3.12rem] sm:w-full stm:w-full">
                  <button className="w-full h-full bg-primary text-white shadow-xl select-none rounded-[0.625rem] hover:bg-customGray" onClick={handleDownload} disabled={loading}>
                    {loading ? 
                        <div>
                          {t("Downloading")}
                          <CircularProgress size={24} color="inherit" /> 
                        </div>
                      : (loadingTranslation ? 
                          t("Loading") : t("DownloadButton")
                      )
                    }
                  </button>
                </div>
                  </div>*/}
            </div>
          </div>
        )
      }
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={null}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ marginTop: "8rem"}}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ backgroundColor: "black", color: "#fcfcfc"}}>
          {t("DownloadSuccessMessage")}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default NewsletterSection;
