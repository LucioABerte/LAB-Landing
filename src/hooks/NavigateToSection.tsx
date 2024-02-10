export const navigateToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {

  
      // Calcular la posición de destino restando la altura del encabezado
      const targetPosition = section.offsetTop - 130;
  
      // Desplazar a la posición de destino
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
