---
qid: ing_c248b72808__faang__local
question: 'Explain: Add a Schema to the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 497
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:12:44-05:00'
sources: []
---

**Clarify**  
You’re asked how to extend a Supabase‑backed GraphQL API with an additional database schema (e.g., `orders`). Confirm:  
* The project uses Supabase’s auto‑generated GraphQL endpoint.  
* You have admin access to the Postgres instance.  
* No existing migrations for `orders` exist.

**Approach**  
1. Create the new table(s) via SQL or a migration tool.  
2. Grant appropriate permissions on that schema to the public role (or custom roles).  
3. Re‑generate the GraphQL schema so Supabase picks up the changes.  
4. Verify queries/mutations work and update client types.

**Depth**  
```sql
-- 1. Create table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  total numeric NOT NULL,
  status text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- 2. Grant permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO public;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO public;

-- 3. Re‑generate GraphQL
-- Supabase auto‑refreshes on schema changes; if not, run:
SELECT supabase.refresh_graphql_schema();
```
*Complexity*: O(1) for DDL, GraphQL refresh is linear in number of tables (~O(n)).  
*Trade‑offs*: Granting to `public` is quick but less secure; create a dedicated role (`app_user`) if fine‑grained control is needed.

**Edge Cases**  
* Existing data constraints (foreign keys) may fail if referenced rows don’t exist.  
* Cached GraphQL schema in clients must be refreshed.  
* Permissions on new tables could inadvertently expose sensitive columns.

**Optimize & Communicate**  
Explain that Supabase’s auto‑schema sync eliminates manual code changes, keeping the API lean. If performance becomes a bottleneck, consider using `supabase.realtime` or custom resolvers for heavy joins. Summarize: create table → set perms → refresh GraphQL → test. This demonstrates clear problem understanding, systematic execution, and awareness of security/performance implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
