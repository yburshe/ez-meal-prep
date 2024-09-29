"use server";

import { db } from "@/db/db";
import { ingredient, recipe, recipe_ingredient, store } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//Store actions

//Getters
export async function getStores() {
  const stores = await db.select().from(store);
  return stores;
}

export async function getStoreDetails(id: number) {
  const storeDetails = await db
    .select()
    .from(store)
    .where(eq(store.id, id))
    .limit(1);
  return storeDetails;
}

//Setters
export async function createStore(formData: FormData) {
  const name = formData.get("name") as string;
  const streetNumber = Number(formData.get("streetNumber"));
  const streetName = formData.get("streetName") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;

  await db.insert(store).values({
    name,
    street_number: streetNumber,
    street_name: streetName,
    city,
    state,
    zip,
  });

  revalidatePath("/stores");
  redirect("/stores");
}

export async function updateStore(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const streetNumber = Number(formData.get("streetNumber"));
  const streetName = formData.get("streetName") as string;
  const city = formData.get("city") as string;
  const state = formData.get("state") as string;
  const zip = formData.get("zip") as string;

  await db
    .update(store)
    .set({
      name,
      street_number: streetNumber,
      street_name: streetName,
      city,
      state,
      zip,
    })
    .where(eq(store.id, id));

  revalidatePath(`/stores/${id}`);
  revalidatePath(`/stores/edit/${id}`);
  revalidatePath("/stores");
  redirect("/stores");
}

export async function deleteStore(formData: FormData) {
  const unassignedStoreId = 0;
  const id = Number(formData.get("id"));

  await db
    .update(ingredient)
    .set({ store_id: unassignedStoreId })
    .where(eq(ingredient.store_id, id));

  await db.delete(store).where(eq(store.id, id));

  revalidatePath("/stores");
  redirect("/stores");
}

//Ingredient actions

//Getters
export async function getIngredients() {
  const ingredients = await db.select().from(ingredient);
  return ingredients;
}

export async function getIngredientDetails(id: number) {
  const ingredientDetails = await db
    .select()
    .from(ingredient)
    .where(eq(ingredient.id, id))
    .limit(1);
  return ingredientDetails;
}

//Setters
export async function createIngredient(formData: FormData) {
  const name = formData.get("name") as string;
  const storeId = Number(formData.get("storeId"));
  const price = formData.get("price") as string;
  const servingsPerPack = formData.get("servingsPerPack") as string;
  const servingSize = formData.get("servingSize") as string;
  const calories = Number(formData.get("calories"));
  const totalFat = Number(formData.get("totalFat"));
  const totalCarbs = Number(formData.get("totalCarbs"));
  const protein = Number(formData.get("protein"));
  const fiber = Number(formData.get("fiber"));
  const cholesterol = Number(formData.get("cholesterol"));
  const sodium = Number(formData.get("sodium"));

  await db.insert(ingredient).values({
    name,
    store_id: storeId,
    price,
    servings_per_pack: servingsPerPack,
    serving_size: servingSize,
    calories,
    total_fat: totalFat,
    total_carbs: totalCarbs,
    protein,
    fiber,
    cholesterol,
    sodium,
  });

  revalidatePath("/ingredients");
  redirect("/ingredients");
}

export async function updateIngredient(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const storeId = Number(formData.get("storeId"));
  const price = formData.get("price") as string;
  const servingsPerPack = formData.get("servingsPerPack") as string;
  const servingSize = formData.get("servingSize") as string;
  const calories = Number(formData.get("calories"));
  const totalFat = Number(formData.get("totalFat"));
  const totalCarbs = Number(formData.get("totalCarbs"));
  const protein = Number(formData.get("protein"));
  const fiber = Number(formData.get("fiber"));
  const cholesterol = Number(formData.get("cholesterol"));
  const sodium = Number(formData.get("sodium"));

  await db
    .update(ingredient)
    .set({
      name,
      store_id: storeId,
      price,
      servings_per_pack: servingsPerPack,
      serving_size: servingSize,
      calories,
      total_fat: totalFat,
      total_carbs: totalCarbs,
      protein,
      fiber,
      cholesterol,
      sodium,
    })
    .where(eq(ingredient.id, id));

  revalidatePath(`/ingredients/${id}`);
  revalidatePath(`/ingredients/edit/${id}`);
  revalidatePath("/ingredients");
  redirect("/ingredients");
}

export async function deleteIngredient(formData: FormData) {
  const id = Number(formData.get("id"));

  await db.delete(ingredient).where(eq(ingredient.id, id));

  revalidatePath("/ingredients");
  redirect("/ingredients");
}

//Recipe actions

//Getters

export async function getRecipes() {
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

  return recipes;
}

export async function getRecipeDetails(id: number) {
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
    .where(eq(recipe.id, id));

  return recipeDetails;
}

//Setters
export async function createRecipe(formData: FormData) {
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

  await db.insert(recipe_ingredient).values(recipeIngredients);

  revalidatePath("/recipes");
  redirect("/recipes");
}

export async function updateRecipe(formData: FormData) {
  const recipe_id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const ingredients = formData.getAll("ingredients") as string[];
  const quantities = formData.getAll("quantities") as string[];

  await db.update(recipe).set({ name }).where(eq(recipe.id, recipe_id));

  await db
    .delete(recipe_ingredient)
    .where(eq(recipe_ingredient.recipe_id, recipe_id));

  const recipeIngredients = ingredients.map((ingredient, index) => ({
    recipe_id,
    ingredient_id: Number(ingredient),
    quantity: quantities[index],
  }));

  await db.insert(recipe_ingredient).values(recipeIngredients);

  revalidatePath(`/recipes/${recipe_id}`);
  revalidatePath(`/recipes/edit/${recipe_id}`);
  revalidatePath("/recipes");
  redirect("/recipes");
}

export async function deleteRecipe(formData: FormData) {
  const id = Number(formData.get("id"));
  await db.delete(recipe).where(eq(recipe.id, id));

  revalidatePath("/recipes");
  redirect("/recipes");
}
