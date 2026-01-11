"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components will be added as we implement each feature
import CustomCursor from "@/components/CustomCursor";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import DesignSystem from "@/components/DesignSystem";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main>
      <CustomCursor />
      <ProgressBar />
      <Hero />
      <Philosophy />
      <TechStack />
      <DesignSystem />
      <Projects />
      <Connect />
      <Footer />
    </main>
  );
}
