import React from 'react';
import {FaShieldAlt, FaUsers,FaNetworkWired,FaGamepad } from "react-icons/fa"
const About = () => {
  return (
    <div id='About'>
           {/* HERO SECTION */}
          <section
        className="relative mb-12 min-h-screen 
        bg-[linear-gradient(135deg,#1a0033_0%,#2d0a3f_20%,#331a00_40%,#262200_60%,#0d331a_80%,#000000_100%)] 
        grid place-items-center mx-auto justify-center"
      >
        <h1 className="text-7xl font-black text-orange-400 drop-shadow-[0_0_20px_#a020f0] mt-5">
          Pablocoin
        </h1>
        <p className="text-orange-300">The gang's meme, The people's chain</p>
        <p className="text-orange-300">Bringing back the old vibes, one meme at a time</p>
      
        <div className="firstimg max-w-xs shadow-[#010103] rounded-2xl p-4 hover:scale-105 transition-transform mt-10">
          <img src={'/Cat.png'} width={300} height={300} alt="crypto cat" />
        </div>
      
        <button className="bg-amber-500 flex p-3 rounded-2xl w-[300px] hover:scale-105 transition-transform mt-6">
          <img src={'/bunny-color.png'} width={15} height={15} className="mr-3 ml-8" />
          Buy on PancakeSwap
        </button>
      
        <button className="bg-purple-400 flex items-center p-3 rounded-2xl w-[300px] hover:scale-105 transition-transform mt-6">
          <FaShieldAlt className="ml-8 mr-5" />
          Read whitepaper
        </button>
      
        <button className="bg-green-300 flex items-center p-3 rounded-2xl w-[300px] hover:scale-105 transition-transform mt-6 mb-6">
          <FaUsers className="ml-8 mr-5" />
          Join the Pablo Gang
        </button>
      </section>
    </div>
  );
}

export default About;
