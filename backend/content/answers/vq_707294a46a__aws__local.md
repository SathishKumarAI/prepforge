---
qid: vq_707294a46a__aws__local
question: what is broadcast variable in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 482
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:57:13-05:00'
sources: []
---

**Answer (Amazon style)**  

> *Leadership Principles:* **Customer Obsession** – we want our data pipelines to serve downstream analytics quickly; **Dive Deep** – understanding Spark internals is essential for performance.

**S – Situation:**  
In my last role, the ML team needed real‑time predictions on a 5 TB user profile dataset. Every job spawned a shuffle that duplicated the same reference table (~50 GB) across executors, causing >30 % slowdown and OOM errors on larger clusters.

**T – Task:**  
Reduce shuffle overhead, lower memory footprint, and keep latency <2 s per batch while preserving fault‑tolerance.

**A – Action (Technical Design):**  

1. **Broadcast Variable**: Spark’s `sc.broadcast()` stores the reference table once per executor in off‑heap memory, accessible to all tasks without shuffling.  
2. **Implementation**: Loaded the 50 GB profile set into a Kryo‑serialized broadcast object; used it in the join logic (`df.join(broadcastVar.value)`), avoiding data movement.  
3. **AWS Services**: Deployed on Amazon EMR with Spark 3.x, using EC2 `m5.4xlarge` nodes (32 GB RAM) and S3 for durable storage.  
4. **Scalability & Cost**: Broadcast reduced shuffle traffic by ~80 %, cutting network I/O from 1 TB to <200 GB per job, saving ~$0.05/hour on EMR. Memory usage stayed below 70% of executor RAM, preventing OOMs.

**R – Result:**  
Latency dropped from 6 s to **1.8 s** (≈70 % improvement). Cost per job fell by **$3.20** (~15 %). The solution was fully automated via a Lambda that refreshed the broadcast every hour when new data arrived, ensuring **Ownership** of end‑to‑end performance.

**Bar‑raiser Takeaway:**  
Showed ownership, deep technical insight (Kryo serialization, off‑heap), quantified impact, and continuous learning by monitoring failure modes and adjusting executor size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
