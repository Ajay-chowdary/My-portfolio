import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import Reveal from "./Reveal";

export default function Spline3D() {
  return (
    <section id="interactive" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-8 font-mono text-sm text-amber">
            {"// Interactive"}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <Card className="relative h-[500px] w-full overflow-hidden border-line bg-black/[0.96]">
            <Spotlight
              className="-top-40 left-0 md:-top-20 md:left-60"
              fill="#fbbf24"
            />

            <div className="flex h-full flex-col md:flex-row">
              {/* Left content */}
              <div className="relative z-10 flex flex-1 flex-col justify-center p-8 sm:p-10">
                <h2 className="bg-gradient-to-b from-amber-hi to-amber-lo bg-clip-text font-display text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
                  Interfaces with
                  <br />
                  intelligence
                </h2>
                <p className="mt-4 max-w-lg text-neutral-300">
                  I build products where the experience and the engineering meet
                  — agentic AI under the hood, immersive, responsive interfaces
                  on top. This scene is live and interactive; drag it around.
                </p>
              </div>

              {/* Right content — interactive 3D scene */}
              <div className="relative flex-1">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
