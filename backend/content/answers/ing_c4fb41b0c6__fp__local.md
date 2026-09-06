---
qid: ing_c4fb41b0c6__fp__local
question: 'Explain: Load Balancer — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 442
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:40-05:00'
sources: []
---

**Why a load‑balancer matters for a URL shortener**

A URL shortener is essentially a *high‑throughput* key/value service:  
`short_id → long_url`. The traffic pattern is highly skewed—some IDs (e.g., marketing campaigns) receive millions of hits per day, while most are accessed rarely. If all requests hit a single web tier, the probability that one shard becomes a bottleneck grows as  

\[
P_{\text{overflow}} \approx 1 - e^{-\lambda t}\,,
\]

where λ is the request rate for the busiest key and *t* is the time window in which we can afford a timeout. To keep latency bounded (≤ 200 ms), we must spread traffic such that each node processes at most **B** requests per second.  

A **consistent‑hashing load balancer** satisfies two constraints:

1. **Determinism** – The same `short_id` always routes to the same backend, enabling cache locality and avoiding duplicate lookups in a distributed store (e.g., Redis).  
2. **Low churn** – Adding or removing nodes changes routing for only O(1/N) of keys, keeping cache warm.

The balancer also implements *request weighting*: nodes with higher CPU/memory capacity receive proportionally more traffic. This is an instance of the *load‑sharing* subproblem in stochastic geometry: we partition the unit circle into arcs whose lengths are proportional to node weights; a uniformly random hash falls into each arc with probability equal to its weight.

**Non‑obvious insight**  
Most designs ignore *hot‑key amplification*: when a single key spikes, it can dominate an entire shard. A lightweight “hot‑spot detector” that temporarily forwards such keys to a dedicated pool of replicas (without changing the hash) keeps tail latency low while preserving overall consistency. This dynamic re‑routing is rarely mentioned but crucial for real‑world uptime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
