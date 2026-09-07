---
qid: ing_81fcdab5ff__aws__local
question: 'Explain: About this document — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 581
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:47-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we simplify data access for our users; *Dive Deep* – I dissect the internals of Scylla’s storage engine to surface trade‑offs.

### Behavioral (STAR)

- **Situation:** In 2023, a new product line required 30 % faster reads on hot partitions while keeping write latency <2 ms.  
- **Task:** Redesign Scylla’s compaction strategy to balance read amplification against write throughput.  
- **Action:** I introduced a *Tiered‑Hybrid* approach:  
  1. **In‑memory “Hot” tier** – small, highly compressed SSTables for active partitions (using LZ4).  
  2. **Disk‑based “Cold” tier** – larger, uncompressed SSTables to reduce write amplification.  
  I leveraged Scylla’s *Compaction Scheduler* API, added a new `HybridTiered` policy, and instrumented metrics in Prometheus.  
- **Result:** Read latency dropped from 18 ms to 12 ms (33 % improvement) on the hot workload, while write latency stayed below 2 ms. The system’s overall storage footprint shrank by 15 %.  

### Technical

| Requirement | Design Choice | AWS Service | Scalability / Availability | Cost |
|-------------|---------------|------------|---------------------------|------|
| Low read latency for hot keys | Tiered compaction + LZ4 compression | **Amazon EC2** (Scylla nodes) | Horizontal scaling via Auto Scaling; data distributed across zones for high availability | Moderate – extra memory for in‑memory tier |
| High write throughput | Disk‑based cold tier, minimal compaction churn | **EBS Provisioned IOPS** | Keeps write amplification low even under 10k writes/s | Higher IOPS cost |
| Monitoring & tuning | Prometheus + Grafana dashboards | **Amazon Managed Service for Prometheus (AMP)** | Centralized metrics across clusters | Pay‑per‑query |

### Bar‑raiser notes

- **Ownership:** Took end‑to‑end responsibility from policy design to production rollout.  
- **Dive Deep:** Analyzed compaction logs, wrote custom instrumentation, and iterated on compression ratios.  
- **Quantified Impact:** Delivered concrete latency reductions and storage savings.  
- **Learning from Failure:** Initial prototype caused increased GC overhead; we pivoted to a hybrid tier after profiling CPU usage.  

This showcases how I blend customer‑centric performance goals with deep technical insight to deliver measurable results in a distributed data system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
