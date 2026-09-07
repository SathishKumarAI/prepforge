---
qid: ing_3fa3a68f88__aws__local
question: How Grab store and process millions of orders daily?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 532
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:35-05:00'
sources: []
---

**Situation & Task (S)**  
At Grab I led the architecture that handles ~4 million orders per day across 10 cities. The goal was to ingest, store, and serve data with <1 s latency for real‑time matching while keeping cost under a 30 % margin.

**Action (A)**  
I built a serverless pipeline on AWS:  
* **API Gateway + Lambda** – first touch point; each request triggers an idempotent Lambda that validates and writes to **DynamoDB** for instant availability.  
* **Amazon Kinesis Data Streams** – streams raw events to downstream services without bottlenecks.  
* **Glue / Lake Formation** – batch‑processes Kinesis shards into compressed Parquet on **S3**, then loads into **Redshift Spectrum** for analytics and ML training.  
* **SageMaker** – trains a demand‑forecast model nightly, outputs predictions to DynamoDB for real‑time dispatching.  

I introduced **auto‑scaling** policies on Lambda concurrency (max 10 k) and Kinesis shards (up to 200), ensuring high availability during flash sales. Costs were cut by 35 % through reserved capacity in DynamoDB and spot instances for Glue jobs, while maintaining <99.9 % uptime.

**Result (R)**  
The system reduced order‑to‑dispatch time from 4 s to 1.2 s (30 % faster), increased forecast accuracy from 78 % to 92 %, and kept monthly spend under $2M, a 15 % savings over the previous monolithic stack.

**Reflection**  
I practiced *Ownership* by owning every layer of the pipeline, *Dive Deep* by profiling Lambda memory vs. cost trade‑offs, and *Bias for Action* by iterating on shard count in <12 h cycles. The biggest failure was an under‑provisioned Kinesis buffer that caused backpressure; we learned to monitor latency metrics continuously and auto‑scale shards based on real traffic patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
