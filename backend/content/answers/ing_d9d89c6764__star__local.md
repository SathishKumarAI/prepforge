---
qid: ing_d9d89c6764__star__local
question: Why Not One Vector DB Per Tenant? — Multi Tenant Saas
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 348
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:55-05:00'
sources: []
---

**Situation:**  
At a cloud‑based analytics startup, we were launching a new AI feature that let each customer search over their own documents using embeddings stored in a vector database. The product was expected to support thousands of tenants on the same infrastructure.

**Task:**  
I had to design the data layer so it could scale cost‑effectively while keeping tenant isolation and meeting latency targets (under 200 ms for 95% of queries).

**Action:**  
Instead of spinning up a dedicated vector DB instance per tenant, I evaluated a shared‑cluster approach. We partitioned vectors by a hashed tenant ID, used PostgreSQL + pgvector for metadata, and added a lightweight cache layer (Redis) keyed by tenant+query. To mitigate contention we sharded the cluster across two physical nodes and employed row‑level security to enforce isolation. For tenants with extremely high throughput we offered an optional “dedicated pool” of shards. We also set up automated monitoring that flagged any shard reaching >80% capacity for pre‑emptive scaling.

**Result:**  
The shared‑cluster model cut infrastructure costs by 60 % compared to per‑tenant instances, while maintaining sub‑200 ms latency for 99 % of queries. Tenants with high traffic still received dedicated resources, and we avoided the operational overhead of managing thousands of isolated databases. I learned that thoughtful sharding, combined with tenant‑aware security controls, can deliver both scalability and isolation without the complexity of one DB per tenant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
