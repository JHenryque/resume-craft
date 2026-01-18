import Link from "next/link";
import Logo from "@/assets/logo.svg";
import NavItems from "@/components/pages/dashboard/nav-items";
import UserDropdown from "@/components/pages/dashboard/user-dropdown";
import ThemeToggle from "@/components/shared/theme-toggle";

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
        <NavItems />
        <div className="w-full mt-auto border-t border-muted px-3 py-4 flex items-center justify-between gap-2 ">
          {/* &copy; {new Date().getFullYear()} Resume Craft */}
          <UserDropdown />
          <ThemeToggle />
        </div>
      </aside>
      <main className="p-6 flex flex-col w-full h-full overflow-auto">
        {children}
      </main>
    </div>
  );
}
