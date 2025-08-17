import React from "react";

const NftCollection = () => {
  const nfts = Array(8).fill(null);

  return (
    <div className="bg-black min-h-screen text-white pt-20 overflow-x-hidden">
      <div className="relative w-full border-y border-gray-700 overflow-hidden p-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(6)
            .fill("NEW COLLECTION")
            .map((item, idx) => (
              <span
                key={idx}
                className="mx-8 text-lg font-mono tracking-widest cursor-pointer hover:text-gray-300 orbitron-regular"
              >
                {item}
              </span>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-0 bg-black orbitron-regular">
        {nfts.map((_, idx) => (
          <div className="relative group border-y-1 hover:border-1 border-gray-700">
            <div key={idx} className=" p-6">
            <div className="relative bg-gray-200 aspect-[3/4] flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-500 transform transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM8.5 11.5l2.5 3.01L14.5 10l4.5 6H5l3.5-4.5Z" />
              </svg>
            </div>
          </div>
          <div className="absolute left-0 right-0 bottom-0 bg-[#E2725B] opacity-0 text-md font-semibold flex justify-between px-3 py-4 transform group-hover:opacity-100 transition-transform duration-300">
              <span>BUY MINT</span>
              <span>20 SOL</span>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default NftCollection;
