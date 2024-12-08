'use server'

import { db } from '@/app/db/db';
import { keycaps } from '@/app/schema';
import { eq } from 'drizzle-orm';

export async function getKeycapById(id: number) {
  try {
    const result = await db.select().from(keycaps).where(eq(keycaps.id, id)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error('Failed to fetch keycap:', error);
    throw new Error('Failed to fetch keycap');
  }
}

