import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
interface Instructor {
	id: string;
	name: string;
	bio?: string;
	image: string;
	description?: string;
}

interface InstructorsProps {
	instructors: Instructor[];
	heading: "";
}

export default function Instructors({
	instructors,
	heading,
}: InstructorsProps) {
	return (
		<section className="w-full cursor-pointer py-10 px-4 sm:px-6 lg:px-16 bg-white">
			<h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black">{heading}</h2>
			{instructors.map((instructor) => (
				<div
					key={instructor.id}
					className="flex items-center gap-4 p-4 border rounded-lg mb-4"
				>
					<div className="w-16 h-16 relative">
						<Image
							src={instructor.image}
							alt={instructor.name}
							fill
							className="rounded-full object-cover"
						/>
					</div>
					<div>
						<p className="font-semibold">{instructor.name}</p>
						<div
							className="text-sm text-gray-600 prose prose-invert"
							dangerouslySetInnerHTML={{ __html: instructor.description || '' }}
						/>
					</div>
				</div>
			))}
		</section>
	);
}
