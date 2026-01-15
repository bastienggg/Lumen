import { Sparkles, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Produit: ['Fonctionnalités', 'Tarifs', 'Feuille de route', 'Changelog'],
    Entreprise: ['À propos', 'Blog', 'Carrières', 'Kit Presse'],
    Ressources: ['Documentation', 'Centre d\'aide', 'Communauté', 'Contact'],
    Légal: ['Confidentialité', 'Conditions', 'Sécurité', 'Cookies'],
  };

  return (
    <footer className="relative px-6 py-20 overflow-hidden border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 mb-6">
            <Mail className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Restez Connecté</span>
          </div>
          
          <h3 className="text-3xl font-medium text-white mb-4">
            Recevez des insights créatifs chaque semaine
          </h3>
          <p className="text-gray-400 mb-8">
            Rejoignez 10 000+ créateurs qui reçoivent des conseils, mises à jour et accès anticipé exclusif.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50"
            />
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-12"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-medium text-white">Lumen</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Vos pensées, visualisées. Un partenaire IA pour les esprits créatifs.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500">
            © 2026 Lumen. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Conçu avec ✨ pour les créatifs</span>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Statut</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
