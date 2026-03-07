

const TopBar = () => {
  return (
    <div className="w-full bg-[#0E1A2B] py-2 px-4 text-center fixed top-0 z-50">
      <p
        className="text-sm md:text-base text-white"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Limited spots available each month for{" "}
        <span className="text-orange-500 font-semibold uppercase">
          USA
        </span>{" "}
        roofers.
      </p>
    </div>
  );
};

export default TopBar;