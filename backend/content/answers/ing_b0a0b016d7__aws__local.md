---
qid: ing_b0a0b016d7__aws__local
question: 'Explain: Broker — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 432
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:38-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*  

**Situation / Task**  
I led a migration of our real‑time recommendation engine from an on‑prem Kafka cluster to a fully managed AWS architecture. The goal was to reduce operational overhead, cut costs by 30 %, and guarantee 99.9 % message delivery for millions of events per day.

**Action**  
1. **Design** – Chose Amazon MSK (Kafka) for compatibility, backed by an auto‑scaling *EKS* cluster for consumer services. Added a **SQS Dead‑Letter Queue** to capture failures and a **Lambda** function that replays or alerts on stuck messages.  
2. **Scalability & Availability** – Deployed MSK in a 3‑AZ VPC, used *broker node auto‑recovery* and *inter‑broker replication factor of 3*. Consumer pods use *Horizontal Pod Autoscaler* based on CPU/queue depth.  
3. **Cost & Trade‑offs** – Replaced our 5 TB on‑prem storage with S3 for long‑term retention, reducing capital spend by $120k/year. The trade‑off is a slight increase in latency (from 50 ms to 80 ms) which we mitigated with local caching.

**Result**  
- **Throughput:** 2× higher than before (4 M → 8 M msgs/day).  
- **Cost:** Down 30 % ($250k saved annually).  
- **Reliability:** Message loss dropped from 0.02 % to <0.001 %.  

**Bar‑raiser notes** – I own the end‑to‑end pipeline, dive deep into broker metrics (replication lag, ISR), quantify impact with real numbers, and learned that adding a DLQ early prevented costly downstream failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
