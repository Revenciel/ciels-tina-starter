"use client";
import siteData from "../../../content/site-settings/index.json";
import {
  showCTA,
  linkTarget,
  linkDestination,
} from "../../fieldComponents/linkSelector";
//import { usePathname } from "next/navigation";

//this function does not ever return true; unknown why
// function activeLink(link){
//     const linkPath = link.relativePath.substring(12).replace('.mdx', '').trim();
//     const currentPath = usePathname().trim();
//     console.log("Link relative path: '" + linkPath + "' (length: " + linkPath.length + ")");
//     console.log("Current path: '" + currentPath + "' (length: " + currentPath.length + ")");

//     if(linkDestination(linkPath) === currentPath){
//         console.log("Active link");
//         return "active";
//     }

//     console.log("Not active link");
//     return "";
// }

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <a href="/">
          <img src={siteData.logo} alt={siteData.siteTitle} className="logo" />
        </a>
        <nav>
          {siteData.navLinks.map((link) => (
            <a
              key={link.anchor}
              href={linkDestination(link)}
              target={linkTarget(link)}
            >
              {link.anchor}
            </a>
          ))}
          <a
            href={linkDestination(siteData?.cta)}
            target={linkTarget(siteData?.cta)}
            className={showCTA() + " " + "cta primary"}
          >
            {siteData?.cta?.anchor}
          </a>
        </nav>
      </div>
    </header>
  );
}
