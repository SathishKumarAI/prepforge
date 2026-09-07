---
qid: ing_46d7d08b96__faang__local
question: 'Explain: Advantages and disadvantages of write-through'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:28:49-05:00'
sources: []
---

**Clarify**  
We’re discussing *write‑through* cache policy in the context of ML data pipelines or model serving where updates must be persisted immediately to backing storage (e.g., HDFS, S3).  
Assumptions:  
1. The underlying store is slower than memory.  
2. Consistency between cache and disk is critical for correctness.  

**Approach**  
Outline the pros/cons, then dive into each with concrete examples relevant to ML workloads.

| Advantage | Depth |
|-----------|-------|
| **Strong consistency** | Every write hits both cache & store; downstream training jobs see up‑to‑date checkpoints without staleness. |
| **Simplified recovery** | No replay of logs needed after crash—data is already durable, reducing restart time for long ML jobs. |
| **Fault tolerance** | If the cache crashes, the backing store still holds all writes, preventing data loss in model checkpoints or feature stores. |

| Disadvantage | Depth |
|--------------|-------|
| **Write latency overhead** | Each write incurs two I/O operations; training pipelines with high‑frequency parameter updates (e.g., SGD) suffer slowdown. |
| **Higher storage cost** | Duplicate data in memory and disk increases overall footprint, problematic for large feature tables. |
| **Cache thrashing risk** | Frequent writes may evict useful cached items before they’re read, hurting cache hit ratio for inference workloads. |

**Edge Cases**  
- *Burst updates*: sudden spike of model checkpoints can saturate the network to storage, leading to back‑pressure in training loops.  
- *Partial failures*: if store write fails but cache succeeds, consistency breaks; need transactional guarantees or retry logic.  

**Optimize & Communicate**  
To mitigate latency, batch writes or use a hybrid *write‑back* strategy for non‑critical logs while keeping critical checkpoints on write‑through. Use async I/O and compression to reduce bandwidth. When explaining to stakeholders, emphasize that write‑through trades speed for safety—essential in ML pipelines where stale parameters could invalidate experiments or deployed models. This structured view satisfies FAANG interviewers’ emphasis on clear communication, depth of technical insight, and pragmatic trade‑off analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
