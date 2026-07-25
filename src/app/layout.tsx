import Sidebar from '@/components/navigation/Sidebar';

import '@/app/globals.css';
import Footer from '@/components/layout/Footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-neutral-100 antialiased selection:bg-neutral-800 selection:text-neutral-200">
        {/* Top Navigation Bar */}
        <Sidebar />

        {/* Padding updated: Removed left padding entirely (pl-0) */}
        <div className="pt-20 sm:pt-24 w-full min-h-screen">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}