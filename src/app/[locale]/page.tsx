import HomeClient from "@/components/HomeClient";
import IeltsCourseCard from "@/components/IeltsCourseCard";
import { getCourseData } from "@/lib/utils";

type Props = {
	params: { locale: "en" | "bn" };
};

export default async function Page({ params }: Props) {
	const courseData = await getCourseData(params.locale);
	return (
		<>
			<HomeClient data={courseData} />
			<IeltsCourseCard data={courseData}/>
		</>
	);
}
