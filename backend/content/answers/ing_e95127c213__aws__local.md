---
qid: ing_e95127c213__aws__local
question: 'Explain: Quick Links — Raft Consensus Algorithm'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 460
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:05:30-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of our legacy “Quick Links” service—an internal tool that generated personalized link bundles for millions of users—to a fault‑tolerant, horizontally scalable architecture. The existing monolith crashed under peak traffic (≈ 15 k QPS) and lacked a single source of truth.

**Action**  
I chose the **Raft consensus algorithm** to guarantee strong consistency across replicas while keeping latency low.  
* **Design**:  
  * Each link‑generation node runs on an Amazon **EC2 Auto Scaling Group** behind an Application Load Balancer.  
  * Raft leaders elect via a lightweight **AWS DynamoDB Global Table** (partitioned by region) to store the commit log, leveraging DynamoDB’s low‑latency writes and cross‑region replication for high availability.  
  * Followers stream updates over **Amazon Kinesis Data Streams**, ensuring eventual consistency without blocking reads.  
* **Scalability & Cost**: Auto Scaling scales out during traffic spikes (up to 30 k QPS) while the stateless follower logic keeps per‑instance memory < 200 MB, reducing EC2 costs by ~25 %.  
* **Trade‑offs**: Using DynamoDB introduces a slight write amplification but guarantees durability; we mitigated this with batch commits and DynamoDB Accelerator (DAX) for read caching.

**Result**  
Post‑migration uptime rose from 92 % to 99.98 %, latency dropped by 40 ms, and the cost per request fell 18 %. The system now supports real‑time link updates across regions with zero data loss—a clear win for our customers.

> **Leadership Principles**: *Customer Obsession* (ensuring reliable links), *Ownership* (designing end‑to‑end resilience), *Dive Deep* (profiling Raft overhead), and *Deliver Results* (measurable uptime & cost gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
