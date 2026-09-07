---
qid: ing_2bfb8cd6ca__aws__local
question: 'Explain: Account for Uneven Key Popularity — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 456
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:04:41-05:00'
sources: []
---

**Situation** – While architecting a recommendation engine for a global e‑commerce platform, we noticed that popular “key” items (e.g., trending products) were overloading the same shards in our Redis cache cluster. Latency spiked from 15 ms to >120 ms during peak traffic, hurting conversion rates.

**Task** – Design a scalable, fault‑tolerant sharding scheme that distributes hot keys evenly without sacrificing data locality or consistency.

**Action** –  
1. Adopt **Consistent Hashing** with virtual nodes: each cache shard receives 200 replicas on the hash ring, reducing hotspot probability to <0.5 %.  
2. Implement a lightweight **hash‑ring manager** in an EC2 Auto Scaling group (spot instances) that watches key access patterns via CloudWatch metrics and rebalances virtual node placement every 30 min.  
3. Store the ring metadata in **Amazon DynamoDB** (partition key = shard id, sort key = timestamp) to enable fast lookups during client bootstrap.  
4. Use **AWS Global Accelerator** + **Route 53 latency‑based routing** so clients hit the nearest region’s cache endpoint, keeping read traffic localized.  

**Result** – After deployment, average cache hit latency dropped from 120 ms to **28 ms** (70 % reduction), and we saw a **12 % lift in conversion** during flash‑sale events. Cost increased by only 3 % due to spot instance usage, while availability remained 99.99 % thanks to DynamoDB’s multi‑AZ replication.

---

> **Leadership Principles:** *Ownership* – I owned the end‑to‑end solution and its operational health.  
> *Dive Deep* – I quantified hotspot impact, tuned virtual node counts, and iterated on ring rebalance frequency based on real traffic data.  

**Bar‑raiser cues:** clear ownership narrative, deep technical reasoning (hashing, DynamoDB schema), measurable performance gains, cost trade‑off analysis, and evidence of learning from initial latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
