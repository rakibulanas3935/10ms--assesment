"use client";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

type Props = {
	defaultValue: string;
};

export default function LocalSelect({ defaultValue }: Props) {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();

	const handleChange = (value: string) => {
		router.replace(
			// @ts-expect-error -- TypeScript will validate that only known `params`
			// are used in combination with a given `pathname`. Since the two will
			// always match for the current route, we can skip runtime checks.
			{ pathname, params },
			{ locale: value as Locale }
		);
	};

	return (
		<Select defaultValue={defaultValue} onValueChange={handleChange}>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="Language" />
			</SelectTrigger>
			<SelectContent>
				{routing.locales.map((lang) => (
					<SelectItem key={lang} value={lang}>
						{lang.toUpperCase()}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
