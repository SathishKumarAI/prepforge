---
qid: ing_c348230eba__fp__local
question: 'Explain: finding a person who is near enough — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 492
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:57:13-05:00'
sources: []
---

**Why the problem is hard**

A delivery platform must match a rider with a nearby customer in *real time*.  
The naive solution—poll every rider’s GPS location against every order—is \(O(nm)\) and impossible at scale. The core challenge is to *partition* space so that only a small, bounded set of riders needs to be inspected for any new order.

**Geo‑hashing as the partition principle**

A geohash encodes latitude/longitude into a prefix string (e.g., “9q8y”).  
- **Spatial locality → prefix similarity**: points within ~1 km share a common 5‑character prefix.  
- **Bounded search**: For an order at location \(L\), we compute its geohash and look only at riders whose hash prefixes match the first *k* characters. The number of candidates is independent of total users, satisfying scalability.

The choice of `k` comes from a trade‑off:  
- Smaller `k`: more candidates (higher load).  
- Larger `k`: fewer candidates but risk missing riders just beyond the prefix boundary.  
We choose `k` such that the cell size is slightly larger than the maximum acceptable rider radius, guaranteeing coverage.

**WebSockets for continuous proximity**

Once a rider enters a geohash bucket, we open a WebSocket to push “near‑order” events.  
- **Event‑driven instead of polling**: each order triggers a single message to all riders in the relevant buckets.  
- **Bidirectional channel** allows riders to acknowledge pickup instantly, reducing latency.

**Non‑obvious insight**

The *hash granularity* is not just about spatial resolution; it also implicitly controls load balancing. A high‑density urban area will generate many short geohash prefixes, but because each prefix maps to a distinct Redis key (or sharded DB row), traffic naturally spreads across shards without explicit routing logic.

---

In summary, geo‑hashing turns an \(O(nm)\) proximity query into a constant‑size lookup, while WebSockets convert the lookup into a low‑latency event stream—together yielding a linear‑time, horizontally scalable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
