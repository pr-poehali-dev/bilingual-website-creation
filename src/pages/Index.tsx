import React from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import HomePage from "./HomePage";

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
};

export default Index;
