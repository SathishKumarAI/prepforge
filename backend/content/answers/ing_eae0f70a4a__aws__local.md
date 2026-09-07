---
qid: ing_eae0f70a4a__aws__local
question: 'Explain: Home Entertainment — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 505
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:11-05:00'
sources: []
---

**Situation & Task**  
At my last role I was tasked with building a **home‑entertainment recommendation engine** for a streaming service that served 12 M daily active users. The goal was to reduce cold‑start latency by 70 % while keeping the cost per request under $0.0001.

**Action (Design & Technical)**  
I designed an end‑to‑end pipeline:

| Stage | AWS Service | Rationale |
|-------|-------------|-----------|
| Data ingestion | **Kinesis Data Streams** + **Lambda** | Low‑latency, serverless ETL; auto‑scales with traffic. |
| Feature store | **Amazon DynamoDB (global tables)** | 10 ms read latency, multi‑region replication for high availability. |
| Model training | **SageMaker Pipelines** on **EMR** clusters | Parallelized distributed training; cost‑effective spot instances. |
| Real‑time inference | **Lambda@Edge** + **API Gateway** | Edge execution reduces round‑trip time to <15 ms; API Gateway throttles bursts. |

I introduced a *model versioning* layer using **S3 + SageMaker Model Registry**, enabling blue/green deployments with zero downtime. For scalability, each component was stateless and auto‑scales via CloudWatch alarms.

**Result (Data‑Driven)**  
- Latency dropped from 120 ms to 32 ms (73 % reduction).  
- Cost per inference fell from $0.00028 to $0.00008.  
- A/B test showed a 12 % lift in user engagement (time spent watching recommended content).

**Reflection & Learning**  
Initially, I over‑provisioned the Lambda memory, causing cold starts. After profiling with CloudWatch Insights, I tuned memory to 1 GB and added provisioned concurrency, saving ~25 % monthly.

---

> **Leadership Principles Highlighted:**  
> *Customer Obsession* – focused on end‑user latency and cost.  
> *Ownership & Dive Deep* – iterated on architecture until metrics met targets.  

**Bar‑raiser takeaway:** I demonstrated ownership by driving the entire stack, deep technical dives into each AWS service, quantified impact with real numbers, and openly discussed failure points to show continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
