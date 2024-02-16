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
              <Input variant="outlined" size="lg" label="Nombre completo" />
              <Input variant="outlined" size="lg" label="Lugar  de residencia" />
            </div>
            <Textarea variant="outlined" size="lg" label="Descripcion" rows={8} />

            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Enviar reporte
            </Button>
          </form>
    </>
  )
}

DesaparecidosUpload.displayName = "/src/widgets/layout/desaparecidosUpload.jsx";

export default DesaparecidosUpload;

