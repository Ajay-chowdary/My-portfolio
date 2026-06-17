import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { FireBall } from "@/components/ui/fire-ball";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ajay Chowdary Dodda — AI Engineer & Full Stack Developer",
  description:
    "I build production AI systems and full-stack applications — from LangGraph agentic pipelines and RAG platforms to React and Next.js products that ship and scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {/* Animated dot-grid wave, fixed behind all content */}
          <DottedSurface className="opacity-60" />
          {children}
        </ThemeProvider>
        {/* Global gooey fireball cursor trail — aggressive flame, never blocks clicks */}
        <FireBall
          fullScreen
          colors={["#ff2200", "#ff5500", "#ff9500", "#fde047"]}
          ballColor="#ff5500"
          blur={4}
          blobRadius={6}
          particleRadiusRange={[1.5, 3.5]}
          particleCount={130}
          followStrength={1}
          spreadX={[-3, 3]}
          riseSpeed={[12, 20]}
          gravity={0.9}
          shrink={0.11}
          lifeRange={[14, 22]}
          style={{ pointerEvents: "none", zIndex: 40 }}
        />
      </body>
    </html>
  );
}
