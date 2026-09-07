---
qid: ing_5f4dec1220__aws__local
question: 'Explain: Common Mistakes — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 433
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:25-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a real‑time recommendation system that ingested user events from Kafka into an AWS data lake. The ML pipeline was built to be “transactional” so we applied ACID semantics on every event insert, hoping to guarantee exact‑once processing.

**Action**  
I first mapped the workflow with a **Step Functions state machine** and identified the bottleneck: each record triggered a separate `INSERT` into an RDS PostgreSQL instance. I performed a **dive deep** audit of our throughput – 200 k events/s required 200 k ACID transactions, which exceeded RDS’s write‑throughput (≈10 k TPS).  
Instead, we switched to **S3 + Kinesis Data Firehose** for immutable buffering and used **DynamoDB with Conditional Writes** only where strong consistency was truly needed. For model inference we leveraged **SageMaker endpoint autoscaling** behind an Application Load Balancer.  

**Result**  
Throughput increased from 10 k TPS to 250 k TPS, latency dropped 4× (from 1.2 s to 0.3 s), and cost fell by 35 % due to reduced RDS licensing. The system now supports a 10× user base without manual intervention.

**Learning & Bar‑raiser cues**  
- *Ownership*: I identified the root cause and owned the migration plan.  
- *Dive Deep*: Quantified TPS limits, analyzed AWS service SLAs.  
- *Quantified Impact*: 4× latency reduction, 35 % cost savings.  
- *Failure Reflection*: Early attempts caused data loss; we introduced idempotent writes in DynamoDB to mitigate that risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
