---
qid: ing_697d15237d__aws__local
question: 'Explain: ByteDance — Valkey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 460
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:38-05:00'
sources: []
---

**Situation & Task**

When I joined the ML Ops team at ByteDance, we were struggling with stale feature vectors in our recommendation pipeline. The cache layer was a legacy Redis cluster that hit 90 % eviction rates during peak traffic, causing >5 % drop in click‑through rate (CTR). My task: redesign the caching layer to increase freshness and reduce latency without blowing the budget.

**Action**

I chose **Valkey**, an open‑source Redis‑compatible engine with higher write throughput and better memory compression.  
* *Architecture*: A multi‑AZ Valkey cluster with read replicas, sharded by user segment; each shard uses 8 GB of memory per node.  
* *AWS services*:  
  - **Amazon EC2 Spot + EBS** for cost‑effective nodes (≈$0.02/hr).  
  - **Elastic Load Balancer** to distribute traffic across shards.  
  - **CloudWatch** and **S3** for automated snapshotting every 15 min.  
* *Scalability*: Auto‑scaling groups adjust node count by monitoring eviction rate; we set a target <2 % evictions.  
* *Availability*: Cross‑region read replicas provide failover within 30 s, and the cluster is configured with persistence to RDB snapshots.  
* *Cost trade‑off*: Spot instances saved ~35 % vs on‑demand; snapshot retention policy kept storage at ~$10/month.

**Result**

Within two weeks of rollout, eviction rates dropped to <1 %, feature latency fell from 120 ms to 45 ms, and CTR improved by **7.4 %**, translating to an estimated $3M incremental revenue annually.  

**Reflection (Bar‑raiser lens)**

I owned the problem end‑to‑end, dove deep into Valkey’s internals, quantified impact with clear metrics, and learned that even small cache tweaks can scale linearly to huge business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
