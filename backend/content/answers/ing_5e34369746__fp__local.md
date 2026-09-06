---
qid: ing_5e34369746__fp__local
question: 'Explain: Cache as Primary Storage — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 520
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:24:47-05:00'
sources: []
---

**What is caching and why it is indispensable in machine‑learning systems?**

At its core, a cache solves *latency vs. cost* trade‑offs: data that is expensive to obtain (disk I/O, network fetch, or recomputation) is stored temporarily in fast memory so that subsequent requests can be served instantly. In ML pipelines the “expensive” operation is often feature extraction or model inference on raw inputs; these steps dominate end‑to‑end latency and CPU/GPU usage.

From an **optimization** viewpoint, caching implements *memoization* for a stochastic process: each request corresponds to a random variable \(X_t\). By storing past evaluations \(f(X_{t-i})\) in a key‑value store, we reduce the expected cost \(\mathbb{E}[C]\) because we avoid recomputation whenever the same key reappears. The law of large numbers tells us that if the request pattern has high *temporal locality* (i.e., many repeated keys), the cache hit rate will converge to a value close to 1, dramatically lowering \(\mathbb{E}[C]\).

From an **information‑theoretic** angle, caching preserves entropy locally: we keep a compressed representation of the most probable inputs so that downstream components receive information with minimal delay. The *rate–distortion* trade‑off is implicit—storing more items reduces distortion (latency) at the cost of higher rate (memory).

A **non‑obvious insight**: in distributed ML systems, caches should be *content‑aware*, not just key‑based. Since feature vectors can be high‑dimensional, two inputs that are similar but have different keys may still benefit from a shared cache entry if we hash on a similarity metric (e.g., locality‑sensitive hashing). This reduces redundancy and improves hit rates beyond simple LRU policies.

In practice, designing the cache involves:
1. **Eviction policy** (LRU, LFU, or learned) tuned to request distribution.
2. **Consistency guarantees** (stale vs. fresh data) aligned with model retraining schedules.
3. **Scaling strategy** (sharding, replication) to avoid single‑point bottlenecks.

Thus, caching is not merely a speed hack—it is a principled mechanism that turns statistical regularities in ML workloads into tangible performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
