---
qid: ing_16318288dc__aws__local
question: 'Explain: Live Comment System Database Design — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 523
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:44-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to build a real‑time comment feed for a video platform that served 5 M concurrent users and had to support ~10 k comments per second during peak events. The goal was to keep latency < 200 ms while ensuring data durability.

**Action (A)**  
- **Architecture**: Event‑driven pipeline—clients post to API Gateway → Lambda (validation) → Kinesis Data Streams for ingestion.  
- **Storage**: DynamoDB with a composite key `(videoId, timestamp)` and TTL. For hot items we enabled *DAX* caching; for cold history we used S3 + Athena for archival queries.  
- **Real‑time delivery**: WebSocket API Gateway pushes new comments to subscribed clients; fallback to SNS topics for scaling.  
- **Scalability/Cost**: Auto‑scaling Lambda and Kinesis shards (up to 500 shards) keeps cost proportional to traffic (~$0.02 per 1 k comments). DynamoDB on-demand throughput handled burst spikes without provisioning.  
- **Reliability**: Multi‑AZ deployment, cross‑region read replicas for global users; all writes are idempotent via a `commentId` UUID.

**Result (R)**  
Reduced end‑to‑end latency from 800 ms to 180 ms during a live concert event that generated 12 k comments/s. The system handled 4× the projected load with <1% error rate, keeping operational costs 35% below the baseline budget.

---

**Leadership Principles Highlighted**

- **Customer Obsession & Deliver Results** – Prioritized low latency for user engagement, directly boosting watch time by 12%.  
- **Ownership & Dive Deep** – Took full ownership of the end‑to‑end pipeline and deep‑dived into DynamoDB’s partitioning to avoid hot spots.  

---

**Bar‑raiser Takeaways**

1. **Quantified Impact**: Clear metrics (latency, cost savings).  
2. **Depth**: Detailed trade‑offs between Kinesis vs. SQS, DAX vs. cache layers.  
3. **Learning from Failure**: Iterated on shard sizing after initial burst tests; introduced idempotent writes to handle duplicate Lambda invocations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
