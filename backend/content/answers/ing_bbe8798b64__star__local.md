---
qid: ing_bbe8798b64__star__local
question: 'Explain: Consistency Approaches — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 327
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:11-05:00'
sources: []
---

**Situation:** In my last role I was building a recommendation engine that served personalized content in real time for an e‑commerce platform with over 5 million daily users. The latency budget was 150 ms per request, but our model inference pipeline took about 400 ms.

**Task:** I needed to reduce response times while keeping the recommendation scores consistent across user sessions and ensuring stale data didn’t mislead decisions.

**Action:** I introduced a two‑layer caching strategy. First, a local in‑process LRU cache stored precomputed score vectors for the top 10 k items per user, refreshed every 30 minutes via a background job that re‑runs the model on incremental data. Second, we added a distributed Redis cluster with a time‑to‑live of 5 minutes to hold intermediate feature embeddings and partial inference results; this allowed us to share warm caches across microservices and avoid redundant recomputation. We implemented cache‑invalidation hooks: whenever user behavior triggered a retraining event, the system published an invalidation message that cleared affected keys immediately.

**Result:** The average request latency dropped from 400 ms to 110 ms, improving conversion rates by 3%. The consistency trade‑off—slight staleness within 5 minutes—was acceptable for our business metric and we achieved a balance between freshness and performance. I learned that careful cache granularity and invalidation policies are critical in ML system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
