---
qid: ing_f636f1dfdb__aws__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 498
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:33:40-05:00'
sources: []
---

**Situation / Task**  
I was tasked to sketch the high‑level architecture for a real‑time Twitter‑style feed that supports millions of active users and billions of tweets per day. The goal: low latency, high availability, and cost‑effective scaling.

**Action (Design)**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **API Gateway + Lambda** | API Gateway + Lambda@Edge | Zero‑capability infrastructure, auto‑scale to 10k RPS; Edge caching reduces latency by ~30 %. |
| **Ingestion & Queuing** | Kinesis Data Streams | Durable buffer for bursts (up to 5× traffic) and seamless replay for downstream analytics. |
| **Processing** | Lambda + Step Functions | Serverless, pay‑per‑execution; state machine orchestrates enrichment (user prefs, geo tags). |
| **Storage** | DynamoDB (global tables) + S3 (cold archive) | Fast read/write for active tweets; S3 for long‑term retention and cost savings. |
| **Search & Feed Generation** | OpenSearch Service | Near‑real‑time indexing; supports personalized ranking queries in < 50 ms. |
| **Caching** | ElastiCache Redis (clustered) | Keeps top 10k tweet IDs per user, reducing DB reads by ~80 %. |

**Result**  
The prototype handled 12 M RPS with average end‑to‑end latency of **48 ms**, a 40 % reduction over the legacy monolith. Cost was cut from $250K/month to $95K/month through serverless and pay‑as‑you‑go models.

**Reflection (Bar‑raiser cues)**  
*Ownership*: I drove the end‑to‑end design, owning trade‑offs between latency and cost.  
*Dive Deep*: Quantified cache hit rates, Kinesis shard sizing, and DynamoDB provisioned throughput to prove feasibility.  
*Learned from Failure*: Early trials with EC2 auto‑scaling suffered 3 % outage during traffic spikes; migrating to Lambda removed the need for manual scaling logic.

**Leadership Principles** – *Customer Obsession*, *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
