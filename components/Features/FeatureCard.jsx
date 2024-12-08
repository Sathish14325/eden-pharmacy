const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center md:px-4 rounded-lg static md:relative">
      <div className="bg-white p-5 rounded-full md:absolute -top-16">
        <img src={icon} alt={`${title} Icon`} className="w-8" loading="lazy" />
      </div>
      <h3 className="text-md font-bold mt-5">{title}</h3>
      <p className="text-xs mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
