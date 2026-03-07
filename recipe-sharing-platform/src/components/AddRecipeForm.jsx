import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // <-- required

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = "Recipe title is required.";
    }
    if (!ingredients) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients.split(",").map((i) => i.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please enter at least two ingredients.";
      }
    }
    if (!steps) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors); // <-- required
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split(".").map((s) => s.trim()).filter(Boolean),
    };

    console.log("Recipe submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
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
          {errors.title && <p className="text-red-600">{errors.title}</p>}
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
          {errors.ingredients && (
            <p className="text-red-600">{errors.ingredients}</p>
          )}
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
          {errors.steps && <p className="text-red-600">{errors.steps}</p>}
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
