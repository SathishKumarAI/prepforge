---
qid: ing_efdd21dfcd__aws__local
question: 'Explain: Here we use the RESTful API convention — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 437
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:19:26-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional squad that built a RESTful location‑based service (similar to Yelp/Google Places) for a global marketplace app. The goal was to deliver real‑time search and recommendation with <200 ms latency at 10M daily users.

**Action**  
*Customer Obsession & Ownership* – I scoped user flows, defined “search success” as hit‑rate ≥ 92 % and response time ≤ 180 ms.  
*Dive Deep & Bias for Action* – Designed a two‑tier API:  
1️⃣ **Query Layer** (API Gateway → Lambda) parses request, validates token, routes to the *Search Service*.  
2️⃣ **Search Service** (EC2 Auto Scaling + Spot Fleet) queries an **ElastiCache Redis** cluster (partitioned by city) for fast nearest‑neighbor lookups; falls back to a read‑replica Aurora PostgreSQL if cache miss.  
*Invent & Simplify* – Employed **Amazon Kinesis Data Streams** to ingest location updates and feed them into a **Glue ETL job** that refreshes Redis every 5 s, keeping data fresh without full re‑indexing.  

**Result**  
- Latency dropped from 450 ms to **170 ms** (average).  
- Hit‑rate increased to **94 %**, boosting user engagement by **18 %** month‑over‑month.  
- Cost was 35 % lower than a monolithic RDS solution due to cache use and spot instances.

**Bar‑raiser Takeaway**  
I owned the end‑to‑end pipeline, dove into cache hit statistics to uncover bottlenecks, quantified lift in engagement, and iterated on failure modes (e.g., handling Redis eviction spikes). This blend of customer focus, deep technical insight, and measurable impact is what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
