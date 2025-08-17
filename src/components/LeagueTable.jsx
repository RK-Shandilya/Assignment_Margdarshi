import { Skull } from "lucide-react";

export default function LeagueTable({ leagueData }) {
  return (
    <div className=" text-white rounded-lg w-full max-w-4xl mx-auto orbitron-regular py-18 be-atomos">
      <h2 className="text-center text-7xl font-extrabold tracking-widest pb-18">
        THE LEAGUE
      </h2>

      <div className="border border-gray-500 border-l-gray-700 rounded-xl overflow-hidden">
        {leagueData.map((team, idx) => (
          <div
            key={idx}
            className="grid grid-cols-4 mx-10 items-center py-10 bg-black/60 hover:bg-black/80 transition border-b-4 border-[#E2725B]/60 last:border-b-0"
          >
            <div className="flex items-center gap-4 col-span-2">
              <img src={team.logo} alt={team.name} className="w-8 h-10 object-contain" />
              <span className="font-bold text-3xl tracking-wide">{team.name}</span>
            </div>

            <div className="flex items-center gap-2 justify-center col-span-1">
              <span className="text-3xl font-semibold">{team.score}</span>
              <Skull size={22} className="text-white" />
            </div>

            <div className="text-right col-span-1">
              {team.reward && (
                <span className="font-bold text-3xl tracking-wide">{team.reward}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
