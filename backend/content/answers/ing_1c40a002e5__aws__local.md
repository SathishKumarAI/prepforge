---
qid: ing_1c40a002e5__aws__local
question: 'Explain: Ordering — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 520
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:07-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑engineering team for a fintech platform, we had to ingest real‑time order updates (new orders, cancellations, price changes) into downstream analytics and fraud detection pipelines. The existing batch jobs caused >30 min latency, hurting our *Customer Obsession*—customers saw stale balances—and threatened regulatory compliance.

**Action**  
I owned the end‑to‑end solution:  

1. **Capture** – Enabled Oracle CDC via `Oracle GoldenGate` to stream DML changes into an Amazon Kinesis Data Stream (partitioned by order ID).  
2. **Ordering & Deduplication** – Implemented a **Kinesis Enhanced Fan-Out** consumer that writes each record to an Amazon DynamoDB table (`Orders`) with *event‑time* as the sort key, ensuring strict ordering per order.  
3. **Transformation** – A Lambda function (Python 3.9) reads from Kinesis, applies business rules (e.g., flag high‑value cancellations), and writes a clean event to an Amazon SQS FIFO queue for downstream services.  
4. **Scalability & Availability** – Used DynamoDB Auto Scaling; Lambda concurrency reserved to 1000 for peak periods. The design is region‑wide with cross‑region replication (DynamoDB Global Tables) for disaster recovery.  
5. **Cost Control** – Chose Kinesis Data Streams over Kafka on EKS to avoid cluster ops, and kept the Lambda payload <1 MB to stay under the free tier.

**Result**  
Latency dropped from 30 min to <2 s (99th percentile). The fraud detection system processed updates in real time, cutting false‑positive alerts by **27 %**, saving ~$250K annually. Quarterly revenue impact: $3.6M higher due to fewer chargebacks. I documented the architecture and led a “post‑mortem” workshop that produced a reusable CDC template now used across three product lines.

**Reflection**  
The key learnings were: validate ordering guarantees with *event‑time* keys, keep services stateless (Lambda) for elasticity, and trade off a small extra cost for higher availability. This iteration demonstrates **Ownership**, **Dive Deep**, and **Bias for Action**—hallmarks of an Amazon engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
