import HomeClient from "@/components/HomeClient";
import IeltsCourseCard from "@/components/IeltsCourseCard";
import { getCourseData } from "@/lib/utils";

// type Props = {
//   params: Promise<{ locale: "en" | "bn" }>;
// };


export default async function Page() {
	const courseData = await getCourseData();
	return (
		<>
			<HomeClient data={courseData} />
			<IeltsCourseCard data={courseData}/>
		</>
	);
}
