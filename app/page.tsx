import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Instructor from "@/components/Instructor";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Certificate from "@/components/Certificate";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-mono selection:bg-[#1F3D2B] selection:text-[#FDFBF7]">
      <Header />

      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Instructor />
        <Certificate />
        <CTA />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}

