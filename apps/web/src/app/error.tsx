'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight">Something went wrong</h1>
      <p className="mt-2 text-text-muted">An unexpected error occurred while loading this page.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-lg border border-border px-4 py-2 text-sm hover:bg-surface-alt"
      >
        Try again
      </button>
    </main>
  );
}
