"use client";

interface ImageHoverCardProps {
  image: string;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export default function ImageHoverCard({
  image,
  title,
  subtitle,
  onClick,
}: ImageHoverCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
    >
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <p className="text-amber-400 text-sm font-semibold mb-1">{subtitle}</p>
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
    </div>
  );
}
