import SideNav from '@/ui/dashboard/side-nav';

export const experimental_ppr = true;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <div className="bg-gray-200 flex-none w-64 shadow-xl">
        <SideNav />
      </div>
      <div className="bg-gray-100 flex-grow h-full overflow-y-auto">{children}</div>
    </div>
  );
}
