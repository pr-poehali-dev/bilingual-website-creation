import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ru: {
    "site.title": "Многоязычный сайт",
    "site.subtitle": "Добро пожаловать на наш современный веб-сайт",
    "hero.title": "Создавайте без границ",
    "hero.description":
      "Наша платформа объединяет людей со всего мира, предоставляя инструменты для творчества и сотрудничества.",
    "features.title": "Возможности",
    "features.multilingual": "Многоязычность",
    "features.multilingual.desc": "Поддержка русского и английского языков",
    "features.modern": "Современный дизайн",
    "features.modern.desc": "Чистый и элегантный интерфейс",
    "features.responsive": "Адаптивность",
    "features.responsive.desc": "Отлично работает на всех устройствах",
    "cta.title": "Готовы начать?",
    "cta.description":
      "Присоединяйтесь к тысячам пользователей, которые уже используют нашу платформу",
    "cta.button": "Начать сейчас",
    "footer.rights": "Все права защищены",
  },
  en: {
    "site.title": "Multilingual Website",
    "site.subtitle": "Welcome to our modern web platform",
    "hero.title": "Create Without Boundaries",
    "hero.description":
      "Our platform connects people worldwide, providing tools for creativity and collaboration.",
    "features.title": "Features",
    "features.multilingual": "Multilingual",
    "features.multilingual.desc": "Support for Russian and English languages",
    "features.modern": "Modern Design",
    "features.modern.desc": "Clean and elegant interface",
    "features.responsive": "Responsive",
    "features.responsive.desc": "Works perfectly on all devices",
    "cta.title": "Ready to Start?",
    "cta.description":
      "Join thousands of users who are already using our platform",
    "cta.button": "Get Started",
    "footer.rights": "All rights reserved",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
