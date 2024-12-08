import BlogGrid from "./BlogGrid";

const BlogSection = () => {
  const blogs = [
    {
      id: "1",
      image: "/assets/blog/blog1-img.png",
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2022 Is Back",
    },
    {
      id: "2",
      image: "/assets/blog/blog1-img.png",
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2023 Is Back",
    },
    {
      id: "3",
      image: "/assets/blog/blog1-img.png",
      date: "17 MAR",
      title: "Hac hendrerit mus nons semper suspendisse",
    },
    {
      id: "4",
      image: "/assets/blog/blog1-img.png",
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2023 Is Back",
    },
    {
      id: "5",
      image: "/assets/blog/blog2-img.png",
      date: "17 MAR",
      title: "Hac hendrerit mus nons semper suspendisse",
    },
    {
      id: "6",
      image: "/assets/blog/blog2-img.png",
      date: "20 APR",
      title: "The Covid-19 Epidemic in 2023 Is Back",
    },
    {
      id: "7",
      image: "/assets/blog/blog2-img.png",
      date: "17 MAR",
      title: "Hac hendrerit mus nons semper suspendisse",
    },
    {
      id: "8",
      image: "/assets/blog/blog2-img.png",
      date: "17 MAR",
      title: "Hac hendrerit mus nons semper suspendisse",
    },
  ];

  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Latest News</h2>
          <p className="text-gray-600 mb-8">Our Blog</p>

          {/* Blog Grid */}
          <BlogGrid blogs={blogs} />
        </div>
      </section>
    </>
  );
};

export default BlogSection;
