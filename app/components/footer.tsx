import Link from "next/link";
import Image from "next/image";
import BracketIcon from "@/assets/branding/BracketIcon.svg";

const Footer = () => {
    return (
        <footer data-testid="footer">
            <div className="flex items-center justify-center py-8">
                <p>Made with ♥ by your GDSC McMaster Team</p>
            </div>
            <nav className="flex flex-row justify-between items-center w-full py-8 border-t-2 border-google-grey">
                <div>
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
                </div>
                <div>
                    <p>© 2024 GDSC McMaster University</p>
                </div>
            </nav>
        </footer>
    );
    }

export default Footer;


