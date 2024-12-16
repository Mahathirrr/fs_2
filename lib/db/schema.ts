import { sql } from '@vercel/postgres';
import { z } from 'zod';

export const courseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  instructorId: z.string(),
  status: z.enum(['draft', 'published', 'archived']),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const lessonSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  title: z.string(),
  description: z.string(),
  videoUrl: z.string(),
  duration: z.number(),
  position: z.number(),
  isPublished: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const enrollmentSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  userId: z.string(),
  status: z.enum(['active', 'completed', 'refunded']),
  progress: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Course = z.infer<typeof courseSchema>;
export type Lesson = z.infer<typeof lessonSchema>;
export type Enrollment = z.infer<typeof enrollmentSchema>;