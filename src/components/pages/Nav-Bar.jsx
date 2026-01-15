const NavBar = () => {
  return (
    <nav className="w-screen h-24 p-4 flex  items-center justify-between text-black ">
      <div className="ml-1.5 font-mono text-2xl font-extrabold">
        <h1>Horizon Courts</h1>
      </div>

      <div className=" -ml-1.5 flex gap-15 text-lg cursor-pointer ">
        <a
          className="px-2.5 py-1 font-semibold rounded-full hover:bg-black/30 hover:scale-[1.07] ransition-transform duration-500 active:scale-[.97]"
          href="blank"
          target="blank"
        >
          About Us
        </a>
        <a
          className="px-2.5 py-1 font-semibold rounded-full hover:bg-black/30 hover:scale-[1.07] ransition-transform duration-500 active:scale-[.97]"
          href="blank"
          target="blank"
        >
          Services
        </a>
        <a
          className="px-2.5 py-1 font-semibold rounded-full hover:bg-black/30 hover:scale-[1.07] ransition-transform duration-500 active:scale-[.97]"
          href="blank"
          target="blank"
        >
          Coaches
        </a>
        <a
          className="px-2.5 py-1 font-semibold rounded-full hover:bg-black/30 hover:scale-[1.07] ransition-transform duration-500 active:scale-[.97]"
          href="blank"
          target="blank"
        >
          Events
        </a>
        <a
          className="px-2.5 py-1 font-semibold rounded-full hover:bg-black/30 hover:scale-[1.07] ransition-transform duration-500 active:scale-[.97]"
          href="blank"
          target="blank"
        >
          Contacts
        </a>
      </div>

      <div className="mr-1.5 ">
        <button className="px-3.5 py-2 rounded-full font-sans bg-black cursor-pointer text-white hover:bg-black/30 hover:scale-[1.02] ransition-transform duration-500 active:scale-[.97] text-lg">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
