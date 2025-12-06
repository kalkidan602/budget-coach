import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Budget Coach",
  description: "Simple budget dashboard for students and small business owners",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
        {/* Top navigation appears on every page */}
        <NavBar />

        {/* Main content area */}
        <main className="flex-1">
          <div className="max-w-5xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>

        {/* Footer appears on every page */}
        <Footer />
      </body>
    </html>
  );
}

