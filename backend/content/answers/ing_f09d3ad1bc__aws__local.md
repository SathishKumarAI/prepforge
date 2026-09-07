---
qid: ing_f09d3ad1bc__aws__local
question: 'Explain: Append-Only DB Property — Database-Internals/AppendOnlyProperty.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 458
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:20:57-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Platform team at a fintech startup, we were migrating from a legacy OLTP system to an event‑driven data lake on AWS. The new architecture required an **append‑only** storage layer so that every change could be replayed for compliance and analytics. My task was to design this layer using DynamoDB Streams and S3.

**Action (Design & Implementation)**  
I scoped the requirement: *write‑once, read‑many*, high write throughput (>10 k ops/sec), 99.999% durability, and cost ≤$0.02 per GB stored.  
1. **Append‑only table** – A single DynamoDB table with a partition key of `entity_id` and a sort key of `event_timestamp`. All writes are inserts; no updates or deletes.  
2. **Change feed** – Enable Streams (New Image) to push every record into an SQS queue, then Lambda for transformation.  
3. **Cold storage** – Lambda batches 1 MB of events and writes them as JSON files to S3 Glacier Deep Archive for long‑term retention.  
4. **Query layer** – Athena + Glue catalog over the S3 data gives ad‑hoc analytics; Kinesis Data Analytics streams real‑time aggregates.

**Result (Metrics)**  
- Write latency dropped from 200 ms to <10 ms per record.  
- Cost per GB fell by 35% compared to the previous relational backup strategy.  
- Audit log replay time ≤2 s for a 1 M event window, meeting regulatory SLA.

**Reflection & Bar‑raiser cues**  
I took full ownership: documented the trade‑offs (no in‑place updates → simpler consistency), dove deep into DynamoDB limits, and iterated on Lambda batch size to hit the sweet spot. The team praised my bias for action and data‑driven approach, and I learned that an append‑only model can dramatically simplify compliance while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
