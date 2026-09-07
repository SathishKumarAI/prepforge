---
qid: ing_cfccb7f9ba__aws__local
question: 'Explain: Evaluation Criteria — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 486
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:35-05:00'
sources: []
---

**Situation & Task**  
While leading the migration of our recommendation engine to a server‑less architecture, I had to choose a vector database that could ingest 2 M user embeddings daily and serve sub‑millisecond similarity queries for 10 k concurrent users.

**Action – Evaluation Criteria (AWS Lens)**  

| Criterion | Why it matters | AWS Service Tie‑in |
|-----------|----------------|--------------------|
| **Latency & Throughput** | Real‑time recommendations demand <1 ms per query. | Amazon Kinesis + Lambda for ingestion; DynamoDB Accelerator (DAX) for caching. |
| **Vector Similarity Accuracy** | Precision of top‑k retrieval directly impacts CTR (target 5% lift). | SageMaker Feature Store + Faiss on EC2 Spot for offline re‑ranking. |
| **Scalability & Partitioning** | Must auto‑scale with user growth (+30% YoY). | Amazon Elastic Kubernetes Service (EKS) + Aurora Serverless v2 for metadata. |
| **Cost per Query** | Keep $0.0001/query to stay under budget. | Spot instances + Savings Plans; use S3 Glacier for cold data. |
| **Operational Simplicity** | Reduce MTTR <30 min for any failure. | Managed services (Aurora, DynamoDB), CloudWatch alerts, Auto‑Healing pods. |

I built a proof‑of‑concept with **Amazon QLDB + OpenSearch** (vector plugin) and benchmarked against **Pinecone** on EC2. Results: 0.8 ms latency, 99th percentile <1.5 ms, cost $0.00008/query, and a 4% lift in CTR after rollout.

**Result & Reflection**  
Delivered 150 % of the target performance while cutting ops costs by 22%. Learned that “ownership” means iterating on metrics until they align with business KPIs, not just hitting technical specs. The bar‑raiser will note my deep dive into latency trade‑offs, quantified impact on revenue, and proactive post‑mortem to prevent recurrence of a cold‑start spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
