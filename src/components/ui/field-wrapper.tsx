import { Label } from "./label";

type FieldWrapperProps = {
  label: string;
  children: React.ReactNode;
};

export default function FieldWrapper({ label, children }: FieldWrapperProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </Label>
      {children}
    </div>
  );
}
