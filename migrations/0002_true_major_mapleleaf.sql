ALTER TABLE "keyboards" RENAME COLUMN "image" TO "images";--> statement-breakpoint
ALTER TABLE "keyboards" ALTER COLUMN "images" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "keyboards" ADD COLUMN "type" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "keyboards" ADD COLUMN "features" json NOT NULL;--> statement-breakpoint
ALTER TABLE "keyboards" ADD COLUMN "colors" json NOT NULL;--> statement-breakpoint
ALTER TABLE "keyboards" ADD COLUMN "stock" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "keyboards" DROP COLUMN IF EXISTS "switch_type";--> statement-breakpoint
ALTER TABLE "keyboards" DROP COLUMN IF EXISTS "layout";