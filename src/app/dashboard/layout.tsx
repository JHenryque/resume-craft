import Link from "next/link";
import Logo from "@/assets/logo.svg";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  console.log(Logo);
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px_1fr]">
      <aside className="w-full h-full flex flex-col items-center border-r border-muted">
        <div className="w-full p-6 border-b border-muted">
          <Link href="/dashboard/resumes">
            <img
              src="/_next/static/media/logo.a25c1e12.svg"
              alt="Logo"
              className="max-w-[100px] mx-auto"
            />
            {/* <Logo className="max-w-[100px] mx-auto" /> */}
          </Link>
        </div>
      </aside>
      <main>{children}</main>
    </div>
  );
}
