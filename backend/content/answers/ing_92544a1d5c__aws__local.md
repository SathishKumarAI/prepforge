---
qid: ing_92544a1d5c__aws__local
question: 'Explain: peers have already uploaded it we won''t — AWS re:Invent 2018:
  Amazon DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 401
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:02-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain why we *don’t* use DynamoDB for a new ML feature that peers had already built on it in the 2018 re:Invent session “Under the Hood.” The feature required real‑time inference with sub‑millisecond latency and a burst of 5 M requests per second during peak.  

**Action**  
1. **Dive Deep** – I benchmarked DynamoDB’s provisioned throughput vs on‑demand mode, noting that at 5 M RPS the cost would exceed $25k/month and latency spikes to 50–80 ms due to hot partitions.  
2. **Invent & Simplify** – Proposed a hybrid architecture:  
   * **Amazon Kinesis Data Streams** (for ingest) → **AWS Lambda** → **Amazon SageMaker Endpoint** for inference.  
   * Store results in **Amazon Timestream** (time‑series, low write cost).  
3. **Bias for Action & Ownership** – I built a proof‑of‑concept that handled 6 M RPS with <10 ms latency and $4k/month cost, using auto‑scaling Kinesis shards and SageMaker’s multi‑model endpoint.

**Result**  
The new pipeline cut inference latency by **70%** (from 50 ms to 15 ms) and reduced operational cost by **84%** ($25k → $4k). It also eliminated the single point of failure inherent in DynamoDB hot‑partition scenarios.  

*Bar‑raiser focus*: ownership of end‑to‑end latency, deep dive into AWS pricing & performance models, quantifiable impact, and learning that a “one‑size‑fits‑all” database can hurt ML workloads at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
