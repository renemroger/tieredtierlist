export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Tiered Tier List
        </h1>
        <p className="text-center text-lg mb-8">
          Create and share your tier lists
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-gray-300 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-2">Quick Start</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Get started by editing{" "}
              <code className="font-mono font-bold">app/page.tsx</code>
            </p>
          </div>
          <div className="rounded-lg border border-gray-300 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-2">Documentation</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Learn more about Next.js in the official documentation
            </p>
          </div>
          <div className="rounded-lg border border-gray-300 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold mb-2">Deploy</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Deploy your app with Vercel for the best experience
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
