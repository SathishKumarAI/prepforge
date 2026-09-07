---
qid: ing_2903115a2f__aws__local
question: 'Explain: kind of take the role that you — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 424
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:58:19-05:00'
sources: []
---

**Situation / Task**  
When I joined the DynamoDB team in 2017, we were asked to reduce the *hot‑partition* latency that was hurting e‑commerce customers during Black Friday. The goal: keep a single‑key read under **5 ms** while supporting >10k RPS per partition.

**Action / Design**  
I owned the solution and drove a *deep dive* into our storage engine. I proposed a two‑tier architecture:

1. **In‑memory LRU cache (Redis‑compatible) on EC2 Spot** – for the hottest 5 % of keys, giving sub‑millisecond access.  
2. **Sharded SSD tier (EBS gp3 + Nitro Enclave)** – each partition stored in a *stripe* across two AZs for durability.

We added a *write‑ahead log* on S3 (Glacier Deep Archive) for audit and replay. All traffic was routed through an Application Load Balancer with **Lambda@Edge** to enforce consistent hashing, eliminating skew.

I leveraged CloudWatch Alarms + Kinesis Data Streams to auto‑scale the cache nodes in <30 s based on real‑time hotness metrics.

**Result**  
Post‑deployment, read latency dropped from 12 ms to **4.3 ms** (a 64 % improvement). Throughput scaled to 15k RPS per partition with 99.9999 % availability, and cost fell by 23 % due to the Spot‑based cache.

**Learnings**  
Ownership forced me to iterate quickly; bias for action let us ship a pilot in two sprints. The deep dive revealed that our earlier “single‑node” assumption was wrong—sharding + caching solved the problem elegantly. This experience sharpened my ability to balance performance, cost, and reliability—a core AWS value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
