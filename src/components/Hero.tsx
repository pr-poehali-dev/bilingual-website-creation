import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Icon from "@/components/ui/icon";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
            <Icon name="Rocket" size={32} className="text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          {t("hero.title")}
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed animate-fade-in">
          {t("hero.description")}
        </p>

        <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-200 hover:scale-105 shadow-2xl animate-fade-in">
          {t("cta.button")}
        </button>
      </div>
    </section>
  );
};

export default Hero;
