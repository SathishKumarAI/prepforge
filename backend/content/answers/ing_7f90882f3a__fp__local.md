---
qid: ing_7f90882f3a__fp__local
question: 'Explain: Requirements & Assumptions — Spotify System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 473
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:36:36-05:00'
sources: []
---

**Why a streaming platform needs explicit requirements and assumptions**

At the heart of any large‑scale music service is an *information‑theoretic* problem: **deliver the correct audio bitstream to the right user at the right time with minimal latency, while respecting storage, bandwidth, and privacy constraints.**  
From this objective we can reverse‑engineer the constraints that shape Spotify’s architecture:

| Requirement | Derivation |
|-------------|------------|
| *Scalable catalog* | The number of tracks (≈ 70M) × average size (≈ 10 MiB) ≈ 700 TB. To keep a single storage node from becoming a bottleneck, data must be sharded and replicated—hence the use of distributed file systems. |
| *Low latency playback* | Human perception tolerates < 150 ms buffering. Thus, each user request must traverse no more than two network hops; this forces edge caching (CDN) and a CDN‑aware load balancer. |
| *Personalized recommendations* | Predicting next‑song choice is a high‑dimensional optimization problem. It requires real‑time feature extraction from user events, so an event‑driven pipeline (Kafka → Spark/Presto) is mandated. |
| *High availability* | A single outage would affect millions of concurrent streams; therefore all critical services must be replicated across at least three data centers and use eventual consistency models where latency dominates over strict ACID guarantees. |

**Key assumption that often slips by**

> **User bandwidth is *not* the primary limiter**—instead, it is the *quality‑of‑experience* budget.  
> Spotify caps bitrate per user session (e.g., 320 kbps) to balance perceived audio fidelity against global network congestion. This assumption frees the system from needing per‑user QoS guarantees and allows a simple rate‑control layer in front of the CDN.

By grounding each requirement in an underlying optimization or information constraint, we see why Spotify’s design favours distributed storage, edge caching, event‑driven processing, and a relaxed consistency model—all essential to serve millions of users seamlessly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
