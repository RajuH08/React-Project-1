const AboutPercentages = () => {
  return (
    <div className="   flex flex-col items-center justify-center">
      <div className="font-light font-sans text-5xl">
        <h2>A few more faces about us in numbers.</h2>
      </div>

      <div className="w-full mt-20 flex items-center justify-evenly text-center">
        <div>
          <h1 className="text-4xl font-bold font-sans ">12000+</h1>
          <p className="text-xl font-light text-gray-600 font-sans">
            Hours of play annually
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold font-sans ">89%</h1>
          <p className="text-xl font-light text-gray-600 font-sans">
            Player Renttion Rate
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold font-sans ">1,200+</h1>
          <p className="text-xl font-light text-gray-600 font-sans">
            Active Members
          </p>
        </div>

        <div>
          <h1 className="text-4xl font-bold font-sans ">125+</h1>
          <p className="text-xl font-light text-gray-600 font-sans">
            Annual Tournaments
          </p>
        </div>
      </div>

      <hr className="w-full border-black mt-20 " />
    </div>
  );
};

export default AboutPercentages;
