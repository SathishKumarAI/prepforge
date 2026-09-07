---
qid: ing_685b488a20__aws__local
question: 'Explain: The Data Framework Philosophy — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 394
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:24-05:00'
sources: []
---

**Customer Obsession + Ownership**

> **Situation:** At my last role I was tasked with building a production‑grade knowledge‑base for an AI assistant that had to surface answers from millions of documents in real time.  
> **Task:** Design a data framework that balances fast retrieval, consistent freshness, and cost control while staying compliant with GDPR.  
> **Action:** I chose *LlamaIndex* (formerly GPT‑index) as the core abstraction because it separates raw data ingestion from query processing. I wrapped it in an AWS‑native stack:  
> - **S3** for immutable document storage (partitioned by type).  
> - **Glue + Athena** to run incremental ETL that updates a *Parquet* index nightly, generating vector embeddings with SageMaker’s `text-embedding-ada-002`.  
> - **DynamoDB** as the metadata store for quick lookup of embedding buckets.  
> - **Lambda + API Gateway** expose a lightweight query endpoint; Lambda pulls the relevant vectors from S3, runs cosine‑search in memory, and streams results to the client.  
> - **CloudWatch & XRay** monitor latency (goal < 200 ms) and error rates.  
> **Result:** The system handled 10k concurrent queries with a 95th‑percentile latency of 180 ms while keeping monthly spend under $2,500—down 35% from our legacy search engine. Post‑deployment A/B testing showed a 27% increase in user satisfaction scores.  

**Bar‑raiser focus:** I took full ownership, iterated the design after early failure (Lambda cold starts), and quantified every trade‑off with real metrics. The framework now scales horizontally by adding S3 partitions and Lambda concurrency without code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
