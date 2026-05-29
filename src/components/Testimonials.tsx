import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  color: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "Lumina completely changed how we ship. We went from 6-week cycles to shipping every week. The AI suggestions alone save us 10+ hours per sprint.",
      name: 'Sarah Kim',
      role: 'VP of Product',
      company: 'Notion',
      avatar: 'SK',
      color: 'from-violet-500 to-purple-600',
    },
    {
      quote: "I was skeptical of another all-in-one tool, but Lumina actually delivers. The collaboration features and deployment pipeline are best-in-class.",
      name: 'Marcus Torres',
      role: 'Engineering Lead',
      company: 'Linear',
      avatar: 'MT',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      quote: "Our design-to-dev handoff used to be painful. Now it's seamless. Lumina is the missing layer between Figma and production.",
      name: 'Priya Sharma',
      role: 'Head of Design',
      company: 'Vercel',
      avatar: 'PS',
      color: 'from-pink-500 to-rose-600',
    },
    {
      quote: "Security was our #1 concern. Lumina's enterprise tier gave us SOC 2 compliance, SSO, and audit logs out of the box. Sold.",
      name: 'David Chen',
      role: 'CTO',
      company: 'Stripe',
      avatar: 'DC',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      quote: "We replaced four tools with Lumina. Analytics, deployment, design system, collaboration — all in one beautiful interface.",
      name: 'Aisha Patel',
      role: 'Founder & CEO',
      company: 'Retool',
      avatar: 'AP',
      color: 'from-orange-500 to-amber-600',
    },
    {
      quote: "The API-first approach means we could integrate Lumina into our existing workflows in a single afternoon. Incredible DX.",
      name: 'James Wright',
      role: 'Staff Engineer',
      company: 'Coda',
      avatar: 'JW',
      color: 'from-brand-500 to-accent-600',
    },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-900/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs text-accent-400 font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Loved by product teams
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Don't just take our word for it — here's what our customers say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glow-card rounded-2xl p-6 flex flex-col gap-4">
              <Quote size={24} className="text-brand-500/60" />
              <p className="text-slate-300 leading-relaxed text-sm flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
