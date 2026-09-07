---
qid: ing_4e8a6ba614__aws__local
question: 'Explain: Pipeline anatomy — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 373
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:53-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to build a production‑grade RAG (Retrieval‑Augmented Generation) system for a customer‑facing chatbot that needed to answer domain‑specific queries with 95 % accuracy while staying within a $5k/month budget.  

**Action – Pipeline Anatomy**  
1. **Document ingestion & embedding** – S3 → Lambda (Python, `sentence-transformers`) → DynamoDB for vector metadata; embeddings stored in an AWS OpenSearch index for nearest‑neighbour search.  
2. **Retrieval layer** – API Gateway + AppSync triggers a Lambda that queries OpenSearch with the user prompt’s embedding, returning top‑k passages.  
3. **Generation layer** – The same Lambda calls Amazon Bedrock (Claude 3) with the prompt plus retrieved context; the response is streamed back via WebSocket to the client.  

I added **Cognito** for auth and a CloudWatch metric `RAGLatency` that averages 250 ms per request, meeting our SLA.  

**Result**  
- Achieved 96 % answer accuracy (measured against a manually annotated test set).  
- Reduced serverless cost by 30 % by caching embeddings in ElastiCache Redis and tuning OpenSearch shard size.  

**Reflection**  
I owned the end‑to‑end flow, dove deep into latency bottlenecks, and iterated on embedding models to balance quality vs. cost—showing *Ownership* and *Dive Deep*. The system now scales to 10k concurrent users with <99.9 % availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
