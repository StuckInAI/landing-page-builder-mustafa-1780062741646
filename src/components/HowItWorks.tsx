import { ClipboardList, Wand2, Rocket } from 'lucide-react';

type Step = {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function HowItWorks() {
  const steps: Step[] = [
    {
      number: '01',
      icon: <ClipboardList size={28} />,
      title: 'Define your project',
      description: 'Describe your product goals, upload your brand assets, and invite your team — setup takes under 5 minutes.',
    },
    {
      number: '02',
      icon: <Wand2 size={28} />,
      title: 'Design & build with AI',
      description: 'Use our AI assistant and drag-and-drop editor to rapidly prototype and build production-ready features.',
    },
    {
      number: '03',
      icon: <Rocket size={28} />,
      title: 'Ship with confidence',
      description: 'Deploy to a global edge network with one click. Monitor performance, gather feedback, iterate fast.',
    },
  ];

  return (
    <section id="how-it-works" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs text-accent-400 font-semibold uppercase tracking-wider mb-4">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            From idea to launch in days
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Three simple steps to transform the way your team builds products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px bg-gradient-to-r from-brand-500/50 via-accent-500/50 to-brand-500/50" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-900/80 to-slate-900 border border-brand-500/30 flex items-center justify-center text-brand-400 shadow-xl">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-xs font-black text-white">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
