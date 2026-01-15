const AboutText = () => {
  return (
    <div className="w-full  flex items-center justify-between  p-12 mt-5">
      <div className="w-[50%]">
        <button className="w-fit px-3.5 py-2 rounded-full font-sans bg-black cursor-pointer text-white hover:bg-black/30 hover:scale-[1.03] ransition-transform duration-500 active:scale-[.97] text-lg">
          About Horizon
        </button>
      </div>

      <div className="w-[50%] text-end">
        <p className="  font-medium font-serif text-2xl text-left text-balance ">
          At Horizon,we don't just play tennis - we live it. Since 2021, out
          club has been a home for players of all players of all levels, from
          eager beginners to seasoned pros.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
