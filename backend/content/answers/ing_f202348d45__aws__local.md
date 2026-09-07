---
qid: ing_f202348d45__aws__local
question: 'Explain: Used Mobiles, Tablets — Designing Data-Intensive Applications
  Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 512
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:08-05:00'
sources: []
---

**Context (S)**  
I led a cross‑functional team at an e‑commerce startup that had to ingest real‑time clickstreams from ~200 K mobile and tablet users, transform the data into user‑journey segments, and serve personalized recommendations with <300 ms latency.

**Challenge (T)**  
The existing batch pipeline was 12 h late, so recommendation freshness dropped by 35 %. We needed a low‑latency, fault‑tolerant streaming solution that could scale to 10× traffic while keeping costs under $1M/yr.

**Actions (A)**  

| AWS Service | Role |
|-------------|------|
| **Amazon Kinesis Data Streams** | Ingests raw events at 200 K/s with auto‑scaling shards. |
| **AWS Lambda + Kinesis Firehose** | Stateless micro‑functions transform and enrich data; Firehose buffers to S3 for durability. |
| **Amazon DynamoDB Global Tables** | Stores per‑user session state, global replication gives <1 ms read latency across regions. |
| **Amazon SageMaker Endpoint (real‑time inference)** | Hosts a lightweight XGBoost model that scores segments in ~50 ms. |
| **AWS Step Functions** | Orchestrates the pipeline and retries on transient failures. |

- Implemented *serverless* architecture, eliminating provisioning overhead.  
- Added CloudWatch metrics & alarms for end‑to‑end latency; applied auto‑scaling based on 95th percentile thresholds.

**Result (R)**  

| Metric | Before | After |
|--------|--------|-------|
| Recommendation freshness | 12 h lag → 30 min | <300 ms latency |
| Revenue lift | N/A | +18 % conversion in pilot cohort |
| Cost | $2.5M/yr | $0.9M/yr (35 % savings) |

**Leadership Principles**  
- **Customer Obsession:** Delivered instant personalization, boosting conversions.  
- **Ownership & Dive Deep:** Designed end‑to‑end flow, debugged latency spikes, and iterated on shard sizing.  

**Learning from Failure**  
Initial Lambda retries caused back‑pressure; we switched to *Kinesis Data Analytics* for windowed aggregation, reducing retry churn by 42 %. This taught me the value of selecting the right abstraction early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
