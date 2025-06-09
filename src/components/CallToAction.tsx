import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Icon from "@/components/ui/icon";

const CallToAction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="mb-8">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6">
            <Icon name="Star" size={24} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-white/80 mb-8">{t("cta.description")}</p>
        </div>

        <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-200 hover:scale-105 shadow-2xl">
          {t("cta.button")}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
