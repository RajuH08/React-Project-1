const services = () => {
  return (
    <section className="w-full py-20 flex justify-center gap-20 items-center">
      <div className="w-130 h-113 p-4   flex items-start justify-evenly flex-col">
        <div>
          <button className="w-fit px-3.5 py-2 rounded-4xl font-sans border-2 border-solid border-black  cursor-pointer text-blsck  text-l">
            Services
          </button>
        </div>

        <div>
          <p className="text-3xl font-sans font-light text-balance">
            Explore out full range of coaching, training, and tennis
            experiences. From first serve to match point - we've got the right
            program for you
          </p>
        </div>

        <div>
          <button className="w-fit px-3.5 py-2 rounded-4xl font-sans bg-black cursor-pointer text-white hover:bg-black/30 hover:scale-[1.03] ransition-transform duration-500 active:scale-[.97] text-lg">
            Explore More <i class="ri-arrow-right-up-long-line"></i>
          </button>
        </div>
      </div>

      <div className="w-130 h-113 p-4 rounded-4xl bg-[url('public/b1bc2d2ecf3a945b9c325131f42336ac.jpg')] bg-cover bg-center flex flex-col items-start justify-between">
        <button className="px-4 py-1  rounded-4xl bg-white/35  backdrop-blur-md font-sans text-xl cursor-pointer text-white hover:bg-black/20 hover:scale-[1.02] ransition-transform duration-500 active:scale-[.97]">
          Training Programs
        </button>

        <p className="text-xl font-bold text-white">
          Programs designed for
          <br />
          all ages and abilties
        </p>
      </div>

      <div className="w-130 h-113  rounded-4xl flex flex-col items-start justify-evenly gap-10 ">
        <div className=" w-full h-70 relative ">
          <img
            className="rounded-4xl w-full h-full object-center object-cover"
            src="/public/824b931f74bd29acf218fb02c254f704.jpg"
            alt=""
          />

          <h4 className="absolute bottom-1.5 p-5 text-xl font-medium -mb-2 text-white">
            Hourly Court Rental
          </h4>
        </div>

        <div className="w-full h-44 flex flex-col gap-6">
          <h3 className="text-xl text-left text-balance font-light">
            Step into a space built for players - to grow, compete, and thrive
          </h3>

          <div className="w-full h-44 flex flex-row items-start gap-4">
            <button className="w-11  rounded-full border-2 border-solid border-black font-sans  cursor-pointer text-black hover:bg-black/30 hover:scale-[1.03] ransition-transform duration-500 active:scale-[.97] text-lg">
              <i class="ri-arrow-left-long-line"></i>
            </button>

            <button className="w-11  rounded-full border-2 border-solid border-black font-sans  cursor-pointer text-black hover:bg-black/30 hover:scale-[1.03] ransition-transform duration-500 active:scale-[.97] text-lg">
              <i class="ri-arrow-right-long-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
