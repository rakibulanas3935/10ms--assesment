interface CTAProps {
  label: string;
  onClick?: () => void;
}

export default function CTA({ label, onClick }: CTAProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
}
