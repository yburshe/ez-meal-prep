import { db } from "@/db/drizzle";
import { recipe, recipe_ingredient, ingredient } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  const recipes = await db
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
    .leftJoin(recipe_ingredient, eq(recipe.id, recipe_ingredient.recipe_id))
    .leftJoin(ingredient, eq(ingredient.id, recipe_ingredient.ingredient_id))
    .groupBy(recipe.id);

  return Response.json({ recipes });
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const ingredients = formData.getAll("ingredients") as string[];
  const quantities = formData.getAll("quantities") as string[];

  const insertRecipe = await db
    .insert(recipe)
    .values({
      name,
    })
    .returning();

  const recipe_id = insertRecipe[0].id;

  const recipeIngredients = ingredients.map((ingredient, index) => ({
    recipe_id,
    ingredient_id: Number(ingredients[index]),
    quantity: quantities[index],
  }));

  const result = await db.insert(recipe_ingredient).values(recipeIngredients);

  return Response.json({ result });
}
