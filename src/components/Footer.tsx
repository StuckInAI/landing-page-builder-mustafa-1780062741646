import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Resources: ['Docs', 'API Reference', 'Community', 'Tutorials', 'Support'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  return (
    <footer className="border-t border-slate-800/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">Lumina</span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Build beautiful digital experiences faster than ever before.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
                { icon: <Github size={18} />, href: '#', label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-slate-800 hover:border-slate-600 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-white mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Lumina, Inc. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Made with ❤️ for builders everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
