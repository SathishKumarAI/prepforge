---
qid: ing_0fd5466e6a__aws__local
question: 'Explain: Related patterns — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 622
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:14-05:00'
sources: []
---

**Situation (S)**  
I led a data‑science team at an e‑commerce platform that needed real‑time fraud detection for high‑value orders. The existing batch pipeline lagged 12 hrs, causing $3 M in losses per quarter.  

**Task (T)**  
Design a system that captures every order event, persists it immutably, and lets ML models react instantly—essentially an **Event‑Sourcing** pattern for ML pipelines.

**Action (A)**  
1. **Capture & Persist** – Used Amazon Kinesis Data Streams to ingest raw order events; each record was stored in an immutable **DynamoDB table** (partition key = OrderID, sort key = Timestamp) and also forwarded to S3 via Kinesis Firehose for archival.  
2. **Event Replay / Feature Store** – A Lambda function aggregates events per order into a *snapshot* that feeds into Amazon SageMaker Feature Store, ensuring every model sees the same immutable state.  
3. **Real‑time Scoring** – Deployed a SageMaker real‑time endpoint behind an Application Load Balancer; each incoming event triggers a Lambda that queries the snapshot and invokes the endpoint, returning a fraud score within 200 ms.  
4. **Governance & Monitoring** – Integrated CloudWatch Alarms on Kinesis latency and Lambda errors; used AWS Config to audit schema changes in DynamoDB.

**Result (R)**  
- Reduced fraud‑related losses by **47 %** ($1.5 M saved) in 6 months.  
- Latency dropped from 12 hrs to <200 ms, improving user experience and trust.  
- Cost was 30 % lower than the batch approach due to serverless scaling.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant fraud protection, protecting customers’ money and reputation.  
- **Ownership & Dive Deep** – Took full ownership of data integrity, designed end‑to‑end event sourcing, and debugged latency spikes by inspecting Kinesis metrics and DynamoDB throughput.

---

### What a Bar‑raiser Looks For
| Criterion | Why It Matters |
|-----------|----------------|
| **Ownership** | End‑to‑end responsibility for reliability. |
| **Dive Deep** | Use of immutable stores + replay to guarantee correctness. |
| **Quantified Impact** | 47 % loss reduction, $1.5 M saved. |
| **Learning from Failure** | Transitioned from batch to event‑sourced after analyzing laggy pipelines and costly retries. |

This solution balances **scalability** (Kinesis + Lambda auto‑scale), **availability** (S3 durability, DynamoDB replication), and **cost** (pay‑as‑you‑go serverless) while keeping the system simple and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
