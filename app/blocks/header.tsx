"use client";

import siteData from "../../content/site-settings/index.json";
import client from "../../tina/__generated__/client";
import PageList from "../page-list"

export default async function Header() {
    const pages = await client.queries.pageConnection();
    return (
        <header>
            <div className="wrapper">
                <img src={siteData.logo} alt={siteData.siteTitle} className="logo"/>
                <PageList {...pages} />
            </div>
        </header>
    );
}

// THIS VERSION HAS ERRORS BUT I DON'T NEED TO IMPORT PAGE-LIST.TSX
// "use client";
// import Link from "next/link";

// import siteData from "../../content/site-settings/index.json";
// import client from "../../tina/__generated__/client";
// import PageList from "../page-list";

// export default async function Header() {
//     const pages = await client.queries.pageConnection();
//     return (
//         <header>
//             <div className="wrapper">
//                 <img src={siteData.logo} alt={siteData.siteTitle} />
//                 <div>
//         {pages.data.pageConnection.edges.map((page) => (
//           <div key={page.node.id}>
//             <Link href={`/${page.node._sys.filename}`}>
//               {page.node._sys.filename}
//             </Link>
//           </div>
//         ))}
//       </div>
//             </div>
//         </header>
//     );
// }