interface CourseDetailsProps {
  title: string;
  description: string;
  duration: string;
  level: string;
}

export default function CourseDetails({
  title,
  description,
  duration,
  level,
}: CourseDetailsProps) {
  return (
    <section className="my-6 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-2">{description}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Level:</strong> {level}</p>
    </section>
  );
}
