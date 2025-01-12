import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProvider } from "./layout-context";

//idk why we need this, maybe just for typescript error?
type LayoutProps = PropsWithChildren & {
  rawPageData?: any;
};

export default function Layout({ children, rawPageData }: LayoutProps) {
  return (
    <LayoutProvider pageData={rawPageData}>
      <Header />
      <h1>This is {rawPageData.data.page.title}</h1>
      <main>{children}</main>
      <Footer />
    </LayoutProvider>
  );
}
