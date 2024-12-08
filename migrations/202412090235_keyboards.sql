import { sql } from 'drizzle-orm';

export async function up(db) {
  await sql`
    ALTER TABLE keyboards
    ADD COLUMN IF NOT EXISTS images JSONB,
    ADD COLUMN IF NOT EXISTS type VARCHAR(255),
    ADD COLUMN IF NOT EXISTS features JSONB,
    ADD COLUMN IF NOT EXISTS colors JSONB,
    ADD COLUMN IF NOT EXISTS stock INTEGER;
  `;
}

export async function down(db) {
  await sql`
    ALTER TABLE keyboards
    DROP COLUMN IF EXISTS images,
    DROP COLUMN IF EXISTS type,
    DROP COLUMN IF EXISTS features,
    DROP COLUMN IF EXISTS colors,
    DROP COLUMN IF EXISTS stock;
  `;
}

