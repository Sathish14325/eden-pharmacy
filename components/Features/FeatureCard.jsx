import Image from "next/image";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center md:px-4 rounded-lg static md:relative">
      <div className="bg-white p-5 rounded-full md:absolute -top-16">
        <Image src={icon} alt={`${title} Icon`} width={32} height={20} />
      </div>
      <h3 className="text-md font-bold mt-5">{title}</h3>
      <p className="text-xs mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
