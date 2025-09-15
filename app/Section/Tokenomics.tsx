import React from 'react';
import Image from 'next/image';
const Tokenomics = () => {
  return (
    <div id='Tokenomics'>
     <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <Image
        src="/Dog.png"
        width={80}
        height={80}
        alt="logo"
        className="rounded-full"
      />
    </div>
    <p className="text-4xl text-amber-200">Token Distribution</p>
  </div> 
  <section className="mt-28">
  <div className="flex flex-col md:flex-row gap-10 justify-between items-start">
    
    {/* Left: Distribution List */}
    <div className="order-1 md:order-1 flex flex-col bg-gray-900 text-gray-400 font-bold 
                    border-amber-300 rounded-2xl shadow-[0_0_20px_#FFD700] 
                    p-5 w-full md:w-1/3">
      <div className="flex justify-between mb-5 p-4 rounded-2xl bg-[hsl(280,100%,50%,0.1)] text-white text-sm md:text-base">
        <p className="mr-10 text-[#FFF9E6]">Community (Burnt before launch)</p>
        <p className="text-purple-400">50%</p>
      </div>
      <div className="flex justify-between mb-5 p-4 rounded-2xl bg-[hsl(142,71%,45%,0.1)] text-white text-sm md:text-base">
        <p className="mr-10 text-[#FFF9E6]">Ntfs and games</p>
        <p className="text-green-400">10%</p>
      </div>
      <div className="flex justify-between mb-5 p-4 rounded-2xl bg-[hsl(0,84%,60%,0.1)] text-white text-sm md:text-base">
        <p className="mr-10 text-[#FFF9E6]">Marketing & Partnership</p>
        <p className="text-red-400">10%</p>
      </div>
      <div className="flex justify-between mb-5 p-4 rounded-2xl bg-[hsl(45,100%,50%,0.1)] text-white text-sm md:text-base">
        <p className="mr-10 text-[#FFF9E6]">Future Development</p>
        <p className="text-amber-300">10%</p>
      </div>
      <div className="flex justify-between mb-5 p-4 rounded-2xl bg-[hsl(50,98%,50%,0.1)] text-white text-sm md:text-base">
        <p className="mr-10 text-[#FFF9E6]">Team</p>
        <p className="text-yellow-200">10%</p>
      </div>
    </div>

    {/* Middle: Image */}
    <div className="order-3 md:order-2 w-full md:w-1/3 flex justify-center">
      <div className="w-full max-w-xs md:max-w-[350px] h-auto rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.6)] 
                      transition-transform duration-300 hover:scale-105">
        <img 
          src={'/chartcat.jpg'} 
          alt="Chart Cat"
          className="rounded-xl w-full h-auto mx-auto"
        />
      </div>
    </div>

    {/* Right: Extra Info */}
    <div className="order-2 md:order-3 flex flex-col gap-5 text-center p-11 w-full md:w-1/3">
      <div className="pad">
        <p className="text-yellow-400">Launch LP</p>
        <p>$500 BNB + 100M $BILLY</p>
      </div>
      <div className="pad">
        <p className="text-purple-500">Initial Price</p>
        <p>$0.000005</p>
      </div>
      <div className="pad">
        <p className="text-lime-300">Initial Market Cap</p>
        <p>~$5,000</p>
      </div>
      <div className="pad">
        <p className="text-amber-300">Liquidity</p>
        <p>Locked for trust</p>
      </div>
    </div>

  </div>



</section>
    </div>
  );
}

export default Tokenomics;
