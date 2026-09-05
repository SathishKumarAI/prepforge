---
qid: ing_a843304ed2__star__local
question: 'Explain: Project Reference (PROJECT_REF) — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 289
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:35-05:00'
sources: []
---

**Situation:**  
In my last role, our analytics team needed a unified way to pull user engagement metrics from multiple micro‑services into a single dashboard. The existing REST endpoints were slow and duplicated logic across services.

**Task:**  
I was tasked with designing a lightweight GraphQL layer that could aggregate data from Supabase (our PostgreSQL backend) and the legacy services, while keeping latency under 200 ms for interactive queries.

**Action:**  
I built a Node.js GraphQL server using Apollo Server. For each query I wrote resolver functions that leveraged Supabase’s JavaScript client to fetch relational data with a single `SELECT` statement, avoiding N+1 problems. To keep the schema simple, I introduced a `PROJECT_REF` type that normalizes project identifiers across services. I also implemented caching via Redis for hot queries and added request batching so multiple frontend calls could be served in one round‑trip. Unit tests ensured query correctness and performance benchmarks confirmed sub‑200 ms response times.

**Result:**  
The new GraphQL endpoint cut dashboard load time by 45%, reduced server CPU usage by 30%, and eliminated duplicated code across services. I learned how to balance schema design, caching strategies, and real‑world latency constraints when integrating Supabase with GraphQL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
