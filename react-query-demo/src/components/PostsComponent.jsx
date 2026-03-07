import { useQuery } from "@tanstack/react-query";

// Separate fetch function required
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  // include error, isError, caching options
  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5,          // 5 minutes cache
    staleTime: 1000 * 60,              // 1 minute stale time
    refetchOnWindowFocus: false,       // don’t refetch when window regains focus
    keepPreviousData: true,            // keep old data while fetching new
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      {/* Refetch button for data update */}
      <button
        onClick={() => refetch()}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 md:w-auto w-full"
      >
        Refetch Posts
      </button>

      {/* Cached data loads instantly when revisiting */}
      <ul className="space-y-2">
        {data.map((post) => (
          <li key={post.id} className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
