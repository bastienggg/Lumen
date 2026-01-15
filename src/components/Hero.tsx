import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-500/20 rounded-full blur-[100px] animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Compagnon de Pensée à IA</span>
          </div>

          <h1 className="text-6xl lg:text-7xl xl:text-8xl tracking-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Lumen:
            </span>
            <span className="block mt-2">
              Vos Pensées, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Visualisées.</span>
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl">
            Un partenaire IA qui écoute, questionne et reflète votre créativité sans l'influencer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Commencer à Réfléchir
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button className="px-8 py-4 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium hover:bg-white/10 transition-all">
              Voir la Démo
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-[#0A0A0A]"></div>
              ))}
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-white font-medium">10 000+</span> créateurs pensent avec Lumen
            </div>
          </div>
        </div>

        {/* Right: Neural Network Visualization */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-[48px] blur-2xl"></div>
          <div className="relative rounded-[48px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldXJhbCUyMG5ldHdvcmslMjBnbG93aW5nfGVufDF8fHx8MTc2ODQ2Mzg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Neural network visualization"
              className="w-full h-auto rounded-[40px] object-cover"
            />
            {/* Floating orbs overlay */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-500/30 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-gray-500">Explorer</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
