import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      title: "Clinically Studied",
      description: "All products have undergone lab and safety tests.",
      icon: "/assets/features/features1.png",
    },
    {
      title: "Vegetarian Friendly",
      description: "A wide selection of vegetarian products.",
      icon: "/assets/features/features2.png",
    },
    {
      title: "Made In India",
      description: "Explore health products made in India.",
      icon: "/assets/features/features3.png",
    },
    {
      title: "Free Shipping",
      description: "Delivered to your door with no shipping costs.",
      icon: "/assets/features/features4.png",
    },
    {
      title: "No Risk",
      description: "Safe products within the use-by date.",
      icon: "/assets/features/features5.png",
    },
    {
      title: "GMO Free",
      description: "No modified products or derivatives.",
      icon: "/assets/features/features6.png",
    },
  ];

  return (
    <section className="bg-[#17414F] text-white mx-14 rounded-3xl p-5 md:px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
