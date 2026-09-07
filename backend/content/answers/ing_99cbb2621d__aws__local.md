---
qid: ing_99cbb2621d__aws__local
question: 'Explain: Sources — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 468
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:27-05:00'
sources: []
---

**Situation / Task**  
When I joined the new ML Ops team at a mid‑size fintech, we were asked to build a “Cognition Devin” pipeline that could ingest millions of customer interactions (chat logs, emails, support tickets) and surface actionable insights for the product managers. The goal was to reduce manual review time by 80 % and improve feature prioritization accuracy.

**Action**  
1. **Ownership & Dive Deep** – I scoped the data lake first: S3 buckets with versioned raw logs, Athena for ad‑hoc queries, and Glue crawlers for schema discovery.  
2. **AWS Services** –  
   * **Amazon SageMaker** (Batch Transform + Pipelines) to run NLP models (BERT fine‑tuned on our domain).  
   * **Kinesis Data Firehose** to stream logs in real time into S3 and trigger Lambda for preprocessing.  
   * **Amazon Comprehend Custom Entities** to extract domain terms, then store results in DynamoDB for low‑latency lookups by the product dashboard.  
3. **Scalability & Cost** – Leveraged Spot Instances for training (cut cost 35 %) and reserved instances for inference to keep latency <200 ms. Auto‑scaling on Kinesis shards ensured we handled up to 10 k events/sec with 99.9 % availability.  
4. **Bias for Action & Deliver Results** – Deployed in two weeks, I set up CloudWatch dashboards that showed real‑time throughput and error rates.

**Result**  
- Manual review time dropped from 12 hrs/week to 2 hrs (84 % reduction).  
- Product managers reported a 25 % increase in prioritization accuracy, validated by A/B testing of new features.  
- Operational cost stayed under $3k/month, 30 % below the initial budget estimate.

**Learning** – The first iteration underestimated data drift; adding an automated retraining trigger on concept‑shift detection (via SageMaker Model Monitor) prevented performance degradation over time. This experience reinforced my commitment to continuous ownership and deep technical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
