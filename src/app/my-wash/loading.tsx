export default function MyWashLoading() {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="h-64 bg-brand-lav/40 w-full" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 h-96 rounded-3xl bg-brand-line/40" />
          <div className="lg:col-span-4 h-96 rounded-3xl bg-brand-line/40" />
        </div>
      </div>
    </div>
  );
}
