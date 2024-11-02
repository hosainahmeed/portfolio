import { useState } from "react";
import { useEffect } from "react";
import SectionHeader from "../../../../Component/Utils/SectionHeader";
import { Button } from "antd";

function BlogResourceSection() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div id="blog" className="flex items-center flex-col mb-12">
      <SectionHeader
      head={'There is recent blogs'}
      ></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-28">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="card shadow-none bg-white rounded-none glass"
          >
            <figure className="h-80 md:h-96">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-xl">{blog.title}</h2>
              <p className="text-gray-600">{blog.publish_date}</p>
              <p className="text-gray-800">{blog.content}</p>
              <div className="card-actions justify-end mt-4">
                <button className="flex items-center gap-2 text-blue-500 hover:underline">
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button>See all Blogs</Button>
    </div>
  );
}

export default BlogResourceSection;
