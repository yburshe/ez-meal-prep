CREATE TABLE IF NOT EXISTS "ingredient" (
	"ingredient_id" serial PRIMARY KEY NOT NULL,
	"ingredient_name" text NOT NULL,
	"store_id" integer NOT NULL,
	"price" numeric NOT NULL,
	"servings_per_pack" text NOT NULL,
	"serving_size" text NOT NULL,
	"calories" integer NOT NULL,
	"total_fat" integer NOT NULL,
	"total_carbs" integer NOT NULL,
	"protein" integer NOT NULL,
	"fiber" integer NOT NULL,
	"cholesterol" integer NOT NULL,
	"sodium" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "recipe" (
	"recipe_id" serial PRIMARY KEY NOT NULL,
	"recipe_name" text NOT NULL,
	"cost" numeric NOT NULL,
	"calories" numeric NOT NULL,
	"total_fat" numeric NOT NULL,
	"total_carbs" numeric NOT NULL,
	"protein" numeric NOT NULL,
	"fiber" numeric NOT NULL,
	"cholesterol" numeric NOT NULL,
	"sodium" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "recipe_ingredient" (
	"recipe_id" integer NOT NULL,
	"ingredient_id" integer NOT NULL,
	"quantity" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "store" (
	"store_id" serial PRIMARY KEY NOT NULL,
	"store_name" text NOT NULL,
	"street_number" integer NOT NULL,
	"street_name" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zip" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "ingredient" ADD CONSTRAINT "ingredient_store_id_store_store_id_fk" FOREIGN KEY ("store_id") REFERENCES "public"."store"("store_id") ON DELETE no action ON UPDATE no action;
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
