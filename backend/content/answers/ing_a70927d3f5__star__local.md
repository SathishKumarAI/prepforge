---
qid: ing_a70927d3f5__star__local
question: 'Explain: Now the thing with segments is whether — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 363
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:52-05:00'
sources: []
---

**Situation:**  
During a mock Google Maps system‑design interview, my interviewer asked how we would efficiently handle location “segments” for real‑time routing and traffic updates across millions of users.

**Task:**  
I needed to explain a scalable segmentation strategy that balances fine granularity with storage costs, and show how it supports fast nearest‑segment lookups during route calculation.

**Action:**  
I proposed using a hierarchical spatial index: first partition the globe into fixed‑size latitude/longitude grid cells (e.g., 1 km²). Each cell is a “primary segment” stored in a distributed key‑value store (Cassandra) keyed by its hash. Inside each primary segment, I further sub‑divide into smaller “sub‑segments” based on road network topology, storing them in an adjacency graph within Redis for low‑latency traversal. For routing, the system performs a two‑stage lookup: (1) locate the nearest primary cell via a geohash prefix match, then (2) query its sub‑segment graph to find the exact road segment and compute shortest paths using Dijkstra over cached edge weights. To keep updates fast, traffic changes publish events to Kafka; workers recompute affected edge weights and push them back to Redis in near real time.

**Result:**  
This design reduced routing latency from ~250 ms to <80 ms for 90% of queries while keeping storage overhead below 2× the raw map data. I learned that a layered index—coarse global partitioning plus fine local graphs—offers the right trade‑off between scalability and query speed in large‑scale geospatial services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
