import { SiIconFromName } from "@/utils/icon";
import HeroIllustration from "@/assets/illustrations/HeroIllustration.webp";
import UNGoalsIllustration from "@/assets/illustrations/UNGoalsIllustration.webp";
import Image from 'next/image';
import Header from "./components/header";
import Footer from "./components/footer";

const stats = [
	{
		number: 800,
		title: "Attendees",
	},
	{
		number: 200,
		title: "Projects",
	},
	{
		number: 55,
		title: "Mentors",
	},
];

const sponsors = [
	{
		name: "Google",
		icon: "SiGoogle",
		href: "https://google.com",
	},
	{
		name: "Microsoft",
		icon: "SiMicrosoft",
		href: "https://microsoft.com",
	},
	{
		name: "Facebook",
		icon: "SiFacebook",
		href: "https://facebook.com",
	},
	{
		name: "GitHub",
		icon: "SiGithub",
		href: "https://github.com",
	},
	{
		name: "X",
		icon: "SiX",
		href: "https://x.com",
	},
	{
		name: "LinkedIn",
		icon: "SiLinkedin",
		href: "https://linkedin.com",
	},
	{
		name: "Instagram",
		icon: "SiInstagram",
		href: "https://instagram.com",
	},
	{
		name: "Discord",
		icon: "SiDiscord",
		href: "https://discord.com",
	},
];

const Hero = () => {
	return (
		<section
			id="hero"
			className="flex flex-col md:flex-row justify-start items-center md:h-screen gap-y-8 md:gap-x-16 md:py-0 py-12"
		>
			<div
				id="hero-content"
				className="flex flex-col gap-y-4 md:gap-y-8 w-full justify-center items-start h-full"
			>
				<p>— McMaster&apos;s Annual Google Hackathon</p>
				<h1>McMaster Google Solution Challenge</h1>
			</div>
			<Image
				src={HeroIllustration}
				alt="Collaboration illustration"
				className="h-auto w-full md:w-1/3"
			/>
		</section>
	);
};

const About = () => {
	return (
		<section id="about" className="flex flex-col justify-start items-start">
			<div
				id="about-content"
				className="flex flex-col justify-center items-start h-full gap-y-8 md:gap-y-16 "
			>
				<h2>Who are we?</h2>
				<div className="flex flex-col gap-y-2 md:gap-y-4">
					<p>
						The Google Solution Challenge is an annual global hackathon designed
						to empower students to create innovative solutions using Google
						technologies. Participants from universities worldwide come together
						to collaborate and develop impactful projects that address one or
						more of the United Nations&apos; 17 Sustainable Development Goals. With a
						focus on problem-solving and real-world impact, the event challenges
						students to use their creativity and technical skills to make
						meaningful contributions to global issues.
					</p>
					<p>
						Organized by Google Developer Student Clubs (GDSCs), the Solution
						Challenge welcomes students of all experience levels, from beginners
						to advanced developers. Teams have the opportunity to learn new
						technologies, connect with like-minded peers, and receive mentorship
						from industry professionals. Throughout the competition,
						participants are provided with resources, workshops, and support to
						help them bring their ideas to life, making it an inclusive and
						enriching experience for everyone involved.
					</p>
				</div>
			</div>
		</section>
	);
};

const Events = () => {
	return (
		<section id="events" className="flex flex-col justify-start items-start">
			<div
				id="events-content"
				className="flex flex-col gap-y-8 md:gap-y-16 w-full"
			>
				<h2>Events</h2>
				<div
					id="stats"
					className="flex flex-row items-center justify-evenly gap-y-4 md:gap-y-8"
				>
					{stats.map((stat, index) => (
						<div key={index} className="flex flex-col gap-y-2 md:gap-y-4">
							<h3>{stat.number}</h3>
							<h4>{stat.title}</h4>
						</div>
					))}
				</div>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={UNGoalsIllustration}
						alt="Hackathon photo"
						className="w-full md:w-3/4 flex"
					/>
				</div>
			</div>
		</section>
	);
};

const Sponsors = () => {
	return (
		<section id="sponsors" className="flex flex-col justify-start items-start">
			<div
				id="sponsors-content"
				className="flex flex-col gap-y-8 md:gap-y-16 w-full"
			>
				<h2>Our sponsors</h2>
				<div
					id="sponsors-logo-grid"
					className="grid grid-cols-4 w-full place-content-center place-items-center gap-4 md:gap-8"
				>
					{sponsors.map((sponsor, index) => (
						<a href={sponsor.href} key={index} target="_blank" rel="noreferrer">
							<SiIconFromName
								icon={sponsor.icon}
								className="h-8 md:h-12 w-auto hover:text-googleGrey duration-300 transition-colors"
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

const FAQ = () => {
	const faq = [
		{
			question: "What is the Google Solution Challenge?",
			answer:
				"The Google Solution Challenge is an annual global hackathon designed to empower students to create innovative solutions using Google technologies. Participants from universities worldwide come together to collaborate and develop impactful projects that address one or more of the United Nations’ 17 Sustainable Development Goals.",
		},
		{
			question: "Who can participate?",
			answer:
				"The Solution Challenge welcomes students of all experience levels, from beginners to advanced developers. Teams have the opportunity to learn new technologies, connect with like-minded peers, and receive mentorship from industry professionals.",
		},
		{
			question: "How can I get involved?",
			answer:
				"Stay tuned for updates on how to participate in the next Google Solution Challenge. Follow us on social media and join our mailing list to receive the latest news and announcements.",
		},
	];

	return (
		<section id="faq" className="flex flex-col justify-start items-start">
			<div
				id="faq-content"
				className="flex flex-col gap-y-8 md:gap-y-16 w-full"
			>
				<h2>Questions?</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
					{faq.map((question, index) => (
						<div key={index} className="flex flex-col gap-y-2 md:gap-y-4">
							<h3>{question.question}</h3>
							<p>{question.answer}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const Home = () => {
	return (
		<>
      <Header/>
      <Hero />
      <About />
      <Events />
      <Sponsors />
      <FAQ />
      <Footer/>
		</>
	);
};

export default Home;
