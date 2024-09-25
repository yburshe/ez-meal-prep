import { text, integer, pgTable, decimal, serial } from "drizzle-orm/pg-core"

export const store = pgTable("store", {
    store_name: text("store_name").primaryKey(),
    street_number: integer("street_number"),
    street_name: text("street_name"),
    city: text("city"),
    state: text("state"),
    zip: text("zip"),
})

export const ingredient = pgTable("ingredient", {
    ingredient_id: serial("ingredient_id").primaryKey(),
    ingredient_name: text("ingredient_name"),
    store_name: text("store_name").references(() => store.store_name),
    price: decimal("price"),
    servings_per_pack : text("servings_per_pack"),
    serving_size: text("serving_size"),
    calories: integer("calories"),
    total_fat: integer("total_fat"),
    total_carbs: integer("total_carbs"),
    protein: integer("protein"),
    fiber: integer("fiber"),
    cholesterol: integer("cholesterol"),
    sodium: integer("sodium"),
})

export const recipe = pgTable("recipe", {
    recipe_id: serial("recipe_id").primaryKey(),
    recipe_name: text("recipe_name"),
    cost: decimal("cost"),
    calories: decimal("calories"),
    total_fat: decimal("total_fat"),
    total_carbs: decimal("total_carbs"),
    protein: decimal("protein"),
    fiber: decimal("fiber"),
    cholesterol: decimal("cholesterol"),
    sodium: decimal("sodium"),
})

export const recipe_ingredient = pgTable("recipe_ingredient", {
    recipe_id: integer("recipe_id").references(() => recipe.recipe_id),
    ingredient_id: integer("ingredient_id").references(() => ingredient.ingredient_id),
    quantity: text("quantity"),
})

