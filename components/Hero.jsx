const Hero = () => {
  return (
    <main className="bg-[#E2F5FB] py-10 mx-5 relative">
      <div className="">
        <h1 className="text-[#003569] text-5xl md:text-8xl font-bold text-center block">
          Essential Vitamins
        </h1>
        {/* 1st part */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-3 py-6 p-5">
          <div className="text-md text-gray-600 mt-2">
            <p>Online Medical Supplies</p>
            <p className="text-lg font-medium text-[#17414F]">
              Get Your Vitamins & Minerals
            </p>
            <button className="mt-4 px-6 py-2 bg-[#17414F] text-white rounded-lg">
              EXPLORE
            </button>
          </div>
          {/* 2nd part */}
          <div>
            <img
              src="/assets/hero/tablet.jpg"
              alt="tablet"
              className="w-96"
              loading="lazy"
            />
          </div>
          {/* 3rd part */}
          <div className="flex flex-col gap-3 p-5">
            <div className="flex gap-3">
              <img
                src="/assets/hero/vitamin.svg"
                alt="vitamin"
                className="w-14"
                loading="lazy"
              />
              <div>
                <h4 className="font-bold text-[#17414F]">Vitamins</h4>
                <p className="text-xs">
                  Increased Vitamins and minerals in your diet
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="/assets/hero/weight.png"
                alt="vitamin"
                className="w-14"
                loading="lazy"
              />
              <div>
                <h4 className="font-bold text-[#17414F]">Weight Loss</h4>
                <p className="text-xs">
                  {" "}
                  Weight Loss Find scientifically proven solutions
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img
                src="/assets/hero/foods.png"
                alt="vitamin"
                className="w-14"
                loading="lazy"
              />
              <div>
                <h4 className="font-bold text-[#17414F]">Functional Foods</h4>
                <p className="text-xs">
                  Functional Foods From protein powers to baby formula
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
