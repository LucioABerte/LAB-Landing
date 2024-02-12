"use client";
import React, { useState } from "react";
import Header from "../../components/common/Header";
import { Input } from "../../components/ui/input";
import { useTranslation } from "@/context/TranslationContext";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import Confetti from "react-dom-confetti";

function NewsletterSection() {
  const { t, loadingTranslation } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  

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
    const pdfPath = t("DownloadGuide");
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = t("DownloadGuideName");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = async () => {
    if (validateEmail()) {
      setLoading(true);
      downloadPDF();
      try {
        const response = await fetch('/api/save-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          setSnackbarOpen(true);
          setLoading(false);
        } else {
          console.error('Error al guardar el correo electrónico en el servidor');
        }
      } catch (error) {
        console.error('Error al conectar con el servidor:', error);
      }
    }
  };


  return (
    <section className="pt-[15rem] md:h-screen md:pt-[20rem] overflow-hidden" id="download">
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
      <Header title={t("Download")} subtitle={t("DownloadTitle")} />
      <div className="flex flex-col md:flex-row items-center md:mt-[2.31rem] sm:mt-0">
        <div>
          <img
            src={`/images/${t("Guide")}`}
            alt="large envelop image"
            className="md:w-full sm:w-[80%] sm:ml-5 stm:w-[80%] stm:ml-6"
          />
        </div>
        <div>
          <p className="mb-[1.44rem] ml-16 text-normal font-semibold text-customGray sm:mb-0 sm:ml-2 stm:mb-0 stm:ml-0">
            {t("DownloadDesc")}
          </p>
          <div className="flex flex-col items-center mt-12">
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
          </div>
        </div>
      </div>
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