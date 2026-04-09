import { useParams } from "react-router";
import { blogs } from "../data/blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <div className="pt-32 text-center text-2xl">Blog not found!</div>;

  return (
    <div className="pt-32 container mx-auto px-6 max-w-4xl">
      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-3xl mb-10" />
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <p className="text-gray-400 leading-relaxed text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;