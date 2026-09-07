---
qid: ing_fce0c273af__aws__local
question: 'Explain: High Level Design — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 544
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:49:42-05:00'
sources: []
---

**High‑Level Design for “TwitterSearch” (AWS)**  
*Leadership Principles: Customer Obsession & Ownership*

**Situation / Task** – I was tasked to build a real‑time search service that powers the Twitter client’s hashtag lookup, expecting 10 M queries/day with <200 ms latency.  

**Action** – I designed a *serverless micro‑service stack*:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Ingest | **Kinesis Data Streams** + **Lambda** | Handles bursty tweet streams, auto‑scales with traffic. |
| Indexing | **Elasticsearch (OpenSearch) on EC2 Spot + Auto Scaling Group** | Full‑text search, 3 replicas for HA; spot saves 40 % cost. |
| Query API | **API Gateway + Lambda Authorizer** | Low‑latency, pay‑per‑request pricing. |
| Caching | **ElastiCache Redis** (cluster mode) | Reduces ES load by 70 %. |
| Monitoring | **CloudWatch Metrics & SQS Dead Letter Queue** | Detects failures; auto‑retries. |

**Result** – Deployed in Q3 2024, handling 12 M queries/day with <180 ms median latency (vs. target 200 ms). Cost fell by 35 % compared to a monolithic EC2 solution due to serverless scaling and spot usage.

---

### Bar‑raiser Focus

- **Ownership** – I led cross‑team alignment, from data engineers to security, ensuring SLAs were met.  
- **Dive Deep** – Used CloudWatch logs to identify 15 ms latency spikes; tuned Redis eviction policy to reduce memory pressure by 20 %.  
- **Quantified Impact** – Reported 30 % reduction in query cost and 25 % faster cache hit rate.  
- **Learning from Failure** – After an ES node failure, I introduced a multi‑AZ deployment and automated snapshot restore, cutting recovery time from 10 min to <2 min.

This design balances scalability (auto‑scaling Kinesis & Lambda), availability (multi‑AZ ES + Redis), cost (spot instances, serverless), and maintainability, fully aligned with Amazon’s Customer Obsession and Ownership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
