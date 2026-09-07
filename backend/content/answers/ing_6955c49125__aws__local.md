---
qid: ing_6955c49125__aws__local
question: How to update the distributed counter? — Distributed Counter System Design
  - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 802
total_tokens: 1037
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:15-05:00'
sources: []
---

**Situation (S)**  
In my last role I led a team that built a global ad‑serve platform for 3 M daily active users. We needed a *distributed counter* to track impressions per campaign while guaranteeing at‑least‑once delivery and sub‑second latency.

**Task (T)**  
Design a fault‑tolerant, horizontally scalable counter that updates in real time, reconciles across data centers, and feeds downstream analytics with 99.9 % availability.

**Action (A)**  

| Step | What I did | AWS Services & Rationale |
|------|------------|--------------------------|
| 1️⃣ **Event ingestion** | Use **Kinesis Data Streams** (shard key = campaign ID) to collect events from edge servers. Kinesis guarantees ordered, replayable streams and scales to millions of records per second. | *Scalability & durability* |
| 2️⃣ **Local aggregation** | Deploy **Lambda@Edge** functions that write partial counts to **DynamoDB Global Tables** (partition key = campaign ID). Each Lambda writes a single‑increment item; DynamoDB’s transactional API keeps the counter atomic per partition. | *Low latency, multi‑region consistency* |
| 3️⃣ **Cross‑region reconciliation** | A scheduled **Step Functions** workflow aggregates stale partitions every 5 min using **EMR on Spot** to run MapReduce jobs over S3 snapshots of DynamoDB streams. Results are merged back into a central **Redshift Spectrum** table for analytics. | *Cost‑effective batch reconcile, high throughput* |
| 4️⃣ **Cache & read path** | Expose counts via **API Gateway + Lambda** that first consults an **ElastiCache Redis** cluster (replica group). If cache miss → query DynamoDB; update cache. Cache TTL = 2 s ensures near‑real‑time reads. | *Ultra‑low latency, high read throughput* |
| 5️⃣ **Monitoring & fault tolerance** | CloudWatch Alarms on Lambda error rates and Kinesis lag trigger an automated **SNS + Lambda rollback** that pauses ingestion for the affected campaign until the issue resolves. | *Self‑healing, proactive alerting* |

**Result (R)**  
- Achieved **99.98 % availability** across 4 regions during a global traffic spike of 2× production.  
- Reduced counter latency from 200 ms to <30 ms for read operations, improving ad click‑through reporting by 15 %.  
- Cut infrastructure cost by 22 % using Spot instances and auto‑scaling caches.

---

### Leadership Principles Highlighted
| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Ownership** | I drove end‑to‑end design, from ingestion to analytics, taking responsibility for uptime and cost. |
| **Dive Deep** | Investigated DynamoDB consistency models, Lambda throttling limits, and Kinesis shard sizing to pinpoint bottlenecks. |
| **Bias for Action** | Deployed a minimal viable counter with Kinesis & DynamoDB within two weeks; iterated based on metrics. |
| **Deliver Results** | Quantified impact: 15 % faster reporting, 22 % cost savings, and sub‑second latency. |

### What a Bar‑Raiser Looks For
- **Quantitative ownership:** clear metrics (latency, availability, cost).  
- **Depth of technical insight:** trade‑offs between DynamoDB vs. RDS, stream replay vs. batch reconcile.  
- **Learning from failure:** the automated rollback on Lambda errors and how we used that data to refine shard sizing.  

This design demonstrates my ability to build a robust distributed counter while aligning with Amazon’s customer obsession for instant insights and operational excellence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
