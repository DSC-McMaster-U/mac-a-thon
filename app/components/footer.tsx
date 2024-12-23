import Link from "next/link";
import Image from "next/image";
import BracketIcon from "@/assets/branding/BracketIcon.svg";
import { SiIconFromName } from "@/utils/icon";


const Footer = () => {
    const socialMedia = [
        {
          name: "Instagram",
          url: "https://www.instagram.com/gdscmcmasteru/",
          icon: "SiInstagram",
        },
        {
          name: "Discord",
          url: "https://discord.gg/XtYqWmJmh7",
          icon: "SiDiscord",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/company/gdscmcmasteru/",
          icon: "SiLinkedin",
        },
    ];

    return (
        <footer data-testid="footer">
            <div className="flex items-center justify-center py-4 sm:py-8 text-center">
                <p>Made with ♥ by your GDSC McMaster Team</p>
            </div>
            <nav className="flex flex-row justify-between items-center w-full py-8 border-t-2 border-google-grey">
                <div className="flex flex-row">
                    <Link
                        href="https://gdscmcmasteru.ca"
                        className="flex items-center h-fit w-fit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={BracketIcon}
                            alt="GDSC Bracket Icon"
                            className="h-5 w-auto"
                        />
                    </Link>
                    <ul className="flex flex-row gap-x-2 sm:gap-x-4 ml-3 sm:ml-6">
                        {socialMedia.map((media) => (
                            <li key={media.name}>
                                <Link
                                href={media.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center hover:text-google-orange transition-colors duration-300"
                                >
                                <SiIconFromName
                                    icon={media.icon}
                                    className="h-5 w-auto"
                                />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pl-2 sm:pl-0 text-right">
                    <p>© 2024 GDSC McMaster University</p>
                </div>
            </nav>
        </footer>
    );
    }

export default Footer;


