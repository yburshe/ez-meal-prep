import { text, integer, pgTable, decimal, serial } from "drizzle-orm/pg-core"

export const store = pgTable("store", {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    street_number: integer("street_number").notNull(),
    street_name: text("street_name").notNull(),
    city: text("city").notNull(),
    state: text("state").notNull(),
    zip: text("zip").notNull(),
})

export const ingredient = pgTable("ingredient", {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    store_id: integer("store_id").references(() => store.id, { onUpdate: 'cascade'}).notNull(),
    price: decimal("price").notNull(),
    servings_per_pack : text("servings_per_pack").notNull(),
    serving_size: text("serving_size").notNull(),
    calories: decimal("calories").notNull(),
    total_fat: decimal("total_fat").notNull(),
    total_carbs: decimal("total_carbs").notNull(),
    protein: decimal("protein").notNull(),
    fiber: decimal("fiber").notNull(),
    cholesterol: decimal("cholesterol").notNull(),
    sodium: decimal("sodium").notNull(),
})

export const recipe = pgTable("recipe", {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
})

export const recipe_ingredient = pgTable("recipe_ingredient", {
    recipe_id: integer("recipe_id").references(() => recipe.id, {onDelete: 'cascade'}).notNull(),
    ingredient_id: integer("ingredient_id").references(() => ingredient.id, {onDelete: 'cascade'}).notNull(),
    quantity: text("quantity").notNull(),
})