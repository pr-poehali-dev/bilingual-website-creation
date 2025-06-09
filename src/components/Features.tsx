import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Icon from "@/components/ui/icon";

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: "Languages",
      title: t("features.multilingual"),
      description: t("features.multilingual.desc"),
    },
    {
      icon: "Palette",
      title: t("features.modern"),
      description: t("features.modern.desc"),
    },
    {
      icon: "Smartphone",
      title: t("features.responsive"),
      description: t("features.responsive.desc"),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon
                  name={feature.icon as any}
                  size={28}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
