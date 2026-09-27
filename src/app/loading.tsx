export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-pulse">
      <div className="h-10 w-48 rounded-xl bg-brand-lav mb-4" />
      <div className="h-6 w-96 rounded-lg bg-brand-lav/70 mb-12" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm">
            <div className="h-48 w-full rounded-xl bg-brand-lav/60 mb-6" />
            <div className="h-6 w-3/4 rounded-lg bg-brand-lav mb-3" />
            <div className="h-4 w-full rounded-md bg-brand-lav/50 mb-2" />
            <div className="h-4 w-5/6 rounded-md bg-brand-lav/50 mb-6" />
            <div className="h-10 w-28 rounded-xl bg-brand-lav/80" />
          </div>
        ))}
      </div>
    </div>
  );
}
