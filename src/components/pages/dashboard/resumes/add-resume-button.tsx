import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resume-card";

export default function AddResumeButton() {
  return (
    <ResumeCardButton
      title="Criar novo curriculo"
      description="Comece do zero ou use um modelo"
      icon={<Plus size={50} />}
    />
  );
}
