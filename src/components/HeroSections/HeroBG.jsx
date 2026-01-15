import Text from "./HeroText";
import Links from "./HeroLinks";

const HeroBG = () => {
  return (
    <div className="w-screen flex justify-center mt-3">

      <div className="w-[92%] h-180 mt-15  relative  rounded-4xl ">
        <img
          className="w-full h-full  object-cover  rounded-4xl"
          style={{ objectPosition: "50% 30%" }}
          src=".\public\hero-y0v9pdBt.png"
          alt="Picture Error 404"
        />
        
      </div >

     <div className="absolute inset-0 flex flex-col items-center justify-center"> 
      <Text />
        <Links /></div>

    </div>
  );
};

export default HeroBG;
