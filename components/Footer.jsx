import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#17414F] text-white py-10">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex flex-col justify-around md:flex-row gap-6 text-center">
        {/* Phone Number */}
        <div className="bg-[#215D72] flex items-center gap-4 px-6 py-4 rounded-xl shadow-lg">
          <Image
            src="/assets/footer/phone.svg"
            alt="Phone Icon"
            height={40}
            width={40}
          />
          <div>
            <h4 className="font-semibold text-lg">Phone Number</h4>
            <p className="text-sm">+974 3118 1843</p>
          </div>
        </div>

        {/* Email Address */}
        <div className="bg-[#215D72] flex items-center gap-4 px-6 py-4 rounded-xl shadow-lg">
          <Image
            src="/assets/footer/mail.svg"
            alt="Email Icon"
            width={40}
            height={40}
          />
          <div>
            <h4 className="font-semibold text-lg">Email Address</h4>
            <p className="text-sm">Elbritchqr@gmail.com</p>
          </div>
        </div>

        {/* Office Location */}
        <div className="bg-[#215D72] flex items-center gap-4 px-6 py-4 rounded-xl shadow-lg">
          <Image
            src="/assets/footer/location.svg"
            alt="Location Icon"
            width={40}
            height={40}
          />
          <div>
            <h4 className="font-semibold text-lg">Office Location</h4>
            <p className="text-sm">Ambassador Street, Zone 61</p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="container mx-auto px-4 py-10 flex flex-col justify-evenly items-start gap-3 md:flex-row">
        <Image
          src="/assets/brand.png"
          alt="Elbrit Logo"
          className="mx-auto mb-4"
          width={200}
          height={70}
        />
        <p className="text-sm max-w-xl mx-auto">
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-5 text-start">
        <p className="text-sm">
          © Elbrit Life Sciences Private Limited, C20, BKC, G Block, Mumbai
          400051
        </p>
      </div>
    </footer>
  );
};

export default Footer;
