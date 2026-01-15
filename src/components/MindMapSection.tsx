import { Network, Lock, Zap, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MindMapSection() {
  return (
    <section className="relative px-6 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mind Map Visualization */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-[48px] blur-2xl"></div>
            <div className="relative rounded-[48px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1755523877150-a5f9cfb3220e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnJhaW4lMjB2aXN1YWxpemF0aW9uJTIwcHVycGxlfGVufDF8fHx8MTc2ODQ2Mzg0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Complex mind map visualization"
                className="w-full h-auto rounded-3xl"
              />

              {/* Overlay lock badge */}
              <div className="absolute top-12 right-12 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/30">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">
                  Fonctionnalité Pro
                </span>
              </div>

              {/* Sample nodes overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full max-w-md">
                  {/* Center node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium shadow-lg">
                    Idée Centrale
                  </div>

                  {/* Connected nodes */}
                  {[
                    { top: "20%", left: "30%", label: "Concept A" },
                    { top: "70%", left: "20%", label: "Thème B" },
                    { top: "30%", left: "70%", label: "Vision C" },
                  ].map((node, i) => (
                    <div
                      key={i}
                      className="absolute px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs"
                      style={{ top: node.top, left: node.left }}
                    >
                      {node.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20">
              <Network className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">
                Cartographie Mentale
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl tracking-tight">
              <span className="text-white">Structurez le</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Chaos
              </span>
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed">
              Déverrouillez la fonctionnalité complète de Carte Mentale pour
              voir vos idées s'interconnecter dans une belle visualisation basée
              sur des nœuds.
            </p>

            {/* Feature list */}
            <div className="space-y-4 pt-4">
              {[
                {
                  icon: Network,
                  text: "Canevas infini pour cartographier vos idées",
                },
                { icon: Zap, text: "Connexion auto des concepts reliés" },
                { icon: Lock, text: "Exportez en image ou fichier interactif" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="group flex items-center gap-3 px-8 py-4 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all">
                Déverrouiller les Cartes Mentales
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Disponible dans les forfaits Créateur & Visionnaire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
