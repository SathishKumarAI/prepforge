---
qid: ing_b0755b577f__aws__local
question: 'Explain: Context — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 396
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:13-05:00'
sources: []
---

**Context & Problem (S)**  
At my previous firm I built a real‑time fraud‑detection pipeline that ingested ~50 k transactions per second into an S3 data lake and fed them to SageMaker for scoring. A downstream audit service consumed the same events via Kinesis. We hit “double‑processing” bugs: sometimes the audit saw a transaction twice, other times it missed one entirely because the write to DynamoDB (the fraud flag) and the publish to Kinesis happened in separate transactions.

**Solution & Action (T)**  
I introduced the **Transactional Outbox** pattern. Each microservice writes its domain event to an “outbox” table (DynamoDB or Aurora) inside the same DB transaction that updates the business entity. A lightweight Lambda polls the outbox, serialises events to JSON, and publishes them to a Kinesis stream. The poller uses DynamoDB Streams for change‑feed guarantees, ensuring at‑least‑once delivery without race conditions.

**Result (R)**  
- 100 % audit consistency – no duplicate or missing records.  
- Latency dropped from 120 ms to <40 ms per event due to batch‑ing in Lambda.  
- Operational cost fell by 15 % by eliminating a separate message broker.

**Learnings & Ownership (L)**  
I documented the pattern, trained the team on idempotent consumers, and added automated smoke tests that replay outbox entries every night. The result was a scalable, fault‑tolerant pipeline that respected **Customer Obsession** (accurate fraud flags) and **Ownership** (end‑to‑end reliability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
