---
qid: ing_bddcb01e7c__star__local
question: 'Explain: Indexing — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:40-05:00'
sources: []
---

**Situation** – At my previous company we launched a new recommendation engine that required real‑time scoring on 30 million user profiles stored in a PostgreSQL cluster. Within two weeks the query latency jumped from 120 ms to over 1.2 s, and our SLA for the API was at risk.

**Task** – I had to redesign the data layer so that profile lookups (by user_id and by demographic attributes) stayed under 200 ms while keeping write throughput high enough for nightly batch updates.

**Action** – First I profiled queries with pg_stat_statements, finding that most hits were on a composite key of `user_id` + `country`. I created a multicolumn B‑tree index and then added a partial GIN index on the JSONB column holding interests to speed up keyword matches. To avoid write contention I switched to PostgreSQL’s “concurrently” index creation, scheduled during low traffic windows. For hot data I introduced a Redis cache layer that stored precomputed embeddings, refreshing only every 12 hours. Finally, I added partitioning by signup year to keep each segment small and enabled parallel query execution.

**Result** – Query latency dropped to an average of 85 ms, with 95th‑percentile under 150 ms. The system now handles 5× the traffic without additional hardware, and we reduced database maintenance windows from hours to minutes. I learned that thoughtful indexing combined with caching and partitioning can turn a scaling bottleneck into a robust, high‑throughput solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
