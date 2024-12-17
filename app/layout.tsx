import React from "react";
import "./styles/styles.scss";
//import Meta from "./Layout/Meta";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <Meta /> */}
      <body className="lightTheme">{children}</body>
    </html>
  );
}
