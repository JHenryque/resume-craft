import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import InforSidebar from "./infos-sidebar";
import ResumeContent from "./resume-content";
import StructureSidebar from "./structure-sidebar";

export default function ResumePage() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <ResizablePanelGroup orientation="horizontal" className="w-full h-full ">
        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
          <InforSidebar />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel>
          <ResumeContent />
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
          <StructureSidebar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
