import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
            <Icon name="Globe" size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold">{t("site.title")}</span>
        </div>

        <div className="text-center text-gray-400">
          <p>
            © 2024 {t("site.title")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
