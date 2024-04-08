const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/src/assets/images/hero-bg.png")',
        backgroundColor: '#1262af',
        // backgroundColor: 'linear-gradient(45deg, #1262af 48%, #299bd8 80%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backroundBlendMode: 'multiply',
        // height: '84vh',
        width: '100%',
      }}
      className="flex justify-center items-center py-[70px] md:py-44 px-6 md:px-10 lg:px-28"
      // className="bg-hero bg-cover h-full w-full bg-gradient-to-r from-[#114F8B] to-[#2A9AD7] bg-blend-multiply"
    >
      <div className="w-full flex flex-col gap-11">
        <div className="text-white text-center">
          <h1 className="text-[41px] md:text-[41px] lg:text-[61px] font-extrabold">
            Let’s explore & travel the world
          </h1>
          <p className="text-lg lg:text-[24px] font-normal">
            Find the best destinations and the most popular stays!
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 bg-white text-black px-5 py-6 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-lg md:text-xl font-bold sm:uppercase">
              Search Flights
            </p>
            <div className="flex gap-2 sm:gap-4">
              <label htmlFor="type">
                <input
                  type="radio"
                  name="type"
                  id="type"
                  className="mr-1 sm:mr-2"
                  checked
                  readOnly
                />
                Return
              </label>
              <label htmlFor="type">
                <input
                  type="radio"
                  name="type"
                  id="type"
                  className="mr-1 sm:mr-2"
                />
                One-way
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-8 lg:grid-cols-7">
              <div className="input-group md:col-span-2 md:col-start-1">
                <label htmlFor="departure" className="label">
                  Departure
                </label>
                <div className="">
                  <input
                    type="text"
                    name="departure"
                    id="departure"
                    autoComplete="address-level2"
                    className="input"
                    placeholder="Departure"
                    defaultValue="Singapore (SIN)"
                  />
                </div>
              </div>

              <div className="input-group md:col-span-2">
                <label htmlFor="arrival" className="label">
                  Arrival
                </label>
                <div className="">
                  <input
                    type="text"
                    name="arrival"
                    id="arrival"
                    autoComplete="address-level1"
                    className="input"
                    placeholder="Arrival"
                    defaultValue="Los Angeles (LA)"
                  />
                </div>
              </div>

              <div className="input-group md:col-span-2">
                <label htmlFor="date" className="label">
                  Date
                </label>
                <div className="">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    defaultValue="29/04/2024"
                    autoComplete=""
                    className="input bg-transparent"
                  />
                </div>
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <button className="btn btn-orange w-full lg:uppercase">
                  Search Flight
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
