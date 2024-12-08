'use server'

import { db } from '@/app/db/db';
import { keycaps } from '@/app/schema';

export async function getKeycaps() {
  try {
    const result = await db.select().from(keycaps);
    return result;
  } catch (error) {
    console.error('Failed to fetch keycaps:', error);
    throw new Error('Failed to fetch keycaps');
  }
}

