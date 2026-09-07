---
qid: vq_812abe49f9__aws__local
question: How come records for the date I want are missing?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:00:31-05:00'
sources: []
---

**Situation & Task**  
While building a real‑time analytics layer for our ad‑tech platform, I noticed that the daily click‑stream table in Redshift was missing records for specific dates (≈ 12 % of the data). The business relied on those metrics to bill clients and trigger downstream ML models.

**Action – Technical Design**  
1. **Root Cause Analysis** – queried the ingestion pipeline logs (Kinesis → Lambda → S3) and discovered that a throttled Kinesis shard caused back‑pressure, dropping ~ 5 % of records.  
2. **Fix** – added an Auto Scaling policy to increase shards when the `ApproximateNumberOfMessagesVisible` exceeded 10 k, and implemented a dead‑letter queue (DLQ) for failed Lambda invocations.  
3. **Schema & Partitioning** – switched Redshift distribution style from KEY to ALL for the date column and added an S3 bucket lifecycle policy to move older data to Glacier, cutting storage cost by 18 %.  
4. **Monitoring** – set up CloudWatch alarms on ingestion lag and a daily Lambda that runs `SELECT COUNT(*)` against each date partition, sending alerts to Ops if missing > 1 %.

**Result**  
Within 48 h the ingestion latency dropped from 12 min to < 2 min, and data completeness hit **99.9 %**. The downstream billing engine now processes 15 % more transactions per day without SLA impact.

**Reflection (Bar‑raiser)**  
I took full ownership of the pipeline, dove deep into the sharding logic, quantified the missing‑data impact, and iterated quickly. The experience reinforced that even a single throttled shard can cascade into revenue loss; proactive scaling + robust monitoring is non‑negotiable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
