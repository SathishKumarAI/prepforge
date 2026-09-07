---
qid: ing_bfc34c741a__aws__local
question: 'Explain: Database Choice — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 520
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:48-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that had to build an end‑to‑end recommendation engine for a retail platform. The interview asked me to explain how we chose the database and prepared for a system‑design session.

**Action (Design & AWS)**  
I began by **diving deep** into our data profile: 1 B user events per day, 500 k products, and a requirement for < 200 ms latency on top‑of‑page recommendations. I mapped three candidate stores:

| Store | Strengths | Trade‑offs |
|-------|-----------|------------|
| **Amazon DynamoDB** | Single‑digit ms reads, auto‑scaling, managed | Higher write cost, limited complex queries |
| **Amazon Aurora (PostgreSQL)** | ACID, rich SQL, read replicas | Scale‑out limits, higher latency on hot keys |
| **ElasticSearch** | Full‑text & vector search, fast KNN | Consistency trade‑off, operational overhead |

I chose **DynamoDB + SageMaker endpoints**. DynamoDB handled real‑time clickstream ingestion (30 M ops/sec) with provisioned throughput and adaptive scaling. For offline model training we used **S3 + EMR on Spark**, persisting feature tables in **Amazon Redshift Spectrum** for fast SQL joins. The recommendation inference ran on a **SageMaker endpoint** behind an **Application Load Balancer** that automatically scales to 10 k concurrent requests.

**Result**  
After launch, we achieved a 3× reduction in latency (from 650 ms to 210 ms) and increased conversion by **12%**, costing <$2M/yr vs the $4.5M baseline of a monolithic MySQL solution.  

**Reflection (Bar‑raiser)**  
I owned the trade‑off analysis, surfaced risks early, and iterated on the schema after a 15% hit‑rate dip in production—adjusting the partition key to include a `user_segment` field restored performance within 48 h.

> *Leadership Principles*: **Customer Obsession** (delivering faster recommendations), **Ownership** (owning the full data pipeline), **Dive Deep** (profiling, metrics), **Bias for Action** (quick iteration after failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
