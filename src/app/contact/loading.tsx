export default function ContactLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-pulse">
      <div className="h-6 w-32 rounded bg-brand-lav mb-3" />
      <div className="h-10 w-72 rounded-xl bg-brand-lav mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 rounded-2xl bg-brand-lav/50" />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 h-96 rounded-2xl bg-brand-lav/40" />
        <div className="lg:col-span-5 h-96 rounded-2xl bg-brand-lav/30" />
      </div>
    </div>
  );
}
