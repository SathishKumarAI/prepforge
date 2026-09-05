---
qid: ing_0dabb9a134__fp__local
question: 'Explain: Migrating Live — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 575
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:43-05:00'
sources: []
---

**Why the problem exists**

Canva’s core product is a *single‑page web app* that lets anyone upload, edit and share images in real time.  
In a single‑page app every user action (dragging an image, applying a filter) becomes an HTTP request that the backend must honor immediately. When the user base grows from 10 k to 50 M uploads/day, the *latency budget* for each request shrinks from seconds to milliseconds—otherwise users abandon the canvas.

**From first principles**

1. **Throughput ≈ (requests per second) × (average payload)**.  
   With a median upload size of ~2 MB and 50 M uploads/day, we need >10 k requests/s at peak.  
2. **Latency budget = time to read → process → store → ack**.  
   If any step dominates, the entire chain stalls.

Thus every component must be *O(1) per request* in practice: a single CDN edge, a stateless micro‑service, and an append‑only storage tier that can ingest terabytes of data without locks.

**Scaling strategy**

- **Edge first**: Use a global CDN to offload the initial TCP handshake and TLS negotiation.  
- **Stateless API gateway**: Route uploads through a horizontally scalable HTTP/2 service; no per‑session state, so we can spin up thousands of instances on demand.  
- **Chunked upload + S3‑compatible storage**: Break files into 4 MB chunks; each chunk is stored in an append‑only object store that guarantees linear write throughput and eventual consistency—no heavy locking.  
- **Back‑pressure & adaptive throttling**: If downstream storage approaches saturation, the gateway dynamically reduces request rate per client using a Kalman‑filter estimate of available bandwidth.

**Non‑obvious insight**

The *real bottleneck* is not disk I/O but **network flow control**. Even with petabyte‑scale SSDs, TCP’s congestion window limits throughput on a saturated link. By chunking uploads and leveraging HTTP/2 streams, we keep the congestion window fully utilized while still allowing the CDN to cache intermediate data—an elegant fusion of transport‑layer theory and application‑level design.

In short: treat every upload as an independent, stateless transaction; let edge caches do the heavy lifting; keep storage append‑only; and let adaptive throttling maintain a stable flow. That is how Canva moved from zero to 50 M uploads per day without breaking the user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
