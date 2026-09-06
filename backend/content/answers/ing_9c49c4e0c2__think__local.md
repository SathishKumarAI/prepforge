---
qid: ing_9c49c4e0c2__think__local
question: 'Explain: Remove a Table from the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 671
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:24:23-05:00'
sources: []
---

### 1. Clarify the goal and assumptions  
- **Goal**: Describe *how* you delete an entire table using Supabase’s GraphQL API (not SQL or REST).  
- **Assumptions**:  
  - You have a Supabase project with the GraphQL endpoint enabled.  
  - Your user is authenticated with sufficient role permissions (`schema_editor` or higher).  
  - The table you want to drop already exists in your schema.

### 2. Mental model / framework  
- **GraphQL operations**: `mutation` for data modification, `query` for retrieval.  
- **Supabase GraphQL schema generation**: Every table becomes a *type* and exposes CRUD mutations (`insert`, `update`, `delete`).  
- **Dropping a table** is not a standard CRUD mutation; it’s an *DDL* operation that the API can expose via a custom mutation or by using the built‑in `dropTable` helper.

### 3. Step‑by‑step reasoning  

1. **Check the GraphQL schema**:  
   ```graphql
   {
     __schema {
       mutations { name }
     }
   }
   ```
   Look for a mutation named something like `dropTable`. If it’s missing, you’ll need to enable the “DDL” feature or use the REST endpoint instead.

2. **Use the `dropTable` mutation** (if available):  
   ```graphql
   mutation {
     dropTable(name: "my_table") {
       ok
       message
     }
   }
   ```
   - `name`: string of the table to delete.
   - The response typically contains a boolean `ok` and an optional `message`.

3. **Handle permissions**:  
   Ensure the authenticated user’s role has the right privileges in Supabase’s `auth` settings (`schema_editor` or custom policy).

4. **Error handling**:  
   If the table doesn’t exist, you’ll receive an error message; handle it gracefully in your client.

5. **Confirm deletion**:  
   Run a query against `__type(name:"my_table")` to verify that the type no longer exists.

### 4. Common traps & wrong turns  

- **Using the REST endpoint by mistake**: The GraphQL API doesn’t support `DELETE /rest/v1/{table}`; it’s a separate HTTP verb.
- **Assuming all CRUD mutations exist for DDL**: Supabase may not expose `dropTable` unless you enable the “DDL” mutation in settings.
- **Permission errors**: Forgetting to grant the role `schema_editor` leads to 403 responses.
- **Case sensitivity**: Table names are case‑sensitive; use the exact name.

### 5. Sanity‑check & communication  

- Verify that the mutation returns `{ok:true}` and that subsequent schema introspection shows no table type.  
- Communicate clearly: “To drop a table via Supabase’s GraphQL API, send a `dropTable` mutation with the table name; ensure your role has editor privileges; check the response for success.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
