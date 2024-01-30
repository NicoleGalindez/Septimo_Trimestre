import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Inicio",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Perfil",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Iniciar Sesion",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Registrarme",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Documentos",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
