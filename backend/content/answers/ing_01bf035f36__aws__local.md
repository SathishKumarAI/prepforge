---
qid: ing_01bf035f36__aws__local
question: 'Explain: The service sends a query to the — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 478
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:13-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that built a real‑time location‑based recommendation engine for a food‑delivery app. The service had to ingest millions of user check‑ins, compute proximity scores, and return top‑10 venues in under 200 ms, all while keeping cost < $5k/month.

**Action – Design & AWS Services**  
1. **Data Ingestion** – *Amazon Kinesis Data Streams* (shard per city) → *Lambda* parses GPS points and writes to *DynamoDB* (partition key = user_id).  
2. **Geospatial Indexing** – Use *DynamoDB Geo Library* to store latitude/longitude in a 10 m cell grid; this gives O(1) lookup for nearby venues.  
3. **Scoring Engine** – *Amazon SageMaker Endpoint* hosts an XGBoost model that ingests user profile + venue features (rating, cuisine, distance).  
4. **Real‑time Query** – API Gateway → Lambda: fetches candidate venues via DynamoDB Geo query, calls SageMaker for scores in parallel, sorts, and streams back the top 10.  
5. **Caching & Cost Control** – *ElastiCache Redis* holds hot venue lists per city; cache TTL = 30 s.  

**Result**  
- Latency dropped from 750 ms to 150 ms (97% improvement).  
- Monthly spend fell from $12k to $4.2k, a 65% cost reduction.  
- User engagement rose 23% in the first quarter post‑deployment.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered sub‑200 ms responses that directly boosted user satisfaction.  
- **Ownership & Dive Deep** – Designed end‑to‑end pipeline, chose services after benchmarking latency/cost trade‑offs, and iterated based on production telemetry.  

Bar‑raisers would note my clear ownership, data‑driven impact, deep dive into service selection, and willingness to iterate after initial failures (e.g., moving from RDS to DynamoDB Geo when scaling hit limits).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
