import { text, integer, pgTable, decimal, serial } from "drizzle-orm/pg-core"

export const store = pgTable("store", {
    store_id: serial("store_id").primaryKey().notNull(),
    store_name: text("store_name").notNull(),
    street_number: integer("street_number").notNull(),
    street_name: text("street_name").notNull(),
    city: text("city").notNull(),
    state: text("state").notNull(),
    zip: text("zip").notNull(),
})

export const ingredient = pgTable("ingredient", {
    ingredient_id: serial("ingredient_id").primaryKey().notNull(),
    ingredient_name: text("ingredient_name").notNull(),
    store_id: integer("store_id").references(() => store.store_id).notNull(),
    price: decimal("price").notNull(),
    servings_per_pack : text("servings_per_pack").notNull(),
    serving_size: text("serving_size").notNull(),
    calories: integer("calories").notNull(),
    total_fat: integer("total_fat").notNull(),
    total_carbs: integer("total_carbs").notNull(),
    protein: integer("protein").notNull(),
    fiber: integer("fiber").notNull(),
    cholesterol: integer("cholesterol").notNull(),
    sodium: integer("sodium").notNull(),
})

export const recipe = pgTable("recipe", {
    recipe_id: serial("recipe_id").primaryKey().notNull(),
    recipe_name: text("recipe_name").notNull(),
    cost: decimal("cost").notNull(),
    calories: decimal("calories").notNull(),
    total_fat: decimal("total_fat").notNull(),
    total_carbs: decimal("total_carbs").notNull(),
    protein: decimal("protein").notNull(),
    fiber: decimal("fiber").notNull(),
    cholesterol: decimal("cholesterol").notNull(),
    sodium: decimal("sodium").notNull(),
})

export const recipe_ingredient = pgTable("recipe_ingredient", {
    recipe_id: integer("recipe_id").references(() => recipe.recipe_id).notNull(),
    ingredient_id: integer("ingredient_id").references(() => ingredient.ingredient_id).notNull(),
    quantity: text("quantity").notNull(),
})

