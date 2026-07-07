export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-green-500 font-mono">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl mb-8">LiminOS Terminal</h1>
        <div className="border border-green-500 p-4 rounded">
          <p className="mb-2">Welcome to the Liminality Company Terminal Interface</p>
          <p className="mb-2">System Status: Online</p>
          <p className="mb-4">Awaiting commands...</p>
          <div className="flex">
            <span className="mr-2">&gt;</span>
            <span className="animate-pulse">_</span>
          </div>
        </div>
      </div>
    </main>
  );
}
