---
qid: ing_b7029f81f9__aws__local
question: 'Explain: IVF (Inverted File Index) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 499
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:46-05:00'
sources: []
---

**Situation** – While leading a data‑science team at my previous company, we needed to serve real‑time similarity search for millions of high‑dimensional embeddings (e.g., 768‑dim vectors from BERT) used in a recommendation engine.  
**Task** – Build an IVF (Inverted File Index) vector database that could scale to > 10M vectors, deliver < 100 ms latency, and cost <$0.01 per query.  
**Action** –  
1. **Architecture**:  
   * Store raw embeddings in **Amazon S3** (immutable, durable).  
   * Use **AWS Glue** + **EMR** to run a nightly batch that clusters vectors into 10K IVF buckets using K‑means (scalable on Spark).  
   * Persist cluster centroids and bucket lists in **DynamoDB** for low‑latency key‑value lookups.  
   * Serve queries via an **API Gateway → Lambda** layer that:  
     - Loads the nearest centroid from DynamoDB,  
     - Streams candidate vectors from S3 using **S3 Select**,  
     - Computes exact cosine similarity in a short Python/Numba kernel.  
2. **Cost & Availability** – The read‑only architecture eliminates RDS costs; Lambda concurrency scales automatically (cold start < 200 ms).  
3. **Metrics** – Deployed to production: 1 M queries/day, 95th‑percentile latency 78 ms, cost $0.006/query, and a 30% lift in recommendation CTR.  

**Result** – Delivered an on‑premise‑like IVF engine entirely on AWS, with **Ownership** (owning the full data pipeline) and **Dive Deep** (profiling Lambda cold‑start vs. warm). Learned that bucket size tuning is critical; initial mis‑sizing caused 200 ms spikes, so we added a small caching layer in ElastiCache to smooth peaks.  

*Key takeaways for a bar‑raiser*: clear ownership, data‑driven impact, deep technical reasoning, and iterative learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
