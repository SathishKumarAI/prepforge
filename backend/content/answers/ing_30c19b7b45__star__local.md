---
qid: ing_30c19b7b45__star__local
question: How to get nearby businesses with quadtree?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 338
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:06:01-05:00'
sources: []
---

**Situation**  
While building a mobile app for local food discovery, our analytics team noticed that users were spending 35 % more time scrolling through search results than expected. The map view was rendering thousands of restaurant markers, and the performance hit made the UI feel laggy on older phones.

**Task**  
I had to design an efficient way to query “nearby businesses” so that only a handful of relevant points were sent to the device each time the user moved or zoomed, without compromising accuracy or introducing too much latency.

**Action**  
I implemented a spatial index using a quadtree stored in PostgreSQL/PostGIS. First, I pre‑processed all business locations into a quadtree where each node held bounding boxes and lists of IDs. On the backend, when a request came with latitude/longitude and a radius, I performed a recursive search: if a node’s bbox intersected the query circle, I traversed its children; otherwise I pruned it entirely. This reduced the candidate set from ~12,000 points to <200 on average. The API then returned only those IDs, and the client fetched detailed info lazily.

**Result**  
The map rendering time dropped from 1.8 s to under 300 ms, improving user session duration by 22 %. I learned that choosing the right spatial index (quadtree vs R‑tree) depends on query patterns; for many small-radius “nearby” lookups a quadtree’s hierarchical pruning is often faster and simpler to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
