import React from 'react';
import {FaTwitter, FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
       <section className="mt-20 border-t border-black ml-20 mr-20">
  <div className="flex justify-center items-center p-10 gap-10">
  <button className="flex items-center justify-center gap-2 bg-black/50 text-white px-6 py-3 rounded-2xl hover:bg-lime-400 transition">
    <FaTelegramPlane className="text-xl" />
    <span>Telegram</span>
  </button>

  <button className="flex items-center justify-center gap-2 bg-black/50 text-white px-6 py-3 rounded-2xl hover:bg-lime-400 transition">
    <FaTwitter className="text-xl" />
    <span>Twitter/X</span>
  </button>
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
