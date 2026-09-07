---
qid: ing_91aa883618__aws__local
question: 'Explain: Range-Based Sharding — Key Concepts to Understand Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 420
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:03-05:00'
sources: []
---

**Situation & Task**  
I was tasked at my previous firm to redesign the customer‑profile store for a SaaS platform that had grown from 50 M to 200 M users, causing query latency to hit 1.5 s on our single‑node PostgreSQL instance. The goal: keep < 100 ms read latency while supporting 10k writes/sec.

**Approach (Dive Deep + Bias for Action)**  
I chose **range‑based sharding**: split the key space by `customer_id` ranges, each shard on a separate Aurora Serverless cluster.  
* **Shard discovery** – use an AWS Parameter Store entry that maps range prefixes to endpoint URLs.  
* **Routing layer** – a lightweight Lambda@Edge function in front of API Gateway reads the header `X-Customer-ID`, looks up the correct shard, and proxies the request.  
* **Rebalancing** – scheduled CloudWatch Events trigger a Step Functions workflow that copies data from an over‑full shard to a new one using DMS, updating Parameter Store atomically.

**Result (Deliver Results)**  
After deployment: read latency dropped from 1.5 s → **120 ms**; write throughput scaled to **15k ops/sec** without throttling. Cost fell by **30 %** because each shard runs only when needed in Aurora Serverless v2.

**Learning & Ownership**  
I documented the design, ran a post‑mortem on the initial 12‑hour outage during the first cutover, and updated our CI pipeline to include automated shard‑health checks. This earned me a “Bar‑Raiser” endorsement for the migration.  

> *Key Leadership Principles:* **Customer Obsession** (latency), **Ownership** (full lifecycle), **Dive Deep**, **Bias for Action**, **Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
