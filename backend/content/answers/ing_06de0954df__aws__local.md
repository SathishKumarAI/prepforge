---
qid: ing_06de0954df__aws__local
question: 'Explain: Log Compaction — Logcompaction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 495
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:41:30-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role at a fintech startup I was tasked with building a *log‑compaction* service for our event store that kept the size of the WAL under 10 GB while still guaranteeing eventual consistency for downstream analytics.

| **Situation** | Our Kafka topic grew to 30 GB/24 h; consumers started lagging, SLA breaches rose from 0.1 % to 2 %. |
|--------------|--------------------------------------------------------------------|
| **Task**     | Reduce the log footprint by at least 60 % without affecting read latency. |
| **Action**   | • Designed a *compact‑only* partition strategy using Kafka’s built‑in compaction with `min.cleanable.dirty.ratio=0.1`.  
• Added a background Lambda (Python 3.10) that scanned the topic every 12 h, identified stale keys via an in‑memory hash of latest offsets, and produced *delete* markers (`_DELETE`) to trigger compacting.  
• Deployed the Lambda on **AWS Fargate** for cost isolation; used **SQS** as a queue to decouple scan jobs.  
• Monitored compaction progress with CloudWatch metrics (`kafka.log.compacted.size`). |
| **Result**   | Log size dropped from 30 GB → 11 GB (≈63 % reduction). Consumer lag fell below 100 ms, SLA compliance improved from 98 % to 99.9 %. Cost of the compaction layer was <$0.05/h, a 75 % savings over a dedicated EC2 instance. |

**Leadership Principles Highlighted**

- **Ownership** – I owned the end‑to‑end flow, from Kafka config tuning to Lambda orchestration.  
- **Dive Deep** – I profiled topic metadata, measured compaction impact on read/write latency, and iterated until metrics met targets.  

**Bar‑raiser takeaways:** clear ownership narrative, quantified impact (GB saved, SLA improved), deep technical reasoning (Kafka params, cost trade‑offs), and evidence of learning from initial mis‑configurations (tuning `min.cleanable.dirty.ratio`).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
