---
qid: ing_ce97096582__star__local
question: 'Explain: Recommendation engine & system use cases with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 350
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:22:16-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a new e‑commerce platform that needed real‑time product recommendations for millions of users. The legacy system was a relational store, and queries like “users who bought X also bought Y” were taking minutes to compute.

**Task:**  
I had to design a recommendation engine that could deliver personalized suggestions within 200 ms while handling over 5 million active users and 10 million products, and it needed to scale as catalog size grew.

**Action:**  
I chose Neo4j because its property graph model naturally represents user–product relationships. I ingested clickstream logs into a “purchased” relationship with weights for recency and frequency. Using Cypher’s pattern matching and the built‑in PageRank algorithm, I generated a “recommended” relationship on the fly. To keep latency low, I pre‑computed top 20 neighbors per user nightly and stored them in an in‑memory cache (Redis). For cold starts, I fell back to collaborative filtering with cosine similarity over sparse vectors stored in PostgreSQL. I also set up monitoring dashboards that tracked recommendation hit rates and latency.

**Result:**  
The new system cut query times from ~3 s to <200 ms and increased click‑through rate by 27% within the first month of launch. It handled a 150% growth in catalog size without additional hardware, proving the graph approach was both performant and scalable. I learned that choosing the right data model—here, an explicit graph—can dramatically simplify complex recommendation logic while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
