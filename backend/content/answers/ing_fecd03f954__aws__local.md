---
qid: ing_fecd03f954__aws__local
question: 'Explain: Back-of-the-Envelope Estimation — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 464
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:14-05:00'
sources: []
---

**Situation / Task**  
I was asked to sketch a back‑of‑the‑envelope sizing for a global instant‑messaging app (WhatsApp). The goal: show how many servers and storage we’d need to support 2 billion users, each sending ~1.5 kB messages per day, with 99.999% availability.

**Action**  
I broke the problem into **data ingestion**, **storage**, and **delivery** layers, then applied *Dive Deep* and *Bias for Action*.  
- **Data ingestion:** 2 billion × 1.5 kB ≈ 3 PB/day → ~35 GB/s write traffic. I chose **Amazon Kinesis Data Streams** (shard size 1 MB/s) → ~35,000 shards, costing ~$30K/month.  
- **Storage:** Each message is stored for 30 days in **S3 Standard‑IA** (~$0.0125/GB). 3 PB/day × 30 ≈ 90 PB total → ~$1.1M/month.  
- **Delivery & compute:** Use **AWS Lambda** + **API Gateway** behind a **global CloudFront CDN** for low latency, scaling to ~10k RPS per edge location. Estimated 200 Lambda instances × $0.0000167/100ms ≈ $5K/month.

For **high availability**, I’d deploy across three AZs with *Elastic Load Balancing* and use *Auto Scaling*.  

**Result**  
The rough estimate shows ~$1.14M/month, with a 99.999% SLA achievable via multi‑AZ design. The exercise demonstrated ownership (I owned the entire stack), depth (*Dive Deep* into each service’s cost/latency trade‑offs), and a data‑driven impact metric (cost & throughput).  

**Bar‑raiser takeaway** – I quantified every assumption, showed clear trade‑offs, and learned that early cost modeling uncovers hidden bottlenecks before detailed architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
