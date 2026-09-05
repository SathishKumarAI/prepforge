---
qid: ing_a95c9984dd__star__local
question: 'Explain: CAP in Real Systems — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 309
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:33-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a global e‑commerce platform that had to support millions of concurrent users while keeping the product catalog highly available across three data centers.

**Task**  
I was tasked with designing the inventory service so it could deliver low latency reads, tolerate network partitions, and still keep the data consistent for high‑value items like limited edition releases.

**Action**  
I evaluated a CAP trade‑off by prototyping both a sharded Cassandra cluster (AP) and a distributed SQL database (CP). For the AP option I added a lightweight “eventual consistency” reconciler that ran nightly to resolve conflicting stock counts. For the CP option, I introduced a two‑phase commit over ZooKeeper to lock inventory updates, ensuring strong consistency but with higher latency during partitions. I also implemented health checks and automatic failover between data centers using Kubernetes operators.

**Result**  
We chose the hybrid approach: most reads served from the AP Cassandra tier for speed, while critical writes went through the CP SQL layer for safety. This reduced average read latency to 15 ms (vs. 40 ms baseline) while keeping stock‑out‑of‑sync incidents below 0.02% during a simulated partition test. I learned that real systems often need a pragmatic mix of CAP choices rather than a single pure strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
