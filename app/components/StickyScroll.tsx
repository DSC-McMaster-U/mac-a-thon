"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface StickyScrollProps {
	data: {
		title: string;
		description: string;
		value: string;
	}[];
}

const StickyScroll = ({data}: StickyScrollProps) => {
	
	const [activeFeature, setActiveFeature] = useState(0);
  
	useEffect(() => {
	  const observerOptions = { threshold: 0.5 };
	  const observers: IntersectionObserver[] = [];
  
	  data.forEach((_, index) => {
		const element = document.getElementById(`key-feature-${index}`);
		if (element) {
		  const observer = new IntersectionObserver(
			([entry]) => {
			  if (entry.isIntersecting) {
				setActiveFeature(index);
			  }
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
				className="flex flex-col justify-center gap-y-8 md:gap-y-4"
			  >
				{/* Mobile: Mockups */}
				<div
				  id="key-feature-image"
				  className="flex md:hidden w-full max-h-fit items-center justify-center rounded-full bg-google-grey bg-opacity-10 p-8"
				>
				  <h1 className="max-h-fit md:max-h-full max-w-full">
					{feature.value}
				  </h1>
				</div>
				{/* Text */}
				<div
				  id="key-feature-text"
				  className="flex flex-col justify-center gap-y-2 md:h-screen"
				>
				  <div className="flex flex-row items-center gap-x-2">
					<h3 className="text-2xl md:text-4xl font-semibold">
					  {feature.title}
					</h3>
				  </div>
				  <p className="text-base md:text-lg">{feature.description}</p>
				</div>
			  </div>
			))}
		  </div>
  
		  {/* Right: Mockups */}
		  <div className="hidden sticky top-[5vh] h-[90vh] md:flex items-center justify-center w-full bg-google-grey bg-opacity-10 rounded-full overflow-hidden">
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
					className={`absolute w-full h-full flex items-center justify-center p-16 ${
					activeFeature === index ? "block" : "hidden"
					}`}
				>
					<h1 className="max-h-fit md:max-h-full max-w-full">
						{feature.value}
					</h1>
				</motion.div>
				))}
		  	</div>
		</div>
	  </section>
	);
  }

export default StickyScroll;
