import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import SelectOption from "@material-tailwind/react/components/Select/SelectOption";
import { Link } from "react-router-dom";



export function SignUp() {

  const options = [
    { value: "opcion1", label: "Cedula de Ciudadanía" },
    { value: "opcion2", label: "Cedula deextrangería" },
  ];
  return (
    <section className="m-8 flex">
            <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/ado.avif"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Registrate</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Ingresa tus datos para registrarte.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Nombres 
            </Typography>
            <Input
              size="lg"
              placeholder="Pedro Ramon"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Apellidos
            </Typography>
            <Input
              size="lg"
              placeholder="Perez Perez"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
<br />
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Tipo de identificación
            </Typography>
            <select
            size="lg"
            placeholder="Selecciona tu tipo de identificación"
            className="border-t border-blue-gray-200 focus:border-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
           >
            <option value="select" color="gray" >Selecciona tu tipo de identificación</option>
            <option value="c.c">Cedula de Ciudadanía</option>
            <option value="c.e">Cedula de extrangería</option>

          </select>


          </div>
<br></br>
 
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Número de identificación
            </Typography>
            <Input
              type="number"
              size="lg"
              placeholder="Debes ser mayor de edad"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Tu correo electronico
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Número de telefono/celular
            </Typography>
            <Input
              type="number"
              size="lg"
              placeholder="300-456-7890"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Escribe tu contraseña
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          
          </div>

          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
             Confirma tu contraseña
            </Typography>
            <Input 
              size="lg"
              type="password"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                Acepta&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terminos y condiciones
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth>
            Registrate ahora
          </Button>


          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Ya tienes cuenta?
            <Link to="/sign-in" className="text-gray-900 ml-1">Inicia sesión</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
