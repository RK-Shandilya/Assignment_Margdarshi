import React from "react";
import Border from "./Border";

const Main = () => {
  return (
    <div className="px-30 pt-18">
      <Border
        data={
          <div className="relative flex flex-col justify-between gap-24 w-full">
            <div className="flex justify-between text-xs">
              <div className="relative top-0 left-0 flex flex-col w-fit">
                <div>
                  DSP: <span className="text-green-400">1707 X 979</span>
                </div>
                <div>
                  FPS: <span className="text-green-400">67.90</span>
                </div>
              </div>
              <div className="relative top-0 right-0 flex flex-col w-fit">
                <div>
                  <span className="text-green-400">10-08-1025</span> :DATE
                </div>
                <div>
                  <span className="text-green-400">02:56:20</span> :TIME
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-12 text-xs items-center">
              <div>
                ///: <span className="text-green-400 text-xs">0.20</span>
              </div>
              <div className="flex flex-col gap-8 w-200 justify-center items-center">
                <div className="be-atomos text-7xl font-bold uppercase text-transparent [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:2px] ">
                  EXPLORE NFT COLLECTION
                </div>
                <p className="be-vietnam-pro text-xl text-center">
                  A collection of 2525 highly-fashionable NFTs on the ETH
                  Blockchain. Unique,
                  <br />
                  metaverse-ready, and designed to benefit their holders.
                </p>
                <div className="relative inline-block font-orbitron text-2xl font-bold tracking-widest text-yellow-300">
                  {/* Polygon Frame */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 300 100"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="20,0 300,0 300,20 300,80 280,100 20,100 0,100 0,20"
                      fill="none"
                      stroke="white"
                      strokeWidth="5"
                    />
                  </svg>

                  {/* Content + accents */}
                  <div className="relative px-6 py-5">
                    <span className="text-sm relative z-10">START GAME</span>

                    <span className="absolute top-[14px] left-[14px] w-4 h-[2px] bg-white rotate-[-45deg]" />
                    <span className="absolute bottom-[14px] right-[14px] w-4 h-[2px] bg-white rotate-[-45deg]" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-green-400">0.49</span>
                <span> :///</span>
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <div className="relative top-0 left-0 flex flex-col w-fit">
                <div>
                  EVO: <span className="text-green-400">ALPHA</span>
                </div>
                <div>
                  VERS: <span className="text-green-400">01.08.84</span>
                </div>
              </div>
              <div className="relative top-0 right-0 flex flex-col w-fit">
                <div>
                  <span className="text-green-400">74.906</span> :LOG
                </div>
                <div>
                  <span className="text-green-400">Win11 Chrome/138.0.0.0</span>{" "}
                  :SYS
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Main;
