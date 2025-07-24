import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, Bounce } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicolas Sanjaya - Fullstack Developer",
  description:
    "Fullstack Developer specializing in modern web technologies. Expert in React, Node.js, TypeScript",
  keywords: [
    "fullstack developer",
    "react",
    "nodejs",
    "typescript",
    "web development",
  ],
  authors: [{ name: "Nicolas Sanjaya" }],
  openGraph: {
    title: "Nicolas Sanjaya - Fullstack Developer",
    description: "Fullstack Developer specializing in modern web technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <ToastContainer
          autoClose={3000}
          theme="dark"
          position="top-right"
          draggable
          transition={Bounce}
          closeOnClick
        />
        {children}
      </body>
    </html>
  );
}
