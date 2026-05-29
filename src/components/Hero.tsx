import { ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-600/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-sm text-brand-300 font-medium mb-8">
          <Star size={14} className="fill-brand-400 text-brand-400" />
          Trusted by 10,000+ teams worldwide
          <ArrowRight size={14} />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
          Build beautiful
          <br />
          <span className="gradient-text">digital experiences</span>
          <br />
          faster than ever
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lumina empowers your team to design, prototype, and ship stunning
          products with an AI-powered platform that removes every bottleneck.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="btn-primary flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base"
          >
            Start for free
            <ArrowRight size={18} />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-base border border-slate-700 hover:border-slate-500 transition-all duration-200"
          >
            <Play size={18} className="fill-current" />
            Watch demo
          </a>
        </div>

        {/* Social proof stats */}
        <div className="flex flex-wrap justify-center gap-0 max-w-2xl mx-auto">
          {[
            { value: '10k+', label: 'Active teams' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '3x', label: 'Faster shipping' },
            { value: '4.9★', label: 'Average rating' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 min-w-[120px] px-6 py-4 text-center ${
                i < 3 ? 'stat-border' : ''
              }`}
            >
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hero visual */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10" />
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl shadow-brand-500/10">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 bg-slate-800 rounded-md h-6 text-xs text-slate-500 flex items-center px-3">
                app.lumina.io/dashboard
              </div>
            </div>
            {/* Dashboard mock */}
            <div className="p-6 bg-slate-950 min-h-[320px]">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[['Active Projects', '24', '+12%'], ['Team Members', '48', '+3'], ['Tasks Done', '1,284', '+89']].map(([label, val, change]) => (
                  <div key={label} className="glow-card rounded-xl p-4">
                    <div className="text-xs text-slate-500 mb-2">{label}</div>
                    <div className="text-2xl font-bold text-white">{val}</div>
                    <div className="text-xs text-emerald-400 mt-1">{change} this week</div>
                  </div>
                ))}
              </div>
              <div className="glow-card rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-300">Recent Activity</span>
                  <span className="text-xs text-brand-400">View all →</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Sarah K.', action: 'pushed update to', item: 'Homepage redesign', time: '2m ago', color: 'bg-violet-500' },
                    { name: 'Mike R.', action: 'completed', item: 'API integration', time: '14m ago', color: 'bg-cyan-500' },
                    { name: 'Priya S.', action: 'commented on', item: 'Mobile nav spec', time: '1h ago', color: 'bg-pink-500' },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full ${item.color} flex items-center justify-center text-xs font-bold text-white`}>
                        {item.name[0]}
                      </div>
                      <div className="flex-1 text-sm">
                        <span className="text-slate-300 font-medium">{item.name}</span>
                        <span className="text-slate-500"> {item.action} </span>
                        <span className="text-brand-400">{item.item}</span>
                      </div>
                      <span className="text-xs text-slate-600">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
