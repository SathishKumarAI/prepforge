---
qid: ing_74688a5ea7__aws__local
question: 'Explain: Create a sharding strategy — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 425
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:01-05:00'
sources: []
---

**Situation** – While leading the ML inference pipeline for a global recommendation engine, we hit a bottleneck: our document‑store (Elastic Search) could not keep up with 12 k write ops/s during peak season.  
**Task** – Design a sharding strategy that scales horizontally, keeps query latency <200 ms, and costs <$1M/month.

**Action** –  
1️⃣ **Data‑driven shard sizing:** I benchmarked the average document size (≈3 KB) and observed a 70% write burst. Using Elastic’s `shard_size` formula, I set each primary shard to hold ~5 GB of data (~1.7M docs).  
2️⃣ **Dynamic re‑sharding policy:** Implemented an AWS Lambda that monitors `index.store.size_in_bytes` and triggers `cluster.reroute` when a shard exceeds 80% capacity.  
3️⃣ **Service stack:**  
   * **Amazon OpenSearch Service** – managed cluster, auto‑scaling zones.  
   * **AWS CloudWatch + SQS** – queue writes during spikes, smoothing load.  
   * **AWS Glue** – nightly aggregation job to re‑index stale shards.  

**Result** – After deployment, write throughput rose from 12 k/s to 35 k/s, query latency dropped to 140 ms avg, and we reduced monthly ops cost by 18% (from $1.2M to $980K).  
**Reflection** – The key was “Dive Deep” into metrics, ownership of the entire data‑flow, and a bias for action: I prototyped the Lambda in under two days instead of waiting for a full sprint. This approach aligns with Amazon’s *Customer Obsession* (fast, reliable service) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
