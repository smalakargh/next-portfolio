import Image from "next/image";
import HeroSec from "@/sm-components/Hero-Section";
import CountSection from "@/sm-components/Count-Section";
import Cards from "@/sm-components/Cards-Section";
import ProjectSec from "@/sm-components/Project-Section";
export default function Home() {
  return (
    <main>
      <HeroSec />
      <CountSection />
      <ProjectSec />
      <Cards />
    </main>
  );
}
