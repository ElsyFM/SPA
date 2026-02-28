
import POSC from "../assets/POSC.png";
export default function Hero() {
  return (

    <div className="bg-[#c2d245]">
     <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
       <div className="py-24 sm:py-32">
   
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
    <div className="px-12 w-full"> {/* Full width padding */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Card */}
        <div className="py-32 px-16 bg-white shadow-lg rounded-xl flex flex-col w-full lg:w-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Admin
          </h1>
          <p className="text-3xl text-gray-800 mb-12">
            Real passion, and real growth for every footballer
          </p>
         
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            className="w-full h-auto rounded-xl shadow-md scale-105"
            src={POSC}
            alt="POSC logo"
          />
        </div>

      </div>
    </div>
    
  </section>
  </div>

    </section>

{/* DIV */}

</div>
  );
}