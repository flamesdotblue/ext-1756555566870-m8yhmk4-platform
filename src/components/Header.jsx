import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/80 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="relative">
            <span className="absolute inset-0 rounded-md bg-pink-500/40 blur-sm opacity-0 group-hover:opacity-100 transition" />
            <span className="relative inline-flex items-center justify-center h-9 w-9 rounded-md bg-gradient-to-br from-pink-500 to-amber-400 shadow-md shadow-pink-500/20 ring-1 ring-white/10">
              <Heart size={18} className="drop-shadow" />
            </span>
          </div>
          <span className="font-semibold tracking-wide text-lg">Glimmer</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#members" className="hover:text-pink-300 transition">Members</a>
          <a href="#reels" className="hover:text-pink-300 transition">Reels</a>
          <a href="#invite" className="rounded-md bg-white/5 hover:bg-white/10 px-3 py-1.5 border border-white/10 transition">Request Invite</a>
        </nav>
      </div>
    </header>
  );
}
