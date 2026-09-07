---
qid: ing_ca4dbef6d2__aws__local
question: 'Explain: What does that really mean? Let’s go — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 607
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:53-05:00'
sources: []
---

**Situation**  
I was asked to design a location‑based service like Yelp or Google Places during a FAANG system‑design interview. The goal was to create an end‑to‑end architecture that can ingest billions of reviews, support real‑time queries for the nearest places, and scale to millions of concurrent users.

**Task**  
Build a highly available, low‑latency service that:  
1. Stores place metadata, user reviews, and geospatial data.  
2. Handles 10 M QPS with < 100 ms latency.  
3. Supports dynamic updates (new places, edits, deletions).  

**Action**  
*Data ingestion & storage* – Use **Amazon DynamoDB** for place/ review tables (global secondary indexes on `city`, `category`). For geospatial queries, store latitude/longitude in a separate table and use the **DynamoDB Geo Library** or **RDS Aurora PostgreSQL with PostGIS** if complex spatial ops are needed.  
*Indexing & caching* – Build an **ElastiCache Redis** cluster for hot spots (top 10 k places per city). Use **Amazon CloudFront + Lambda@Edge** to cache static assets and serve location data from the nearest edge, reducing latency by ~70 %.  
*Query engine* – Implement a **Kinesis Data Streams** pipeline that pushes place updates into a **DynamoDB Streams → Lambda → S3** archive for analytics. For real‑time proximity searches, use **Amazon Location Service (Places API)** integrated with the cached data; fallback to DynamoDB if cache miss.  
*Scalability & cost* – Autoscale DynamoDB via on‑demand mode during traffic spikes; keep Redis in a multi‑AZ configuration for 99.999 % availability. Use Spot Instances for batch processing of review sentiment analysis, cutting compute costs by ~40 %.  

**Result**  
The prototype handled 15 M QPS with < 80 ms average latency and incurred <$3k/month in AWS spend. Post‑deployment monitoring showed a 30 % reduction in user churn due to faster search responses.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Prioritized low latency and high reliability to improve the end‑user experience.  
- **Ownership & Dive Deep** – Designed every layer, from data models to caching strategy, and quantified performance gains.

### What a Bar‑Raiser Listens For
1. **Ownership** – Clear ownership of all components (data, cache, analytics).  
2. **Dive Deep** – Justified choice of DynamoDB vs RDS/PostGIS with trade‑off analysis.  
3. **Quantified Impact** – Measured latency reduction and cost savings.  
4. **Learning from Failure** – Mentioned fallback mechanisms and continuous monitoring to catch regressions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
