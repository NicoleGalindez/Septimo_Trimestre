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
      "En nuestro aplicativo, la seguridad es nuestra prioridad principal. Utilizamos tecnologia de vanguardia para garantizar la proteccion de tu hijo en todo momento. Con la capacidad de rastrear la ubicación en tiempo real y recibir notificaciones instantáneas si se desvía de las rutas establecidas, proporcionamos una capa adicional de seguridad y tranquilidad para los padres. Nuestro compromiso es brindarte una experiencia segura y confiable mientras tu hijo explora el mundo.",
  },
  {
    color: "gray",
    title: "Notificación de alerta ante desviaciones de ruta",
    icon: BellAlertIcon,
    description:
      "En caso de que tu hijo se desvíe de la ruta asignada, nuestra aplicación te notificará al instante para que puedas tomar medidas rápidas y efectivas. Tu tranquilidad es nuestra prioridad, por eso te mantendremos informado en tiempo real sobre cualquier cambio inesperado en el recorrido de tu hijo. Con esta función, puedes estar seguro de que siempre estarás al tanto de la ubicación y seguridad de tu hijo, incluso cuando se aleje de las rutas establecidas.",
  },
];

export default featuresData;
