---
qid: ing_6dd85c59d9__aws__local
question: 'Explain: Query understanding — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 459
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:09-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
At my previous role I led the launch of a voice‑assistant feature that needed to surface relevant documents from a 200 GB knowledge base in real time. The requirement was: *“Given a natural‑language query, retrieve and rank the most useful passages within 300 ms.”*  

**Action (Dive Deep & Bias for Action)**  
1. **Model choice** – I evaluated dense retrieval (FAISS) vs. sparse BM25. Using a small pilot with 10k queries, FAISS achieved 0.72 NDCG@5 versus 0.58 for BM25; latency was 45 ms on a single EC2 instance.  
2. **RAG architecture** – I wrapped the retriever in an AWS Lambda layer and used SageMaker Neo to compile the BERT encoder for inference at 15 ms per query.  
3. **Scalability** – Deployed the Lambda behind an API Gateway with provisioned concurrency (200) and auto‑scaling on CloudWatch metrics, ensuring sub‑300 ms SLA under 10k QPS.  
4. **Cost & Availability** – Leveraged S3 for index storage, DynamoDB for query caching, and a multi‑AZ deployment; total monthly cost < $1,200 vs. projected $3,500 if using on‑prem GPU servers.

**Result (Deliver Results)**  
- Latency dropped from 800 ms to 280 ms (−65%).  
- Retrieval accuracy improved NDCG@5 by 22%.  
- User satisfaction score rose from 4.1/5 to 4.6/5, directly contributing to a 12% lift in feature adoption.

**Reflection (Learned & Bar‑raiser expectations)**  
I learned that the trade‑off between model size and latency can be mitigated with model compression (Neo) and serverless scaling. The bar‑raiser will note my ownership of both ML performance and operational cost, deep dive into metrics, and clear quantification of business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
