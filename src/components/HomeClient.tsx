/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/HomeClient.tsx
'use client';

import { useTranslations } from "next-intl";
import HeaderBanner from "./HeaderBanner";
import { useCourseContext } from "@/context/CourseContext";

export default function HomeClient() {
	const t = useTranslations('HomePage');
	const { course, loading } = useCourseContext();

	if (loading || !course) {
		return (
			<div className="flex justify-center items-center h-96 bg-[#0a0a1a]">
				<p className="text-white text-lg font-medium">Loading...</p>
			</div>
		);
	}

	const courseData = course.data || {};

	return (
		<div className="bg-[#0a0a1a]">
			{/* Banner */}
			<HeaderBanner />

			{/* Main Content */}
			<div className="max-w-6xl mx-auto rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
				<div className="flex-1">
					<h1 className="text-3xl lg:text-4xl text-white font-bold mb-2">
						{courseData.title || "IELTS Course by Munzereen Shahid"}
					</h1>

					{/* Star Rating */}
					<div className="flex items-center mb-2">
						<span className="flex text-yellow-400 text-lg mr-2">
							{Array.from({ length: Math.round(courseData.rating || 5) }).map(
								(_, i) => (
									<svg
										key={i}
										fill="currentColor"
										viewBox="0 0 20 20"
										className="w-5 h-5"
									>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
									</svg>
								)
							)}
						</span>
						<span className="text-gray-100 font-semibold mr-2">
							{courseData.ratingPercent || "82.6%"}
						</span>
						<span className="text-gray-100 text-sm">
							{courseData.ratingText || "(শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)"}
						</span>
					</div>

					<div
						className="text-gray-300 mb-4 prose prose-invert lg:w-[60%]"
						dangerouslySetInnerHTML={{ __html: courseData.description }}
					/>
				</div>
			</div>
		</div>
	);
}
