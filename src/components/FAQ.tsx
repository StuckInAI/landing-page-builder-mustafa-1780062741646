import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Is there a free plan?',
      answer: 'Yes! Our Starter plan is free forever with support for up to 3 projects and 2 team members. No credit card required.',
    },
    {
      question: 'Can I switch plans at any time?',
      answer: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time from your account settings. Changes take effect at the next billing cycle.',
    },
    {
      question: 'How does the AI assistant work?',
      answer: 'Lumina\'s AI assistant uses large language models to suggest design improvements, generate code snippets, automate repetitive tasks, and analyze your analytics data. Credits are consumed per AI action.',
    },
    {
      question: 'Do you support SSO / SAML?',
      answer: 'Yes. SSO and SAML 2.0 support are available on the Enterprise plan. We support Google Workspace, Okta, Azure AD, and any SAML-compliant identity provider.',
    },
    {
      question: 'Where is my data stored?',
      answer: 'All data is stored on AWS in US-East and EU-West regions. You can choose your preferred region at account creation. We are SOC 2 Type II certified and GDPR compliant.',
    },
    {
      question: 'Is there a self-hosted option?',
      answer: 'We offer a self-hosted Enterprise option for companies with strict data residency requirements. Please contact our sales team for pricing and setup details.',
    },
  ];

  return (
    <section id="faq" className="py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs text-brand-400 font-semibold uppercase tracking-wider mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Common questions
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about Lumina.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="glow-card rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm md:text-base pr-4">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={clsx(
                    'flex-shrink-0 text-slate-400 transition-transform duration-200',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
