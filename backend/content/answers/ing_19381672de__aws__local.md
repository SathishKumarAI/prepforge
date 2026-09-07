---
qid: ing_19381672de__aws__local
question: 'Explain: of add the combined distance between all'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 576
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:14-05:00'
sources: []
---

**Situation & Task**  
In a recent ML project I was asked to calculate *the sum of Euclidean distances between every pair of user embeddings* (≈ 10 M vectors) in order to feed a novelty‑score feature into a recommendation pipeline. The data had to be processed in real time, while keeping cost and latency within SLAs.

**Action – Design & AWS Services**  
1. **Data Ingestion** – Vectors arrive via Kinesis Data Streams (real‑time) and are persisted in S3 for batch jobs.  
2. **Compute Layer** – A Lambda function triggers an EMR cluster on Amazon EMR Serverless (Spark). Spark broadcasts a small lookup table of centroids, then uses the *pairwise distance* UDF to compute distances only for pairs that share a bucket (hash‑based locality‑sensitive hashing) – reducing O(n²) to ≈ O(10⁶).  
3. **Result Aggregation** – The Spark job writes the summed distance per user into DynamoDB, which feeds downstream SageMaker Feature Store.  
4. **Observability** – CloudWatch metrics (bytes processed, Lambda duration) and X-Ray traces validate that the job finishes < 30 s with 99th‑percentile latency < 200 ms.

**Result**  
- Reduced compute time from ~12 h on a 100‑node EMR cluster to **under 5 min** on Serverless.  
- Cost dropped from $1,200/month to **$120/month** (≈ 90 % savings).  
- Feature latency met the 500 ms SLA for real‑time scoring.

**Reflection & Leadership Principles**  
- *Ownership*: I scoped the end‑to‑end pipeline and drove cross‑team handoffs.  
- *Dive Deep*: By profiling Spark shuffle, I discovered an expensive join that could be avoided with LSH.  
- *Bias for Action*: I prototyped Serverless EMR within 24 h to validate feasibility before full rollout.  

**What a bar‑raiser looks for** – clear ownership, deep technical justification (why LSH & Spark), quantified impact (time/cost savings), and evidence of learning from the first trial that led to the final architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
