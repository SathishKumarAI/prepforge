---
qid: ing_393c164d5d__star__local
question: 'Explain: SQL — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 368
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:06-05:00'
sources: []
---

**Situation** – In my last role I was tasked with revamping the comment engine for a high‑traffic news site that had been using a simple flat table. The platform was hitting 3 M comments per day, and read latency spiked to 350 ms during peak cycles, causing user churn.

**Task** – My goal was to design an SQL‑backed live comment system that could deliver sub‑200 ms reads, support real‑time threading, and scale horizontally without sacrificing consistency or incurring massive storage costs.

**Action** – I first normalized the schema: a `comments` table with `id`, `post_id`, `parent_id`, `content`, `created_at`; an index on `(post_id, created_at)` for fast chronological fetches; and a materialized view `comment_counts(post_id, count)` refreshed every minute. For live updates I leveraged PostgreSQL’s LISTEN/NOTIFY to push new rows to the front‑end via websockets. To avoid N+1 problems, I used a recursive CTE with depth limits for thread rendering. Finally, I introduced sharding by `post_id` and used read replicas to spread query load.

**Result** – Read latency dropped from 350 ms to 95 ms during peak traffic, while write throughput remained > 10 k ops/sec. The new system handled a 120% traffic spike without additional infrastructure. I learned that thoughtful indexing, sharding, and leveraging database‑native pub/sub can turn an otherwise brittle comment feed into a resilient live service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
