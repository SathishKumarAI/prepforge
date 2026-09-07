---
qid: ing_43d20d7c53__aws__local
question: 'Explain: Training Data Sources — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 455
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:37-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role as a ML Engineer at a fintech startup, I led the effort to build an embedding‑based search layer for customer support tickets. **Situation:** The product team needed 10× faster semantic retrieval than our keyword engine, but we had only noisy log data and a few labeled FAQ pairs.  
**Task:** Design a scalable pipeline that ingests diverse sources (structured logs, unstructured PDFs, chatbot transcripts), produces high‑quality embeddings, stores them in vector space, and exposes a low‑latency API.  
**Action:**  
1. **Data ingestion & preprocessing** – used AWS Glue to crawl S3 buckets, clean text with NLP libraries, and store intermediate Parquet files.  
2. **Embedding generation** – leveraged SageMaker Processing jobs running HuggingFace transformers (SBERT) on spot instances; achieved 0.8 cosine‑similarity recall on a held‑out test set.  
3. **Vector storage & search** – deployed Amazon Kendra for semantic search, backed by DynamoDB for metadata and Elasticsearch for fine‑grained filtering; cost was $1.2k/month vs $4.5k/quarter with our legacy solution.  
4. **API layer** – built a Lambda authorizer + API Gateway endpoint (≤ 20 ms latency) that queried Kendra and returned top‑10 results.  

**Result:** Query throughput increased from 50 to 500 QPS, response time dropped 70%, and customer satisfaction scores rose 15 points in the next NPS cycle.  
**Leadership Principles:** *Customer Obsession* – focused on speed & accuracy; *Ownership* – drove end‑to‑end pipeline; *Dive Deep* – tuned transformer hyperparams and benchmarked storage costs.  

Bar‑raisers will note my ownership of data quality, deep dive into cost‑performance trade‑offs, quantifiable impact (NPS lift), and learning from an initial mis‑estimate that led us to switch from Elastic Search to Kendra for better semantic relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
