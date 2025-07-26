interface TrailerProps {
  src: string;
  alt?: string;
}

export default function Trailer({ src, alt = 'Trailer video' }: TrailerProps) {
  return (
    <video
      controls
      src={src}
      className="w-full max-w-xl rounded"
      aria-label={alt}
    />
  );
}
