import { useParams } from "react-router";
import { blogs } from "../data/blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h1 className="text-white text-center mt-20">Blog not found</h1>;
  }

  return (
    <div className="bg-black text-white px-6 py-20 max-w-4xl mx-auto">
      <img src={blog.image} alt="" className="rounded-xl mb-6" />
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-4 text-gray-400">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;