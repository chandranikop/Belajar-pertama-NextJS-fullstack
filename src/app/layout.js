import Footbar from "../../components/Footbar";
import Navbar from "../../components/Navbar";
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Belajar Next JS",
  description: "Testing",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-300 text-gray-900 grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Navbar />

        {/* Ini adalah tempat Halaman (Page.js) akan muncul */}
        <main className="p-4">{children}</main>

        <Footbar />
      </body>
    </html>
  );
};

export default RootLayout;
