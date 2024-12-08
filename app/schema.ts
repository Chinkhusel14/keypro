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

export const keycaps = pgTable('keycaps', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  images: json('images').$type<string[]>().notNull(),
  material: varchar('material', { length: 50 }).notNull(),
  profile: varchar('profile', { length: 50 }).notNull(),
  price: integer('price').notNull(),
  description: varchar('description', { length: 1000 }),
  compatibility: json('compatibility').$type<string[]>().notNull(),
  stock: integer('stock').notNull(),
});

