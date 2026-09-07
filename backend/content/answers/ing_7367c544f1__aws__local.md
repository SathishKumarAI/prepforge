---
qid: ing_7367c544f1__aws__local
question: 'Explain: Listen to: ''What is a data architecture?'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 435
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:46:42-05:00'
sources: []
---

**Answer**

> *In my previous role as an ML Engineer on the Fraud Detection team, I was asked: “What is a data architecture?” The interviewer wanted to gauge my ownership of end‑to‑end pipelines and my bias for action.*

**Situation & Task**  
We had 3 petabytes of transactional logs arriving in real time. Our goal was to feed a nightly batch model that scored risk with < 5 % false positives while keeping latency under 1 s for live scoring.

**Action**  
I designed a **lake‑to‑warehouse architecture**:

| Layer | AWS Service | Purpose |
|-------|-------------|---------|
| Ingestion | Kinesis Data Streams → Glue Crawler | Real‑time capture, schema discovery |
| Storage | S3 (partitioned by day) + Athena | Durable, cost‑effective cold store |
| Processing | EMR Spark & Lambda (for micro‑batch) | Feature engineering, model training |
| Serving | SageMaker Endpoint (GPU instances) + API Gateway | Low‑latency inference |

I introduced **data quality checks** in Glue jobs and a **monitoring DAG** that sent alerts to CloudWatch if drift > 2 %. The design achieved 99.9% availability and cut storage costs by 35 % versus the legacy on‑prem Hadoop cluster.

**Result**  
Model accuracy improved from 92 % to 97 %, reducing fraud losses by $1.2 M annually. I documented the architecture in Confluence, enabling two other teams to reuse it for their own ML projects.

> **Leadership Principles:** *Ownership* (I drove the entire pipeline), *Dive Deep* (I quantified every cost and latency metric).  
> **Bar‑raiser cue:** Demonstrated end‑to‑end ownership, deep technical reasoning, measurable impact, and a lesson learned: always expose data lineage to avoid “unknown unknowns.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
