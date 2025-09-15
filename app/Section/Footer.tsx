import React from 'react';

const Footer = () => {
  return (
    <div>
       <section className="mt-20 border-t border-black ml-20 mr-20">
    <div className="flex justify-center items-center p-10 gap-10">
    <button className="bg-black/50 text-white p-3 rounded-2xl w-50 hover:bg-lime-400">Telegram</button>
    <button className="bg-black/50 text-white p-3 rounded-2xl w-50 hover:bg-lime-400">Twitter/X</button>
    </div>
    <div className="pad text-center">
    <p className="mb-10 text-amber-400"> Contact Address</p>
    <p className="text-sm">0x....(Coming soon)</p>

    </div>
    <div className="grid place-content-center">
    <p className="text-sm text-gray-400 mb-8 font-medium">100% community owned. Lets go to the moon</p>
    <p className="text-sm text-gray-400 mb-9 font-medium">2025 Pablocoin.Gang shi, for the pablo gang.</p>
    </div>
  </section>
    </div>
  );
}

export default Footer;
