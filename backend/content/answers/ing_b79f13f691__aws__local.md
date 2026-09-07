---
qid: ing_b79f13f691__aws__local
question: 'Explain: Clarifying questions & assumptions — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 525
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:06-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional sprint to replace our legacy keyword search with a **semantic search engine** for an enterprise knowledge base that served ~50 k daily users. The goal was to improve click‑through by 20% while keeping latency <300 ms.

**Clarifying Questions & Assumptions (Dive Deep, Ownership)**  
1. *What is the business objective?* – “Higher user satisfaction and reduced support tickets.”  
2. *Which content types need ranking?* – Docs, FAQs, code snippets.  
3. *How much data drift can we tolerate?* – Expect 5 % concept drift per month.  
4. *Latency vs cost trade‑off?* – Accept up to 500 ms if it cuts EC2 spend by 30%.  

Assumptions:  
- All content is stored in S3; users authenticate via Cognito.  
- Search will be read‑heavy (≈90% reads).  

**Solution Design**  
| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Ingest & Embedding | Lambda + SageMaker endpoint (Sentence‑Transformers) | Serverless scaling, auto‑scaling for batch jobs. |
| Vector Store | Amazon Kendra (vector search) or DynamoDB with GSI on embeddings | Built‑in semantic ranking; Kendra gives 15 % higher precision. |
| API Layer | API Gateway + Lambda @ Edge | Low‑latency edge caching, secure auth via Cognito. |
| Monitoring | CloudWatch + X-Ray | Capture latency, error rates; auto‑scale alarms. |

**Result (Deliver Results)**  
- Click‑through increased **23%** in 3 months.  
- Support tickets dropped by **18%**.  
- Cost reduced by **27 %** versus a self‑hosted Elasticsearch cluster.

**Bar‑raiser Notes**  
- Ownership: I scoped the MVP, led architecture decisions, and drove the go‑live.  
- Dive Deep: I validated assumptions with real usage data (latency logs) and iterated on embedding dimensionality to balance precision vs cost.  
- Learning from Failure: The first prototype mis‑estimated vector size; we re‑engineered embeddings, saving 12 % in storage costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
