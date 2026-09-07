---
qid: ing_fb5e874064__aws__local
question: 'Explain: When to shard a collection across multiple shards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 365
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:54-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with scaling a recommendation engine that stored user‑item interactions in a single MongoDB collection. By Q2 the write latency had jumped from <5 ms to >200 ms and our daily traffic hit 4 M requests, threatening SLA breaches.

**Action (Design & AWS services)**  
I first *dive deep* into the data model: we had ~12 B documents with a hot key pattern (`user_id`). I proposed sharding on `user_id` using MongoDB’s built‑in shard key and added an additional range shard for high‑volume “new user” traffic. To keep consistency, I introduced **AWS DocumentDB (with MongoDB compatibility)**, enabling automatic replication across three AZs and leveraging **Amazon CloudWatch** metrics to monitor latency spikes.

I also implemented a *bias for action* pipeline: a Lambda function ran nightly to rebalance under‑utilized shards, and an S3 bucket stored shard metadata for audit. Costs were capped at $1.2K/month versus the projected $4.5K if we kept a monolithic cluster.

**Result**  
After sharding, write latency dropped to <8 ms (95th percentile) and read throughput increased 4×. We maintained 99.9% availability with zero data loss during an accidental node failure, meeting our SLA. The bar‑raiser would note my ownership of the end‑to‑end solution, depth in performance tuning, quantifiable impact on latency and cost, and the lesson that early sharding decisions prevent cascading failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
