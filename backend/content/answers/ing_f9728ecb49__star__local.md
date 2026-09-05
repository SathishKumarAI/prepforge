---
qid: ing_f9728ecb49__star__local
question: 'Explain: 4.3 Requirement 3: Playlist Management — Design Spotify | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 393
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:23-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a music streaming service that had to support millions of users and thousands of new tracks each day. The existing recommendation engine was fine, but the playlist feature lagged behind: when users tried to create or share playlists, latency spiked, and the system couldn’t scale to 10 M concurrent users.

**Task:**  
I was tasked with designing a highly available, low‑latency Playlist Management subsystem that could handle real‑time updates (add/remove tracks), support user collaboration, and integrate seamlessly with our recommendation pipeline. The goal was <20 ms write latency for 95% of requests and >99.9% availability during peak traffic.

**Action:**  
I chose a microservice architecture: a REST/GRPC service exposed CRUD APIs, backed by a sharded Cassandra cluster (time‑series partitioning on user_id + playlist_id) for fast writes, and a Redis cache layer for hot playlists. I implemented optimistic locking with version vectors to avoid write conflicts in collaborative edits. For data consistency, I used an event‑driven pipeline (Kafka) that pushed changes to a read replica built on Elasticsearch, enabling instant search within playlists. I also introduced a “soft delete” strategy and automated TTLs to keep the DB lean.

**Result:**  
After deployment, write latency dropped from 150 ms to 12 ms for 95% of requests, and we handled 25 M concurrent users during our peak launch with 99.97% uptime. The system now supports real‑time collaborative playlists with minimal conflicts, and I learned how careful data partitioning plus an event‑driven read model can reconcile latency, consistency, and scalability in a high‑traffic media service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
