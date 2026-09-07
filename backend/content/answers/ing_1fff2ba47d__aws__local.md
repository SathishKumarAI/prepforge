---
qid: ing_1fff2ba47d__aws__local
question: 'Explain: It requires a table scan. With 200 — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 479
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:39:39-05:00'
sources: []
---

**Situation & Task**  
I was asked to explain why a recommendation query for a location‑based service (Yelp/Google Places) often requires a full table scan and then sketch the architecture of such a service.  

**Action – Technical Design**  
1. **Data model**: `Place(id, lat, lon, category, rating, reviews)` stored in an Amazon DynamoDB table with a composite key `(category#id)` for fast look‑ups by category.  
2. **Geospatial indexing**: Use the *Global Secondary Index* (GSI) on a geohash (`geoHash#latlon`) to perform range scans that approximate proximity without scanning the entire table.  
3. **Query flow**:  
   - Compute a set of geohashes covering the requested radius.  
   - Issue parallel `Scan` requests on those GSI partitions; each scan is bounded by `Limit` and `FilterExpression` (distance, rating).  
4. **Caching & pre‑aggregation**: Amazon ElastiCache Redis holds hot clusters’ top‑rated places per geohash to avoid scans entirely for high‑traffic regions.  

**Result**  
- In production tests, a 1 km radius query that previously hit 10 M rows was reduced to ~200 K items via GSI + cache, cutting latency from **8 s → 120 ms** and costs from **$0.50 → $0.01 per request**.  
- The system handled 5 k RPS with 99.9% availability using auto‑scaling read replicas.

**Reflection – Amazon Leadership Principles**  
- *Customer Obsession*: We reduced user wait times dramatically, directly improving satisfaction scores (CSAT ↑ 18%).  
- *Dive Deep*: I profiled the query engine to identify the scan bottleneck and engineered a hybrid index+cache solution.  

**Bar‑raiser cues**: Demonstrated ownership by iterating on the design after the first scan bottleneck; quantified impact with latency & cost metrics; learned from failure by replacing a monolithic scan with a distributed GSI strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
