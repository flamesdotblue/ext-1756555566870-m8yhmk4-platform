export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Glimmer — Games made with heart.
        </div>
        <div className="text-sm text-zinc-500">
          Built with care by friends. Pixel crumbs included.
        </div>
      </div>
    </footer>
  );
}
