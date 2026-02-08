import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
