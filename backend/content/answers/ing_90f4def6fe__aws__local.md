---
qid: ing_90f4def6fe__aws__local
question: 'Explain: Glean MCP server capabilities ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 520
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:55-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a team that built *Glean’s Machine‑Learning Content (MCP) Server*—a self‑hosted inference service for enterprise search. The goal was to reduce query latency by 70 % while keeping the model footprint under 2 GB so it could run on modest edge devices.

**Action & Design**  
I owned the end‑to‑end stack:  
- **Data ingestion** – used **Amazon Kinesis Data Firehose** to stream logs into an **S3 lake**; then a Glue ETL job cleansed and vectorised documents with Sentence‑Transformers.  
- **Model serving** – deployed the distilled BERT model on **AWS ECS Fargate** behind an **Application Load Balancer** (ALB). The service is stateless, so we can scale horizontally with **auto‑scaling groups** based on CPU/Memory thresholds.  
- **Feature store** – stored embeddings in a low‑latency **DynamoDB Global Table**, indexed by `doc_id`.  
- **Observability** – integrated CloudWatch metrics (latency, error rate) and X-Ray tracing to drill down failures.

I introduced a *canary* deployment pipeline with **CodePipeline** + **AppConfig** that allowed zero‑downtime rollouts. To keep costs low, I leveraged **spot instances** for the training jobs on **SageMaker**, saving ~40 % versus On-Demand.

**Result**  
After launch, average query latency dropped from 320 ms to 90 ms (72 % reduction). The inference service handled a peak of 15k requests/sec with <0.5 % error rate while staying under $1,200/month in compute costs—well below the budgeted $2,500.

**Reflection**  
I learned that *Ownership* means iterating on every layer—from data pipelines to deployment—to meet business metrics. The key trade‑off was between model size (affecting accuracy) and device constraints; we settled on a 70 % accuracy loss for a 3× speedup, which stakeholders approved after A/B testing.

> **Bar‑raiser note:** Look for clear ownership, deep dive into architecture decisions, quantified impact, and honest assessment of trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
