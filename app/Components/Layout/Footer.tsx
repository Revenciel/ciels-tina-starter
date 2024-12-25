import siteData from "../../../content/site-settings/index.json";

export default function Footer() {
    return (
        <footer className="darkTheme">
            <div className="wrapper">
                {/* Logo */} <img src={siteData.footer.logo} alt={siteData.siteTitle} />
                <ul id="socials">
                    {siteData.footer.socials && siteData.footer.socials.map((item, i) => {
                        return (
                            <li key={`${item.platform}-${i}`}>
                                <a href={item.link}><img src={item.icon} alt={item.platform + ' logo'} /></a>
                            </li>
                        );
                    })}
                </ul>
                <ul id="legal">
                    <li>©{new Date().getFullYear() + ' ' + siteData.footer.copyright}</li>
                    <li>Website by <a href="https://www.clarkybox.com/" target="_blank">Clarkybox</a></li>
                </ul>
            </div>
        </footer>
    );
}