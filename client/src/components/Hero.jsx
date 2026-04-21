
import POSC from "../assets/POSC.png";
import coach from "../assets/coach.png";
import player from "../assets/player.png";
import parents from "../assets/parents.png";
import SignIn from "./SignIn";
import CreateTest from "./CreateTest";

export default function Hero() {
  return (

<div className="bg-[#c2d245] min-h-screen">

  {/* HERO SECTION */}
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-12 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Soccer Player Analyzer
          </h1>

          <p className="text-2xl text-gray-700 mb-10">
            Real passion, and real growth for every footballer
          </p>

          <div className="space-y-4">
            <SignIn />
            <CreateTest />
            
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            className="w-full rounded-2xl shadow-lg object-cover"
            src={POSC}
            alt="POSC"
          />
        </div>

      </div>
    </div>
  </section>


  {/* ABOUT SECTION */}
  <section className="bg-[#323b1a] py-24">

    <div className="max-w-7xl mx-auto px-6">

      {/* HEADER */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-2">
          About SPA
        </h2>
        <p className="text-gray-300 text-lg">
          Utility for coaches, players, and parents
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* COACHES */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">

          {/* IMAGE SLOT */}
          <img src={coach} className="w-full h-full object-cover rounded-lg" />

          <h3 className="text-3xl font-bold text-gray-900 mb-3 ">
            Coaches
          </h3>

          <p className="text-gray-600 mb-6">
            Track your team and players' statistics
          </p>

         <button className="bg-[#323b1a] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Learn More
          </button>
        </div>


        {/* PLAYERS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">

          {/* IMAGE SLOT */}
          <img src={player} className="w-full h-full object-cover rounded-lg" />

          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Players
          </h3>

          <p className="text-gray-600 mb-6">
            Track your progress
          </p>

         <button className="bg-[#323b1a] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Learn More
          </button>
        </div>


        {/* PARENTS */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">

          {/* IMAGE SLOT */}
          <img src={parents} className="w-full h-full object-cover rounded-lg" />

          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Parents
          </h3>

          <p className="text-gray-600 mb-6">
            See how your soccer player improves
          </p>

         <button className="bg-[#323b1a] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>

  </section>
</div>
  );
}