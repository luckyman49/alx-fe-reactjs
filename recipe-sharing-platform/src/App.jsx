import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );


  <div className="min-h-screen flex flex-col">
    {/* Navbar */}
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-600">RecipeShare</h1>
      <div className="space-x-6">
        <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Recipes</a>
        <a href="#" className="text-gray-700 hover:text-green-600">About</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
      </div>
      <button className="bg-green-600 text-white px-4 py-2 rounded">Sign In</button>
    </nav>

    {/* Hero */}
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

    {/* Recipe Grid */}
    <main className="flex-grow px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
          <img src={`https://picsum.photos/400/200?random=${i}`} alt="Recipe" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Recipe Title {i}</h3>
            <p className="text-gray-600 mb-4">Short description of the recipe.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              View Recipe
            </button>
          </div>
        </div>
      ))}
    </main>

    {/* Footer */}
    <footer className="bg-gray-100 text-center py-6">
      <p className="text-gray-600">© 2026 RecipeShare. All rights reserved.</p>
    </footer>
  </div>
  );
}

export default App;
