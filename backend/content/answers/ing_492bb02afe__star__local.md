---
qid: ing_492bb02afe__star__local
question: 'Explain: Track scores — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 390
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:05-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time product recommendation engine on top of Elastic Stack. The catalog had over 12 million items and each user query needed to surface the most relevant products within 300 ms, but our initial search returned results sorted by default _score_, which was heavily biased toward term frequency and ignored business metrics like click‑through rate.

**Task:**  
I had to redesign the ranking so that relevance combined Elasticsearch’s BM25 score with a custom “engagement weight” while still keeping the query under 300 ms. The goal was to increase conversion by at least 15 % without overloading the cluster.

**Action:**  
I introduced a *track_scores* approach: first, I executed a multi‑field match that returned top‑N hits with their raw _score_. Then, in a post‑processing step using the Elasticsearch Scripted Metric aggregation, I calculated an engagement score (e.g., `log(clicks + 1) * recency_factor`). I merged these two scores into a single composite metric (`0.7*bm25 + 0.3*engagement`) and used the `sort` clause with a script to order by this value. To keep latency low, I limited the initial hit set to 200 items and cached the engagement data in Redis for quick lookup.

**Result:**  
The new ranking lifted average CTR from 4.2 % to 5.9 % (≈41 % lift) and increased revenue per session by 12 %. The query latency stayed at ~280 ms, well under our SLA, and the solution was easily maintainable because the scoring logic lived in a single scripted field rather than scattered across multiple services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
