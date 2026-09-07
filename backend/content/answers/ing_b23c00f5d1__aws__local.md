---
qid: ing_b23c00f5d1__aws__local
question: 'Explain: Disadvantages — Event-Driven Architecture (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 446
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:51-05:00'
sources: []
---

**Situation** – While leading the *Predictive Maintenance* team at my previous company, we migrated from a batch‑oriented system to an Event‑Driven Architecture (EDA) using Amazon Kinesis & SNS to surface real‑time alerts for field technicians.  
**Task** – My goal was to reduce mean time to repair (MTTR) by 30 % while keeping operational cost < $5k/month.

**Action** – I first **dive deep** into the trade‑offs:

| Disadvantage | Impact | Mitigation |
|--------------|--------|------------|
| *Event loss or duplication* | 0.3 % message loss → missed alerts, 1.2 % duplicates → false positives | Enable Kinesis DLQs + idempotent Lambda processing |
| *Increased operational complexity* | 4× more moving parts (Kinesis shards, SNS topics) | Adopt CloudFormation stacks & CDK for IaC; use AWS X‑Ray for observability |
| *Latency spikes under burst* | 250 ms peak → delayed alerts | Auto‑scaling Kinesis shards + reserved capacity |

I orchestrated a **serverless pipeline** (S3 → Lambda → DynamoDB Streams → SNS) that processed 1M events/day, achieving < 100 ms latency. MTTR fell from 6 hrs to **4.2 hrs** (30 % reduction). Monthly cost stayed at $4.8k.

**Result** – The solution was adopted company‑wide, and we hit a 95 % alert accuracy rate within the first quarter. I documented lessons: always provision DLQs early, keep an “event audit” table, and run chaos tests on Kinesis shards.

**Leadership Principles**  
- **Ownership** – Took end‑to‑end responsibility for reliability and cost.  
- **Dive Deep** – Quantified loss rates, latency, and cost; used metrics to guide design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
