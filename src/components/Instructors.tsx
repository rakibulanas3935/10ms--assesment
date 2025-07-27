/* eslint-disable @next/next/no-img-element */
interface Instructor {
  id: string;
  name: string;
  bio?: string;
  avatarUrl?: string;
}

interface InstructorsProps {
  instructors: Instructor[];
}

export default function Instructors({ instructors }: InstructorsProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold my-4">Instructors</h2>
      <ul className="space-y-4">
        {instructors.map(({ id, name, bio, avatarUrl }) => (
          <li key={id} className="flex items-center space-x-4">
            {avatarUrl && (
              <img
                src={avatarUrl}
                alt={name}
                className="w-12 h-12 rounded-full"
              />
            )}
            <div>
              <h3 className="font-bold">{name}</h3>
              {bio && <p className="text-sm text-gray-600">{bio}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
