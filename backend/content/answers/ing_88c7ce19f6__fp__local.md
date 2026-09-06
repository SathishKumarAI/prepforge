---
qid: ing_88c7ce19f6__fp__local
question: 'Explain: Scaling to Count Billions — From Zero to 50 Million Uploads per
  Day: Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 422
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:55:39-05:00'
sources: []
---

**From a single‑user queue to billions of requests**

At its core, the problem is *throughput*: how many uploads can we accept per second while keeping latency low and costs bounded?  
The solution starts with **rate‑matching**—the upload rate \(R\) must equal the combined capacity of every downstream stage:
\[
R \le \min_i C_i
\]
where \(C_i\) is the processing, storage, or network throughput of component *i*.  

Canva’s architecture treats each stage as a **congestion‑controlled flow**. An upload hits a front‑end load balancer that assigns it to an edge node; the node writes to a distributed object store (S3‑compatible). The write is split into chunks, each chunk sent over a separate TCP stream to increase parallelism. A back‑pressure signal from the storage tier throttles the edge if any \(C_i\) dips below target.

The deeper principle is *elasticity of probability*: by modeling upload size as a log‑normal distribution, the system can provision just enough resources to keep the tail (the largest 0.1 % uploads) under a latency SLA, while letting most traffic flow freely. This avoids overprovisioning that would otherwise inflate cost.

**Non‑obvious insight:**  
The bottleneck is not raw bandwidth but *metadata consistency*. Canva’s solution uses an eventually‑consistent “upload manifest” stored in a sharded key‑value store; each edge writes its chunk pointers to the manifest, and a background compactor merges them. This decouples write latency from storage capacity, allowing 50 M uploads/day without linear scaling of metadata servers.

In short: **match every stage’s capacity, use probabilistic sizing for rare heavy uploads, and isolate metadata from data streams**—the recipe that lets Canva grow from a handful of users to billions of daily uploads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
