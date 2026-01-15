import { Hero } from "./components/Hero";
import { MoodboardSection } from "./components/MoodboardSection";
import { QuestioningSection } from "./components/QuestioningSection";
import { MindMapSection } from "./components/MindMapSection";
import { PricingSection } from "./components/PricingSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <span className="text-xl font-medium">Lumen</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Tarifs
            </a>
            <a
              href="#about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-6 py-2 rounded-full text-sm text-white hover:bg-white/5 transition-all">
              Connexion
            </button>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-sm text-white font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all">
              Commencer
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <MoodboardSection />
        <QuestioningSection />
        <MindMapSection />
        <PricingSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
