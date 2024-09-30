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
  return stores.slice(1);
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
  const ingredients = await db
    .select({
      id: ingredient.id,
      name: ingredient.name,
      price: ingredient.price,
      servingsPerPack: ingredient.servings_per_pack,
      servingSize: ingredient.serving_size,
      calories: ingredient.calories,
      totalFat: ingredient.total_fat,
      totalCarbs: ingredient.total_carbs,
      protein: ingredient.protein,
      fiber: ingredient.fiber,
      cholesterol: ingredient.cholesterol,
      sodium: ingredient.sodium,
      storeName: store.name,
    })
    .from(ingredient)
    .innerJoin(store, eq(store.id, ingredient.store_id));

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
  const calories = formData.get("calories") as string;
  const totalFat = formData.get("totalFat") as string;
  const totalCarbs = formData.get("totalCarbs") as string;
  const protein = formData.get("protein") as string;
  const fiber = formData.get("fiber") as string;
  const cholesterol = formData.get("cholesterol") as string;
  const sodium = formData.get("sodium") as string;

  console.log(formData)

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
  const calories = formData.get("calories") as string;
  const totalFat = formData.get("totalFat") as string;
  const totalCarbs = formData.get("totalCarbs") as string;
  const protein = formData.get("protein") as string;
  const fiber = formData.get("fiber") as string;
  const cholesterol = formData.get("cholesterol") as string;
  const sodium = formData.get("sodium") as string;

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
      id: recipe.id,
      name: recipe.name,
      totalPrice: sql<number>`ROUND(SUM(${ingredient.price} / CAST(${ingredient.servings_per_pack} AS DECIMAL) * CAST(${recipe_ingredient.quantity} AS DECIMAL)), 2)`,
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
      id: recipe.id,
      name: recipe.name,
      totalPrice: sql<number>`ROUND(SUM(${ingredient.price} / CAST(${ingredient.servings_per_pack} AS DECIMAL) * CAST(${recipe_ingredient.quantity} AS DECIMAL)), 2)`,
      totalCalories: sql<number>`SUM(${ingredient.calories} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalFat: sql<number>`SUM(${ingredient.total_fat} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalCarbs: sql<number>`SUM(${ingredient.total_carbs} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalProtein: sql<number>`SUM(${ingredient.protein} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalFiber: sql<number>`SUM(${ingredient.fiber} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalCholesterol: sql<number>`SUM(${ingredient.cholesterol} * ${recipe_ingredient.quantity}::DECIMAL)`,
      totalSodium: sql<number>`SUM(${ingredient.sodium} * ${recipe_ingredient.quantity}::DECIMAL)`,
      ingredients: sql<
        Array<{ id: number; name: string; quantity: number; price: number }>
      >`
        JSON_AGG(
          JSON_BUILD_OBJECT(
            'id', ${ingredient.id},
            'name', ${ingredient.name},
            'quantity', CAST(${recipe_ingredient.quantity} AS DECIMAL),
            'price', ROUND(${ingredient.price} / CAST(${ingredient.servings_per_pack} AS DECIMAL) * CAST(${recipe_ingredient.quantity} AS DECIMAL), 2)
          )
        ) AS ingredients`,
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
  console.log(formData);
  const name = formData.get("name") as string;
  const ingredientIds = formData.getAll("ingredients").map(Number);
  const quantities = formData
    .getAll("quantity")
    .map(String)
    .filter((quantity) => quantity !== "");

  console.log(ingredientIds);
  console.log(quantities);

  const id = await db
    .insert(recipe)
    .values({ name })
    .returning({ insertedId: recipe.id });
  console.log(id);

  for (let i = 0; i < ingredientIds.length; i++) {
    await db.insert(recipe_ingredient).values({
      recipe_id: id[0].insertedId,
      ingredient_id: ingredientIds[i],
      quantity: quantities[i],
    });
  }

  revalidatePath("/recipes");
  redirect("/recipes");
}

export async function updateRecipe(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const ingredientIds = formData.getAll("ingredients").map(Number);
  const quantities = formData
    .getAll("quantity")
    .map(String)
    .filter((quantity) => quantity !== "");

  console.log(ingredientIds);
  console.log(quantities);

  await db.update(recipe).set({ name }).where(eq(recipe.id, id));

  await db.delete(recipe_ingredient).where(eq(recipe_ingredient.recipe_id, id));

  for (let i = 0; i < ingredientIds.length; i++) {
    await db.insert(recipe_ingredient).values({
      recipe_id: id,
      ingredient_id: ingredientIds[i],
      quantity: quantities[i], // Insert the quantity for each ingredient
    });
  }

  revalidatePath(`/recipes/${id}`);
  revalidatePath(`/recipes/edit/${id}`);
  revalidatePath("/recipes");
  redirect("/recipes");
}

export async function deleteRecipe(formData: FormData) {
  const id = Number(formData.get("id"));
  await db.delete(recipe).where(eq(recipe.id, id));

  revalidatePath("/recipes");
  redirect("/recipes");
}
