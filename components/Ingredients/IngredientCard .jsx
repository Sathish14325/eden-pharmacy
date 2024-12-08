const IngredientCard = ({ title, description, image, isWide }) => {
  return (
    <div
      className={`bg-blue-50 p-4 rounded-lg shadow-md relative overflow-hidden ${
        isWide ? "col-span-2" : "col-span-1"
      }`}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute bottom-0 right-0 object-fill"
        loading="lazy"
      />

      {/* Content */}
      <h4 className="text-xl font-bold text-[#2D3F59] mb-2">{title}</h4>
      <p className="text-gray-600 mb-8">{description}</p>

      {/* Link */}
      <a
        href="#"
        className="text-[#003569] font-semibold underline hover:text-blue-900"
      >
        SEE MORE
      </a>
    </div>
  );
};

export default IngredientCard;
