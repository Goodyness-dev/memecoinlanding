"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import About from "./Section/About";
import Footer from "./Section/Footer";
import Core from "./Section/Core";
import Roadmap from "./Section/Roadmap";
import Tokenomics from "./Section/Tokenomics";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  root.style.setProperty("--grad1", "#1a1a2e"); // muted navy purple
  root.style.setProperty("--grad2", "#0f0f1a"); // deep soft black-blue

  const tl = gsap.timeline({
    yoyo: true,
    repeat: -1,
    defaults: { duration: 6, ease: "sine.inOut" }, // slower + softer
  });

  tl.to(root, { "--grad1": "#2a1f3d", "--grad2": "#1a1325" })   // dusty purple → soft plum
    .to(root, { "--grad1": "#3b2c55", "--grad2": "#201830" })   // deep violet-gray
    .to(root, { "--grad1": "#4a375f", "--grad2": "#2a1f3d" })   // muted indigo → faded purple
    .to(root, { "--grad1": "#1f1b2d", "--grad2": "#0f0f1a" })   // near-black purple
    .to(root, { "--grad1": "#1a1a2e", "--grad2": "#0f0f1a" });  // reset
}, []);

useEffect(()=> {
  gsap.fromTo('.firstimg',{
    y: 0
  }, {
    y: -30,
    repeat:-1,
    ease: 'back.inOut',
    yoyo: true,
    duration: 2
  })

  gsap.from('.roadmap', {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: 'power1.inOut',
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".roadmap-section",
      start: "top 80%",
      toggleActions:'play reverse play reverse'
    }
  })


},[])
  return (
    <main className="h-screen  bg-[linear-gradient(135deg,#1a0033_0%,#2d0a3f_20%,#331a00_40%,#262200_60%,#0d331a_80%,#000000_100%)]">
      {/* HEADER */}
      <header className=" sticky top-0 z-50 border-b border-purple-500 bg-black/40 text-white">
        <nav className="flex items-center justify-between p-4">
          {/* Logo + Title */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
            <Image
              src="/Dog.png"
              width={60}
              height={80}
              alt="logo"
              className="rounded-full mr-4"
            />
            </div>
            <h1 className="text-2xl font-bold text-purple-400">Pablo Pilly</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-6 text-xl">
            <a href="#about" className="text-sm text-gray-400">About</a>
            <a href="#Tokenomics" className="text-sm text-gray-400">Tokenomics</a>
            <a href="#Mission" className="text-sm text-gray-400">Mission</a>
            <a href="#Roadmap" className="text-sm text-gray-400">Roadmap</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex text-neutral-400 hover:text-white focus:outline-none"
            aria-label="toggle menu"
          >
            <img
              src={isOpen ? "/close.svg" : "/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 p-4 text-lg">
            <a href="#About" onClick={() => setIsOpen(false)}>About</a>
            <a href="#Tokenomics" onClick={() => setIsOpen(false)}>Tokenomics</a>
            <a href="#Core" onClick={() => setIsOpen(false)}>Mission</a>
            <a href="#Roadmap" onClick={() => setIsOpen(false)}>Roadmap</a>
          </div>
        </div>
      </header>

    <About/>
    <Core/>
    <Tokenomics/>
    <Roadmap/>
    <Footer/>
 


          </main>
  );
}
