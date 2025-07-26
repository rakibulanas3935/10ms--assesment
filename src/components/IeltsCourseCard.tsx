"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, PlayCircle, Video } from "lucide-react";
import CourseOverview from "./CourseOverview";
import LearningOutcome from "./LearningOutcome";
import CourseContent from "./CoursePreview";
import CourseFeatures from "./CourseFeatures";
import CoursePricingCard from "./CoursePricingCard";

export default function IeltsCourseCard({ data }: { data: any }) {
	const { image, name, description } = data?.data?.sections[2]?.values[0];
	const media = data?.data?.media || [];
	const [showStickyCard, setShowStickyCard] = useState(false);

  useEffect(() => {
	const handleScroll = () => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
		// Detect if scrolled to bottom (or near bottom with buffer)
		if (scrollTop + clientHeight >= scrollHeight - 10) {
			setShowStickyCard(true);
		} else {
			setShowStickyCard(false);
		}
	};

	window.addEventListener("scroll", handleScroll);
	return () => window.removeEventListener("scroll", handleScroll);
}, []);



	const getInitialBanner = () => {
		const first = media.find(
			(m: any) => m.resource_type === "image" || m.thumbnail_url
		);
		return first?.thumbnail_url || first?.resource_value || "/ielts-cover.png";
	};

	const [banner, setBanner] = useState<string>(getInitialBanner());

	return (
		<div className="flex flex-col lg:flex-row gap-6  px-4 pb-6">
			<div className="w-full mt-4 lg:w-2/3">
				<h2 className="text-xl font-bold mb-3">কোর্স ইন্সট্রাক্টর</h2>
				<div className="flex items-center gap-4 p-4 border rounded-lg">
					<div className="w-16 h-16 relative">
						<Image
							src={image}
							alt={name}
							fill
							className="rounded-full object-cover"
						/>
					</div>
					<div>
						<p className="font-semibold">{name}</p>
						<div
							className="text-sm text-gray-600 prose prose-invert"
							dangerouslySetInnerHTML={{ __html: description }}
						/>
					</div>
				</div>
				<CourseOverview cards={data?.data?.sections[3]?.values} />
				<LearningOutcome outcomes={data?.data?.sections[5]?.values} />
				<CourseContent />
				<CourseFeatures />
			</div>

			{!showStickyCard && (
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="bg-white max-w-xl ms-auto h-screen mx-auto lg:-mt-36 rounded-lg overflow-hidden shadow-lg border lg:w-1/3"
				>
					{/* Top Banner */}
					<div className="relative w-full h-64 bg-gray-100">
						<Image
							src={banner}
							alt="IELTS Course Banner"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<button className="bg-white text-red-500 p-4 rounded-full shadow-lg">
								<PlayCircle className="h-10 w-10" />
							</button>
						</div>
					</div>

					{/* Thumbnail Previews */}
					<div className="flex items-center justify-start space-x-3 p-4 overflow-x-auto">
						{media.map((item: any, i: number) => (
							<div
								key={i + 1}
								className="relative w-28 cursor-pointer h-16 shrink-0 rounded-lg overflow-hidden border cursor-pointer"
								onClick={() =>
									setBanner(item.thumbnail_url || item.resource_value)
								}
							>
								{item.resource_type === "video" ? (
									<>
										<Image
											src={item.thumbnail_url || "/default-thumb.jpg"}
											alt="video thumbnail"
											fill
											className="object-cover"
										/>
										<PlayCircle className="absolute w-6 h-6 text-white bottom-1 right-1 bg-black bg-opacity-50 rounded-full" />
									</>
								) : (
									<Image
										src={item.resource_value}
										alt="image thumbnail"
										fill
										className="object-cover"
									/>
								)}
							</div>
						))}
					</div>

					{/* Pricing */}
					<div className="px-4">
						<div className="text-xl font-bold text-gray-900">
							<span className="text-red-600">৳3850</span>{" "}
							<span className="line-through text-gray-500">৳5000</span>{" "}
							<span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-sm ml-2">
								1150 ৷ হার ছাড়
							</span>
						</div>
					</div>

					{/* Buy Button */}
					<div className="px-4 py-3">
						<Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg">
							কোর্সটি কিনুন
						</Button>
					</div>

					{/* Course Features */}
					<div className="px-4 pb-6 text-gray-700 space-y-3">
						<div className="font-semibold text-lg">এই কোর্সে যা থাকছে</div>
						<div className="flex items-center gap-2">
							<span>📊</span>
							<span>কোর্সটি করেছেন ৩২৯৯৫ জন</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="w-5 h-5" />
							<span>সময় লাগবে ৫০ ঘণ্টা</span>
						</div>
						<div className="flex items-center gap-2">
							<Video className="w-5 h-5" />
							<span>৪৫টি ভিডিও</span>
						</div>
						<div>
							✅ ভিডিও লেসন,
							<br />
							৩টি লাইভ মক টেস্ট সহ
						</div>
					</div>
				</motion.div>
			)}

			{showStickyCard && (
				<div className="block lg:hidden mt-6">
					<CoursePricingCard />
				</div>
			)}
		</div>
	);
}
