---
qid: ing_f2f8c73caa__aws__local
question: 'Explain: More partitions may increase end-to-end latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 464
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:58-05:00'
sources: []
---

**Situation** – While scaling a real‑time fraud detection pipeline on AWS, we increased the number of shards in an Amazon Kinesis stream from 4 to 32 to boost ingest throughput.  
**Task** – Ensure that end‑to‑end latency (from event arrival to model inference result) stays below **250 ms** while handling 2× the traffic.

**Action** –  
1. **Dive Deep** into the consumer side: each shard required a separate Lambda worker; more shards meant more concurrent invocations, leading to *cold starts* and increased contention on the downstream Amazon SageMaker endpoint.  
2. Re‑architected to use **Kinesis Data Analytics** for real‑time aggregation, then batch the aggregated records into a single Kinesis stream that feeds one SageMaker Real‑Time Endpoint (1 ms inference).  
3. Leveraged **Amazon SQS FIFO** for ordering and **AWS Step Functions** to orchestrate retries, keeping the system **eventually consistent** but with bounded latency.  
4. Implemented **CloudWatch metrics**: shard lag, Lambda duration, SageMaker invocation count; set alarms at 200 ms.

**Result** – Latency dropped from an average of **470 ms** (32 shards) to **180 ms** (single shard + aggregation), while throughput doubled. Cost fell by **18%** due to fewer Lambda invocations and a single SageMaker endpoint.  

*Leadership Principles:*  
- **Customer Obsession** – delivering sub‑250 ms latency for end users.  
- **Ownership & Dive Deep** – diagnosing shard‑level bottlenecks, redesigning the pipeline, and validating with metrics.

The bar‑raiser will note ownership (owning the full pipeline), depth of analysis (shard lag vs. Lambda cold starts), quantified impact (latency & cost savings), and learning from the failure to over‑partition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
