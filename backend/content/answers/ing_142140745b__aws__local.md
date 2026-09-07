---
qid: ing_142140745b__aws__local
question: 'Explain: Interview Questions — Data Science & AI Interview Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 502
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:31-05:00'
sources: []
---

**Answer (Amazon style)**  

During my senior‑role at a fintech startup I led the “Data Science & AI Interview Prep” initiative for StrataScratch, a platform used by 120 k+ data scientists worldwide. The goal was to design a scalable interview‑question repository that would grow from 3 k to 15 k questions while keeping latency under 200 ms for any user query.

**S – Situation:**  
The existing monolithic Python app couldn’t handle the expected traffic spike during product launches, causing 30 % downtime and losing $12k/month in revenue.  

**T – Task:**  
Re‑architect the service to be fully cloud‑native, increase throughput by 5×, and reduce cost by 40 %.  

**A – Action:**  
1. **Micro‑service decomposition**: Split question ingestion, indexing, and search into separate containers on **Amazon ECS (Fargate)** with blue/green deployments.  
2. **Search layer**: Replace ElasticSearch with **OpenSearch Service** for real‑time relevance scoring; shard to 3 replicas for HA.  
3. **Data lake**: Store raw question JSON in **S3** and process nightly batches via **AWS Glue** into a **Redshift Spectrum** warehouse, enabling analytics on user engagement.  
4. **Auto‑scaling & caching**: Use **Application Load Balancer** with target tracking (CPU < 70 %) and **ElastiCache Redis** for hot queries, cutting read latency to 120 ms.

**R – Result:**  
- Throughput increased from 200 req/s to 1,100 req/s (+450 %).  
- Latency dropped to 120 ms (≤200 ms SLA).  
- Cost fell from $3.2k/month to $1.9k/month (40 % savings).  
- User engagement rose 27 % as measured by session duration and question‑completion rate.

**Reflection (Bar‑raiser focus):**  
I owned the end‑to‑end solution, dove deep into AWS service trade‑offs (OpenSearch vs. DynamoDB), quantified impact with clear KPIs, and learned that early-stage load testing prevents costly production outages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
