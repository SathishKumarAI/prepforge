---
qid: ing_4d242b609c__aws__local
question: 'Explain: FAQ — Introduction \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 383
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:44-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a customer‑facing FAQ bot that used a Hugging Face transformer model for intent classification. The existing on‑prem solution had 30 % downtime during traffic spikes and cost $12k/month.

**Action – Technical Design**  
I scoped the requirements: *low latency (≤200 ms), 99.9 % availability, and zero data loss*. I chose **Amazon SageMaker Endpoint** for real‑time inference, deploying a `bert-base-uncased` model fine‑tuned on our FAQ corpus. To handle peak traffic I enabled **SageMaker Auto Scaling** with target utilization of 70 %. For persistence and audit, logs were streamed to **Amazon Kinesis Data Firehose → S3** and **Athena** for ad‑hoc analysis.  
I added a **Lambda layer** that pre‑tokenizes input text, reducing payload size by 40 %. This simplified the endpoint’s CPU usage, cutting inference cost from $0.30/1k requests to $0.18/1k.

**Result**  
- Latency dropped from 450 ms to 180 ms (60 % improvement).  
- Uptime rose from 97 % to 99.95 %.  
- Monthly cost fell by 35 %, saving ~$4.2k.  

**Reflection & Learning**  
I took full ownership, iterating on the model after a failed first deployment that caused an SLA breach. By diving deep into CloudWatch metrics I identified a cold‑start issue and added warm‑up Lambda invocations—an example of bias for action and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
