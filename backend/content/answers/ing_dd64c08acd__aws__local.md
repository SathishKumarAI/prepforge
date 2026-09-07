---
qid: ing_dd64c08acd__aws__local
question: 'Explain: Storage — Uncovering Kafka\u2019s Hidden Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 544
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:45-05:00'
sources: []
---

**Situation (S)**  
I was leading a migration of our real‑time analytics platform from an on‑prem Apache Kafka cluster to Amazon MSK. The team expected cost savings, but the bill kept rising—$120 k/month for storage and I/O that we couldn’t justify.

**Task (T)**  
Identify the hidden infrastructure costs in Kafka’s storage layer and design a cost‑effective, scalable solution while keeping data durability and throughput intact.

**Action (A)**  

| Hidden Cost | Root Cause | AWS Service & Design |
|-------------|------------|----------------------|
| **EBS volume overprovisioning** | Producers wrote bursts of 10 GB daily; we allocated 200 GiB per broker to be “safe.” | Switched to **Amazon MSK with provisioned throughput** (1.5× the peak) and attached **S3 Glacier Deep Archive** for cold logs via **MSK Connect + S3 sink**. |
| **Unoptimized retention policies** | 30‑day retention on all topics, even those that were rarely queried. | Implemented **topic‑level TTLs** (1 day for clickstreams, 7 days for metrics) and automated deletion with **AWS Lambda** triggered by CloudWatch Events. |
| **I/O throttling on EBS** | High read/write bursts caused extra IOPS charges. | Moved to **EFS (through MSK Connect)** for intermediate buffering; leveraged **Provisioned Throughput Mode** to cap IOPS at 5,000 per file system. |

- Added **Amazon CloudWatch Metrics** (`kafka.broker.bytes.in/out`) and a **Cost Explorer dashboard** that highlighted the $3 k/month savings from each change.

**Result (R)**  
Within two weeks post‑migration:  

* Storage costs dropped from $120 k to **$42 k/month** (65% reduction).  
* Latency for consumer queries improved by 30%.  
* The team now owns a fully automated cost‑monitoring pipeline that alerts on anomalous spikes.

**Learning**  
I learned that Kafka’s “hidden” costs are often in the *defaults*—overprovisioned volumes, blanket retention, and unmonitored I/O. By diving deep into metrics and applying AWS native services, we turned a costly legacy system into a lean, scalable architecture—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
