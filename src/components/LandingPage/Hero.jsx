const Hero = () => {
  return (
    <div className="mb-5 grid h-80 grid-cols-2">
      <div>
        <p className="py-8 text-5xl font-black text-orange-950">
          Enjoy your <span className="text-amber-500">coffee</span> before your
          activity
        </p>
        <p className="py-5 text-gray-500">
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </p>
        <div className="flex cursor-pointer items-center gap-5 font-medium">
          <p className="rounded-full bg-amber-950 px-5 py-2 text-white">
            Order Now
          </p>
          <p className="cursor-pointer text-amber-500">More menu</p>
        </div>
      </div>
      <div className="relative justify-self-end">
        <div>
          <div
            className="flex flex-col items-center rounded-full"
            id="brown-bg"
          >
            <p className="absolute -left-6 top-8 rounded-full bg-white px-12 py-3 text-xl font-bold text-amber-950">
              Cappuccino
            </p>
            <p className="absolute right-0 top-16 rounded-full bg-white px-12 py-3 text-xl font-bold text-amber-950">
              4.8
            </p>
            <img
              src="/hero-coffe-bg.png"
              alt=""
              className="absolute bottom-24 left-10"
            />
            <img src="/hero-coffe.png" alt="coffe" className="" />
            <p className="absolute bottom-16 left-3 rounded-full bg-white px-12 py-3 text-xl font-bold text-amber-950">
              18k
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
