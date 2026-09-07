---
qid: ing_353d8a90cc__aws__local
question: 'Explain: Scaling & ops — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 482
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:53-05:00'
sources: []
---

**Situation & Task (Customer Obsession & Ownership)**  
I led the rollout of an Enterprise Retrieval‑Augmented Generation (RAG) assistant for a Fortune 500 client that needed instant, accurate policy answers across 3 TB of internal documents. The goal was to reduce support tickets by 30% and cut agent time per query from 12 min to under 30 sec.

**Action (Dive Deep & Bias for Action)**  
1. **Data Layer** – Ingested PDFs, Word docs, and Confluence pages into an S3 bucket, triggered AWS Glue jobs that extracted text, cleaned it with Amazon Comprehend, and stored embeddings in a Pinecone vector index via the OpenSearch Service domain (dedicated cluster).  
2. **Inference Layer** – Deployed a serverless Lambda function behind API Gateway that calls SageMaker Endpoint (LLM ChatGPT‑Turbo) to generate responses conditioned on the top‑k vectors retrieved by OpenSearch.  
3. **Observability & Auto‑Scaling** – Integrated CloudWatch metrics, set up an Application Load Balancer with Target Groups for Lambda concurrency, and used AWS X-Ray for latency tracing.  

**Result (Deliver Results)**  
- Cut average query time from 12 min to **0.28 s** (≈ 4,000× faster).  
- Reduced support tickets by **34%**, surpassing the target by 4 points.  
- Costed $3,200/month vs. $9,500/month for the legacy system—**65% savings**.

**Bar‑raiser takeaways**  
*Ownership*: I owned the full data pipeline and paid‑for‑performance loop.  
*Depth*: Detailed trade‑off analysis between OpenSearch vs. DynamoDB for vector storage; chose cost‑effective yet low‑latency option.  
*Quantified Impact*: Reported precise latency, ticket volume, and cost metrics.  
*Learning*: First attempt hit a cold‑start issue; I introduced warm‑start caching in Lambda to eliminate the spike—documented lesson shared across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
