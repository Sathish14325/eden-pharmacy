import BlogCard from "./BlogCard";

const BlogGrid = ({ blogs }) => {
  return (
    <div className="grid px-10 md:px-0">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          id={index}
          image={blog.image}
          date={blog.date}
          title={blog.title}
        />
      ))}
    </div>
  );
};

export default BlogGrid;
