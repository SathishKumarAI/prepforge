---
qid: ing_15466f98fc__think__local
question: 'Explain: Capacity Planning — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 568
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:07:43-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   • Identify what “capacity planning” means in this context (handling query load, data ingestion, scoring latency).  
   • Assume a large‑scale leaderboard (millions of users, frequent score updates).  
   • Decide on key constraints: real‑time ranking, eventual consistency, cost limits.

**2️⃣ Adopt a system‑design framework**  
   – *Requirements* → functional (update scores, fetch top‑N) and non‑functional (latency < 50 ms, 99.9 % uptime).  
   – *Data model* → user‑score pairs, per‑game partitions.  
   – *Components* → ingestion layer, processing pipeline, storage, cache, API gateway.

**3️⃣ Step‑by‑step reasoning**  
   a) **Ingestion**: Use Kafka to buffer score updates; this decouples producers from consumers and allows scaling.  
   b) **Processing**: Stream processors (Kafka Streams / Flink) aggregate scores per user, maintain running totals.  
   c) **Storage**: Write results to a fast key‑value store (Redis or DynamoDB) for quick reads; also persist to cold storage (S3/BigQuery) for analytics.  
   d) **Ranking**: Maintain sorted sets in Redis (ZSET) per game, updating on every score change; this gives O(log N) insertion and top‑N query.  
   e) **API layer**: Load‑balanced HTTP endpoints that read from cache; fallback to DB if cache miss.  
   f) **Capacity planning**: Model peak ingestion rate, estimate required Kafka partitions, compute Redis memory per sorted set (≈ 16 bytes/entry × users). Use autoscaling policies.

**4️⃣ Common pitfalls to avoid**  
   – Under‑estimating memory for ZSETs; over‑compressing keys.  
   – Ignoring write amplification in the DB layer.  
   – Tight coupling between ingestion and ranking, causing bottlenecks.  
   – Not accounting for eventual consistency gaps that can surface during flash events.

**5️⃣ Sanity checks & communication**  
   • Run a quick load test: simulate 10k updates/s and measure latency.  
   • Validate that the memory estimate covers peak users + margin.  
   • Explain trade‑offs clearly: e.g., Redis gives sub‑ms reads but limited persistence vs. persistent DB with higher latency.  
   • Summarize assumptions, key metrics, and scaling strategy so stakeholders grasp the design rationale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
