---
qid: ing_93f9a9eeee__fp__local
question: 'Explain: million orders turns out to be roughly — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 401
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:53-05:00'
sources: []
---

**Why the design works**

A food‑delivery platform must match a *locational* request (customer → restaurant) to a *resource* (driver) within seconds, even when millions of orders arrive per day.  
The problem is twofold:

1. **Spatial indexing** – quickly find all drivers and restaurants in a 5 km radius.
2. **Real‑time updates** – keep every client’s UI current as drivers move.

Geo‑hashing solves (1) by converting latitude/longitude into a hierarchical string.  
A 10‑character hash encodes ~100 m precision; the first 6 characters define a cell of ~1 km².  
All entities in a cell share the same prefix, so a query “find all drivers within radius *r*” reduces to a handful of prefix lookups plus a cheap Haversine filter on the candidates.  
This is essentially a spatial *hash table*: constant‑time bucket access followed by negligible linear filtering—an instance of locality‑sensitive hashing for geometry.

For (2), WebSockets provide a bi‑directional, low‑latency channel between server and each client.  When a driver’s GPS tag updates, the server pushes the new coordinate to all clients subscribed to that cell.  
Because the subscription set is bounded by the hash bucket size, the broadcast cost stays logarithmic in the number of active drivers.

**Non‑obvious insight**

The key optimisation is *coupling* the spatial index with the publish–subscribe layer: the same geo‑hash prefix that accelerates lookup also defines the broadcast group.  This eliminates a separate sharding step and guarantees that only relevant clients receive updates, keeping both memory and bandwidth in check even at millions of concurrent orders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
