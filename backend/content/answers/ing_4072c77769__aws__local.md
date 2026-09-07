---
qid: ing_4072c77769__aws__local
question: 'Explain: NoSQL Models — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 491
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:38-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led a migration of our recommendation engine from a monolithic MySQL stack to a distributed NoSQL architecture so we could serve 4 M daily user sessions with <200 ms latency.

**Action (A)**  
I first *dove deep* into the data access patterns: most reads were key‑lookups on `user_id` → `recommendations`, while writes were bursts of bulk updates during nightly model refreshes. I chose **Amazon DynamoDB** for low‑latency reads and **Amazon S3 + Glue** for batch ingestion, complemented by a small **RDS Aurora MySQL** instance for the legacy transactional data that still required joins.

I designed a *single‑table pattern* in DynamoDB with composite keys (`PK=USER#<id>`, `SK=REC#<timestamp>`), and used **DynamoDB Streams + Lambda** to trigger downstream enrichment jobs. For analytics I built an Athena layer over the S3 data lake, enabling ad‑hoc queries without impacting production traffic.

I also set up **AWS CloudWatch Alarms** for read/write capacity and implemented *auto‑scaling* with `ReadCapacityUnits=2000`, `WriteCapacityUnits=500`. The cost model was a mix of on‑demand for unpredictable spikes and reserved instances for baseline usage, cutting infra spend by 35 % while maintaining 99.99 % availability.

**Result (R)**  
After launch, read latency dropped from 350 ms to 120 ms, throughput increased from 50 k RPS to 250 k RPS, and we saw a 22 % lift in recommendation click‑through rate. The migration also freed the MySQL cluster for transactional workloads, reducing its load by 40 %.

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results**: Faster recommendations directly improved user engagement.  
- **Ownership & Dive Deep**: I owned the full stack redesign and performed granular performance tuning.  

*Bar‑raiser takeaway*: clear ownership, data‑driven impact, and a deep dive into trade‑offs between consistency, latency, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
