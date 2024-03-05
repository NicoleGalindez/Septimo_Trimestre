import { contactData } from "@/data";


export function LISTAdesaparecidos(){
    return(
        <>
        <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="" heading=" Adolcentes desaparecidos ">
            Los adolecentes acontinuacion se encuantran desaparecidas, si tienes informacion comunicate con nosotros o con el número de contacto en su respectiva descripción.
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
        
        </>
    )
}


export  default LISTAdesaparecidos;
