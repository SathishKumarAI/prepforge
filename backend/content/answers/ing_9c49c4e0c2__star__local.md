---
qid: ing_9c49c4e0c2__star__local
question: 'Explain: Remove a Table from the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 356
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:44:30-05:00'
sources: []
---

**Situation:**  
At my previous startup we had an analytics service built on Supabase. One of the tables, `temp_user_sessions`, was a legacy staging area that had been flagged for deletion after our data pipeline moved to a new event store. The API layer exposed GraphQL queries and mutations, so any change required careful handling to avoid breaking downstream dashboards.

**Task:**  
I needed to remove `temp_user_sessions` from the public GraphQL schema while preserving existing permissions, ensuring no downtime, and keeping audit logs for compliance.

**Action:**  
First, I used Supabase’s Dashboard to drop the table in the database. Then, via the Supabase CLI, I regenerated the GraphQL schema (`supabase gen types graphql --lang ts`) and pushed the updated schema back to the server with `supabase db push`. To avoid breaking client code, I created a deprecation notice in the GraphQL SDL:  
```graphql
type Query {
  tempUserSessions: [TempUserSession] @deprecated(reason: "Use eventStore instead")
}
```
I added a migration script that migrated any remaining data to `event_store` and updated the permissions JSON to remove access for public roles. Finally, I ran automated integration tests against the new schema and performed a staged rollout.

**Result:**  
The table was removed with zero downtime; dashboards automatically switched to the new event store within 30 minutes. Query latency dropped by 12% due to fewer joins. I learned how Supabase’s GraphQL layer can be versioned safely and the importance of deprecation annotations for smooth transitions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
