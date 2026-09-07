---
qid: ing_ec9fe2ec7e__aws__local
question: 'Explain: Key Features — Apachehbase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 506
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:13:35-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a 4‑year legacy analytics platform from a single‑node MySQL cluster to a horizontally scalable NoSQL store that could ingest > 10 TB/day of telemetry data while keeping query latency under 200 ms for real‑time dashboards.

**Action**  
I chose **Apache HBase** because it offers:

| Feature | Why It Matters |
|---------|----------------|
| **Column‑family schema** | Allows sparse, dynamic columns per entity; we stored device metadata in one family and time‑series metrics in another, reducing storage by ~35 %. |
| **Row‑key design & Bloom filters** | Custom row keys (timestamp‑deviceID) plus HBase’s Bloom filter cut point lookup cost from 1.2 s to < 50 ms for 99th‑percentile reads. |
| **Compaction & WAL** | Automatic minor/major compactions keep hot data in memory; we tuned the WAL size to 256 MB, lowering write amplification by 40 %. |
| **RegionServer auto‑splitting** | Regions split every 10 GB of data, ensuring no single node became a bottleneck. |

I orchestrated the deployment on **Amazon EMR** (HBase + Hadoop) with **EBS gp3** for storage and leveraged **Elastic Load Balancer** to distribute scan requests across RegionServers. Cost modeling showed a 30 % reduction vs. an equivalent DynamoDB solution, while maintaining 99.9 % availability through multi‑AZ replication.

**Result**  
Post‑migration, real‑time query latency dropped from 1.4 s to **120 ms**, throughput increased from 200 req/s to **15 k req/s**, and storage costs fell by **$12K/month**. The team now supports a data lake that powers 50+ ML models with near‑real‑time feature feeds.

**Reflection (Bar‑raiser)**  
I took full ownership of the migration, dove deep into HBase internals to tune Bloom filters and compaction schedules, quantified every change, and learned from an early failure where mis‑tuned region splits caused a 10 % spike in latency—prompting us to add automated monitoring alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
