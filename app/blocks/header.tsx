"use client";
import siteData from "../../content/site-settings/index.json";
import { showCTA, linkTarget, linkDestination } from "../fieldComponents/linkSelector";

export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <img src={siteData.logo} alt={siteData.siteTitle} className="logo" />
                <nav>
                    {siteData.navLinks.map((link) => {
                        return (
                            <a href={linkDestination(link)} target={linkTarget(link)}>{link.anchor}</a>
                        )
                    })}
                    <a href={linkDestination(siteData?.cta)} target={linkTarget(siteData?.cta)} className={showCTA() + "primaryCTA"}>{siteData?.cta?.anchor}</a>
                </nav>
            </div>
        </header>
    );
}