---
qid: ing_8281a642d7__star__local
question: 'Explain: Nested sorting examples — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 335
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:25-05:00'
sources: []
---

**Situation** – In my last role as a data engineer at a fintech startup, our product team needed to surface the most relevant loan offers for users in real time. The search index was built on Elasticsearch and returned thousands of matches per query, but the default ranking was based solely on term frequency, which didn’t reflect business priorities like interest rates or credit limits.

**Task** – I had to implement a nested sorting strategy that would first order results by “risk score” (a numeric field inside a nested “offer_details” object) and then by “interest_rate” within those risk groups, all while keeping latency under 200 ms for a live dashboard.

**Action** – I used Elasticsearch’s `nested` query to access the `offer_details` sub‑documents. In the sort clause I specified two levels: first `risk_score` ascending (lower is better) and second `interest_rate` descending so users saw lower rates on top. I also added a custom script score that weighted recent user activity, and tuned the `search_type` to `dfs_query_then_fetch` for more accurate term frequencies. Finally, I monitored query performance with the `_profile` API and adjusted shard size to keep response times within SLA.

**Result** – The new ranking reduced average click‑through time by 35 % and increased conversion on high‑risk offers by 12 %. I learned how nested sorting can be combined with script scoring to balance business logic against Elasticsearch’s core capabilities, and the importance of profiling to maintain real‑time responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
