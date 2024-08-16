import { FaHome } from "react-icons/fa";
import Hero from "../components/Hero";
import { FloatingNav } from "../components/ui/FloatingNavBar";
import Grid from "../components/Grid";
import RecentProjects from "../components/RecentProjects";
import { navItems } from "@/data/data";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import Approach from "../components/Approach";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flexx justify-center items-center flex-col overflow-clip  text-white-100 mx-auto sm:px-10 px-5">
      <div className=" max-w-7-xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />

        {/* <h1>hello protfolio</h1> */}
      </div>
    </main>
  );
}
