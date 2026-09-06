---
qid: ing_cfae1e4a09__fp__local
question: 'Explain: be in cities so i think to — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 415
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:21:54-05:00'
sources: []
---

**Why we need a spatial index in a delivery‑app**

When a rider or restaurant must react to “who is nearby?” the naïve scan of every user’s coordinates is \(O(N)\).  
Geohashing solves this by **coalescing space into hierarchical buckets**: each 10 m square has a unique prefix.  
The system can then query all geohashes that overlap the rider’s search radius, reducing candidates to a handful—an **\(O(\log N)\)** operation that respects locality and preserves privacy (the exact coordinates are hidden behind the hash).

**Geo‑hashing in practice**

1. **Encode** each user’s lat/lon into a 12‑character geohash.  
2. Store the hash as part of the user document; update it only when the user moves > 100 m to keep writes low.  
3. When a rider requests “restaurants within 5 km”, the service expands the radius to include all intersecting geohashes (≈ hundreds), then filters by distance.

**Why WebSockets?**

Location updates are **continuous and bidirectional**: the rider’s app must receive new offers instantly, while the backend pushes orders or cancellations.  
WebSockets give a single TCP connection that stays open, eliminating per‑message HTTP overhead and allowing the server to push only deltas (e.g., “new order for you”).  

**Non‑obvious insight**

A geohash grid is *not* uniform in area; it shrinks toward the poles.  
If you ignore this, your 5 km radius near the equator will include far more hashes than at high latitudes, causing uneven load.  
Adjust the geohash precision per latitude band or switch to a **S2 cell** index that maintains equal‑area cells, keeping the system balanced worldwide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
