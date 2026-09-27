export default function ServiceDetailLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 animate-pulse">
      <div className="h-6 w-32 rounded bg-brand-lav mb-6" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-4">
          <div className="h-6 w-24 rounded-full bg-brand-lav" />
          <div className="h-12 w-3/4 rounded-xl bg-brand-lav" />
          <div className="h-20 w-full rounded-xl bg-brand-lav/60" />
          <div className="h-40 w-full rounded-2xl bg-brand-lav/40" />
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] w-full rounded-2xl bg-brand-lav" />
        </div>
      </div>
    </div>
  );
}
