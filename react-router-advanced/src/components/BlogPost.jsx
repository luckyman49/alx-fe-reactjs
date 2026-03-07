import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Blog Post {id}</h1>
      <p>This is a dynamic blog post page.</p>
    </div>
  );
}

export default BlogPost;
