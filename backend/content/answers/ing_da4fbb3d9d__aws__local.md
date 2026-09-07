---
qid: ing_da4fbb3d9d__aws__local
question: 'Explain: the same line so it''s a little — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 515
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:09-05:00'
sources: []
---

**Situation (S)**  
At my previous role we built a real‑time collaborative editor for internal docs that needed to scale to 10k concurrent users while keeping latency < 30 ms. The key challenge was implementing Operational Transformation (OT) so edits from multiple clients stayed consistent.

**Task (T)**  
Design the OT engine and differential sync layer, ensuring high availability, low cost, and easy observability on AWS.

**Action (A)**  

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| **Edit queue & transformation** | Amazon Kinesis Data Streams + Lambda | Stream‑based ingestion guarantees order; Lambda scales horizontally to process ops in near real‑time. |
| **State store** | DynamoDB (partition key = docID) | Low‑latency reads/writes, auto‑scaling, and conditional writes enforce conflict resolution. |
| **Differential sync** | Amazon API Gateway + WebSocket API + Lambda | Push only the delta to each client; reduces bandwidth by ~70 % compared to full document payloads. |
| **Audit & replay** | S3 + Athena | Store raw ops for debugging and compliance; query with minimal cost. |

*Scalability*: Each component scales independently (Kinesis shards, Lambda concurrency).  
*Availability*: Multi‑AZ deployment of DynamoDB + KCL ensures 99.999 % uptime.  
*Cost*: On‑demand Lambdas + Kinesis on demand keep spend < $0.02 per edit at peak load.

**Result (R)**  
After launch, latency dropped from 120 ms to **28 ms**, user concurrency grew from 1k to **12k** within three months, and bandwidth usage fell by **68 %**. We also reduced operational overhead by automating rollbacks via DynamoDB streams.

---

### Amazon Leadership Principles Highlighted  
- **Customer Obsession** – Delivered a smoother editing experience that users praised in NPS surveys (+15 points).  
- **Ownership** – Took end‑to‑end responsibility for the OT pipeline, from design to production monitoring.  

Bar‑raiser cues: depth of architectural trade‑offs, quantifiable impact (latency, cost), and lessons learned when a Lambda timeout caused stale state—prompted adding DynamoDB conditional writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
