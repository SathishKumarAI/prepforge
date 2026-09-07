---
qid: ing_838da6d443__aws__local
question: 'Explain: Indexer — Doccollaborationdropboxgoogledocs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 458
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:22:28-05:00'
sources: []
---

**Situation / Task**  
In my last role I built an *indexer* that ingested collaborative docs (Google Docs, Dropbox Paper, Microsoft Teams files) into a searchable vector store so our recommendation engine could surface relevant content in real time.

**Action**  
I first scoped the ingestion pipeline:  
1. **Extract** – Use each platform’s API to pull metadata and raw text on a scheduled Lambda (every 5 min).  
2. **Transform** – Strip formatting, run NLP tokenization + sentence‑level embeddings with Amazon SageMaker’s `amazon/sagemaker-text-embedding` endpoint.  
3. **Load** – Store vectors in an Amazon OpenSearch domain for low‑latency similarity search; attach a DynamoDB table for doc metadata and versioning.

I chose **OpenSearch** because it gives sub‑100 ms query latency at scale, is fully managed (high availability), and integrates natively with IAM. To keep costs down I enabled *dedicated master nodes* only during peak hours and used *warm storage* for older docs.

**Result**  
After launch, search hit‑rate rose from **12% to 34%**, and user time spent per session increased by **18 %**. The indexer processed ~2 M documents/month with <0.5 s average latency, staying under $4K/Month.

**Reflection (Bar‑raiser)**  
I took full ownership: I wrote the CI/CD pipeline, monitored drift with CloudWatch metrics, and iterated on embedding models after a 7 % error spike from noisy PDFs. The deep dive into API limits and cost trade‑offs paid off by preventing vendor lock‑in and keeping latency predictable.

> **Leadership Principles**  
> • *Customer Obsession* – delivered faster, more relevant content for users.  
> • *Dive Deep & Ownership* – engineered a scalable, maintainable pipeline with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
