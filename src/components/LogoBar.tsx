export default function LogoBar() {
  const companies = [
    'Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Loom', 'Retool', 'Coda'
  ];

  return (
    <section className="py-16 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-slate-600 font-medium uppercase tracking-widest mb-10">
          Trusted by teams at the world's best companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((company) => (
            <span
              key={company}
              className="text-slate-600 hover:text-slate-400 transition-colors duration-300 text-lg font-bold tracking-wide"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
