---
qid: ing_b1c934a844__aws__local
question: 'Explain: Shard — Amazon Kinesis Data Streams Terminology and concepts -
  Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 388
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:52-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my tenure as a **Data Engineer at XYZ Corp**, I led the migration of our real‑time analytics pipeline from on‑prem Kafka to **Amazon Kinesis Data Streams (KDS)**. The core challenge was understanding and configuring *shards*—the fundamental throughput units in KDS.

**Situation / Task**  
We needed to ingest 1 TB/day (~10 M records) while keeping latency < 5 s for downstream dashboards.  

**Action**  
I mapped each shard’s capacity (2 MB/s or 1000 records/s per direction). Using *Dive Deep*, I calculated that a **single shard could handle ~200 kB/s of data**. To meet our throughput, I provisioned **20 shards** (400 MB/s total), adding an extra 10% buffer for peak spikes.  
I implemented auto‑scaling via CloudWatch alarms on *WriteProvisionedThroughputExceeded* metrics, triggering a Lambda that added or removed shards in 1‑minute intervals—an example of *Bias for Action*.  

**Result**  
Post‑migration, ingestion latency dropped from 12 s to **3.2 s**, and the system sustained 1.2× peak traffic without outages. Cost savings were 35% compared to a Kafka cluster of equivalent capacity, thanks to KDS’s pay‑per‑use model.  

**Reflection**  
This project reinforced *Ownership*: I owned the end‑to‑end pipeline, performed root‑cause analysis on throttling events, and iteratively tuned shard count—demonstrating depth and quantified impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
