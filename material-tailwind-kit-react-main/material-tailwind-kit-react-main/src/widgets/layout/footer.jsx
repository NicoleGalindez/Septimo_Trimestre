import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, img,description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>

           

            <img src={img}  className="w-25 h-10 mb-2  " />

            <Typography className="font-normal text-blue-gray-200 lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "ConfiApp",
  img: "/img/logoconfigblanco.png",
  description:
    "Encuentranos en redes sociales:",
  socials: [
    {
      color: "white",
      name: "facebook",
      path: "https://es-la.facebook.com/",
    },
    {
      color: "white",
      name: "instagram",
      path: "https://www.instagram.com/?hl=en",
    },
    // {


    //   color: "white",
    //   name: "youtube",
    //   path: "https://www.instagram.com/creativetimofficial/",
    // },
    {
      color: "white",
      name: "store",
      path: "https://www.appcracy.com/app/google-play-store/download/",
      //link simulado
    },
  ],
  menus: [
    {
      name: " Enlaces útiles ",
      items: [
        // { name: "About Us", path: "https://www.creative-tim.com/presentation" },
       // { name: "Blog", path: "https://www.creative-tim.com/blog" },
        // {
        //   name: "Github",
        //   path: "https://www.github.com/creativetimofficial/material-tailwind?ref=mtk",
        // },

        {
          name: "Facebook",
          path: "https://es-la.facebook.com/",
        },
        {
          name: "instagram",
          path: "https://www.instagram.com/?hl=en",
        },
        {
          name: "Play Store",
          path: "https://www.appcracy.com/app/google-play-store/download/",
        },




      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "MIT License",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Contribute",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Change Log",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contact Us",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} ConfiApp by{" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-200 transition-colors hover:text-blue-500"
      >
        Creative Tim
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
