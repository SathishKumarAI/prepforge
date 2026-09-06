---
qid: ing_ae7fb3d3da__fp__local
question: 'Explain: Geo distance sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 565
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:15:42-05:00'
sources: []
---

### Why sort by geographic proximity?

When a user queries a location‑aware service (e.g., “restaurants near me”), the **objective** is to rank candidates so that those closest to the query point appear first.  
In a high‑dimensional document space this is analogous to finding nearest neighbours under an *ℓ₂* distance, but on the Earth’s surface we must respect its geometry: points are defined by latitude/longitude on a sphere.

### The fundamental computation

For each candidate `c` with coordinates `(lat_c, lon_c)` and a query point `q = (lat_q, lon_q)`, Elasticsearch computes the **great‑circle distance**:

```
Δφ   = lat_c – lat_q
Δλ   = lon_c – lon_q
a    = sin²(Δφ/2) + cos(lat_q)*cos(lat_c)*sin²(Δλ/2)
c    = 2 * atan2( √a, √(1−a) )
dist = R * c          // R ≈ 6371 km
```

This is the haversine formula, derived from spherical trigonometry.  
The engine then sorts documents by `dist`, optionally applying a **boost** (e.g., `sort: [{_geo_distance: {location: [lon_q, lat_q], order: asc}}]`).

### Why it must be *exact* and *efficient*

- **Exactness** guarantees that the nearest neighbours are truly the closest on Earth’s surface; approximations would mis‑rank users who care about precise travel times.
- **Efficiency** is achieved by pre‑computing a bounding box (using the query’s `distance` filter) to discard distant documents before invoking the costly haversine formula.  
  This mirrors *branch‑and‑bound* in geometric optimisation.

### Non‑obvious insight

Most people think sorting by distance alone suffices, but **field of view bias** matters: a user located at latitude 90° (the pole) sees all longitudes collapse into one line. Elasticsearch automatically handles this by treating the Earth as a sphere; however, if you naïvely apply planar Euclidean distances near poles, you’ll get huge errors. The built‑in spherical math is essential for correct ranking in all latitudinal regimes.

In short, geo‑distance sorting solves the *nearest‑neighbour* problem on a curved manifold, marrying exact spherical geometry with an optimization strategy that keeps search fast even over millions of documents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
