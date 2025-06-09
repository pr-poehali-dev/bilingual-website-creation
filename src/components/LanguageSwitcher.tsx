import React from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
      <button
        onClick={() => handleLanguageChange("ru")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "ru"
            ? "bg-white text-purple-600 shadow-sm"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
          language === "en"
            ? "bg-white text-purple-600 shadow-sm"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
