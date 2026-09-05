---
qid: ing_5ef2954ac5__star__local
question: 'Explain: Geohash works great most of the time — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 369
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:03-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with redesigning our internal location‑based recommendation engine for a global marketplace app. The existing system used a simple latitude/longitude lookup that scaled poorly; we were seeing query latency spike to 350 ms during peak traffic, and the cache hit rate dropped below 40% when users moved between cities.

**Task**  
I needed to build a more efficient geospatial indexing layer that would keep query latency under 80 ms for 95% of requests while supporting real‑time updates as new store locations were added or removed.

**Action**  
I chose to implement a Geohash scheme, encoding lat/long into a base‑32 string. By truncating the hash to 7 characters (≈78 m precision), we could map each location to a single key in Redis. I built a sharded cache where each shard stored all points sharing the same prefix, enabling O(1) lookup for nearby stores and efficient range queries via simple lexicographic scans. To handle edge cases at hash boundaries, I added a “neighbor” pre‑fetch step that queried the eight adjacent hashes when a user was within 100 m of an edge. For write operations, I used a message queue to asynchronously update the cache, keeping the API responsive.

**Result**  
After deployment, average query latency dropped from 350 ms to 45 ms, and cache hit rate rose to 78%. The system handled a 4× traffic spike during a promotional event without any degradation. I learned that careful hash precision tuning and neighbor pre‑fetching can turn a simple geohash into a production‑ready spatial index, balancing speed, memory usage, and consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
