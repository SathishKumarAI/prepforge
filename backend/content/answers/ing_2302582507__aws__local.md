---
qid: ing_2302582507__aws__local
question: 'Explain: Scaling to Millions of Documents — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 465
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:52-05:00'
sources: []
---

**Situation** – In my last role I was asked to build a production RAG (Retrieval‑Augmented Generation) system that could search and answer queries over **5 M+ legal documents** for an enterprise client. The SLA required 95 % of answers in < 1 s with a daily query volume of ~200k.

**Task** – Deliver a highly available, cost‑efficient pipeline that scales horizontally while keeping latency low.

**Action** –  
- **Document ingestion & embedding**: Used **AWS Glue** to crawl S3 buckets, then *Amazon SageMaker* notebooks to run a distilled BERT model. Results were stored in an **Elasticsearch domain** (managed by Amazon OpenSearch Service) with 10 GB per shard, auto‑scaling on CPU usage.  
- **Indexing & retrieval**: Leveraged *OpenSearch’s* vector search (k‑NN) with ANN‑indexing to reduce query time to < 200 ms. Implemented *S3 Transfer Acceleration* for fast uploads and *AWS Lambda@Edge* to cache popular embeddings at edge locations.  
- **Generation layer**: Deployed a **ChatGPT‑compatible endpoint** on *Amazon Bedrock*, throttled via an API Gateway + Lambda authorizer that used the OpenSearch score as a bias factor.  
- **Monitoring & cost control**: Configured CloudWatch metrics (latency, RPS, GPU usage) and set up budget alerts; we cut monthly spend by 18 % compared to a naive EC2‑only approach.

**Result** – Achieved 97 % SLA compliance with an average latency of **0.78 s**, processed **250k queries/day** at $0.12 per query, and reduced infrastructure cost by **$36K/month**.  

> *Leadership Principles*: **Ownership** (I drove the end‑to‑end pipeline), **Dive Deep** (analyzed OpenSearch logs to tune shard size), and **Deliver Results** (met/exceeded SLA with measurable savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
