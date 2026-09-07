---
qid: ing_89450b7c56__aws__local
question: When do you need approximate nearest neighbour search instead of exact search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 368
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:36:14-05:00'
sources: []
---

**When I first built a recommendation engine for an e‑commerce platform, we were stuck between latency and accuracy.**  
*Situation:* We needed to surface the top‑10 similar products in under **50 ms** for every page view (≈1 M requests/day).  
*Task:* Replace our exact k‑NN (O(n) per query) with an approximate method that still delivered 95 %+ relevance.  
*Action:* I introduced a locality‑sensitive hashing (LSH) layer using **Amazon Kinesis Data Streams** to stream feature vectors into an **ElastiCache for Redis** cluster, which held pre‑computed hash buckets. Queries hit the cache, returning candidate neighbors in ~10 ms; we then re‑ranked with a lightweight cosine similarity on the fly.  
*Result:* Latency dropped from 350 ms to 48 ms (≈7× faster), cost fell by **$12k/month**, and user engagement increased by **3.4%** due to quicker responses. The trade‑off—slight recall loss—was acceptable because we measured precision‑recall curves and kept it above 0.92.  

This demonstrates *Customer Obsession* (fast, relevant results) and *Dive Deep* (profiling latency vs. accuracy). A bar‑raiser would note my ownership of the end‑to‑end pipeline, quantitative impact, and iteration after a failed initial prototype that over‑optimized for exactness at the expense of performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
