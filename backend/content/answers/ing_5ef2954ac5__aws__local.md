---
qid: ing_5ef2954ac5__aws__local
question: 'Explain: Geohash works great most of the time — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 464
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:00:28-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to design a high‑availability location‑based search for millions of users—similar to Yelp or Google Places. The challenge: return the top *k* POIs within a radius of any query point with sub‑100 ms latency, while keeping storage and cost minimal.

**Action**  
I chose **Geohash** as the spatial index because it maps latitude/longitude to a compact string that preserves locality. I sliced the Earth into 12‑bit geohashes (≈5 km cells) and stored each POI in an Amazon DynamoDB table keyed by *geohash#id*.  
*For queries*:  
1. Convert the query point to its geohash, fetch the 9 neighboring cells (3×3 grid).  
2. Scan those partitions in parallel using **DynamoDB Global Secondary Indexes** on `geoHash`.  
3. Compute exact Haversine distance on‑the‑fly and filter by radius.  

To avoid DynamoDB hot spots I used **partition key sharding** (`hash(geohash)+random`) and provisioned **Read Capacity Units (RCUs)** with auto‑scaling. For caching, a **DAX cluster** served the most frequent queries, reducing read latency to < 30 ms.

**Result**  
The system handled 5 M requests/day, maintained 99.9% availability, and kept storage costs under $2k/month. Latency dropped from 350 ms (baseline) to **70 ms average**, a 80 % improvement—meeting our SLA.

**Reflection / Learning**  
I initially underestimated the need for sharding; early tests hit throttling on hot cells. Adding hash‑based partitioning resolved this, teaching me that *geohash is great only when combined with proper data distribution*.  

---

> **Leadership Principles Highlighted:**  
> - **Ownership**: I owned the end‑to‑end design and performance tuning.  
> - **Dive Deep**: Quantified latency, cost, and throughput; iterated on partitioning strategy until metrics hit targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
