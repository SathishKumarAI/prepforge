---
qid: ing_2ef7a15aa0__fp__local
question: 'Explain: Stage 1: Single Server (0-10K users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 372
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:44:35-05:00'
sources: []
---

### Why a single‑node architecture is sufficient for the first 10 k users

**The fundamental problem**: we must deliver low‑latency predictions and data access to every user while keeping operational costs minimal.  
In the *0–10 k* regime, the **workload is bounded by the product of request rate (R) and per‑request cost (C)**. With modern CPUs/GPUs and in‑memory caching, a single server can sustain \(R \times C < 2\,\text{GHz}\), comfortably below typical hardware limits.  

**Scalability principle**: *horizontal scaling* is only justified when the marginal benefit of adding nodes outweighs the coordination overhead (latency, consistency). For 10 k concurrent users, the **law of diminishing returns** kicks in – a single machine can handle spikes thanks to burst buffers and autoscaling within its own RAM.  

**Design choices that make it work**:
- **Stateless API layer**: enables quick spin‑up without state migration.
- **In‑memory cache (e.g., Redis) + sharded DB**: reduces I/O bottlenecks.
- **Asynchronous task queue** for heavy training jobs, preventing blocking of user requests.

**Non‑obvious insight**  
Most architects assume “scale‑out early.” In practice, the *cost of coordination* (distributed locks, consensus protocols) can exceed the raw compute savings until traffic hits ~50 k–100 k users. By delaying horizontal scaling until a clear *saturation point*, you avoid unnecessary complexity and pay only for what you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
