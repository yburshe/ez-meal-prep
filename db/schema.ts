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
    calories: integer("calories").notNull(),
    total_fat: integer("total_fat").notNull(),
    total_carbs: integer("total_carbs").notNull(),
    protein: integer("protein").notNull(),
    fiber: integer("fiber").notNull(),
    cholesterol: integer("cholesterol").notNull(),
    sodium: integer("sodium").notNull(),
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
