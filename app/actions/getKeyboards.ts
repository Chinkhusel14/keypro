'use server'

import { db } from '@/app/db/db';
import { keyboards } from '@/app/schema';

export async function getKeyboards() {
  try {
    const result = await db.select().from(keyboards);
    return result;
  } catch (error) {
    console.error('Failed to fetch keyboards:', error);
    throw new Error('Failed to fetch keyboards');
  }
}

