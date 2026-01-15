const AboutCards = () => {
  return (
    <section className="w-full py-20 flex justify-center gap-20 items-center">
      
      <div className="w-130 h-113 p-4 rounded-4xl bg-blue-950 flex items-start justify-evenly flex-col">
        <div className="w-16 h-16">
          <img
            className="w-full h-full"
            src="/public/tennis-court.png"
            alt=""
          />
        </div>

        <div>
          <p className="text-3xl font-sans font-light text-white">
            Professsional hard courts{" "}
            <span className="text-gray-400">
              with tournaments-grade lighting & climate control - play in
            </span>{" "}
            perfect conditions, in any season.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="font-bold text-6xl text-cyan-500">
            <i class="ri-toggle-line"> </i>
          </div>

          <div>
            <p className="font-extralight text-2xl font-sans text-gray-400">
              Game Mode
            </p>
          </div>
        </div>
      </div>

      <div className="w-130 h-113 rounded-4xl bg-[url('public/fb20fb559082de0d28333da2b24fab06.jpg')] bg-cover bg-center flex items-center justify-center">
        <button className="px-10 pcyan-400/30 rounded-4xl  backdrop-blur-md font-sans text-2xl cursor-pointer text-white hover:bg-black/20 hover:scale-[1.02] ransition-transform duration-500 active:scale-[.97]">
          Private & Group Lessons
        </button>
      </div>

      <div className="w-130 h-113 p-4 bg-gray-100 rounded-4xl flex flex-col items-start justify-evenly ">
        <div className="flex flex-col gap-2 -mt-15">
          <h1 className="text-7xl font-light">100+</h1>

          <h4 className="text-xl font-medium">Pro Coaches</h4>

          <p className="text-sm text-balance text-gray-500">
            Certified prfessionals ready to boost your game from first serve to
            tournament level.
          </p>
        </div>

        <div className="w-full flex flex-col gap-3 ">
          <div className=" flex items-center  justify-between">
            <h2 className="text-2xl font-medium  ">Beginner</h2>
            <div className="flex items-center gap-1 ">
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
            </div>
            <h2 className="text-2xl font-medium  ">55</h2>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium  ">Intermediate</h2>
            <div className="flex items-center mr-15 gap-1 ">
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
            </div>
            <h2 className="text-2xl font-medium  ">40</h2>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium  ">Advanced</h2>

            <div className="flex items-center mr-12 gap-1 ">
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
              <div class="w-4 h-4 rounded-full bg-cyan-400"></div>
            </div>
            <h2 className="text-2xl font-medium  ">35</h2>
          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutCards;
