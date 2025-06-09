import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import Icon from "@/components/ui/icon";

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Icon name="Globe" size={18} className="text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">{t("site.title")}</h1>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
