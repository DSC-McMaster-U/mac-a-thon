"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface StickyScrollProps {
	data: {
		title: string;
		description: string;
		value: string;
		image: { asset: { _ref: string }};
	}[];
}

const StickyScroll = ({data}: StickyScrollProps) => {
	
	const [activeFeature, setActiveFeature] = useState(0);
  
	useEffect(() => {
	  const observerOptions = { rootMargin: "0px", threshold: [0.25, 0.5, 0.75] };
	  const observers: IntersectionObserver[] = [];

	  const featureVisibility: Record<number, number> = {};

	  const updateActiveFeature = () => {
		const maxVisibileFeature = Object.entries(featureVisibility).reduce(
			(maxFeature, [featureIndex, visibility]) => 
				visibility > maxFeature[1] ? [parseInt(featureIndex), visibility] : maxFeature,
			[-1, 0]
		);
		if (maxVisibileFeature[0] !== -1) {
			setActiveFeature(maxVisibileFeature[0]);
		}
	  };
  
	  data.forEach((_, index) => {
		const element = document.getElementById(`key-feature-${index}`);
		if (element) {
		  const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					featureVisibility[index] = entry.intersectionRatio;
				});
				updateActiveFeature();
			},
			observerOptions
		  );
		  observer.observe(element);
		  observers.push(observer);
		}
	  });
  
	  return () => {
		observers.forEach((observer) => observer.disconnect());
	  };
	}, [data]);
	
	return (
	  <section className="relative">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
		  {/* Left: Key Features */}
		  <div className="flex flex-col gap-y-16">
			{data.map((feature, index) => (
			  <div
				key={index}
				id={`key-feature-${index}`}
				className="flex flex-col justify-center gap-y-8 md:gap-y-4 md:min-h-60 h-fit"
			  >
				{/* Mobile: Mockups */}
				<div
				  id="key-feature-image"
				  className="flex md:hidden w-full max-h-fit items-center overflow-hidden justify-center rounded-3xl bg-google-grey bg-opacity-10"
				>
					{feature.image && (
						<Image
						src={urlFor(feature.image.asset._ref).url()}
						alt={feature.title}
						className="max-h-full max-w-full"
						width={500}
						height={500}
						/>
					)}
				</div>
				{/* Text */}
				<div
				  id="key-feature-text"
				  className="flex flex-col justify-center gap-y-4 md:h-fit md:py-32"
				>
				  <div className="flex flex-row items-center gap-x-2">
					<h3 className="text-2xl md:text-4xl font-semibold gap-x-2 flex flex-row items-center">
						<div>{feature.value}</div>
					  	<div>{feature.title}</div>
					</h3>
				  </div>
				  <p className="text-base md:text-lg">{feature.description}</p>
				</div>
			  </div>
			))}
			<div className="hidden md:flex my-12"/>
		  </div>
  
		  {/* Right: Mockups */}
		  <div className="hidden sticky top-0 h-screen rounded-3xl md:flex items-center justify-center w-full bg-google-grey bg-opacity-10 overflow-hidden">
			  {data.map((feature, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: activeFeature === index ? 1 : 0 }}
					transition={{ duration: 1 }}
					exit={{ 
					opacity: 0.5,
					transition: { duration: 1 }
					}}
					className={`absolute w-full h-full flex items-center justify-center overflow-hidden ${
					activeFeature === index ? "block" : "hidden"
					}`}
				>
					{feature.image && (
						<Image
							src={urlFor(feature.image.asset._ref).url()}
							alt={feature.title}
							className="max-h-full max-w-full rounded-3xl"
							width={500}
							height={500}
						/>
					)}
				</motion.div>
				))}
		  	</div>
		</div>
	  </section>
	);
  }

export default StickyScroll;
