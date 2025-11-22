"use client"
import FullScreenNav from "@/pages/FullScreenNav";
import Hero from "@/pages/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center selection:bg-neutral-700">
      <FullScreenNav />
      <Hero />
    </div>
  );
}
