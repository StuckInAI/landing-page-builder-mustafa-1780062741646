import { Check, Zap } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

type Plan = {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  highlight: boolean;
  badge?: string;
};

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans: Plan[] = [
    {
      name: 'Starter',
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'Perfect for individuals and side projects.',
      features: [
        'Up to 3 projects',
        '2 team members',
        'Basic analytics',
        'Community support',
        '1GB storage',
      ],
      cta: 'Get started free',
      highlight: false,
    },
    {
      name: 'Pro',
      monthlyPrice: 49,
      annualPrice: 39,
      description: 'For growing teams who need more power.',
      features: [
        'Unlimited projects',
        '15 team members',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'AI assistant (200 credits/mo)',
        'Custom domains',
      ],
      cta: 'Start free trial',
      highlight: true,
      badge: 'Most popular',
    },
    {
      name: 'Enterprise',
      monthlyPrice: 149,
      annualPrice: 119,
      description: 'For large teams with advanced needs.',
      features: [
        'Unlimited everything',
        'Unlimited team members',
        'Custom analytics',
        'Dedicated support',
        'Unlimited storage',
        'AI assistant (unlimited)',
        'SSO & SAML',
        'Audit logs',
        'SLA guarantee',
      ],
      cta: 'Contact sales',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs text-brand-400 font-semibold uppercase tracking-wider mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
            No hidden fees. Cancel anytime. Start free.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-900 rounded-full p-1 border border-slate-800">
            <button
              onClick={() => setAnnual(false)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                !annual ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2',
                annual ? 'bg-brand-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              )}
            >
              Annual
              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-full font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden',
                plan.highlight
                  ? 'bg-gradient-to-b from-brand-900/60 to-slate-900/80 border-2 border-brand-500/50 shadow-2xl shadow-brand-500/20'
                  : 'glow-card'
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
              )}
              {plan.badge && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  <Zap size={10} className="fill-white" />
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400">{plan.description}</p>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-white">
                  ${annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                {(annual ? plan.annualPrice : plan.monthlyPrice) > 0 && (
                  <span className="text-slate-400 mb-2">/ month</span>
                )}
                {(annual ? plan.annualPrice : plan.monthlyPrice) === 0 && (
                  <span className="text-slate-400 mb-2">forever free</span>
                )}
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={clsx(
                  'mt-auto block text-center font-semibold py-3.5 rounded-xl text-sm transition-all duration-200',
                  plan.highlight
                    ? 'btn-primary text-white'
                    : 'border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
