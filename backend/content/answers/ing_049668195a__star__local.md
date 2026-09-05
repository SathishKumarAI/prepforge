---
qid: ing_049668195a__star__local
question: 'Explain: Choose Vertical Scaling When — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 328
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:59-05:00'
sources: []
---

**Situation** – While working on a real‑time fraud detection pipeline for an online payment platform, our model inference latency had spiked from 35 ms to over 120 ms during peak traffic (4 k requests/sec). The existing 8 core CPU node was maxed out and the cost of adding more nodes would be prohibitive because each request required loading a large embedding table (~1.2 GB) into memory.

**Task** – Reduce inference latency below 80 ms without increasing the overall cloud spend, and keep the system highly available for sudden traffic bursts.

**Action** – I evaluated vertical scaling: upgraded the current instance to an 32‑core, 128 GB RAM machine. I also migrated the embedding table to a shared memory segment using `mmap` so all cores could access it concurrently, eliminating per‑request disk reads. To preserve availability, I deployed a warm standby instance and used AWS Auto Scaling’s “Instance Warm‑up” feature to keep one replica ready for failover. Parallel processing of batched requests was introduced with OpenMP to fully utilize the new CPU core count.

**Result** – Latency dropped to 65 ms on average during peak, meeting SLA targets while cutting operational cost by ~30% compared to a horizontally scaled cluster. I learned that vertical scaling is ideal when workloads are memory‑bound and data locality matters more than sheer request volume; it simplifies deployment and reduces inter‑node communication overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
