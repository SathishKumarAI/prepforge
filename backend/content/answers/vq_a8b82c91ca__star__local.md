---
qid: vq_a8b82c91ca__star__local
question: What database events can be set?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 381
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:39-05:00'
sources: []
---

**Situation:**  
At my last company we were migrating our legacy e‑commerce platform to a new PostgreSQL cluster. The old system had a nightly batch job that sent order summaries to an analytics service, but the job occasionally stalled and no one knew why.

**Task:**  
I was tasked with creating a robust monitoring solution so that any failure or delay in the event‑driven data pipeline would be detected instantly, and we could automatically retry or alert without manual intervention.

**Action:**  
I set up three PostgreSQL events:  
1. A **LISTEN/NOTIFY** channel that the order‑processing service emits whenever a batch completes.  
2. A **pg_stat_activity** query scheduled via `cron` to check for long‑running transactions and raise an alert if they exceed 30 seconds.  
3. An **event trigger** on `INSERT` into the `orders` table that logs each new order’s timestamp into a separate audit table, enabling us to measure latency from insertion to notification. I used `pg_cron` for scheduling, `pg_notify` for real‑time alerts, and PostgreSQL’s built‑in `EVENT TRIGGER` feature for schema changes.

**Result:**  
The monitoring system reduced unplanned downtime by 85 % because failures were caught within seconds and automatically retried. The audit table also gave us a clear latency metric—average order processing time dropped from 4.2 s to 1.8 s after we tuned the batch logic based on those insights. I learned how to leverage PostgreSQL’s event system for proactive ops rather than reactive debugging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
