---
qid: ing_c21c3fe348__star__local
question: 'Explain: Index by retention period — How many shards should I have in my
  Elasticsearch cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 348
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:58-05:00'
sources: []
---

**Situation:** In a recent project for a SaaS analytics platform, we had to store user event data that needed to be retained for exactly two years before automatic deletion. Our existing Elasticsearch cluster was experiencing slow roll‑ups and high query latency because the index size grew too large and the number of shards per node exceeded optimal limits.

**Task:** I had to redesign the indexing strategy to balance retention requirements, query performance, and cluster stability—specifically deciding how many shards each daily index should contain while ensuring we didn’t overload any node.

**Action:** I applied the “shard‑by‑retention” rule: first, calculate total data volume per day (≈ 2 GB). Then divide by the target shard size of 50 GB, yielding ~0.04 shards—rounded up to one shard per index for simplicity. To avoid node overload, I limited each index to a single primary shard and used replica count of 1 for high availability. I also set an ILM policy that deletes indices after 730 days, automating retention. Finally, I monitored cluster health with X-Pack monitoring, confirming CPU and heap usage stayed below 70%.

**Result:** Index rollover became instant (< 5 ms), query latency dropped from 2.3 s to 0.4 s for time‑range aggregations, and node disk usage remained stable at ~80% capacity. I learned that a simple shard‑by‑retention calculation combined with ILM can dramatically simplify maintenance while preserving performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
