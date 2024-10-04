import BracketIcon from "@/assets/branding/BracketIcon.svg";
import { SiIconFromName } from "@/utils/icon";
import Image from "next/image";

const Header = () => {
	const pageSections = [
		{
			title: "About us",
			href: "about",
		},
		{
			title: "Events",
			href: "events",
		},
		{
			title: "Sponsors",
			href: "sponsors",
		},
		{
			title: "FAQ",
			href: "faq",
		},
	];

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
		<header data-testid="header" className="z-50 fixed left-1/2 -translate-x-1/2 top-8 hidden md:flex flex-row items-center gap-x-16 bg-googleGrey bg-opacity-10 backdrop-blur py-2 px-3 rounded-full border-opacity-10 border border-googleGrey">
			<a href="#hero" className="flex items-center h-fit w-fit">
				<Image
					src={BracketIcon}
					alt="GDSC Bracket Icon"
					className="h-5 w-auto"
				/>
			</a>

			{/* Main Navigation */}
			<nav aria-label="Main Navigation" className="flex flex-1">
				<ul className="flex flex-row gap-x-8 items-center h-full">
					{pageSections.map((section) => (
						<li key={section.href}>
							<a
								href={`#${section.href}`}
								className="whitespace-nowrap cursor-pointer text-lg border-b-2 border-transparent hover:border-b-2 hover:border-googleGrey transition-all duration-200"
							>
								{section.title}
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Social Media Links */}
			<nav aria-label="Social Media" className="flex gap-x-4 h-fit w-fit">
				<ul className="flex flex-row gap-x-4">
					{socialMedia.map((media) => (
						<li key={media.name}>
							<a
								href={media.url}
								target="_blank"
								rel="noreferrer"
								className="flex items-center"
							>
								<SiIconFromName
									icon={media.icon}
									className="h-5 w-auto hover:text-googleGrey transition-colors duration-300"
								/>
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
