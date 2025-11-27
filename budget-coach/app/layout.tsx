import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
// telling next.js my sitr is called budget coach with short discription
export const metadata:Metadata = {
  title:"Budget Couch",
  description: "simple Busget dashboard for students and small business owners",
};
export default function RootLayout({
  children,
}: {
  children:React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100">
        {/* Top navigation appears on every page */}
        <NavBar />

        {/* Main content area */}
        <div className="max-w-5xl mx-auto px-4 py-8">{children}</div>

        {/* Footer appears on every page */}
        <Footer />
      </body>
    </html>
  );
}
