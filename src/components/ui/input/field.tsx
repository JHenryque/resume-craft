import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import FieldWrapper from "../field-wrapper";

type inputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

export default function InputField({
  label,
  name,
  required,
  ...props
}: inputFieldProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name="name"
      rules={{
        required: required && "Campos obrigatorio",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <p className="text-sm text-destructive">
              {fieldState.error.message}
            </p>
          )}
        </FieldWrapper>
      )}
    />
  );
}
