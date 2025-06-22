import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.tsx', // or .tsx if you're using TSX
  dialect: 'postgresql',
  dbCredentials: {
    host: 'ep-sweet-violet-a8bc8leu-pooler.eastus2.azure.neon.tech',
    user: 'neondb_owner',
    password: 'npg_jKVu8O5XFcSH',
    database: 'AI_Agent',
    ssl: true,
  },
});
