function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-green-50 text-center py-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Discover & Share Delicious Recipes
        </h2>
        <p className="text-gray-600 mb-6">
          Join our community of food lovers today.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
          Browse Recipes
        </button>
      </header>

      {/* Recipe Grid with mock data */}
      <main className="flex-grow px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Jollof Rice", "Egusi Soup", "Suya"].map((recipe, i) => (
          <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={`https://picsum.photos/400/200?random=${i}`} alt={recipe} />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe}</h3>
              <p className="text-gray-600 mb-4">A tasty Nigerian dish.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default HomePage;
