import React from "react";
import "./styles/styles.scss";

// maybe remove this for prod? it opts out of full route cache.
export const dynamic = 'force-dynamic';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="lightTheme">{children}</body>
    </html>
  );
}
