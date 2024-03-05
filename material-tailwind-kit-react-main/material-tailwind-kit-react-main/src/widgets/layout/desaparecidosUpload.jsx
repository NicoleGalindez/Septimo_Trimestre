import React from 'react'
import { PageTitle } from '@/widgets/layout'
import {
    Typography,
    Button,
    Input,
    Textarea,
  } from "@material-tailwind/react";

export function DesaparecidosUpload() {
  return (
    <>
               <PageTitle section="Reportar Desaparecido" heading="Envia los datos del desaparecido">
            Completa los campos para realizar tu reporte
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Nombre completo del menor" />
              <Input variant="outlined" size="lg" label="Edad" />
            </div>
            <Input  type="file" variant="outlined" size="lg" label="Foto del menor" />
            <Textarea variant="outlined" size="lg" label="Descripcion y donde fué visto por última vez. (Tambien agrega un número de contacto)" rows={10} />
          

            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Enviar reporte
            </Button>
          </form>
    </>
  )
}

DesaparecidosUpload.displayName = "/src/widgets/layout/desaparecidosUpload.jsx";

export default DesaparecidosUpload;

