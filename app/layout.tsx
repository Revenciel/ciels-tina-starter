import React from "react";
import "./styles/styles.scss";
import Footer from "./blocks/footer";
import Header from "./blocks/header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="lightTheme">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}