---
qid: ing_ae217e60f9__aws__local
question: 'Explain: Dense (Semantic) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 442
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:22-05:00'
sources: []
---

**Situation**  
At my previous role I led a product that needed instant, highly relevant answers from a 1 TB document corpus for a customer‑facing chatbot. The existing keyword search returned 80 % precision but missed contextually similar docs.

**Task**  
Design a hybrid retrieval pipeline that combines semantic embeddings with keyword ranking to boost relevance while keeping latency <200 ms and cost <$0.02/query.

**Action**  
1. **Embeddings** – Trained an *Siamese* BERT model on 500k QA pairs, deployed as a SageMaker endpoint (scalable inference).  
2. **Vector store** – Used Amazon Kendra with its built‑in semantic search plus a custom Pinecone index for fine‑tuned embeddings; both replicated in us-east-1 and us-west-2 for high availability.  
3. **Hybrid scoring** – Built an AWS Lambda layer that scores documents using cosine similarity (semantic) + BM25 (keyword), then normalizes with a learned weight vector via SageMaker batch transform.  
4. **Caching & autoscaling** – Leveraged ElastiCache‑Redis to cache top‑10 hits per query; auto‑scales on CloudWatch metrics.

**Result**  
- Precision@1 rose from 0.78 to **0.93** (a 19 % lift).  
- Query latency dropped from 350 ms to **180 ms**.  
- Cost per query fell from $0.04 to **$0.015**, saving ~$120k annually.

**Learning** – Early trials over‑parameterized the embedding model, causing cold‑start delays; refactored with a smaller DistilBERT and batch inference to recover performance.

> *Leadership Principles:* **Customer Obsession** (improved answer quality), **Ownership** (full end‑to‑end pipeline), **Dive Deep** (profiling latency/cost trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
