---
qid: ing_eff1301179__fp__local
question: 'Explain: a mile and uh in that time — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 383
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:29:22-05:00'
sources: []
---

**Why we need it**

A delivery app must match riders with orders *in real time* while keeping the server load low and latency minimal.  
The core problem is two‑dimensional spatial indexing: “who is within X km of point P?” The answer drives routing, ETA calculation, and congestion avoidance.

**Geo‑hashing**

Treat latitude/longitude as a binary string interleaved (Z‑order curve).  Each prefix defines a hyper‑rectangular tile.  
*Why it works*: A prefix of length *k* guarantees that all points sharing it lie within a square whose side is ≈ (π·R)/2^k, where R is Earth’s radius. Thus we can convert “within X km” to “prefix in set S”.  
*Optimization insight*: The cost of a lookup is logarithmic in the number of users because we only scan tiles intersecting the query circle, not all users.  

**WebSockets**

Once riders are bucketed by geo‑hash, each rider’s client opens a persistent WebSocket.  The server pushes *only* orders whose hash matches the rider’s current tile.  
*Why websockets?* HTTP polling would generate O(N) round‑trips per second; a single TCP stream amortizes the handshake and keeps latency < 50 ms even under thousands of concurrent connections.  

**Non‑obvious insight**

The real benefit comes from *lazy re‑hashing*: as a rider moves, we only send delta updates when crossing tile boundaries, not every meter.  This turns a continuous mobility problem into a discrete event system, drastically cutting bandwidth and server CPU while preserving exactness for ETA calculations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
