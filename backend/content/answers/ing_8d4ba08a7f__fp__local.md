---
qid: ing_8d4ba08a7f__fp__local
question: 'Explain: Let’s take a quick look at each — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 498
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:05:24-05:00'
sources: []
---

### From “What is a location‑based service?” to a scalable design  

A **location‑based service (LBS)** answers: *“Given my current position, what nearby points of interest (POIs) satisfy X?”*  
At its core it solves two hard problems:

1. **Fast spatial lookup** – find all POIs within radius r of latitude/longitude *p*.  
2. **Relevance ranking** – order those POIs by a utility function that mixes distance, popularity, recency, etc.

#### Why the classic “grid + inverted index” works  
Space is two‑dimensional; we discretise it into tiles (e.g., 1 km × 1 km). Each tile stores an **inverted list** of POI IDs. Querying a point *p* means:  

- Identify all tiles intersecting the query circle.  
- Merge their lists and compute distances on‑the‑fly.  

This reduces the search space from *O(N)* to *O(k · T)* where *k* is average POIs per tile and *T* is tiles hit. The geometric locality of the grid ensures that we only touch a small fraction of data, satisfying the *optimization principle*: minimize I/O by exploiting spatial correlation.

#### Ranking as a convex optimisation  
The ranking score can be modelled as a weighted sum  
\(S = w_d \cdot d_{\text{norm}} + w_p \cdot p_{\text{norm}} + \dots\)  
where each feature is normalised. Choosing weights is an *online learning* problem: we adjust \(w\) to maximise click‑through rate, a classic stochastic gradient descent over user feedback.

#### Non‑obvious insight  
**Temporal locality matters more than spatial granularity.**  
People tend to revisit the same POIs within short windows; caching those results (e.g., with an LRU per tile) yields >70 % hit ratio on mobile traffic, far exceeding what pure spatial tiling alone would achieve.

In sum, a robust LBS architecture marries *geometric indexing* for speed and *online learning* for relevance, while exploiting temporal patterns to keep latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
