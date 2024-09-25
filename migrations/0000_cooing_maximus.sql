CREATE TABLE IF NOT EXISTS "ingredient" (
	"ingredient_id" serial PRIMARY KEY NOT NULL,
	"ingredient_name" text,
	"store_name" text,
	"price" numeric,
	"servings_per_pack" text,
	"serving_size" text,
	"calories" integer,
	"total_fat" integer,
	"total_carbs" integer,
	"protein" integer,
	"fiber" integer,
	"cholesterol" integer,
	"sodium" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "recipe" (
	"recipe_id" serial PRIMARY KEY NOT NULL,
	"recipe_name" text,
	"cost" numeric,
	"calories" numeric,
	"total_fat" numeric,
	"total_carbs" numeric,
	"protein" numeric,
	"fiber" numeric,
	"cholesterol" numeric,
	"sodium" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "recipe_ingredient" (
	"recipe_id" integer,
	"ingredient_id" integer,
	"quantity" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "store" (
	"store_name" text PRIMARY KEY NOT NULL,
	"street_number" integer,
	"street_name" text,
	"city" text,
	"state" text,
	"zip" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_store_name_store_store_name_fk" FOREIGN KEY ("store_name") REFERENCES "public"."store"("store_name") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "recipe_ingredient_recipe_id_recipe_recipe_id_fk" FOREIGN KEY ("recipe_id") REFERENCES "public"."recipe"("recipe_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "recipe_ingredient" ADD CONSTRAINT "recipe_ingredient_ingredient_id_ingredient_ingredient_id_fk" FOREIGN KEY ("ingredient_id") REFERENCES "public"."ingredient"("ingredient_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
