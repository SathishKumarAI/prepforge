---
qid: ing_bdac2ad837__star__local
question: 'Explain: The Thundering Herd — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 326
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:16-05:00'
sources: []
---

**Situation:**  
At my last role I was building a recommendation engine that served personalized product suggestions to 15 k users per minute. Our real‑time inference service was hitting the GPU cluster at peak hours, causing latency spikes of 300 ms and a 12% increase in cost.

**Task:**  
I had to reduce request latency by 50% while keeping compute costs under budget, without sacrificing recommendation accuracy.

**Action:**  
First I profiled traffic with Prometheus and found that 78% of requests were identical user‑product pairs within a two‑minute window—classic thundering herd. I introduced an in‑memory cache (Redis Cluster) keyed on the pair hash, setting a TTL of 120 s. To avoid cache stampedes I implemented a “single flight” lock with RedLock, ensuring only one inference ran per key while others waited for the result. For cold starts I used a pre‑warm batch that populated popular keys nightly. I also added a fallback to a lightweight LRU cache on each service instance to catch race conditions.

**Result:**  
Cache hit rate climbed from 0% to 82%, cutting average inference latency from 300 ms to 110 ms and reducing GPU usage by 37%. The cost savings translated into a $15k monthly reduction. I learned that careful key design, lock coordination, and TTL tuning are essential to turn caching from a simple speed‑up into a robust anti‑herd solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
