type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px_1fr]">
      <aside>
        <p>Saibar</p>
      </aside>
      <main>{children}</main>
    </div>
  );
}
