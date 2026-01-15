import { MessageCircle, Sparkles } from 'lucide-react';

export function QuestioningSection() {
  const chatMessages = [
    { role: 'user', text: 'Je veux concevoir quelque chose qui semble organique et vivant.' },
    { role: 'ai', text: 'Que signifie "vivant" pour vous dans ce contexte ? Est-ce le mouvement, la croissance, ou autre chose ?', isHighlight: true },
    { role: 'user', text: 'Peut-être que c\'est à propos de l\'evolution... des choses qui changent avec le temps.' },
    { role: 'ai', text: 'Intéressant. Qu\'est-ce qui se cache derrière ce concept d\'evolution pour vous ?' },
  ];

  return (
    <section className="relative px-6 py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Description */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 backdrop-blur-sm border border-teal-500/20">
              <MessageCircle className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-300">Questionnement Neutre</span>
            </div>

            <h2 className="text-5xl lg:text-6xl tracking-tight">
              <span className="text-white">Orientation Sans</span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Influence
              </span>
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed">
              Lumen pose des questions profondes et socratiques qui vous aident à creuser vos propres idées—sans jamais imposer sa propre perspective.
            </p>

            <div className="space-y-4 pt-4">
              {[
                'Questionnement non directif',
                'Reflète votre langage',
                'Aucun biais algorithmique dans la créativité',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chat Interface */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-blue-600/20 rounded-[48px] blur-2xl"></div>
            <div className="relative rounded-[48px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-8">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Lumen</div>
                  <div className="text-xs text-gray-400">Partenaire de Réflexion IA</div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 py-6">
                {chatMessages.map((message, i) => (
                  <div
                    key={i}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-3xl ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : message.isHighlight
                          ? 'bg-gradient-to-r from-teal-600/20 to-blue-600/20 border border-teal-500/30 text-white'
                          : 'bg-white/5 text-gray-300'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Field */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <input
                  type="text"
                  placeholder="Partagez vos pensées..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50"
                  disabled
                />
                <button className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 flex items-center justify-center hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
