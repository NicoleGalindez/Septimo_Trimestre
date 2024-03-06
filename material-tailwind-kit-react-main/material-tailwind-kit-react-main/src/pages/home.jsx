import React, { useState } from 'react';
import Modal from './modal' // Importa el componente Modal

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer,DesaparecidosUpload } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [posicion, setPosition] = useState(null); // Agrega estado para la posición

  const manejarClicBoton = (position) => {
    setModalAbierto(true);
    setPosition(position); // Guarda la posición en el estado del modal
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };





  
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-5.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Sientete Seguro Con ConfiApp
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              Su confianza en nosotros es nuestra prioridad.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center" 
                id="nosotros">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                NOSOTROS:
                <p></p>
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              Cada integrante de nuestro equipo aporta su talento y dedicación para desarrollar una aplicación que prioriza la seguridad y la tranquilidad de tu familia. Desde el diseño de funciones hasta la implementación de medidas de seguridad, trabajamos juntos para ofrecerte una experiencia fluida y confiable. Nuestro compromiso es asegurarnos de que cada aspecto de la aplicación esté cuidadosamente diseñado para brindarte la mejor experiencia posible.
                <br />
                
          

              </Typography>
              {/* <Button variant="filled">Leer Mas</Button> */}
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/equipo.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal"></Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Porque elegirnos?
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Transparencia y confiabilidad: Nos comprometemos a mantener una comunicación abierta y transparente contigo en todo momento.
                  
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>


      
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="PADRES/TUTORES   REGISTRADOS" 
          // heading=".."
          >
          Administrador tienes la opcion de aceptar o rechazar padres/tutores registrados, aceptando que los padres/tutores ingresaron todos sus datos correctamente.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
              
                position={
                   <a href='/pages.modal.jsx' style={{textDecoration: 'underline'}}> 
                    Ver datos
                    </a>
                    // forma de angela que tambien funciona !
                            //   <button
                            //   onClick={() => manejarClicBoton(position)}
                            //   style={{
                            //     border: '2px',
                            //     borderRadius: '6px',
                            //     backgroundColor: 'lightblue',
                            //     color: 'green',
                            //   }}
                            // >
                            //   {position}
                            // </button>
                }

                  //muestra los iconos por si acaso
                            // socials={
                            //   <div className="flex items-center gap-2">
                            //     {socials.map(({ color, name }) => (
                            //       <IconButton key={name} color={color} variant="text">
                            //         <i className={`fa-brands text-xl fa-${name}`} />
                            //       </IconButton>
                            //     ))}
                            //   </div>
                            // }
              />
            ))}
          </div>
        </div>

        <div>

          {/* //modal datos    */}
        {console.log("modalAbierto:", modalAbierto)}
    {modalAbierto && (
      <Modal cerrarModal={cerrarModal}>
        {/* Contenido del modal aquí */}
        <p>Hiciste clic en la posición: {position}</p>
        {/* Otro contenido que quieras mostrar en el modal */}
      </Modal>
    )}
  </div>

      </section>



      
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="" heading=" Adolcentes desaparecidos ">
            Los adolecentes publicados acontinuación se encuentran desaparecidas, si tienes información comunicate con nosotros ó con el número de contacto en su respectiva descripción.
          </PageTitle>

          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, description, img }) => (
              //estaba icon aqui arriba
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                {/* <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div> */}

                <img src={img}  className="w-full h-auto mb-2  " />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          
        </div>
      </section>

      
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
