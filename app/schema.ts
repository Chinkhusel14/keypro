import { pgTable, serial, varchar, integer, json } from 'drizzle-orm/pg-core';

export const keyboards = pgTable('keyboards', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  images: json('images').$type<string[]>().notNull(),
  type: varchar('type', { length: 255 }).notNull(),
  features: json('features').$type<string[]>().notNull(),
  price: integer('price').notNull(),
  colors: json('colors').$type<{ name: string; value: string }[]>().notNull(),
  stock: integer('stock').notNull(),
});

