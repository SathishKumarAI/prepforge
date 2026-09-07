---
qid: ing_7f90882f3a__faang__local
question: 'Explain: Requirements & Assumptions — Spotify System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 546
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:41:31-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for the *Requirements & Assumptions* section of a **Spotify‑style music streaming system design** (Neo Kim & Hayk). I’ll restate: we need to capture user‑facing functionality, performance goals, data scale, and constraints that shape the architecture.  
Assumptions to confirm:  
- Global user base (~200 M active users) with 30 s avg session.  
- Streaming latency < 150 ms.  
- Unlimited catalog (≈10 M tracks).  
- Real‑time analytics required for recommendations.  

**2️⃣ Approach**  
1. List functional requirements (user auth, playlist mgmt, search, playback).  
2. Translate into non‑functional constraints: throughput, latency, data consistency, scalability, fault tolerance, cost.  
3. Map each requirement to a design decision or technology choice.

**3️⃣ Depth**  
| Requirement | Key Constraint | Design Decision |
|-------------|----------------|-----------------|
| **Authentication & Authorization** | 10 k/sec login bursts | OAuth2 + stateless JWT; cache tokens in Redis. |
| **Playlist CRUD** | Strong consistency for ownership | ACID via relational DB (PostgreSQL) with partitioning by user ID. |
| **Search** | Sub‑second response over 10 M tracks | ElasticSearch cluster, sharded indices per region. |
| **Playback Streaming** | <150 ms latency + CDN caching | Edge servers with adaptive bitrate; use object storage (S3) + CloudFront. |
| **Recommendations** | Real‑time user embeddings | Stream processing (Kafka → Spark Structured Streaming) feeding ML model in TensorFlow Serving. |
| **Analytics** | 1 M events/sec | Time‑series DB (InfluxDB) + downsampling pipeline. |

**4️⃣ Edge Cases**  
- Account takeover: rate‑limit login attempts, anomaly detection.  
- Data center outage: multi‑region replication for CDN and metadata.  
- Content licensing changes: dynamic flagging in catalog service.  

**5️⃣ Optimize & Communicate**  
I’d iterate by measuring actual throughput; if playback latency spikes, add more edge nodes or compress codecs. I’ll narrate trade‑offs (e.g., eventual vs strong consistency for playlists) and justify each technology with cost‑benefit analysis. This structured walk‑through demonstrates clear problem framing, depth of technical choices, and awareness of operational edge cases—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
