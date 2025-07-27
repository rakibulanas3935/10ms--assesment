import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";
import { CourseProvider } from "@/context/CourseContext";

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: Locale };
}) {
	// Ensure that the incoming `locale` is valid
	const { locale } = params;
	if (!routing.locales.includes(locale)) {
		notFound();
	}

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<CourseProvider>
						<Header />
						{children}
						<Footer />
					</CourseProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
