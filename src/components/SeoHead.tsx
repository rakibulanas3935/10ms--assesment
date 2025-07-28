/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCourseContext } from "@/context/CourseContext";
import Head from "next/head";


export default function SeoHead() {
	const { course } = useCourseContext();
	const seo = course?.seo;

	if (!seo) return null;

	return (
		<Head>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			{seo.keywords?.length && (
				<meta name="keywords" content={seo.keywords.join(", ")} />
			)}

			{/* Render any extra meta from defaultMeta array */}
			{seo.defaultMeta?.map((meta: any, index: number) => (
				<meta key={index+1} name={meta.name} content={meta.content} />
			))}

			{/* Render structured data schema */}
			{seo.schema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(seo.schema),
					}}
				/>
			)}
		</Head>
	);
}
