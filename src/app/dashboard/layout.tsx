import SideNav from "@/ui/dashboard/side-nav";

export const experimental_ppr = true;

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
      <div className="flex-grow h-full">
        {children}
      </div>
    </div>
  );
}
