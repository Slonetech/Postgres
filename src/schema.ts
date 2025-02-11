import { pgTable, serial, text, varchar, integer, timestamp, primaryKey } from 'drizzle-orm/pg-core';

// Define the `users` table
export const users = pgTable('users', {
  id: serial('id').primaryKey(), // Auto-incrementing primary key
  name: varchar('name', { length: 255 }).notNull(), // User's name
  email: varchar('email', { length: 255 }).notNull().unique(), // Unique email
  createdAt: timestamp('created_at').defaultNow(), // Timestamp for when the user was created
});

// Define the `posts` table
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(), // Auto-incrementing primary key
  title: varchar('title', { length: 255 }).notNull(), // Post title
  content: text('content').notNull(), // Post content
  userId: integer('user_id').references(() => users.id), // Foreign key to the `users` table
  createdAt: timestamp('created_at').defaultNow(), // Timestamp for when the post was created
});

// Export the schema
export const schema = { users, posts };