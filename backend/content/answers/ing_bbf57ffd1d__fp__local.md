---
qid: ing_bbf57ffd1d__fp__local
question: 'Explain: What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 402
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:43:34-05:00'
sources: []
---

**Caching in ML systems**

At its core, a machine‑learning service must repeatedly answer the same or similar queries (feature lookups, model inference, dataset slices). The fundamental problem is *latency vs. consistency*: reading raw data from disk or recomputing features for every request is expensive, yet stale results hurt accuracy. Caching solves this by trading off *freshness* for *speed*.

1. **Why it must work that way**  
   - **Cost structure**: Disk I/O and GPU inference are orders of magnitude slower than in‑memory reads. By keeping the most frequently accessed items in RAM, we reduce average response time from milliseconds to microseconds.  
   - **Statistical locality**: Requests exhibit temporal locality (the same item is requested repeatedly) and spatial locality (adjacent items are likely needed together). A cache exploits these patterns automatically.

2. **Underlying principle – Information Bottleneck**  
   Caching can be seen as an *information bottleneck* that preserves the high‑entropy parts of the data stream while discarding low‑value, redundant bits. The optimal policy is to keep items whose expected *utility* (e.g., reduction in inference time) outweighs their memory cost.

3. **Non‑obvious insight**  
   Many practitioners treat cache size as a static hyperparameter, but in an evolving ML pipeline the *feature distribution drifts*. A cache that adapts its eviction policy based on *prediction error* (not just hit rate) can maintain higher model fidelity: items whose stale values most degrade accuracy are evicted first, even if they were recently accessed.

Thus, caching is not merely a speed trick; it is an optimization layer that balances computational cost against the statistical properties of request patterns and data drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
