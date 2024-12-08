import IngredientCard from "./IngredientCard ";

const IngredientsSection = () => {
  const ingredients = [
    {
      title: "Magnesium",
      description: "Boost energy and support muscle function",
      image: "/assets/ingredients/ing-1.png",
    },
    {
      title: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      image: "/assets/ingredients/ing-2.png",
    },
    {
      title: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      image: "/assets/ingredients/ing-3.png",
    },
    {
      title: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      image: "/assets/ingredients/ing-4.png",
    },
    {
      title: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      image: "/assets/ingredients/ing-5.png",
    },
  ];

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Ingredient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center mb-12">
            <h2 className="text-blue-900 text-xl font-semibold uppercase">
              Ingredients
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mt-2">
              Better Ingredients
            </h3>
            <p className="text-gray-600 mt-4">
              Only the best when you choose products offered on our platform -
              high-quality ingredients for high-quality products!
            </p>
          </div>
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={index}
              title={ingredient.title}
              description={ingredient.description}
              image={ingredient.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
