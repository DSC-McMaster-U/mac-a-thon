import HeroIllustration from "@/assets/illustrations/HeroIllustration.webp";
import UNGoalsIllustration from "@/assets/illustrations/UNGoalsIllustration.webp";
import Image from 'next/image';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { client } from "@/sanity/lib/client";
import type { FAQ, Sponsor, Statistic, Event } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

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

const Events = async() => {
	const currentDate = new Date().toISOString()

	const statistics = await client.fetch(
		`*[_type == 'statistic']{
		  _id,
		  title,
		  value,
		  category,
		  description,
		}`,
	  );
	
	  const upcomingEvents = await client.fetch(
		`*[_type == "event" && dateTimeRange.start > $currentDate] {
		  _id,
		  title,
		  dateTimeRange,
		  location,
		  description,
		  picture,
		  winners
		}`,
		{ currentDate }
	  );
	  
	  const pastEvents = await client.fetch(
		`*[_type == "event" && dateTimeRange.end < $currentDate] {
		  _id,
		  title,
		  dateTimeRange,
		  location,
		  description,
		  picture,
		  winners
		}`,
		{ currentDate }
	  );

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
					{statistics.map((statistic: Statistic) => (
						<div key={statistic._id} className="flex flex-col gap-y-2 md:gap-y-4">
							<h3>{statistic.value}</h3>
							<h4>{statistic.title}</h4>
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

			{/* Upcoming Events Section */}
			<div id="upcoming-events" className="flex flex-col gap-y-4 md:gap-y-8">
				<h4>Upcoming Events</h4>
				{upcomingEvents.map((event: Event) => (
					<div key={event._id} className="flex flex-col gap-y-2">
						<h5>{event.title}</h5>
						<p>
							{new Date(event.dateTimeRange.start).toLocaleString()} -{' '}
							{new Date(event.dateTimeRange.end).toLocaleString()}
						</p>
						<p>{event.description}</p>
						<p>Location: {event.location}</p>
					</div>
				))}
			</div>

			{/* Past Events Section */}
			<div id="past-events" className="flex flex-col gap-y-4 md:gap-y-8">
				<h4>Past Events</h4>
				{pastEvents.map((event: Event) => (
					<div key={event._id} className="flex flex-col gap-y-2">
					<h5>{event.title}</h5>
					<p>
						{new Date(event.dateTimeRange.start).toLocaleString()} -{' '}
						{new Date(event.dateTimeRange.end).toLocaleString()}
					</p>
					<p>{event.description}</p>
					<p>Location: {event.location}</p>
					<p>Winners: {event.winners}</p>
					</div>
          		))}
			</div>
		</section>
	);
};

const Sponsors = async () => {

  const sponsors = await client.fetch(
    `*[_type == 'sponsor']{
      _id,
      name,
      logo,
      website,
    }`,
  );

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
					{sponsors.map((sponsor: Sponsor) => (
						<a href={sponsor.website} key={sponsor._id} target="_blank" rel="noreferrer">
							<Image
                src={urlFor(sponsor.logo.asset).url()}
                alt={sponsor.name}
                layout="responsive"
                width={150}
                height={150}
              />
						</a>
					))}
				</div>
			</div>
		</section>
	);
};



const FAQ = async () => {

  const faqs = await client.fetch(
      `*[_type == 'faq']{
        _id,
        question,
        answer,
      }`,
  );

	return (
		<section id="faq" className="flex flex-col justify-start items-start">
			<div
				id="faq-content"
				className="flex flex-col gap-y-8 md:gap-y-16 w-full"
			>
				<h2>Questions?</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
					{faqs.map((faq: FAQ) => (
						<div key={faq._id} className="flex flex-col gap-y-2 md:gap-y-4">
							<h3>{faq.question}</h3>
							<p>{faq.answer}</p>
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
