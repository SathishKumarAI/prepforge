---
qid: vq_47d6280996__aws__local
question: How to find counts based on age group?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 454
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:49:32-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I was asked by the product team to provide weekly reports of user sign‑ups broken down into age brackets (18‑24, 25‑34, 35‑44, etc.). The existing data lake stored raw event streams in S3, but there was no pre‑aggregated view, so analysts were pulling full datasets and running ad‑hoc SQL each week—slow, costly, and error‑prone.

**Action (A)**  
I designed a *serverless ETL pipeline* that ingests the raw sign‑up events into **Amazon Athena** via Glue crawlers. Every night I ran an **AWS Lambda** job that:

1. Reads new rows from S3 using `Athena`’s `UNLOAD` to write a compact Parquet file partitioned by `signup_date`.
2. Uses a simple SQL UDF to bucket each record into the appropriate age group (`CASE WHEN age BETWEEN 18 AND 24 THEN '18‑24' …`).
3. Stores the aggregated counts per day and age group in a **DynamoDB** table for instant lookup.

I added an **Amazon CloudWatch Alarm** that triggers if the Lambda runs longer than 5 min, ensuring we catch performance regressions early.

**Result (R)**  
- Query latency dropped from ~15 min to <30 s.  
- Cost fell by 70% (from $12/month to $3.60/month).  
- Analysts now receive a ready‑made CSV via **Amazon S3 EventBridge → SNS** each morning, eliminating manual steps.

**Learning & Bar‑raiser cues**  
I owned the end‑to‑end flow: from data ingestion to alerting. I dove deep into Athena’s cost model and DynamoDB throughput, balancing read latency against write capacity units. The failure mode—Lambda timeouts—was logged, analyzed, and mitigated by tuning Glue job concurrency. This demonstrates *Ownership*, *Dive Deep*, and *Bias for Action*—the very principles Amazon looks for in a data engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
