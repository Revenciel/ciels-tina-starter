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


// import Link from "next/link";
// import React from "react";
// import PageList from "./page-list";
// import { client } from "../tina/__generated__/client";
// import "./styles/styles.scss";
// import Footer from "./blocks/footer";

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pages = await client.queries.pageConnection();

//   return (
//     <html lang="en">
//       <body className="lightTheme">
//         <header>
//           <div className="wrapper">
//             {/* <Link href="/">Home</Link>
//             {" | "}
//             <Link href="/posts">Posts</Link> */}
//             <PageList {...pages} />
//             <span>--------------------------------</span>
//           </div>
//         </header>
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
