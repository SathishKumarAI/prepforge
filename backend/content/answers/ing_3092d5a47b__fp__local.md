---
qid: ing_3092d5a47b__fp__local
question: 'Explain: What do we know so far? There — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 443
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:48:13-05:00'
sources: []
---

### From the Problem to a Scalable Design  

A location‑based service (LBS) must answer “what places are near me?” with sub‑second latency for millions of users worldwide.  
The core problem is **spatial proximity search**: given a point \((lat,lon)\) and radius \(r\), retrieve all records whose geographic distance ≤ \(r\).  

1. **Spatial indexing → geometric locality**  
   * Partition the Earth into a quadtree or geohash grid; each cell holds place IDs that fall inside it.  
   * A query touches only cells intersecting the search circle, reducing candidate set from \(N\) to \(k \ll N\).  

2. **Cache → information reuse**  
   * Hot places (e.g., tourist spots) are cached in a distributed key‑value store keyed by place ID or geohash prefix.  
   * Cache hit probability follows Zipf’s law; aggressively caching the top 10 % of places yields > 90 % hit rate.  

3. **Read‑heavy consistency → eventual**  
   * Writes (new reviews, edits) propagate asynchronously to a write‑back cache and eventually update the index.  
   * Guarantees “at most once” semantics: users may see stale ratings but never miss a place that exists.

4. **Load balancing → geometry + hashing**  
   * Use consistent hashing on geohash prefixes to spread traffic evenly; hot spots are replicated across shards.  

#### Non‑obvious insight  
Because Earth is spherical, the naive Euclidean grid causes distortion near poles. Instead of “lat/long” cells, use an **H3 hexagonal lattice** (Uber’s library). Hexagons preserve equal area and adjacency, simplifying radius queries and load balancing while keeping cell counts manageable (~1 M cells at resolution 9). This subtle geometric choice dramatically reduces edge‑case errors that plague simpler grids.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
