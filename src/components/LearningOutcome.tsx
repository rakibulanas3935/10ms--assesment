interface LearningOutcomeProps {
  outcomes: string[];
}

export default function LearningOutcome({ outcomes }: LearningOutcomeProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Learning Outcomes</h2>
      <ul className="list-disc list-inside space-y-2">
        {outcomes.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
