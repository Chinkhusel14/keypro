'use server'

import { db } from '@/app/db/db';
import { keyboards } from '@/app/schema';
import { eq } from 'drizzle-orm';

export async function getKeyboardById(id: number) {
  try {
    const result = await db.select().from(keyboards).where(eq(keyboards.id, id)).limit(1);
    return result[0] || null;
  } catch (error) {
    console.error('Failed to fetch keyboard:', error);
    throw new Error('Failed to fetch keyboard');
  }
}

