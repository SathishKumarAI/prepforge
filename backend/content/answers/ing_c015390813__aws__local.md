---
qid: ing_c015390813__aws__local
question: 'Explain: Store Events for Audit and Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 435
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:38:21-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of our event‑driven audit system for a fintech platform that processed ~1 M webhook calls per day. The legacy queue (SQS) stored only raw payloads; replaying events required manual reconstruction, causing 30 % SLA drift on downstream fraud checks.

**Action**  
I architected an immutable, queryable event store using **Amazon Kinesis Data Streams** for ingestion and **AWS Glue** to transform each record into a canonical JSON schema. The transformed data is written atomically to **Amazon DynamoDB Global Tables** (partition key: `event_id`, sort key: `timestamp`) to guarantee geo‑redundancy and sub‑millisecond reads.  
For replay, I exposed an API that streams events from Kinesis with optional filters; the consumer can re‑process any window in < 2 s per 10 k events. To keep costs low, I enabled **DynamoDB on‑demand** for bursty audit traffic and used **S3 Glacier Deep Archive** to archive older partitions after 90 days.

**Result**  
The new system cut replay latency from minutes to seconds (≈ 95 % reduction), increased audit reliability by 99.9 %, and reduced operational cost by $12K/month.  

**Learning & Bar‑raiser focus**  
I owned the end‑to‑end flow, dove deep into schema evolution with AWS Glue Jobs, and quantified impact on SLA compliance. The biggest failure was an initial mis‑estimate of DynamoDB provisioned throughput; I learned to use auto‑scaling early and incorporated a cost‑vs‑performance trade‑off analysis in my design review.

**Leadership Principles Anchored**  
- **Ownership** – drove the project from concept through production rollout.  
- **Dive Deep & Deliver Results** – engineered a scalable, low‑latency audit trail that met hard compliance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
