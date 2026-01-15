const HeroLinks = () => {
  return (
    <div className=" absolute w-[90%] bottom-60 flex items-center justify-between mb-1.5">
      <div className="flex gap-2.5   ">
        <p className="text-sm font-medium text-white font-sans">
          Train with real professionals.
          <br />
          Get the real result.
        </p>

        <div className=" flex items-center  bg-white/30 backdrop-blur-md px-2 py-1 rounded-full ">
          <img
            src=".\public\photo-1639064978688-7e94766fc63a.avif"
            className="w-8 h-8 rounded-full border-2 border-white ml-0 object-top object-cover"
          />
          <img
            src=".\public\photo-1738495725091-d1807db62f99.avif"
            className="w-8 h-8 rounded-full border-2 border-white -ml-3 object-top object-cover"
          />
          <img
            src=".\public\premium_photo-1661888465650-38bb4503de06.avif"
            className="w-8 h-8 rounded-full border-2 border-white -ml-3 object-top object-cover"
          />
        </div>
      </div>

      <div className="flex gap-2.5 font-medium font-sans text-lg text-white ">
        <a href="blank" target="blank">
          Instagram <i class="ri-arrow-right-up-long-line"></i>
        </a>
        <a href="blank" target="blank">
          Facebook <i class="ri-arrow-right-up-long-line"></i>
        </a>
        <a href="blank" target="blank">
          Tik Tok <i class="ri-arrow-right-up-long-line"></i>
        </a>
      </div>
    </div>
  );
};

export default HeroLinks;
