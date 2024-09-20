import SideNav from "@/ui/dashboard/side-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <div className="flex-none w-64">
        <SideNav />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
