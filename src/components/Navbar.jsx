import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between rounded-2xl mt-3 bg-white/60 backdrop-blur-xl border border-white/50 shadow-sm">
        <div className="flex items-center gap-2 text-slate-900">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 grid place-items-center shadow-lg shadow-red-600/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Vibe Studio</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700 text-sm">
          <a href="#flow" className="hover:text-slate-900 transition">How it works</a>
          <a href="#chat" className="hover:text-slate-900 transition">Start building</a>
          <a href="#" className="rounded-full bg-white hover:bg-white/90 border border-slate-200 px-4 py-2 text-slate-900 transition">Sign in</a>
        </nav>
      </div>
    </header>
  );
}
