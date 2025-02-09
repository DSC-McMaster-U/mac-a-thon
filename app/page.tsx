import HeroIllustration from "@/assets/HeroIllustration.webp";
import UNGoalsIllustration from "@/assets/UNGoalsIllustration.webp";
import BuildWithAIBanner from "@/assets/BuildWithAIBanner.png";
import Image from 'next/image';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { client } from "@/sanity/lib/client";
import type { FAQ, Sponsor, GeneralInfo, About, Statistic } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";
import { formatTimeline } from "@/utils/date";
import { capitalizeFirstLetter } from "@/utils/string";
import Link from "next/link";
import StickyScroll from "@/app/components/StickyScroll";
import Accordion from "@/app/components/Accordion";

const HeroSection = async () => {
	const generalInfo: GeneralInfo = await client.fetch(
		`*[_type == 'generalInfo'][0]`,
	);

	if (!generalInfo) return null;

	return (
		<section id="hero" className="pt-32 xl:pt-36">
			<div id="hero-content" className="flex flex-col justify-center items-center w-full gap-y-4 text-center">
				<h2>{generalInfo.club && generalInfo.club}</h2>
				<h1>{generalInfo.title && generalInfo.title}</h1>
				<div id="details" className="flex flex-col md:flex-row items-center gap-x-4">
					<h6>{formatTimeline({startDate: new Date(generalInfo.startDate), endDate: new Date(generalInfo.endDate)})}</h6>
					&bull;
					<h6>{capitalizeFirstLetter(generalInfo.locationType)}</h6>
				</div>
				<div id="application-status">
					{ generalInfo.application.status === "open" ? (
						<Link 
							href={generalInfo.application.link} 
							className={`flex items-center justify-center w-full px-4 py-2 text-lg font-[600] text-left bg-google-lightGrey transition-all duration-300 ease-in-out rounded-2xl`}
							target="_blank"
							rel="noreferrer"
						>
							Apply Now!
						</Link>
						) : (
							<>
								<h6>Applications for Mac-a-thon are now {generalInfo.application.status}.</h6>
								<p>Stay tuned for updates on our next event!</p>
							</>
						)
					}
				</div>
				<div className="flex w-full items-center justify-center">
					<Image
						src={HeroIllustration}
						alt="Hackathon photo"
						className="w-full md:w-3/4 flex"
					/>
				</div>
			</div>
		</section>
	);
};

const AboutSection = async () => {
	const aboutInfo: About = await client.fetch(
		`*[_type == 'about'][0]`,
	);

	if (!aboutInfo) return null;

	return (
		<section id="about">
			<div
				id="about-content"
				className="flex flex-col justify-center items-start h-full gap-y-8 md:gap-y-16 group transition-all duration-300 ease-in-out"
			>
				<h2 className="w-fit bg-left-bottom bg-gradient-to-r from-google-mediumRed to-google-mediumRed bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">About</h2>
				<div className="flex flex-col gap-y-2 md:gap-y-4">
					{ aboutInfo.mission && (
						<><h3>Mission</h3><p>{aboutInfo.mission}</p></>
					)}
					{ aboutInfo.vision && (
						<><h3>Vision</h3><p>{aboutInfo.vision}</p></>
					)}
				</div>
				<div className="flex w-full items-center justify-center">
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

const StatisticsSection = async () => {
	const statistics: Statistic[] = await client.fetch(
		`*[_type == 'statistic']`,
	);
 
	if (statistics.length === 0) return null;

	return (
		<section id="statistics">
			<div
				id="statistics-content"
				className="flex flex-col gap-y-8 md:gap-y-16 w-full"
			>
				<StickyScroll data={statistics} />
			</div>
		</section>
	);
}

const SponsorsSection = async () => {
	// Fetch the sponsors data
	const sponsors: Sponsor[] = await client.fetch(
	  `*[_type == 'sponsor']{
		_id,
		name,
		logo,
		website,
		tier
	  }`
	);
  
	// Group sponsors by tier
	const groupedSponsors = sponsors.reduce((acc, sponsor) => {
	  if (!acc[sponsor.tier]) acc[sponsor.tier] = [];
	  acc[sponsor.tier].push(sponsor);
	  return acc;
	}, {} as Record<string, Sponsor[]>);
  
	// Define grid columns based on tier
	const getGridCols = (tier: string) => {
	  switch (tier) {
		case 'gold':
		  return 'grid-cols-1';
		case 'silver':
		  return 'grid-cols-2';
		case 'bronze':
		  return 'grid-cols-3';
		default:
		  return 'grid-cols-1'; // Fallback to 1 column
	  }
	};
  
	// Define the correct order of tiers
	const tierOrder = ['gold', 'silver', 'bronze'];
  
	if (sponsors.length === 0) return null;

	return (
	  <section id="sponsors">
		<div
		  id="sponsors-content"
		  className="flex flex-col gap-y-8 md:gap-y-16 w-full group transition-all duration-300 ease-in-out"
		>
			<h2 className="w-fit bg-left-bottom bg-gradient-to-r from-google-mediumBlue to-google-mediumBlue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Sponsors</h2>		  <div id="sponsors-logos" className="flex flex-col gap-8 w-full">
			{tierOrder.map((tier) => {
			  const sponsorsForTier = groupedSponsors[tier];
  
			  return sponsorsForTier && sponsorsForTier.length > 0 && (
				<div key={tier}>
				  <div
					className={`grid ${getGridCols(tier)} place-items-center justify-items-center gap-8`}
				  >
					{sponsorsForTier.map((sponsor: Sponsor) => (
					  <Link
						href={sponsor.website ? sponsor.website : '#'}
						key={sponsor._id}
						target="_blank"
						rel="noreferrer"
						className="relative w-full h-24 rounded-full bg-google-grey bg-opacity-10 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-[102%] hover:shadow-lg"
					  >
						<Image
						  src={urlFor(sponsor.logo.asset).url()}
						  alt={sponsor.name}
						  fill
						  className="p-4 object-contain"
						/>
					  </Link>
					))}
				  </div>
				</div>
			  );
			})}
		  </div>
		</div>
	  </section>
	);
  };
  
  
const FAQSection = async () => {

	const faqs: FAQ[] = await client.fetch(
		`*[_type == 'faq']{
			_id,
			question,
			answer,
		}`,
	);

	if (faqs.length === 0) return null;

	return (
		<section id="faq">
			<div
				id="faq-content"
				className="flex flex-col gap-y-8 md:gap-y-16 w-full group transition-all duration-300 ease-in-out"
			>	
				<h2 className="w-fit bg-left-bottom bg-gradient-to-r from-google-mediumGreen to-google-mediumGreen bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">FAQ</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
					{faqs.length > 0 && faqs.map((faq: FAQ) => (
						<Accordion key={faq._id} title={faq.question}>
							<p className="text-lg font-[400]">{faq.answer}</p>
						</Accordion>
					))}
				</div>
				<div className="flex w-full items-center justify-center">
					<Image
						src={BuildWithAIBanner}
						alt="Hackathon photo"
						className="w-full md:w-3/4 flex"
					/>
				</div>
			</div>
		</section>
	);
};

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<AboutSection />
				<StatisticsSection />
				<SponsorsSection />
				<FAQSection />
			</main>
			<Footer />
		</>
	);
};

export default Home;
