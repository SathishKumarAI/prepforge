---
qid: ing_f1285718cf__aws__local
question: 'Explain: Publisher Subscriber — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 467
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:29-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led the redesign of our real‑time analytics pipeline that ingested clickstream data from millions of users daily. The existing monolith stalled during peak traffic and failed to meet SLA < 200 ms for downstream dashboards.

**Action (A)**  
I proposed a **publisher–subscriber architecture** using **Amazon Kinesis Data Streams** as the broker, coupled with **AWS Lambda** for lightweight processing and **DynamoDB** for stateful aggregation.  
- **Scalability:** Kinesis shards auto‑scale; each shard supports ~1 MB/s, giving us 10× headroom during flash sales.  
- **Availability:** Multi‑AZ deployment + DynamoDB Global Tables ensured < 0.01% outage risk.  
- **Cost:** Leveraged Lambda’s pay‑per‑execution model and Kinesis’ “On‑Demand” mode, cutting $12k/month vs the legacy batch job.

I also introduced a **dead‑letter queue** (SQS) for malformed records, enabling 99.9% data integrity and automated retries.

**Result (R)**  
Post‑migration, end‑to‑end latency dropped from 450 ms to 180 ms, throughput increased by 12×, and we reduced infra costs by **$14k/month** while maintaining a 99.95 SLA.  

**Leadership Principles Highlighted**  
- *Customer Obsession*: Faster dashboards improved product decisions for our marketing team.  
- *Ownership & Dive Deep*: I owned the entire migration, debugged shard‑level throttling issues, and iterated on schema design to avoid hotspots.

**Bar‑raiser cues**  
I demonstrated ownership by driving the whole stack change, dived deep into Kinesis metrics to tune performance, quantified impact with clear KPIs, and learned from a failed early prototype that lacked retry logic—leading to the SQS DLQ implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
