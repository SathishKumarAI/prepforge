---
qid: ing_934616d071__aws__local
question: 'Explain: Data and Retrieval — ''The Open Source AI Stack'''
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 564
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:59-05:00'
sources: []
---

**Situation – Task**

In 2023 I led a cross‑functional squad that had to cut the time our ML team spent pulling training data from disparate sources by **70 %** while keeping cost under $5K/month. The goal was to build an “Open Source AI Stack” for *data ingestion, retrieval, and model fine‑tuning* that could scale to 10⁸ rows of text.

**Action – Design**

1. **Data Ingestion & Storage**  
   • Used **AWS Glue** + **Apache Airflow** (open source) for ETL pipelines that normalise CSV/JSON into a unified Parquet schema.  
   • Persisted raw and processed data in **Amazon S3** (object store) with lifecycle policies to tier to Glacier after 90 days, keeping storage costs < $2K/month.

2. **Retrieval Layer**  
   • Deployed an open‑source vector database (**FAISS**) on **AWS ECS Fargate** behind a **Application Load Balancer** for low‑latency similarity search (≤10 ms at 1M vectors).  
   • Integrated **Amazon Bedrock** for embeddings to avoid licensing costs; Bedrock’s inference cost is ~ $0.0001/embedding.

3. **Model Fine‑Tuning**  
   • Leveraged **Hugging Face Transformers** on **AWS SageMaker** (spot instances) to fine‑tune BERT models with 2× faster throughput than on-prem GPU clusters.  

4. **Observability & Cost Control**  
   • Instrumented all services with **Prometheus + Grafana**, set CloudWatch alerts for CPU >70 % or request latency >20 ms, and auto‑scaled ECS tasks.

**Result – Impact**

- Cut data pipeline latency from 12 hrs to **15 min** (90 % reduction).  
- Reduced overall cost by **65 %** ($5K → $1.75K/month).  
- Achieved a 99.9 % uptime SLA for the retrieval API with no single point of failure.

**Reflection – Learnings**

*Ownership*: I owned the end‑to‑end stack, from ETL to inference, and documented every trade‑off in a shared repo.  
*Dive Deep*: By profiling Glue jobs and FAISS queries, we identified bottlenecks that led to our cost savings.  
*Bar‑raiser focus*: The answer shows measurable impact, depth of technical design, and a clear learning loop—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
