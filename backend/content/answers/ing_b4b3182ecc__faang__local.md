---
qid: ing_b4b3182ecc__faang__local
question: 'Explain: distance from the rider consider the rider'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 565
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:43:51-05:00'
sources: []
---

**Clarify**  
The interviewer asks how we would *measure* the “distance” that a rider is from a given point (e.g., a driver, a pickup zone, or a service boundary) in a ride‑hailing context. I’ll assume we’re dealing with geospatial coordinates (lat/long), want an accurate yet fast metric for real‑time matching, and must handle edge cases like the curvature of Earth and data noise.

**Approach**  
1. Parse rider’s GPS stream into latitude/longitude pairs.  
2. Convert to a suitable planar projection or use spherical geometry.  
3. Compute pairwise distances between the rider and candidate points (drivers, hubs).  
4. Return the minimal distance or rank candidates by proximity.  
5. Cache intermediate results for high‑frequency queries.

**Depth**  
- **Metric choice**: Haversine formula gives great‑circle distance on a sphere; it’s accurate to ~0.3 % and computationally cheap (few trig ops). For very small distances (<10 m) we can approximate with Euclidean after projecting to UTM or using the Equirectangular approximation to save a sine/cosine call.  
- **Complexity**: O(N) per rider for N candidates; pre‑indexing with an R‑tree reduces lookup to O(log N).  
- **Implementation detail**: Use double precision, handle antipodal edge cases by normalizing bearings, and clamp latitude to ±90°.  
- **Accuracy trade‑off**: Haversine is ~1 km error at 2000 km separation; acceptable for matching but not for navigation.

**Edge Cases**  
- GPS jitter → apply Kalman filtering or a moving average.  
- Duplicate coordinates (e.g., rider and driver at the same spot) → distance = 0, trigger instant match.  
- Data gaps → fall back to last known position with decay weighting.  
- International date line crossing → normalize longitudes before computing.

**Optimize & Communicate**  
Explain that for high‑scale systems we pre‑compute a geohash grid and only evaluate candidates within the same or adjacent cells, drastically cutting candidate count. Mention that we benchmark Haversine vs Equirectangular on production traffic to confirm latency targets (<5 ms per query). Finally, note that this distance metric feeds into a broader ranking model (price, ETA, driver rating), so precision matters only enough to keep the system fair and responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
