import { Zap, Shield, Layers, BarChart3, Globe, Cpu } from 'lucide-react';
import clsx from 'clsx';

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
  highlight?: boolean;
};

export default function Features() {
  const features: Feature[] = [
    {
      icon: <Zap size={24} />,
      title: 'AI-Powered Automation',
      description: 'Let our AI handle repetitive tasks, generate boilerplate, and suggest optimizations — so your team focuses on what matters.',
      tag: 'New',
      highlight: true,
    },
    {
      icon: <Layers size={24} />,
      title: 'Visual Design System',
      description: 'Drag-and-drop components with real-time collaboration. Build consistent UIs in a fraction of the time.',
    },
    {
      icon: <Globe size={24} />,
      title: 'One-Click Deployment',
      description: 'Push to production with a single click. Zero configuration, automatic CI/CD, global CDN by default.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified. SAML SSO, audit logs, role-based access controls, and end-to-end encryption.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Advanced Analytics',
      description: 'Understand your users with built-in event tracking, funnel analysis, and real-time dashboards.',
    },
    {
      icon: <Cpu size={24} />,
      title: 'API-First Platform',
      description: 'Every feature available via REST & GraphQL APIs. Integrate Lumina into any workflow or toolchain seamlessly.',
    },
  ];

  return (
    <section id="features" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs text-brand-400 font-semibold uppercase tracking-wider mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything your team needs
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            A complete platform built for modern product teams, from idea to production.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={clsx(
                'glow-card rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden',
                feature.highlight && 'ring-1 ring-brand-500/30'
              )}
            >
              {feature.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
              )}
              {feature.tag && (
                <span className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  {feature.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
