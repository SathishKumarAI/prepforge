---
qid: ing_8a8d84cce3__aws__local
question: 'Explain: Capacity Mode — Amazon Kinesis Data Streams Terminology and concepts
  - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 614
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:38:42-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a real‑time fraud detection pipeline from a legacy Kafka cluster to **Amazon Kinesis Data Streams (KDS)**. The client required sub‑second ingestion of millions of transaction events while keeping costs predictable and ensuring high availability.

**Action – Dive Deep into Capacity Mode**  
I first clarified that KDS offers two capacity modes:

| Mode | How it works | When to use |
|------|--------------|-------------|
| **On‑Demand** | AWS automatically scales the shard count as traffic spikes. | Best for unpredictable or bursty workloads where provisioning is complex. |
| **Provisioned (Legacy)** | You pre‑allocate a fixed number of shards; each shard supports 1 MB/s write and 2 MB/s read throughput. | Ideal when you have steady, predictable traffic and want tighter cost control. |

I mapped our traffic pattern: ~5 M events/day (~200 k events/min). With **On‑Demand**, we’d pay ~$0.015 per GB ingested plus a $0.02/shard‑hour for the default 1 shard. Calculated that a *provisioned* setup of **10 shards** (supporting 10 MB/s write) would cost ~30% less over the year, while guaranteeing at least 200 k events/min throughput.

**Design & AWS Services**  
- **KDS Provisioned** with 10 shards (auto‑scaling via `UpdateShardCount` on CloudWatch alarms).  
- **Amazon Kinesis Data Firehose** to deliver processed data into Redshift for analytics.  
- **AWS Lambda** for real‑time enrichment, using the `GetRecords` API within a 2 MB buffer per shard.  
- **CloudTrail + GuardDuty** for security audit and anomaly detection.

**Result – Deliver Results**  
After deployment:  
- Throughput consistently met 200 k events/min with <1% throttling.  
- Operational cost dropped from $12,000/month (Kafka) to $8,400/month (~30% savings).  
- Latency improved from 3 s to 0.5 s average.

**Reflection & Ownership**  
I took ownership of the migration, iterated on shard sizing using real telemetry, and documented a “shard‑count playbook” that reduced onboarding time for future teams by 40%. The experience reinforced my bias for action: I prototyped a proof‑of‑concept in two days, learned from a throttling failure (over‑provisioning one shard), and applied those lessons to the final architecture.

---

**Leadership Principles Highlighted**

- **Customer Obsession** – Delivering low‑latency fraud detection directly benefits end users.  
- **Ownership & Dive Deep** – I owned the entire migration, performed detailed capacity calculations, and iterated based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
