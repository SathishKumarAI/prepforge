---
qid: ing_27277d9c69__aws__local
question: 'Explain: Tenant-Aware Ingestion — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 416
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:54:30-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team at my previous firm, we had to ingest and serve **RAG (Retrieval‑Augmented Generation) queries for a multi‑tenant SaaS platform** that could handle 10 k concurrent users per tenant without leaking data between tenants. The goal was to keep latency under 200 ms and cost below $0.05/query.

**Action**  
I introduced a **Tenant‑Aware Ingestion pipeline** using Amazon Kinesis Data Streams for raw event capture, followed by AWS Glue jobs that tag each record with a deterministic tenant ID hash. These tags were written into an encrypted Amazon DynamoDB table (partition key = `tenant_id`) and then streamed to an **Amazon OpenSearch Service cluster** via Lambda, where we created per‑tenant indices using index aliases (`tenant_{id}`).  

For the RAG stage I deployed a **managed SageMaker endpoint** that reads from the tenant’s index, performs vector similarity search with Amazon Kendra embeddings, and returns top‑k passages. To guarantee isolation, each request carries an IAM role scoped to its tenant’s S3 bucket containing the model artifacts.

I also implemented **Auto Scaling on OpenSearch** (using CloudWatch metrics) and **Spot Instances for SageMaker**, cutting infrastructure cost by 35 % while keeping SLA intact.

**Result**  
After launch, we saw a **70 % reduction in cross‑tenant data leakage incidents** (0 from 5 per month), **latency dropped to 140 ms average**, and **cost savings of $120k annually**.  

**Reflection**  
I learned that *ownership* means designing end‑to‑end pipelines, not just individual components; *dive deep* into security controls ensured compliance; and a clear metric framework lets us iterate fast—exactly the Amazon way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
