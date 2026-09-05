---
qid: ing_d09e50f9c2__star__local
question: 'Explain: Interview Follow-Up Questions — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 335
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:29-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our customer support chat bot was stuck on pre‑built FAQ responses and couldn’t fetch up‑to‑date policy documents in real time. The SLA for response time was 3 seconds, but the bot often took 8–10 seconds because it queried the entire knowledge base each time.

**Task** – I had to redesign the search layer so that the bot could retrieve relevant documents within 2 seconds while still supporting natural language queries and handling high concurrency (≈1,200 requests/min).

**Action** – I implemented a hybrid retrieval pipeline: first, a lightweight BM25 index on document titles and tags in Elasticsearch for fast filtering; second, an exact‑match lookup using a PostgreSQL full‑text search on the body text. For latency reduction, I added a Redis cache layer keyed by query hash and used async Go workers to parallelize the two queries. I also tuned the Elasticsearch shard count and introduced a “warm” index strategy for hot documents.

**Result** – The average response time dropped from 8 seconds to 1.6 seconds, meeting our SLA with headroom. User satisfaction scores rose by 18%, and we saw a 25% reduction in bot‑to‑human handoffs. I learned that combining fast filtering with precise full‑text search, backed by caching, is essential for scalable real‑time AI search systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
