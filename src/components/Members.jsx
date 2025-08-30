const members = [
  {
    name: 'Maya “Sprout” Lin',
    role: 'Pixel Artist & Narrative Designer',
    bio: 'Cozy stories, tiny worlds. I paint with pixels and tea.',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Maya&backgroundColor=b6e3f4,c0aede,ffd5dc&size=96',
    reel: 'https://www.youtube-nocookie.com/embed/3rG4I1q7h4Y',
  },
  {
    name: 'Arjun Rao',
    role: 'Gameplay Programmer',
    bio: 'I prototype whimsical mechanics and tune feel until it sings.',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Arjun&backgroundColor=d1d4f9,ffdfbf,ffe6a7&size=96',
    reel: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
  },
  {
    name: 'Lena Park',
    role: 'Composer & Sound Alchemist',
    bio: 'Warm chip textures and lullaby hooks for late-night levels.',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lena&backgroundColor=c0aede,b6e3f4,ffd5dc&size=96',
    reel: 'https://www.youtube-nocookie.com/embed/9bZkp7q19f0',
  },
  {
    name: 'Theo “Bit” Alvarez',
    role: 'Level Designer',
    bio: 'I build tiny playgrounds with secret paths and soft edges.',
    avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Theo&backgroundColor=ffdfbf,b6e3f4,c0aede&size=96',
    reel: 'https://www.youtube-nocookie.com/embed/2Vv-BfVoq4g',
  },
];

function MemberCard({ m }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition shadow-sm overflow-hidden">
      <div className="p-5 flex items-start gap-4">
        <img src={m.avatar} alt={`${m.name} avatar`} className="h-16 w-16 rounded-md ring-1 ring-white/20 bg-zinc-900 object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-lg leading-tight">{m.name}</h3>
          <p className="text-pink-300/90 text-sm">{m.role}</p>
          <p className="mt-2 text-sm text-zinc-300/90">{m.bio}</p>
        </div>
      </div>
      <div className="aspect-video bg-black/40">
        <iframe
          className="h-full w-full"
          src={`${m.reel}?rel=0&modestbranding=1`} 
          title={`${m.name} demo reel`} 
          loading="lazy" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <section id="members" className="relative py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_50%_at_50%_0%,rgba(236,72,153,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Our tiny crew</h2>
          <p className="mt-2 text-zinc-300/80">Friends who tinker late, swap builds, and ship the weird little things we love.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6" id="reels">
          {members.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
