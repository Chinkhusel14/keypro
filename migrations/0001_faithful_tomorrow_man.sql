CREATE TABLE IF NOT EXISTS "keyboards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"image" varchar(255) NOT NULL,
	"switch_type" varchar(255) NOT NULL,
	"layout" varchar(50) NOT NULL,
	"price" integer NOT NULL
);
--> statement-breakpoint
DROP TABLE "posts_table";--> statement-breakpoint
DROP TABLE "users_table";