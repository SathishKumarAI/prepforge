---
qid: ing_eee5cad9f2__aws__local
question: 'Explain: you''re just reading from inmemory data structures'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 423
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:55-05:00'
sources: []
---

**Situation / Task**  
I was tasked to deliver a low‑latency inference service for a recommendation engine that had to serve 10 k requests/second while keeping the end‑to‑end latency below 50 ms. The data required for scoring—user embeddings, item features, and model weights—were stored in Redis as in‑memory structures.

**Action**  
*Ownership & Bias for Action*: I rewrote the inference layer to stream directly from Redis into an **Amazon SageMaker Neo** compiled model, eliminating disk I/O.  
*Dive Deep*: Measured that each request previously hit 3 KB of data; by using Redis pipelining and sharding across 8 nodes, I reduced round‑trip time by 70 %.  
*AWS Services*:  
- **Amazon ElastiCache for Redis** (cluster mode enabled) for fast key‑value access.  
- **SageMaker Neo** to compile the model into native binaries that run in a **Lambda@Edge** function.  
- **CloudWatch Metrics** to track latency and cache hit ratios.

*Scalability & Cost*: The architecture scales horizontally with Redis shards; each Lambda invocation consumes <200 ms CPU time, costing ~$0.000017 per 100 KB payload, reducing the inference cost from $1.20/hr (EC2) to <$0.25/hr while maintaining 99.9 % availability.

**Result**  
Latency dropped from 120 ms to **48 ms**, throughput increased by **150 %**, and operational costs fell by **80 %**. Learned that coupling an in‑memory store with compiled inference dramatically improves performance; future iterations will explore **AWS Nitro Enclaves** for added security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
