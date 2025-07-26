/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// components/HomeClient.tsx
'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import HeaderBanner from "./HeaderBanner";

export default function HomeClient({ data }: { data: any }) {
  const t = useTranslations('HomePage');
  const course = data?.data || {};
  console.log('course',course)
  return (
		<div className="bg-[#0a0a1a]">
			{/* Banner */}
			<HeaderBanner />

			{/* Main Content */}
			<div className="max-w-6xl mx-auto rounded-lg shadow-lg  p-6 flex flex-col md:flex-row gap-8">
				<div className="flex-1">
					<h1 className="text-3xl lg:text-4xl text-white font-bold mb-2">
						{course.title || "IELTS Course by Munzereen Shahid"}
					</h1>

					{/* Star Rating */}
					<div className="flex items-center mb-2">
						<span className="flex text-yellow-400 text-lg mr-2">
							{Array.from({ length: Math.round(course.rating || 5) }).map(
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
							{course.ratingPercent || "82.6%"}
						</span>
						<span className="text-gray-100 text-sm">
							{course.ratingText || "(শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)"}
						</span>
					</div>

					<div
						className="text-gray-300 mb-4 prose prose-invert lg:w-[60%]"
						dangerouslySetInnerHTML={{ __html: course.description }}
					/>
				</div>

				{/* Video */}
				{/* <div className="flex flex-col items-center gap-4 w-full md:w-96"> */}
				{/* <div className="relative w-full aspect-video rounded overflow-hidden bg-gray-200">
						<Image
							src={course.videoThumbnail || "/ielts-course-thumb.png"}
							alt="IELTS Course Video"
							fill
							className="object-cover"
						/>
						<button className="absolute inset-0 flex items-center justify-center">
							<svg
								className="w-16 h-16 text-white bg-black/60 rounded-full p-3"
								fill="currentColor"
								viewBox="0 0 48 48"
							>
								<circle
									cx="24"
									cy="24"
									r="24"
									fill="currentColor"
									opacity="0.3"
								/>
								<polygon points="20,16 34,24 20,32" fill="#fff" />
							</svg>
						</button>
					</div> */}

				{/* Thumbnails */}
				{/* <div className="flex gap-2">
						{(course.thumbnails || [1, 2, 3, 4]).map(
							(thumb: any, i: number) => (
								<div
									key={i}
									className="w-16 h-10 bg-gray-200 rounded overflow-hidden"
								>
									<Image
										src={
											typeof thumb === "string"
												? thumb
												: `/ielts-thumb-${i + 1}.png`
										}
										alt={`Thumbnail ${i + 1}`}
										width={64}
										height={40}
										className="object-cover w-full h-full"
									/>
								</div>
							)
						)}
					</div> */}
				{/* </div> */}
			</div>
		</div>
	);
}
