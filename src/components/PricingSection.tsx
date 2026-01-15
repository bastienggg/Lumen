import { Check, Sparkles, Zap, Crown } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      description: "Parfait pour explorer vos pensées",
      icon: Sparkles,
      gradient: "from-gray-600 to-gray-500",
      borderGlow: "hover:shadow-[0_0_30px_rgba(156,163,175,0.3)]",
      features: [
        "Conversations de réflexion basiques",
        "Jusqu'\u00e0 50 questions par mois",
        "Capture de pensées texte uniquement",
        "Support communautaire",
      ],
      cta: "Commencer Gratuitement",
      highlight: false,
    },
    {
      name: "Créateur",
      price: "19€",
      description: "Pour les créatifs prêts à visualiser",
      icon: Zap,
      gradient: "from-purple-600 to-blue-600",
      borderGlow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]",
      features: [
        "Conversations IA illimitées",
        "Génération de moodboard dynamique",
        "Inspiration visuelle auto-sélectionnée",
        "Export vers Figma & Notion",
        "Support prioritaire",
      ],
      cta: "Devenir Créateur",
      highlight: true,
    },
    {
      name: "Visionnaire",
      price: "49€",
      description: "Cartographie mentale complète déverrouillée",
      icon: Crown,
      gradient: "from-blue-600 to-teal-600",
      borderGlow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]",
      features: [
        "Tout du forfait Créateur",
        "Accès complet aux Cartes Mentales",
        "Espace de travail canevas infini",
        "Connexion auto des idées reliées",
        "Accès API pour intégrations",
        "Intégration personnalisée",
      ],
      cta: "Devenir Visionnaire",
      highlight: false,
    },
  ];

  return (
    <section className="relative px-6 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-[200px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl tracking-tight">
            <span className="text-white">Choisissez Votre</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Parcours Créatif
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Commencez gratuitement, passez à la version supérieure quand vous
            êtes prêt à aller plus loin.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative group rounded-[48px] p-8 backdrop-blur-xl border transition-all ${
                  plan.highlight
                    ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 scale-105"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                } ${plan.borderGlow}`}
              >
                {/* Popular badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium">
                    Le Plus Populaire
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan name & price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-medium text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/mois</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-4 rounded-3xl font-medium transition-all ${
                    plan.highlight
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:scale-105`
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-400">
            Tous les forfaits incluent une garantie satisfait ou remboursé de 14
            jours
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>✓ Aucune carte de crédit requise pour Gratuit</span>
            <span>✓ Annulez à tout moment</span>
            <span>✓ Paiements sécurisés</span>
          </div>
        </div>
      </div>
    </section>
  );
}
