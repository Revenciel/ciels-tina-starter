import React from "react";
import "./styles/styles.scss";

// layout.tsx ~ page.tsx
// Meta.tsx ~  Layout.tsx
// layout-context.tsx ~ layout-context.tsx


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
