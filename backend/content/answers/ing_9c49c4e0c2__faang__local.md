---
qid: ing_9c49c4e0c2__faang__local
question: 'Explain: Remove a Table from the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 464
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:47:18-05:00'
sources: []
---

**Clarify**  
The task is to delete an entire table (i.e., its schema and data) via Supabase’s GraphQL API.  
Assumptions:  
- You have admin‑level JWT or service key with `delete` permissions on the target table.  
- The GraphQL endpoint supports mutation operations that map directly to SQL DDL commands.  

**Approach**  
1. Identify the GraphQL mutation that deletes a table (Supabase exposes a `schemaDropTable` mutation).  
2. Build the mutation string, passing the table name and optionally the schema (`public`).  
3. Execute it through an authenticated HTTP POST to `/graphql`.  
4. Handle errors: permission denied, non‑existent table, or network issues.

**Depth**  
```graphql
mutation DropTable($name: String!, $schema: String!) {
  schemaDropTable(name: $name, schema: $schema) {
    name
    schema
    status
  }
}
```
Variables:
```json
{
  "name": "orders",
  "schema": "public"
}
```
Send with a bearer token.  
*Complexity*: O(1) network round‑trip; server side the drop is `DROP TABLE` → O(log n) on catalog lookups.  
*Trade‑offs*: Direct DDL via GraphQL bypasses row‑level security but may expose more surface if misused.

**Edge Cases**  
- Table does not exist → returns an error message; handle gracefully.  
- Dependent objects (views, foreign keys) cause `DROP TABLE` to fail unless `CASCADE` is used—Supabase’s mutation can accept a `cascade: true` flag.  
- Permission denied → 401/403; must ensure service key usage.

**Optimize & Communicate**  
For production, wrap the mutation in a helper that retries on transient failures and logs the outcome. Explain to interviewers that we chose Supabase’s built‑in `schemaDropTable` because it abstracts raw SQL, reduces boilerplate, and leverages existing auth flows—aligning with FAANG principles of minimal friction and maximal safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
