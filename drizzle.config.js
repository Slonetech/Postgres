import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_8idEJQD2umXC@ep-winter-bird-a8fbheur-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
  }
});