---
qid: ing_65269a03ff__aws__local
question: 'Explain: Moving collections — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 602
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:31-05:00'
sources: []
---

**Answer (Amazon style)**  

During a recent e‑commerce revamp I led the migration of our product catalog from a single MongoDB instance to a sharded cluster to support 2 M+ daily requests and a 20× data growth forecast.  

| **S** | **T** | **A** | **R** |
|-------|-------|-------|-------|
| **Situation** – A monolithic DB was throttling reads, causing >30 s latency during peak sales. | **Task** – Design a sharding strategy that keeps write throughput high while preserving read performance for highly popular SKUs. | **Action** – Chose **range‑based shard key (`category_id + product_id`)**, implemented via **MongoDB Atlas** on **Amazon EC2 (m5.large)** with **auto‑scaling storage** and **replica sets** for HA. Added a **secondary index** on `price` to accelerate dynamic pricing queries. Deployed **AWS CloudWatch** metrics, alerts, and scheduled **daily sharding rebalancing** scripts in Lambda. | **Result** – Latency dropped from 30 s to <200 ms (99th percentile), read throughput rose 4×, and we eliminated the single‑point failure risk. Cost increased by only 12 % due to efficient instance sizing and spot‑instance usage for non‑critical shards. |
| **Leadership Principles** – *Ownership* (I took full responsibility from design to production rollout) and *Dive Deep* (I examined query plans, shard key distribution, and network I/O). |

**Technical Design Notes**

- **AWS Services:** EC2 for nodes, EBS GP3 for storage, CloudWatch + Lambda for automation, Route 53 for DNS failover.  
- **Scalability & Availability:** Horizontal scaling via shards; each has a primary+secondary replica set (RA 99.999% SLA). Auto‑scaling ensures capacity matches traffic spikes.  
- **Cost Trade‑offs:** Using Atlas’s managed service reduces ops overhead but locks us into AWS pricing; we mitigated with spot instances and reserved capacity for predictable workloads.

**Bar‑raiser Checkpoints**

1. **Ownership:** I owned the full migration lifecycle, from requirements gathering to post‑go‑live monitoring.  
2. **Dive Deep:** I validated shard key choice through workload simulation and monitored metrics pre/post shift.  
3. **Quantified Impact:** 4× read throughput, <200 ms latency, 12% cost increase—clear ROI.  
4. **Learning from Failure:** Early tests revealed hotspot shards; we pivoted to a compound key, demonstrating agility under pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
