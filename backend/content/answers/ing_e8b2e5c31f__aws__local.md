---
qid: ing_e8b2e5c31f__aws__local
question: 'Explain: Timestamp-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 473
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:09-05:00'
sources: []
---

**Situation & Task**  
I led a data‑engineering team tasked with building a real‑time analytics platform for a financial services client that needed to ingest every transaction change within 1 second while keeping audit logs immutable. The goal: deliver a timestamp‑based CDC pipeline that scales to 10 M ops/day and guarantees exactly‑once semantics.

**Action – Design & Implementation**  
* **Capture** – Use Amazon RDS with binary log streaming; enable `log_bin_trust_function_creators` so each write emits a `commit_ts`.  
* **Queue** – Push the binlog records into Amazon Kinesis Data Streams (shard‑size = 2 MB/s) to decouple source from consumers.  
* **Processing** – A fleet of AWS Lambda functions, triggered by Kinesis events, parse each record, apply idempotent transformations, and write to an Amazon DynamoDB “change log” table (partition key = `entity_id`, sort key = `commit_ts`).  
* **Analytics Layer** – Athena queries the DynamoDB export on S3 for ad‑hoc reporting; a downstream Glue job materializes aggregates into Redshift.  

Key trade‑offs: Lambda’s 15 min timeout vs. Kinesis’ retention (7 days) gives low cost and high availability; DynamoDB provides sub‑ms reads for real‑time dashboards but costs more than RDS snapshots.

**Result**  
- Achieved < 500 ms end‑to‑end latency for 95 % of events, scaling to 12 M ops/day without throttling.  
- Reduced storage cost by 30 % compared with a full RDS backup strategy.  

**Learning & Bar‑raiser Notes**  
I owned the entire loop: from schema design to monitoring alerts (CloudWatch metrics on `kinesis:RecordCount` and Lambda error rates). I dove deep into Kinesis shard allocation patterns, discovered a hot spot, and re‑partitioned by hash of `entity_id`. The quantified impact—latency improvement and cost savings—demonstrated ownership and bias for action, key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
