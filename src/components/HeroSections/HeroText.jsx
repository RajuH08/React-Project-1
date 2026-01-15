const HeroText = () => {
  return (
    <div className=" h-60 mt-3 flex gap-8 justify-between flex-col text-center absolute  top-50  ">
      <h1 className="text-6xl font-medium font-mono text-white">
        Unleash Your Inner Champion Today.
        <br /> All In One Place.
      </h1>

      <h4 className="text-2xl font-light font-mono text-white">
        Join the ultimate tennis experience - where passion meets performance.
        <br /> and every swing bring you loser to victory
      </h4>

      <button className="mx-auto px-6 py-3.5 rounded-full font-sans bg-gray-900 cursor-pointer text-white hover:bg-black/60 hover:scale-[1.02] ransition-transform duration-500 active:scale-[.97] text-2xl">
        Start your own journey
      </button>
    </div>
  );
};

export default HeroText;
