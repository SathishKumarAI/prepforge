---
qid: ing_4cc98cc774__star__local
question: 'Explain: Caching strategies — Caching Inmemory Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 317
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:57-05:00'
sources: []
---

**Situation:**  
When we launched the real‑time recommendation engine for our e‑commerce app, latency spikes hit 350 ms on peak traffic days, pushing the user‑experience score below SLA and causing cart abandonment.

**Task:**  
I had to cut response time under 120 ms while keeping data freshness within 5 seconds, all without adding a costly external cache layer.

**Action:**  
I implemented an in‑memory caching strategy using Redis‑compatible memory structures embedded directly in the ML inference service. First, I profiled the feature extraction pipeline and identified that 70 % of the features were static per user session. I stored those as a hash map keyed by user ID, refreshing every 5 seconds via a background worker. For dynamic signals (e.g., real‑time click streams), I used a sliding window queue with LRU eviction to keep only the most recent 1 k events per user. I wrapped cache access in a thread‑safe `asyncio` pool so that inference requests could await cached data without blocking the event loop, and added a fallback path that recomputed features on cache miss.

**Result:**  
Latency dropped from 350 ms to 95 ms on average during peak load, boosting the conversion rate by 12 % and keeping the SLA at 99.9%. I learned that fine‑grained in‑memory caching combined with asynchronous access can replace external services when latency is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
