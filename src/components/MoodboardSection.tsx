import { Grid3x3, Image, Type, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MoodboardSection() {
  const bentoItems = [
    {
      title: "Inspiration Visuelle",
      icon: Image,
      color: "from-purple-600 to-purple-400",
      size: "lg:col-span-2 lg:row-span-2",
      image: "https://images.unsplash.com/photo-1639493115941-a70fcef4f715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWx8ZW58MXx8fHwxNzY4Mzk2NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Palettes de Couleurs",
      icon: Palette,
      color: "from-blue-600 to-blue-400",
      size: "lg:col-span-1",
    },
    {
      title: "Extraits de Texte",
      icon: Type,
      color: "from-teal-600 to-teal-400",
      size: "lg:col-span-1",
    },
    {
      title: "Espace Créatif",
      icon: Grid3x3,
      color: "from-purple-600 to-blue-600",
      size: "lg:col-span-2",
      image: "https://images.unsplash.com/photo-1662117940162-b666fea153cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGluc3BpcmF0aW9ufGVufDF8fHx8MTc2ODQyNTkxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Synthèse Mentale",
      icon: Grid3x3,
      color: "from-teal-600 to-purple-600",
      size: "lg:col-span-1",
      image: "https://images.unsplash.com/photo-1653022860307-0ccb6379f78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwY29uY2VwdHxlbnwxfHx8fDE3Njg0NTY0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="relative px-6 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Du Flux de Conscience
            </span>
            <br />
            <span className="text-white">à l'Inspiration Visuelle</span>
          </h2>
          <p className="text-xl text-gray-400">
            Transformez vos pensées brutes en un moodboard dynamique qui évolue avec votre processus créatif.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group relative ${item.size} rounded-[48px] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] cursor-pointer`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                {item.image ? (
                  <div className="relative h-full">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[200px] p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                    {/* Sample content */}
                    {item.title === "Color Palettes" && (
                      <div className="flex gap-2 mt-6">
                        {['bg-purple-500', 'bg-blue-500', 'bg-teal-500', 'bg-pink-500'].map((color, i) => (
                          <div key={i} className={`w-10 h-10 rounded-xl ${color}`}></div>
                        ))}
                      </div>
                    )}
                    {item.title === "Text Snippets" && (
                      <div className="mt-6 space-y-2 w-full">
                        <div className="h-2 bg-white/20 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-white/20 rounded w-full"></div>
                        <div className="h-2 bg-white/20 rounded w-2/3 mx-auto"></div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Auto-Sélectionné", desc: "L'IA sélectionne des visuels qui correspondent à votre ambiance" },
            { title: "Mises à Jour en Temps Réel", desc: "Le moodboard évolue au fur et à mesure de votre réflexion" },
            { title: "Prêt à Exporter", desc: "Téléchargez pour Figma, Notion ou Impression" },
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h4 className="text-lg font-medium text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
