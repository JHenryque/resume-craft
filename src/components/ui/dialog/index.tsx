import { Children } from "react";
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./primitive";

export type BaseDialogProps = {
  children?: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

type DialogProps = BaseDialogProps & {
  title?: string;
  description?: string;
  content: React.ReactNode;
};

export default function Dialog({
  children,
  title,
  description,
  content,
  open,
  setOpen,
}: DialogProps) {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {Children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
      </DialogContent>
    </DialogRoot>
  );
}
