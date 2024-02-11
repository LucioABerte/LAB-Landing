export const navigateToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    let headerHeight = 0; // Altura del encabezado común
    let additionalOffset = 0; // Offset adicional para diferentes secciones

    // Ajustar offset adicional según la sección
    switch(sectionId) {
      case "home":
        additionalOffset = 130;
        break;
      case "services":
        additionalOffset = -200;
        break;
      case "about":
        additionalOffset = 130;
        break;
        case "testimonials":
        additionalOffset = 130;
      break;
        case "team":
        additionalOffset = 130;
      break;
      break;
        case "download":
        additionalOffset = -130;
      break;
      // Agregar más casos según sea necesario
    }

    // Calcular la posición de destino restando la altura del encabezado y el offset adicional
    const targetPosition = section.offsetTop - headerHeight - additionalOffset;

    // Desplazar a la posición de destino
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};