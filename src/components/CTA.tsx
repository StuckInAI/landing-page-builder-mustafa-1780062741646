import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 via-accent-500/20 to-brand-500/20 rounded-3xl blur-3xl" />

        <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-brand-500/30 rounded-3xl px-8 py-16 md:py-20 text-center overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />

          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-sm text-brand-300 font-medium mb-6">
              <Sparkles size={14} />
              Start building today
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to ship
              <br />
              <span className="gradient-text">10× faster?</span>
            </h2>

            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
              Join 10,000+ teams already using Lumina to build and ship
              beautiful products. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="btn-primary flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-base"
              >
                Get started for free
                <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white font-semibold text-base transition-colors"
              >
                Talk to sales →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
