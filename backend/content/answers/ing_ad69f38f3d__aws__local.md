---
qid: ing_ad69f38f3d__aws__local
question: 'Explain: Fort Works we''ve been doing quite a — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 445
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:57:39-05:00'
sources: []
---

**Situation / Task**  
I was tasked to modernize our fraud‑detection pipeline so that it could react in real time to every transaction event. The legacy batch system missed many high‑value anomalies because it only ran nightly.

**Action (Technical)**  
I redesigned the system as an *event‑driven architecture* using **Amazon Kinesis Data Streams** for ingestion, **AWS Lambda** for stateless processing, and **DynamoDB** for stateful enrichment. Each transaction event was enriched with user risk scores from a pre‑trained SageMaker model stored in **S3**, invoked via **Lambda Layers**. We added an **EventBridge** rule to trigger downstream alerts to **SNS** and **Step Functions** for SLA‑based escalations.

*Why this design?*  
- **Scalability:** Kinesis auto‑scales with throughput; Lambda scales horizontally per shard.  
- **Availability:** All services are 99.999% AZ‑redundant; we replicated the DynamoDB table across two regions for disaster recovery.  
- **Cost:** Spot Instances for SageMaker batch inference, and on‑demand Lambdas only when events arrive, kept monthly spend < $3K vs. $12K for the legacy batch.

**Result**  
Within 4 weeks of deployment we cut fraud loss by **32%** (from \$1.2M to \$0.8M) and reduced detection latency from 24h to < 5s. The system processed 10× more events with a 99.7% success rate.

**Reflection (Leadership Principles)**  
- *Ownership:* I led the end‑to‑end migration, owning both architecture and operational metrics.  
- *Dive Deep:* We instrumented CloudWatch dashboards that surfaced latency spikes; we iterated on shard sizing until CPU utilization stayed below 70%.  

*Bar‑raiser takeaway*: The answer shows ownership, deep technical reasoning, measurable impact, and a learning loop (instrumentation → optimization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
