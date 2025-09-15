import React from 'react';

const Roadmap = () => {
  return (
    <div id='Roadmap'>
      
<section className="roadmap-section mt-30 p-10 ">
  <div className="flex justify-center items-center p-10 mb-10">
  <h1 className="text-amber-200 text-5xl font-bold">Roadmap</h1>
  </div>
  <div className="flex flex-col gap-10">
    <div className="pad p-5 roadmap">
      <p className="text-yellow-500 text-xl"><span className="bg-amber-300  inline-flex text-black rounded-full items-center justify-center  w-10 h-10 overflow-hidden mr-5">1 </span>Phase 1 - The Birth of Pablo</p>
      <p className=" text-sm mt-5">Meme flood begins, vibes, and pure gang energy</p>
    </div>
    <div className="pad p-5 mb-5 roadmap">
      <p className="text-lime-400"><span className="bg-lime-400  inline-flex text-black rounded-full items-center justify-center  w-10 h-10 overflow-hidden mr-5">2</span>  Phase 2 - Pablo Gts busy</p>
      <p className="text-sm mt-5">Staking, NFTs, community battles & contests</p>
    </div>
    <div className="pad roadmap">
      <p className="text-purple-500"><span className="bg-purple-500  inline-flex text-black rounded-full items-center justify-center  w-10 h-10 overflow-hidden mr-5">3 </span> Phase 3 – Rise of the Gang</p>
      <p className="text-sm mt-5">Strategic partnerships, CEX listings</p>
    </div>
    <div className="pad roadmap">
      <p className="text-yellow-600 "> <span className="bg-yellow-600  inline-flex text-black rounded-full items-center justify-center  w-10 h-10 overflow-hidden mr-5">4 </span> Phase 4 – Pablo Takes Over</p>
      <p className="text-sm mt-5"> Merch drops, Tier-1 exchanges, Meme Carnival</p>
    </div>
  </div>
  <div className="flex justify-center items-center">
  <h1 className="font-bold text-amber-300 text-sm p-7 md:text-5xl">Pablo Coin To The Moon</h1>
  </div>
  <div className="flex justify-center items-center">
    <img src={'/moon cat.jpg'}
    width={400}/>
  </div>
  </section>
    </div>
  );
}

export default Roadmap;
