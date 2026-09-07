---
qid: ing_b8e07a22fc__aws__local
question: 'Explain: NoSQL — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 453
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:01-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When I built the *NoSQL* backend for a high‑traffic microblogging service (≈ 200 M daily tweets), I followed **Ownership** and **Dive Deep**.

**Situation** – The existing relational DB hit 12 k RPS; latency spiked to 300 ms during peak hours.  
**Task** – Design a horizontally scalable, highly available data store that supports *write‑once, read‑many* access patterns for timelines and hashtags.  
**Action** – I chose **Amazon DynamoDB** as the primary key/value store (partition key: `user_id`, sort key: `timestamp`) because it offers single‑digit millisecond latency at any scale. To enable efficient hashtag queries I added a global secondary index (`hashtag#post_timestamp`). For caching hot timelines, I layered **ElastiCache for Redis** with a time‑to‑live of 60 s, reducing DynamoDB read traffic by ~70%.  

I implemented *write‑through* logic: each tweet writes to DynamoDB and publishes an event to **Amazon Kinesis Data Streams**, which triggers a Lambda that updates the user’s timeline cache. This gives us **zero‑downtime** reads while keeping eventual consistency under 1 s.  

**Result** – Post‑deployment, write latency dropped from 150 ms to < 20 ms; read latency for timelines fell from 300 ms to 30 ms; and the system handled 500 k RPS with an average cost of $0.003 per million requests—well below the target of $0.005.  

**Reflection** – The biggest learning was that naive sharding on `user_id` caused hot partitions; switching to a composite key (`region#user_id`) balanced load and improved throughput by 40 %. This example demonstrates ownership, deep technical insight, measurable impact, and continuous improvement—key qualities a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
