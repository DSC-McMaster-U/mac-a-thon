import Link from "next/link";

const Footer = () => {
    return (
        <footer data-testid="footer">
            <nav className="flex flex-row justify-between w-full">
                <ul className="flex flex-row">
                    <li>
                    <Link href="/">Home</Link>
                    </li>
                    <li>
                    <Link href="/events">Events</Link>
                    </li>
                    <li>
                    <Link href="/newsletters">Newsletters</Link>
                    </li>
                </ul>
                {/* <ul>
                    <li>
                    <Link href="/discord">Join our discord</Link>
                    </li>
                </ul> */}
            </nav>
        </footer>
    );
    }

export default Footer;


