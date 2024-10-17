import SideNav from '@/ui/dashboard/side-nav';

export const experimental_ppr = true;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <div className="w-64 flex-none bg-gray-200 shadow-xl">
        <SideNav />
      </div>
      <div className="h-full grow overflow-y-auto bg-gray-100">{children}</div>
    </div>
  );
}
