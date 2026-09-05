---
qid: ing_e75be09bfe__star__local
question: 'Explain: Search API — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 404
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:11:15-05:00'
sources: []
---

**Situation** – When I joined the marketplace team at a fast‑growing travel platform, our search page was delivering stale results: the click‑through rate had dropped from 12 % to 8 %, and latency hit 2 s on peak traffic. The product asked for an end‑to‑end redesign that could handle millions of daily searches while still allowing real‑time filtering and personalization.

**Task** – I was tasked with building a scalable Search API: ingest listings, rank by relevance, support faceted filters (price, amenities, host rating), and return results in under 500 ms for 95 % of requests, all while keeping cost per query below $0.005.

**Action** – First, I modeled the data as a distributed inverted index using Elasticsearch, enriched with a custom scoring function that combined cosine similarity on title/description, proximity to user’s location, and dynamic popularity signals (last‑minute booking spikes). To keep latency low, I introduced a two‑stage pipeline: a fast “candidate generator” that pulls top 200 hits via pre‑computed Lucene queries, then a lightweight “reranker” in Python using a gradient‑boosted tree (XGBoost) to re‑score the top 20 candidates. For personalization, we injected user embeddings from our recommendation engine into the reranker as additional features. Finally, I deployed the API behind an AWS Lambda layer with autoscaling and used CloudWatch for real‑time monitoring.

**Result** – After launch, search latency dropped to 350 ms (95th percentile), click‑through rate rebounded to 13 %, and revenue from bookings via search increased by 18 % in three months. I learned that marrying proven IR techniques with lightweight ML reranking can deliver both speed and relevance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
