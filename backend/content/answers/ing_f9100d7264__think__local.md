---
qid: ing_f9100d7264__think__local
question: 'Explain: Bandwidth — Design WhatsApp | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 683
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:24:49-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**

- *What is “bandwidth” in this context?*  
  – The amount of data transmitted per second between client and server, or between peers.
- *Scope of the interview:*  
  – Likely a high‑level system design question: how WhatsApp handles message traffic, media uploads/downloads, group chats, etc.  
- *Assumptions to state upfront:*  
  – Typical user base (e.g., 2 B users), average message size, peak usage times, network heterogeneity (3G/4G/5G/Wi‑Fi).

**2️⃣ Adopt a layered mental model**

1. **User → Client App**: local traffic (sending/receiving messages, media).
2. **Client ↔ Server**: core messaging backbone (push notifications, message queues).
3. **Server ↔ Edge / CDN**: media distribution (images, videos, voice notes).
4. **Inter‑server replication**: data consistency across regions.

Use this to break the problem into sub‑components and identify bandwidth bottlenecks at each layer.

**3️⃣ Step‑by‑step reasoning**

- *Estimate traffic:*  
  – Avg text message ≈ 1 KB, 1 msg/sec per user → 2 TB/day.  
  – Media: assume 10% of traffic, average size 300 KB → additional ~600 GB/day.
- *Design for peak bursts:*  
  – Use a queueing system (Kafka/Redis Streams) to buffer spikes; compute required throughput = max concurrent users × avg payload.
- *Edge/CDN placement:*  
  – Cache media at regional edge nodes; use HTTP/2 or QUIC for multiplexing.  
  – Apply adaptive bitrate for video/audio based on client bandwidth.
- *Compression & deduplication:*  
  - Compress text with Brotli, media via WebP/HEVC, and deduplicate identical files (hash‑based storage).
- *Scalable transport:*  
  - Prefer WebSocket/TCP for real‑time messaging; fallback to long polling for low‑bandwidth clients.
- *Monitoring & autoscaling:*  
  - Use metrics (bytes/sec per node) to trigger scaling events.

**4️⃣ Common pitfalls to avoid**

- Forgetting **client heterogeneity**: not all users have the same bandwidth.  
- Overlooking **latency vs throughput trade‑offs**; e.g., aggressive compression may increase CPU load.  
- Ignoring **back‑pressure**: servers should signal clients when overloaded.  
- Assuming a single CDN is enough; multi‑region redundancy matters for consistency.

**5️⃣ Sanity‑check & verbalize**

- Re‑run the traffic numbers through a simple throughput calculator to ensure no unit mismatch.  
- Explain how each design choice (queueing, caching, compression) directly reduces bandwidth or smooths spikes.  
- Finish by summarizing: *“By layering traffic handling, leveraging edge caches, compressing payloads, and using back‑pressure, WhatsApp can keep per‑user bandwidth manageable even at billions of concurrent connections.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
