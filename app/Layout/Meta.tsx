// import React, { PropsWithChildren } from "react";
// import siteData from "../../content/site-settings/index.json";
// import Head from "next/head";
// import { LayoutProvider } from "./layout-context";

// type MetaProps = PropsWithChildren & {
//     rawPageData?: any;
//   };

// export default async function Meta({ rawPageData }: { rawPageData: MetaProps;
//  }) {

//   return (
//     <LayoutProvider pageData={rawPageData}>
//     <Head>
//       <link rel="icon" href={siteData.favicon} />
//       <link rel="stylesheet" href="/stylesheet.css" />
//       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       <meta charSet="UTF-8" />
//       <title>{rawPageData.data.page.title} | {siteData.siteTitle}</title>
//     </Head>
//     </LayoutProvider>
//   );
// }
