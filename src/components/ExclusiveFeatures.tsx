interface ExclusiveFeaturesProps {
  features: string[];
}

export default function ExclusiveFeatures({ features }: ExclusiveFeaturesProps) {
  return (
    <section className="bg-yellow-100 p-4 rounded my-6">
      <h2 className="text-2xl font-semibold mb-3">Exclusive Features</h2>
      <ul className="list-disc list-inside space-y-1">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}
