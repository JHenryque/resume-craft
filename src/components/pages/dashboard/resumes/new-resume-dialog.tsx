"use client";
import { Button } from "@/components/ui/button";
import Dialog, { BaseDialogProps } from "@/components/ui/dialog";
import InputField from "@/components/ui/input/field";
import { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

type FormData = {
  title: string;
};

export default function NewResumeDialog(props: BaseDialogProps) {
  const methods = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um titulo para seu curriculo"
      content={
        <FormProvider {...methods}>
          <form
            className="flex flex-col"
            action=""
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            {/* <Controller
                control={control}
                name="name"
                rules={{ required: true }}
                render={({ field }) => <input {...field} />}
              />
              <Controller
                control={control}
                name="email"
                render={({ field }) => <input {...field} />}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field }) => <input {...field} />}
              /> */}
            <InputField label="Titulo" name="title" required />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </form>
        </FormProvider>
      }
    />
  );
}
