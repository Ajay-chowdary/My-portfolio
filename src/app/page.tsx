import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Spline3D from "@/components/Spline3D";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Spline3D />
        <About />
        <Services />
        <Projects />
        <Process />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
