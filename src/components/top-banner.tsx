export default function TopBanner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="pt-16">
      <div className="bg-linear-to-r from-black via-slate-900 to-black border-b border-amber-600/30 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-serif text-white mb-2 animate-fadeInDown">
            {title}
          </h1>
          <p className="text-amber-500 text-md animate-fadeInUp">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
