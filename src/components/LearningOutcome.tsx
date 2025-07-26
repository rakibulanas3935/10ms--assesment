import { FaCheck } from "react-icons/fa";

interface Outcome {
	id: number;
	text: string;
	icon?: string;
	color?: string;
}

interface LearningOutcomeProps {
	outcomes: Outcome[];
}

export default function LearningOutcome({ outcomes }: LearningOutcomeProps) {
	return (
		<section className="w-full px-4 sm:px-6 lg:px-16 py-10 bg-white">
			<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2563eb] mb-6">
				What you will learn by doing the course
			</h2>

			<div className="border rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white">
				{outcomes.map((point) => (
					<div key={point.id} className="flex items-start gap-3">
						<FaCheck className="text-blue-500 mt-1 flex-shrink-0" />
						<p className="text-sm md:text-base text-gray-800">{point.text}</p>
					</div>
				))}
			</div>
		</section>
	);
}
