import { db } from "@/db/drizzle";
import { ingredient, recipe, recipe_ingredient } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const recipeDetails = await db
    .select({
      recipeId: recipe.id,
      recipeName: recipe.name,
      totalCalories: sql<number>`SUM(${ingredient.calories} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalFat: sql<number>`SUM(${ingredient.total_fat} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalCarbs: sql<number>`SUM(${ingredient.total_carbs} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalProtein: sql<number>`SUM(${ingredient.protein} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalFiber: sql<number>`SUM(${ingredient.fiber} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalCholesterol: sql<number>`SUM(${ingredient.cholesterol} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalSodium: sql<number>`SUM(${ingredient.sodium} * ${recipe_ingredient.quantity}::DECIMAL)`,
    })
    .from(recipe)
    .fullJoin(recipe_ingredient, eq(recipe.id, recipe_ingredient.recipe_id))
    .fullJoin(ingredient, eq(ingredient.id, recipe_ingredient.ingredient_id))
    .groupBy(recipe.id)
    .where(eq(recipe.id, params.id));

  return Response.json(recipeDetails);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  const formData = await request.formData();
  const recipe_id = params.id;

  const name = formData.get("name") as string;
  const ingredients = formData.getAll("ingredients") as string[];
  const quantities = formData.getAll("quantities") as string[];

  console.log(ingredients, quantities);

  await db.update(recipe).set({ name }).where(eq(recipe.id, recipe_id));

  await db
    .delete(recipe_ingredient)
    .where(eq(recipe_ingredient.recipe_id, recipe_id));

  const recipeIngredients = ingredients.map((ingredient, index) => ({
    recipe_id,
    ingredient_id: Number(ingredient),
    quantity: quantities[index],
  }));

  const result = await db.insert(recipe_ingredient).values(recipeIngredients);

  return Response.json({ result });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const result = await db.delete(recipe).where(eq(recipe.id, params.id));

  return Response.json(result);
}
