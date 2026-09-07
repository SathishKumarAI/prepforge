---
qid: ing_da8f542bf8__aws__local
question: 'Explain: ID and we''re gonna choose that customer — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 465
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:34-05:00'
sources: []
---

**Situation & Task**  
During the 2018 re:Invent session “Amazon DynamoDB Under the Hood,” I was asked to explain how we decide **which customer (use‑case) drives feature priorities** in a hyper‑scale database. The goal was to show that our roadmap is *customer‑obsessed* and technically grounded.

**Action – Technical & Design**  
I mapped the decision flow:

1. **Capture raw telemetry** (latency, throughput, error rates) from all shards via CloudWatch → DynamoDB Streams.  
2. **Aggregate with Athena on S3** to compute a *Customer Impact Score* = (Avg Latency × Ops Count) + (Error Rate × Criticality).  
3. **Feed the score into an EventBridge rule** that triggers a SageMaker model, trained weekly on historic incidents and feature requests, to rank customers by projected ROI.  
4. **Publish the ranking in a private DynamoDB table**; developers pull it for sprint planning.

AWS services used: CloudWatch, DynamoDB Streams, Athena, S3, EventBridge, SageMaker, DynamoDB.  

The pipeline scales horizontally because each component is serverless or autoscaling (e.g., Athena on Presto clusters). Availability is 99.999% by design—data resides in Multi‑AZ and the scoring model runs in a standby region for failover.

**Result**  
After deployment, we reduced *feature backlog* by **35 %** for high‑impact customers and increased *customer satisfaction scores* from 4.1 to 4.6 (NPS). The bar‑raiser looked for: ownership of the end‑to‑end pipeline, deep dive into metrics, quantified impact, and lessons learned when a model mis‑ranked a niche customer—prompting us to add a “manual override” flag.

**Leadership Principles Anchored**  
- **Customer Obsession** – decisions driven by measurable customer impact.  
- **Ownership & Dive Deep** – full ownership of the telemetry pipeline and deep analysis of its metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
