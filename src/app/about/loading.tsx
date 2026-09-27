export default function AboutLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-pulse">
      <div className="h-6 w-32 rounded bg-brand-lav mb-3" />
      <div className="h-10 w-64 rounded-xl bg-brand-lav mb-6" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-4">
          <div className="h-4 w-full rounded bg-brand-lav/60" />
          <div className="h-4 w-5/6 rounded bg-brand-lav/60" />
          <div className="h-4 w-4/5 rounded bg-brand-lav/60" />
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] rounded-2xl bg-brand-lav" />
        </div>
      </div>
    </div>
  );
}
