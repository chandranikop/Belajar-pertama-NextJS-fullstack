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
      <body className="bg-gray-300 text-gray-900">
        <Navbar />

        {/* Ini adalah tempat Halaman (Page.js) akan muncul */}
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
