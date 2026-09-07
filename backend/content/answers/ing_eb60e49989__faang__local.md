---
qid: ing_eb60e49989__faang__local
question: So how can I save money? — Uncovering Kafka\u2019s Hidden Infrastructure
  Costs
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 474
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:47:20-05:00'
sources: []
---

**Clarify**  
You want to reduce spending on a Kafka deployment while maintaining throughput and reliability.  
Assumptions: you’re running self‑managed brokers (K8s or EC2), using standard storage, no advanced features like tiered storage or auto‑scaling, and your traffic pattern is fairly steady.

**Approach**  
1. **Baseline audit** – collect metrics (CPU, disk I/O, network, GC pauses) and cost data per broker.  
2. **Identify waste buckets** – underutilized nodes, oversized disks, overprovisioned replication, idle consumers.  
3. **Apply targeted optimizations** – right‑size instances, adjust retention, enable compression, tune fetch/replica settings.  
4. **Validate** – run a pilot and measure latency, throughput, and cost.

**Depth**  
- *Right‑sizing*: use CPU‑to‑msg‑rate ratios; switch from m5.large to c5.xlarge if compute is the bottleneck.  
- *Disk*: move from 1 TB SSDs to 500 GB when retention allows; consider NVMe for hot topics.  
- *Replication factor*: drop from 3 to 2 on non‑critical partitions (cost ≈ 33 %).  
- *Compression*: enable LZ4/DEFLATE (≈ 30 % less storage, negligible CPU).  
- *Consumer groups*: consolidate idle consumers; use `max.poll.records` to batch.  
Complexity: O(N) for metric collection; each tweak is a constant‑time change.

**Edge Cases**  
- Sudden traffic spikes → under‑provisioned nodes cause latency.  
- Long retention policies → disk overrun before reduction.  
- Data loss risk with lower replication – test failover scenarios.

**Optimize & Communicate**  
Iteratively apply changes, monitor SLA impact, and document cost vs performance curves. Present a dashboard showing projected savings (e.g., “$12k/month by reducing replication + compression”). This structured, data‑driven plan demonstrates clear problem solving and the ability to trade off reliability for cost—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
