import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 grid place-items-center shadow-lg shadow-red-600/30">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Vibe Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80 text-sm">
          <a href="#flow" className="hover:text-white transition">How it works</a>
          <a href="#chat" className="hover:text-white transition">Start building</a>
          <a href="#" className="rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 text-white transition">Sign in</a>
        </nav>
      </div>
    </header>
  );
}
