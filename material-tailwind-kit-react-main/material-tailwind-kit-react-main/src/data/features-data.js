import {
  BellAlertIcon,
  CogIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "gray",
    title: "Como funciona nuestro aplicativo",
    icon:   CogIcon,
    description: 

      "Nuestra aplicación ofrece control parental mediante rutas georreferenciadas. El padre crea y monitorea las rutas, mientras que el menor las sigue desde su dispositivo. Si se desvía, el padre recibe una notificación instantánea.",
  },
  {
    color: "gray",
    title: "Seguridad proporcionada por nuestro aplicativo",
    icon: ShieldCheckIcon,
    description:
      " Nuestra prioridad es la seguridad de tu hijo. Utilizamos tecnología avanzada para rastrear su ubicación en tiempo real y enviar notificaciones instantáneas si se desvía de las rutas establecidas. Esto proporciona tranquilidad a los padres, brindando una experiencia segura y confiable mientras tu hijo explora el mundo.",
  },
  {
    color: "gray",
    title: "Notificación de alerta ante desviaciones de ruta",
    icon: BellAlertIcon,
    description:
      "Nuestro sistema te notifica al instante si tu hijo se desvía de la ruta asignada, brindándote tranquilidad y permitiéndote tomar medidas rápidas. Te mantenemos informado en tiempo real sobre cualquier cambio inesperado en el recorrido de tu hijo, garantizando su seguridad incluso fuera de las rutas establecidas.",
  },
];

export default featuresData;
