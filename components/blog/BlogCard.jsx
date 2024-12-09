import Image from "next/image";

const BlogCard = ({ image, date, title }) => {
  return (
    <div
      className={`grid-item relative shadow-md group text-center`} // Dynamic height
    >
      {/* Blog Image */}
      <Image
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        width={100}
        height={100}
      />

      {/* Date Badge */}
      <div className="absolute top-4 -left-3 bg-[#003569] text-white text-sm font-semibold px-3 py-1 rounded-r-lg shadow-md">
        {date}
      </div>

      {/* Title Overlay */}
      <div className="absolute top-8 p-4">
        <h3 className="text-white text-sm font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
