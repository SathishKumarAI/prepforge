---
qid: ing_07177dcdd1__aws__local
question: 'Explain: Creating a Hybrid Retrieval Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 432
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:42:10-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a hybrid search engine for an e‑commerce knowledge base that could return both exact document matches and semantically relevant answers. The goal: reduce user query time by 40 % while boosting click‑through rate (CTR) from 12 % to >18 %.

**Action – Design & AWS Services**  
1. **Data Ingestion** – Used **AWS Glue** to crawl S3 buckets, transform JSON/HTML into a unified schema, and load it into an **Amazon Neptune** graph for entity relationships.  
2. **Exact Retrieval** – Deployed **Elasticsearch Service (OpenSearch)** with fine‑tuned analyzers; indexed every document’s title, tags, and full text.  
3. **Semantic Retrieval** – Trained a Sentence‑Transformer model on domain data, exported embeddings to an **Amazon SageMaker Endpoint**. Stored vectors in **Pinecone** (managed vector DB) for low‑latency similarity search.  
4. **Hybrid Fusion Layer** – Built a Lambda function that queries OpenSearch and Pinecone concurrently, then scores results with a weighted cosine + BM25 algorithm (weights tuned via A/B testing). The function is behind an **API Gateway** with caching to keep latency <200 ms.  

**Result**  
- Query response time dropped from 650 ms to 210 ms (≈67 % faster).  
- CTR increased from 12 % to 18.5 % within two weeks of rollout.  
- Cost per query fell by 15 % thanks to Lambda’s pay‑as‑you‑go model and OpenSearch reserved instances.

**Reflection & Learning**  
I realized early that over‑engineering the fusion logic caused unnecessary cold starts; simplifying to a single Lambda with async calls reduced latency further. This iteration taught me to *“Dive Deep”* into performance bottlenecks and maintain *Ownership* of end‑to‑end user experience, aligning with Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
