
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
            Soccer Player Analyzer
          </h1>
          <p className="text-3xl text-gray-800 mb-12">
            Real passion, and real growth for every footballer
          </p>
          <button className="w-full py-6 text-lg font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition">
            Sign in
          </button>
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
    <div className="bg-[#323b1a]">
     <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
       <div className="py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="items-center text-4xl font-semibold text-pretty text-white sm:text-5xl">About SPA!</h2>
      <p className="mt-2 text-lg/8 text-gray-300">Learn how to grow your business with our expert advice.</p>
    </div>

   <div className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
    
      <article className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
            
            <img
              className="w-full mb-6"
              src="https://d33wubrfki0l68/Users/elsyfuentes/Documents/SE 300/SPA/SPA/client/src/assets/POSC.png.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
              alt=""
            />

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Coaches
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Coaches
            </p>

      </article>
    
      <article className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
          <img
              className="w-full mb-6"
              src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
              alt=""
            />

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Players
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Coaches
            </p>
      </article>
      <article className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center">
          <img
              className="w-full mb-6"
              src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
              alt=""
            />

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Parents
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Coaches
            </p>
      </article>
    </div>
  </div>
</div>
</div>
    </section>
</div>
</div>
  );
}