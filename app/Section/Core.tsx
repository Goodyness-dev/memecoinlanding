import React from 'react';
import {FaShieldAlt, FaUsers,FaNetworkWired,FaGamepad } from "react-icons/fa"
const Core = () => {
  return (
    <div id='Core'>
      <section className=" md:flex-row gap-6 min-h-screen 
        items-center justify-center p-6  bg-[linear-gradient(135deg,#0a0014_0%,#1a0033_25%,#2e0854_50%,#4b382a_75%,#b8860b_100%)]">
      
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center m-5">
        <div
          className="max-w-xs rounded-2xl shadow-lg shadow-purple-800/40 
          hover:scale-105 hover:shadow-purple-500/60 firstimg
          transition-transform duration-300 ease-in-out"
        >
          <img 
            src={'/cartoonDog.png'}
            width={500}
            alt="Pablo Dog"
            className="mx-auto rounded-xl"
          />
        </div>
      
        <p className="p-6 bg-gray-900 text-2xl text-gray-400 font-bold border-amber-300 
          rounded-2xl shadow-[0_0_20px_#FFD700] mb-10 md:ml-9 md:w-1/2">
          Pablo wasn’t chasing charts, he was chasing vibes. 🐱✨  
          PabloCoin is chaos, memes, and gang energy wrapped in one coin.  
          No suits, <span className="text-amber-300">no stress — just the people’s chain, the gang’s meme.</span> 
        </p>
      </div>
      
      
           
      
      <h1 className="mt-10 text-amber-100 text-4xl font-bold ">Our Purpose</h1>
      <div className="flex flex-col p-5 m-5 md:flex-row justify-between items-center gap-14">
        {/* Vision text */}
        <div className="order-1 md:order-1 p-8 bg-[linear-gradient(145deg,rgb(28,28,33),rgb(38,38,44))] 
          text-gray-400 font-bold border-amber-300 rounded-2xl 
          shadow-[0_0_20px_#FFD700] mb-10 md:w-1/3">
          <h1 className="text-purple-500 text-2xl mb-5">Vision</h1>
          <p>
            Reviving the degen spirit: fast, cheap, unstoppable, and owned by the community
          </p>
        </div>
      
        {/* Mission text */}
        <div className="order-2 md:order-3 p-8 bg-gray-900/60 text-gray-400 font-bold border-amber-300 
          rounded-2xl shadow-[0_0_20px_#FFD700] mb-10 md:w-1/3">
          <h1 className="text-lime-400">Mission</h1>
          
          <div className="flex items-center gap-3">
            <p className="mb-5">💪 Empower the community — everyone gets a voice, everyone gets a coin.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <FaGamepad className="text-lime-300" />
            <p className="mb-5">Play and earn — gamified fun meets crypto chaos.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <FaNetworkWired className="text-lime-300" />
            <p className="mb-5">🪙 Own the chain — decentralized, community-driven, and unstoppable.</p>
          </div>
        </div>
      
        {/* Image */}
        <div className="order-3 md:order-2 max-w-xs rounded-2xl shadow-lg shadow-purple-800/40 
          hover:scale-105 hover:shadow-purple-500/60 firstimg
          transition-transform duration-300 ease-in-out mb-10">
          <img 
            src={'/kinngdog.jpg'}
            alt="King Pablo"
            className="firstimg mx-auto rounded-xl"
          />
        </div>
      </div>
      
       
       
       <div className="flex justify-center items-center p-5 mb-10 ">
       
       <p className="mt-10 text-gray-100 text-5xl align-middle  font-bold"><span className="text-[shadow:0_0_10px_#FFD700,0_0_20px_#FFD700]">Core Values</span> </p>
       </div>
       <div className=" flex flex-col md:flex-row items-center gap-10">
        
       
        <div className="p-8 w-full flex items-center justify-center flex-col bg-gray-900  text-gray-400 font-bold border-amber-300 rounded-2xl shadow-[0_0_10px_#FFD700]  ">
        <FaUsers className="text-yellow-300  text-8xl "/>
        <p className="text-amber-200  "> Community First</p>
        <p >Every decision is made with the Pablo Gang in mind</p>
        </div>
      
         <div className="p-8 w-full flex items-center justify-center flex-col bg-gray-900  text-gray-400 font-bold border-amber-300 rounded-2xl shadow-[0_0_10px_#FFD700]  ">
        <span className="text-purple-400  text-8xl ">⚡</span>
        <p className="text-amber-200  "> Fun with purpose</p>
        <p >Laughs on chain, gains in wallet</p>
        </div>
      
         <div className="p-8 w-full flex items-center justify-center flex-col bg-gray-900  text-gray-400 font-bold border-amber-300 rounded-2xl shadow-[0_0_10px_#FFD700]">
        <FaShieldAlt className="text-lime-400  text-8xl "/>
        <p className="text-amber-200  "> Fun with purpose</p>
        <p >Laughs on chain, gains in wallet</p>
        </div>
        </div>
            </section>
      
    </div>
  );
}

export default Core;
