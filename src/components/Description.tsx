interface DescriptionProps {
  children: React.ReactNode;
}

export default function Description({ children }: DescriptionProps) {
  return <p className="text-gray-700 my-2">{children}</p>;
}
