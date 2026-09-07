---
qid: ing_563f06a481__aws__local
question: 'Explain: How to prepare — Sierra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 543
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:02-05:00'
sources: []
---

**Situation**  
At my previous role I led the launch of *Sierra*, an internal ML‑pipeline that ingests 200 GB/day of sensor data to generate real‑time anomaly alerts for our edge devices. The existing batch jobs were 12 h long and missed critical events.

**Task**  
I had to design a scalable, low‑latency pipeline that could handle peak bursts (up to 5× normal traffic) while keeping cost under $3k/month.

**Action**  
*Customer Obsession & Ownership* – I mapped the user journey from ingestion to alert delivery and identified three pain points: lag > 30 min, high error rates during spikes, and opaque cost drivers.  

1. **Data‑ingestion** – Switched from SQS to Kinesis Data Streams (Shard size 1 MB/second) to support bursty traffic; added auto‑scaling with Lambda to process shards in parallel.  
2. **Feature extraction & model inference** – Deployed a containerized TensorFlow model on AWS SageMaker endpoint with autoscaling and weighted instance types (ml.m5.large for low latency, ml.c5.xlarge during spikes).  
3. **Result delivery** – Used DynamoDB Streams to trigger SNS notifications; added CloudWatch metrics and alerts for throughput/latency.

*Dive Deep & Bias for Action* – I ran a 48‑hour A/B test against the legacy pipeline, measuring:
- **Latency**: 95th percentile dropped from 35 min → 4.2 s (≈ 800× faster).  
- **Accuracy**: False‑positive rate fell from 12% to 3%.  
- **Cost**: Monthly spend reduced from $9k → $2.8k.

**Result**  
Within two weeks of deployment, Sierra processed peak traffic with <5 s latency and delivered alerts that improved mean time to recovery by 40%. The cost savings freed up $4k for R&D. I documented the architecture in a living design doc and held a “lessons‑learned” session; we later used this pattern for another product line, scaling it from 200 GB/day to 1 TB/day without redesign.

**Bar‑raiser cues** – Demonstrated end‑to‑end ownership, quantified impact (latency, cost), deep dive into trade‑offs (instance choice vs. latency), and iterated based on failure data (spike handling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
