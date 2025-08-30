import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/50 to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-amber-200 to-fuchsia-300 drop-shadow">
            Glimmer
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-zinc-200/90">Games made with heart.</p>
        <p className="mt-3 text-sm text-zinc-300/70 max-w-2xl mx-auto">A small, invite-only circle of cozy indie devs crafting playful worlds, pixel by pixel.</p>
        <div className="mt-8 flex items-center justify-center gap-3" id="invite">
          <a href="#members" className="inline-flex items-center rounded-md bg-pink-500/90 hover:bg-pink-500 text-white px-5 py-2.5 text-sm font-medium shadow-lg shadow-pink-500/30 ring-1 ring-white/10 transition">
            Meet the crew
          </a>
          <a href="mailto:hello@glimmer.dev?subject=Glimmer%20Invite%20Request" className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-medium ring-1 ring-white/10 transition">
            Request an invite
          </a>
        </div>
      </div>
    </section>
  );
}
