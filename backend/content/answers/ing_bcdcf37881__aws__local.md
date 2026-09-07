---
qid: ing_bcdcf37881__aws__local
question: 'Explain: Exact vs Approximate Search — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 372
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:38-05:00'
sources: []
---

**Exact vs Approximate Search in Vector Databases**

*Situation & Task*: In a recent project I led the migration of an AI‑driven recommendation engine from a legacy similarity service to Amazon OpenSearch and QLDB. The goal was to reduce query latency by 70 % while keeping mean recall above 95 %.

*Action (Technical)*:  
- **Exact Search**: implemented brute‑force cosine similarity on the full vector index in OpenSearch, guaranteeing perfect recall but incurring O(n) time.  
- **Approximate Search**: switched to HNSW via Amazon Kendra’s “vector search” feature and custom Pinecone integration, reducing complexity to O(log n).  
- Leveraged **Amazon SageMaker Endpoint** for on‑the‑fly embeddings, **S3** for storage, and **AWS Lambda** for query orchestration.  
- Designed a dual‑index strategy: exact index for high‑value items (top 1 % of traffic) and approximate index for the rest.

*Result*: Latency dropped from 350 ms to 55 ms (84 % reduction). Recall stayed at 96.3 %, exceeding SLA. Cost per query fell by 60 %.  

*Reflection*: Ownership drove me to balance recall vs speed; diving deep into HNSW trade‑offs revealed that index rebuild time was acceptable (<5 min) compared to the latency gains. I documented a rollback plan and shared learnings with the data science team, embodying **Ownership** and **Customer Obsession**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
