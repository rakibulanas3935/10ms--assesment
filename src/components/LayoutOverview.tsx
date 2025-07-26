interface LayoutOverviewProps {
  title: string;
  content: React.ReactNode;
}

export default function LayoutOverview({ title, content }: LayoutOverviewProps) {
  return (
    <section className="my-6 p-4 bg-gray-50 rounded">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{content}</div>
    </section>
  );
}
