import SideNav from "@/ui/dashboard/side-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:voerflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
