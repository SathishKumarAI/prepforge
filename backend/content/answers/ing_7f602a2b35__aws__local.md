---
qid: ing_7f602a2b35__aws__local
question: 'Explain: Cost model — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 485
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:06-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑Ops team at a mid‑size fintech, we were asked to build a *Customer Distillation Pipeline* that aggregates raw interaction logs into cost‑effective, reusable customer insights for downstream ML models. The goal was to reduce storage and compute costs by 30 % while keeping latency under 2 s.

**Action**  
I owned the end‑to‑end architecture:

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest raw logs | **Amazon Kinesis Data Firehose** → **S3** (tiered storage) | Low‑latency ingestion, auto‑scaling |
| Real‑time aggregation | **AWS Lambda** + **DynamoDB Streams** | Serverless compute, pay per invocation |
| Batch distillation | **AWS Glue** jobs on **Amazon EMR** (Spark) | Handles large data sets cost‑effectively |
| Model scoring | **SageMaker Endpoint** with **EFS** for model artifacts | Low‑latency inference, shared storage |
| Cost monitoring | **Cost Explorer API** + **CloudWatch Alarms** | Continuous visibility |

I introduced a *data lake* tier: hot (S3 Intelligent‑Tiering), warm (Glacier Deep Archive) and cold (S3 Glacier). The pipeline’s Lambda functions tag data with a “cost‑bucket” attribute; Glue jobs only read the relevant buckets, cutting compute by 35 %. I also set up automated scaling for EMR clusters based on queue depth.

**Result**  
- **Storage cost ↓ 32 %**, **compute cost ↓ 28 %** in six months.  
- Latency stayed at **1.8 s** average per request.  
- The team now reuses distilled insights across 4 downstream ML projects, saving an additional $120k annually.

**Learning**  
I realized that *Ownership* means iterating on the cost model until it aligns with business metrics, and *Dive Deep* requires exposing raw data to surface hidden inefficiencies—exactly what this pipeline achieved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
