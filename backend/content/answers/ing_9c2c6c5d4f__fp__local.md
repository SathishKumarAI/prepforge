---
qid: ing_9c2c6c5d4f__fp__local
question: 'Explain: We need to make one more assumption — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 360
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:29-05:00'
sources: []
---

In a **FAANG‑style system‑design interview** you’re asked to sketch a scalable, low‑latency service like Yelp or Google Places.  
The *problem* is: “Given millions of users and billions of POIs (points of interest), how do we return the nearest N places in < 100 ms?”  

Without an extra assumption, the design would be underconstrained:

1. **Data distribution** – Are locations uniformly spread or heavily clustered?  
2. **Query patterns** – Do users search by exact coordinates, radius, or categorical filters?  
3. **Consistency needs** – Must we see every new review instantly or can we tolerate eventual consistency?

The *extra assumption* (e.g., “POIs are static and only updated nightly”) turns the problem into a classic **geospatial indexing + caching** exercise. It lets you justify:

- Using an R‑tree or geohash index for O(log N) lookup.  
- Sharding by spatial region to keep hot spots isolated.  
- Replicating data with read‑replicas to meet latency.

If POIs were dynamic, you’d have to wrestle with distributed transactions or real‑time stream processing—far more complex and not what interviewers expect in 45 minutes.

**Non‑obvious insight:** The assumption isn’t just a simplification; it reveals the *geometric locality principle*: most queries hit a small spatial window. By exploiting this, you can design sharding, caching, and replication schemes that scale linearly with user load rather than data size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
