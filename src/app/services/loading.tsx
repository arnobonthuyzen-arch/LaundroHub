export default function ServicesLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-pulse">
      <div className="h-8 w-40 rounded-lg bg-brand-lav mb-4" />
      <div className="h-12 w-96 rounded-xl bg-brand-lav mb-4" />
      <div className="h-5 w-2/3 rounded-lg bg-brand-lav/60 mb-16" />

      <div className="space-y-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-80 w-full rounded-2xl bg-brand-lav/40" />
        ))}
      </div>
    </div>
  );
}
