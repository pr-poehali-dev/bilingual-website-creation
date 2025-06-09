import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;
