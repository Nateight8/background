import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Overview from "@/components/Overview/Overview";
import Quote from "@/components/Quote/Quote";
import Experts from "@/components/Overview/Experts";
import TextScene from "@/components/threejs/TextScene";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />

      <Overview />
      <Experts />
      <Projects />
      <Quote />
    </>
  );
}
