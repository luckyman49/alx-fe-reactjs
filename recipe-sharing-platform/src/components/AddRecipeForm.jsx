import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: all fields must be filled
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    // Validation: at least 2 ingredients
    const ingredientList = ingredients.split(",").map((i) => i.trim());
    if (ingredientList.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    // If validation passes
    setError("");
    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps: steps.split(".").map((s) => s.trim()).filter(Boolean),
    };

    console.log("Recipe submitted:", newRecipe);
    alert("Recipe submitted successfully!");
    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold text-green-600 mb-6">
          Add New Recipe
        </h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Title */}
        <label className="block mb-4">
          <span className="text-gray-700">Recipe Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2 focus:ring focus:ring-green-300"
            placeholder="Enter recipe title"
          />
        </label>

        {/* Ingredients */}
        <label className="block mb-4">
          <span className="text-gray-700">Ingredients (comma separated)</span>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2 focus:ring focus:ring-green-300"
            placeholder="e.g. Rice, Tomatoes, Pepper"
            rows="3"
          />
        </label>

        {/* Steps */}
        <label className="block mb-4">
          <span className="text-gray-700">Preparation Steps</span>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2 focus:ring focus:ring-green-300"
            placeholder="Write steps separated by periods"
            rows="4"
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
