import { getRecipes } from "../actions";
import Card from "../components/Card";
import { NewButton } from "../components/Buttons";

export default async function Recipes() {
  const recipes = await getRecipes();
  return (
    <div>
      <NewButton type="recipes" />
      <div className="mb-4 p-2">
        <h1 className="text-2xl font-bold">Recipes</h1>
      </div>

      <ul className="flex flex-wrap gap-4">
        {recipes.map((recipe) => (
          <Card href={`/recipes/${recipe.id}`} key={recipe.id}>
            <h2 className="text-lg font-semibold border-b dark:border-neutral-600 pb-2 mb-2">
              {recipe.name}
            </h2>
            <p className="text-xl font-semibold mb-2">
              ${recipe.totalPrice}
            </p>
            <table className="mt-2">
              <thead>
                <tr>
                  <th className="border dark:border-neutral-600 p-2">
                    Calories
                  </th>
                  <th className="border dark:border-neutral-600 p-2">
                    Total Fat
                  </th>
                  <th className="border dark:border-neutral-600 p-2">
                    Total Carbs
                  </th>
                  <th className="border dark:border-neutral-600 p-2">
                    Protein
                  </th>
                  <th className="border dark:border-neutral-600 p-2">Fiber</th>
                  <th className="border dark:border-neutral-600 p-2">Chol</th>
                  <th className="border dark:border-neutral-600 p-2">Sodium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border dark:border-neutral-600 p-2">
                    {recipe.totalCalories}
                  </td>
                  <td className="border dark:border-neutral-600 p-2">
                    {recipe.totalFat}
                  </td>
                  <td className="border dark:border-neutral-600 p-2">
                    {recipe.totalCarbs}
                  </td>
                  <td className="border dark:border-neutral-600 p-2">
                    {recipe.totalProtein}
                  </td>
                  <td className="border dark:border-neutral-600 p-2">
                    {recipe.totalFiber}
                  </td>
                  <td className="border dark:border-neutral-600 p-2">
                    {recipe.totalCholesterol}
                  </td>
                  <td className="border dark:border-neutral-600 p-2">
                    {recipe.totalSodium}
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        ))}
      </ul>
    </div>
  );
}
