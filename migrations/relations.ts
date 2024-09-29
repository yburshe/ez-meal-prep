import { relations } from "drizzle-orm/relations";
import { store, ingredient, recipe, recipeIngredient } from "./schema";

export const ingredientRelations = relations(ingredient, ({one, many}) => ({
	store: one(store, {
		fields: [ingredient.storeId],
		references: [store.id]
	}),
	recipeIngredients: many(recipeIngredient),
}));

export const storeRelations = relations(store, ({many}) => ({
	ingredients: many(ingredient),
}));

export const recipeIngredientRelations = relations(recipeIngredient, ({one}) => ({
	recipe: one(recipe, {
		fields: [recipeIngredient.recipeId],
		references: [recipe.id]
	}),
	ingredient: one(ingredient, {
		fields: [recipeIngredient.ingredientId],
		references: [ingredient.id]
	}),
}));

export const recipeRelations = relations(recipe, ({many}) => ({
	recipeIngredients: many(recipeIngredient),
}));